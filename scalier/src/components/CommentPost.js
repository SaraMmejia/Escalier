import React, { useEffect, useState } from 'react';
import './CommentPost.css';
import Navbar from './Navbar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function CommentPost(props) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [write, setWrite] = useState('');
  const [comments, setComments] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('write', write);
    data.append('title', title);
    data.append('description', description);

    await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/comments/create',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      data: {
        text: write,
        postId: props.match.params.id,
      },
    }).then(({ data }) => {
      getComments();
    });
  }

  async function getComments() {
    await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/comments/list',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      data: {
        postId: props.match.params.id,
      },
    }).then((data) => {
      setComments(data.data);
    });
  }

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/posts/show/${props.match.params.id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
    }).then((data) => {
      const { image, title, tags, description } = data.data;
      setDescription(description);
      setImage(image);
      setTitle(title);
      getComments();
    });
  }, []);

  return (
    <div className="comment-Pot">
      <Navbar />
      <div className="comment-All">
        <div className="comment-icones">
          <div className="content-title">
            <h2 className="comment-title">{title}</h2>
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
          <img src={image} alt="upload preview" className="upload-imageE" />
        </div>
        <div className="comment-Description">
          <h3 className="comment-Description-title">Descripción</h3>
          <p className="comment-Description-Paragraph">{description}</p>
          <hr className="line"></hr>
        </div>
        <div className="all-pace-Comment">
          <div className="commet-Users">
            <div className="commet-Users">
              {comments.map((data) => (
                <p key={data._id}>
                  {data.ownerName}:{data.text}
                </p>
              ))}
            </div>
          </div>
          <form className="place-Comment" onSubmit={handleSubmit}>
            <textarea
              className="area-Coment"
              name="comment"
              placeholder="Comenta esta Publicación"
              onChange={(e) => setWrite(e.target.value)}
              value={write}
            ></textarea>
            <div className="button-Comment">
              <button className="btn-Comment" type="submit">
                Comentar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentPost;
