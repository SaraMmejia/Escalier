import React, { useState, useEffect } from 'react';
import './ListPost.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ListPost({ props }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/posts/list',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
    }).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="list-Home">
      <h2 className="title"> Conoce lo último en tendencia</h2>
      <h5 className="populares">Mira lo más popular del día</h5>
      <div className="container-Post">
        {posts.map((data) => {
          return (
            <div className="list-Post">
              <div className="cards">
                <Link to={`/posts/show/${data._id}`}>
                  {' '}
                  <img
                    src={data.image}
                    className="post-Image"
                    alt="Imagen Publicada"
                  />
                </Link>
              </div>
              <div className="post-Icons">
                <div className="title-Card">
                  <p className="title-Post">{data.title}</p>
                </div>
                <div className="icones-Post">
                  <div className="comment">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="comment-Icon"
                    />
                    <p className="comment-comments">12</p>
                  </div>
                  <div className="like">
                    <FontAwesomeIcon icon={faHeart} className="like-Icon" />
                    <p className="like-likes">156</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListPost;
