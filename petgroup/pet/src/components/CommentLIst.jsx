import React, { useState, useEffect } from 'react';

import CommentForm from './CommentForm';
import "./CommentList.scss";

import { API_URL } from '../config/constants';
import axios from 'axios';

// import {createComment, getComment} from "../api/api.js"


const CommentLIst = ( {user_id, post_id} ) => {
// const CommentLIst = ( {comment, user_id, post_id} ) => {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding]=useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/comment`).then((result)=>{
      const comments = result.data.comments;
      setComment(comments);
      setLoading(false);
    }).catch((error)=>{
      console.log(error);
    })
  }, []);

  const onCancel = ()=>{}
  const handleDelete = ()=>{}

  return (
    <>
      {/* CommentList.jsx */}
      <section className="comment">
        <div className="layout_fix">
          <div className="heading">
            <h2>댓글</h2>
          </div>
          {/* <CommentForm setComment={setComment}/> */}

          <CommentForm setComment={setComment}
            post_id={post_id} user_id={user_id}
            onCancel={() => setIsAdding(false)}
            />


          <ul className="comment-list">
            {
              comment.length === 0 ? (
                <li className="empty">등록된 댓글이 없습니다!</li>
              ) : (
                comment.map((data)=>(
                  <li key={data.id}>
                    <p className="txt">{data.content}</p>
                    <p className="date">{new Date(data.createdAt).toLocaleString('ko-KR')}</p>
                    {/* <p>{data.createdAt}</p> createdAt(내장) */}
                    <button>수정</button>
                    <button onClick={handleDelete}>삭제</button>
                  </li>
                ))
              )
            }
          </ul>
        </div>
      </section>
    </>
  );
};

export default CommentLIst;