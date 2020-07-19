import React, { useEffect, useState } from 'react';
import './DeletePost.css';
import Navbar from './Navbar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

function DeletePost(props) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    console.log('Title', title, 'description:', description);
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.append('file', file);
    data.append('tags', tags);
    data.set('description', description);
    console.log('Data es:', data);

    await axios({
      method: 'DELETE',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/posts/destroy/${props.match.params.id}`,
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
    <div className="page-PostsD">
      <Navbar />
      <div className="page-FormsD">
        <form className="post-FormD" onSubmit={handleSubmit}>
          <div className="principal-ImageD">
            {image ? null : (
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                className="upload-IconD"
              />
            )}
            {image && (
              <img src={image} alt="upload preview" className="upload-imageD" />
            )}
          </div>
          <div className="button-SelectD">
            <input
              type="file"
              accept="image/*"
              name="file"
              id="file"
              className="file-imgD"
              onChange={handleImage}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="principal-TitleD">
            <label htmlFor="title" className="title-InputD">
              {' '}
              Título{' '}
            </label>
            <input
              className="add-TitleD"
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
          <div className="principal-TagsD">
            <label htmlFor="tags" className="tags-InputD">
              {' '}
              Tags{' '}
            </label>

            <input
              className="add-TagsD"
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
          <div className="principal-DescriptionD">
            <label htmlFor="Description" className="description-InputD">
              {' '}
              Descripción
            </label>

            <textarea
              className="description-textD"
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
          <div className="button-CreateD">
            <button className="publish-PostD" type="submit">
              {' '}
              Eliminar Imagén{' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeletePost;
