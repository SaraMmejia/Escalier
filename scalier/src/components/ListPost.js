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
    <div className="list-Home">
      <h2 className="title"> Conoce lo último en tendencia</h2>
      <h5 className="populares">Mira lo más popular del día</h5>
      <div className="container-Post">
        {posts.map((data) => {
          return (
            <div className="list-Post" key={data._id}>
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
                    <Link to={`/posts/show/${data._id}`}>
                      <FontAwesomeIcon
                        icon={faComment}
                        className="comment-Icon"
                      />
                    </Link>
                    <p className="comment-comments">{data.comments}</p>
                  </div>
                  <div className="like">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={
                        data.liked ? 'like-Icon--active' : 'like-Icon--inactive'
                      }
                      onClick={() => vote(data._id, data.liked ? false : true)}
                    />
                    <p className="like-likes">{data.likes}</p>
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
