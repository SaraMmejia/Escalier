import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import './FormPost.css';

function FormPost(props) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('title', title);
    data.append('file', file);
    data.append('tags', tags);
    data.append('description', description);

    await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/posts/create',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
      data,
    }).then(({ data }) => {
      props.history.push('/home');
    });
  }

  function readFile(file) {
    const reader = new FileReader(); //FileReader es una F de JavaScript
    //Métodos de JavaScript
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  }
  function handleImage(e) {
    console.log(e.target.files[0]);
    readFile(e.target.files[0]);
    setFile(e.target.files[0]);
  }

  return (
    <div className="page-Posts">
      <Navbar />
      <div className="page-Forms">
        <form className="post-Form" onSubmit={handleSubmit}>
          <div className="principal-Image">
            {image ? null : (
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                className="upload-Icon"
              />
            )}
            {image && (
              <img src={image} alt="upload preview" className="upload-image" />
            )}
          </div>
          <div className="button-Select">
            <input
              type="file"
              accept="image/*"
              name="file"
              id="file"
              className="file-img"
              onChange={handleImage}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="principal-Title">
            <label htmlFor="title" className="title-Input">
              {' '}
              Título{' '}
            </label>
            <input
              className="add-Title"
              type="text"
              name="title"
              id="title"
              placeholder="Título de la Publicación"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <br />
          <br />
          <br />
          <div className="principal-Tags">
            <label htmlFor="tags" className="tags-Input">
              {' '}
              Tags{' '}
            </label>

            <input
              className="add-Tags"
              type="text"
              name="tags"
              id="tags"
              placeholder="Tags"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </div>
          <br />
          <br />
          <br />
          <div className="principal-Description">
            <label htmlFor="Description" className="description-Input">
              {' '}
              Descripción
            </label>

            <textarea
              className="description-text"
              name="description"
              id="description"
              cols="35"
              rows="8"
              placeholder="Descripcion del producto"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="button-Create">
            <button className="publish-Post" type="submit">
              {' '}
              Publicar Imagén{' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPost;
