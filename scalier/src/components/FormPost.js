import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import './FormPost.css';

function FormPost() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  //   function uploadFile(file) {
  //     const data = new FormData(); // Formdata es una F de JavaScript
  //     data.append('name', name);
  //     data.append('file', file)

  //     'Content-Type': 'multipart/form-data';
  //   }

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
        <form className="post-Form">
          <div className="principal-Image">
            <input
              type="file"
              accept="image/*"
              name="image"
              className="file-img"
              onChange={image}
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
              rows="5"
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
        {image && (
          <img src={image} alt="upload preview" width="300" height="300" />
        )}
      </div>
    </div>
  );
}

export default FormPost;
