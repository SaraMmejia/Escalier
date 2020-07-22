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

  async function vote(postId, vote) {
    let url;
    if (vote) {
      url = '/likes/add';
    } else {
      url = 'likes/remove';
    }

    await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      data: {
        postId,
      },
    }).then((data) => {
      let modifiedPosts = posts.map((item) => {
        if (item._id === postId) {
          let mod = { ...item };
          mod.liked = vote ? true : false;
          mod.likes = vote ? item.likes + 1 : item.likes - 1;
          return mod;
        } else {
          return item;
        }
      });
      setPosts(modifiedPosts);
    });
  }

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
              <div className="list-Post" key={data.id}>
                <div className="cards">
                  <div className="img-Ever">
                    <Link to={`/posts/show/${data._id}`}>
                      {' '}
                      <img
                        src={data.image}
                        className="post-Image"
                        alt="Imagen Publicada"
                      />
                    </Link>
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
                      <p className="comment-commentsC">{data.comments}</p>
                    </div>
                    <div className="likeC">
                      <FontAwesomeIcon icon={faHeart} className="like-IconC" />
                      <p
                        className={
                          data.liked
                            ? 'like-Icon--active'
                            : 'like-Icon--inactive'
                        }
                        onClick={() =>
                          vote(data._id, data.liked ? false : true)
                        }
                      />
                      <p className="like-likes">{data.likes}</p>
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
