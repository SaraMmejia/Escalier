import React, { useState, useEffect } from 'react';
import './ListPost.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CommentListPost({ props }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/posts/show/${props.match.params.id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
    }).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="comment-Pot">
      <Navbar />
      <div className="comment-All">
        <div className="comment-icones">
          <div className="content-title">
            <h2 classsName="comment-title">{data.title}</h2>
          </div>
          <div className="icones-Comment">
            <div className="save-Icon">
              <FontAwesomeIcon icon={faDownload} className="download-Icon" />
              <p className="save-P">Save</p>
            </div>
            <div className="like-IconC">
              <FontAwesomeIcon icon={faHeart} className="heart-IconC" />
              <p className="like-P">Like</p>
            </div>
          </div>
        </div>
        <div className="comment-image">
          <img
            src={data.image}
            alt="upload preview"
            className="upload-imageE"
          />
          <hr className="line"></hr>
        </div>
        <div className="comment-Description">
          <h3 className="comment-Description-title">Descripción</h3>
          <p className="comment-Description-Paragraph">{description}</p>
        </div>
        <div className="all-pace-Comment">
          <div classsName="commet-Users">
            {comments.map((data) => {
              return <p>commentUser</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentListPost;
