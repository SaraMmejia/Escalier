import React, { useState, useEffect } from 'react';
import './ListPost.css';
import axios from 'axios';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CommentListPost({ props }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/comments/list',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
    }).then((response) => {
      setComments(response.data);
    });
  }, []);

  return (
    <div className="comment-Pot">
      <Navbar />
      <div className="comment-All">
        <div classsName="commet-Users">
          {comments.map((data) => {
            return <p>{data.comments}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default CommentListPost;
