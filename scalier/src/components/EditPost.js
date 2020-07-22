import React, { useEffect, useState } from 'react';
import './EditPost.css';
import axios from 'axios';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

function EditPost(props) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.append('file', file);
    data.append('tags', tags);
    data.set('description', description);

    await axios({
      method: 'PUT',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/posts/edit/${props.match.params.id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
      data,
    }).then(({ data }) => {
      props.history.push('/posts/listPost');
    });
  }
  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `posts/show/${props.match.params.id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
    }).then((data) => {
      const { image, title, tags, description } = data.data;
      setDescription(description);
      setTags(tags);
      setImage(image);
      setTitle(title);
    });
  }, []);

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
    <div className="page-PostsE">
      <Navbar />
      <div className="page-FormsE">
        <form className="post-FormE" onSubmit={handleSubmit}>
          Editar Imagén{' '}
          <div className="principal-ImageE">
            {image ? null : (
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                className="upload-IconE"
              />
            )}
            {image && (
              <img src={image} alt="upload preview" className="upload-imageE" />
            )}
          </div>
          <div className="button-SelectE">
            <input
              type="file"
              accept="image/*"
              name="file"
              id="file"
              className="file-imgE"
              onChange={handleImage}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="principal-TitleE">
            <label htmlFor="title" className="title-InputE">
              {' '}
              Título{' '}
            </label>
            <input
              className="add-TitleE"
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
          <div className="principal-TagsE">
            <label htmlFor="tags" className="tags-InputE">
              {' '}
              Tags{' '}
            </label>

            <input
              className="add-TagsE"
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
          <div className="principal-DescriptionE">
            <label htmlFor="Description" className="description-InputE">
              {' '}
              Descripción
            </label>

            <textarea
              className="description-textE"
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
          <div className="button-CreateE">
            <button className="publish-PostE" type="submit">
              Editar Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
