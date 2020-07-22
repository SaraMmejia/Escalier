import React, { useState, useEffect } from 'react';
import './Collection.css';
import axios from 'axios';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Collection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/posts/listPost',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
    }).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="collection">
      <Navbar />
      <div className="collection-Page">
        <div className="text">
          <h2 className="text-collection">
            La colección de todas tus publicaciones{' '}
          </h2>
        </div>
        <div className="constainer">
          {posts.map((data) => {
            return (
              <div className="list-Post">
                <div className="cards">
                  <div className="img-Ever">
                    <img
                      src={data.image}
                      className="post-Image"
                      alt="Imagen Publicada"
                    />
                  </div>
                </div>
                <div className="collection-Icons">
                  <div className="title-Card">
                    <p className="title-Post">{data.title}</p>
                  </div>
                  <div className="icones-Collection">
                    <div className="commentC">
                      <FontAwesomeIcon
                        icon={faComment}
                        className="comment-IconC"
                      />
                      <p className="comment-commentsC">12</p>
                    </div>
                    <div className="likeC">
                      <FontAwesomeIcon icon={faHeart} className="like-IconC" />
                      <p className="like-likesC">156</p>
                    </div>
                    <Link
                      to={`/posts/edit/${data._id}`}
                      className="button-Edit"
                    >
                      <div className="editC">
                        <FontAwesomeIcon icon={faEdit} className="edit-Icon" />
                      </div>
                    </Link>
                    <Link
                      to={`/posts/destroy/${data._id}`}
                      className="button-Delete"
                    >
                      <div className="deleteC">
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="delete-IconC"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collection;
