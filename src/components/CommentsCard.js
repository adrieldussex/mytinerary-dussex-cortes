import React from "react";
import "../styles/Comments.css";
import { useState, useEffect, useRef } from "react";
import { useEditCommentMutation , useDelCommentMutation} from "../features/commentsAPI";

export default function CommentsCard(props) {
  let [editCommentRedux , {data : commentEdited}] = useEditCommentMutation();
  let [delCommentRedux] = useDelCommentMutation()
  let array = commentEdited?.response.comment
 

  let [e , setE] = useState(props.data) 







  let commentRef = useRef();
  let [openEdit, setOpenEdit] = useState(true);

  function openEditButton() {
    openEdit ? setOpenEdit(false) : setOpenEdit(true);
  }
  function delButton(d) {
    d.preventDefault()
    console.log(e._id)
    let id = e._id
    delCommentRedux(id)
  }
  function saveEditcomment(e) {
    e.preventDefault();
    let commentUpdate = { comment: commentRef.current.value };
    let id = commentRef.current.id;
    console.log(commentUpdate);
    console.log(id);
    editCommentRedux({ commentUpdate, id });
  }

  return (
    <div className="Comment-card" key={e._id}>
      <div className="Comment-userPhoto">
        <div
          className="Comment-photo"
          style={{
            backgroundImage: `url(${e.user.photo})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="Comment-description">
        <div className="Comment-user">
          <h3>
            {e.user.name} {""} {e.user.lastName}
          </h3>
          <p> {e.user.mail}</p>
        </div>
        <div className="Comment-info">
          {openEdit ? (
            <p>{e.comment}</p>
          ) : (
            <form onSubmit={saveEditcomment}>
              <input
                className="Input-input"
                type="text"
                id={e._id}
                name="comment-input"
                ref={commentRef}
                defaultValue={e.comment}
              ></input>
              <button className="Profile-buttonEdit">✔</button>
            </form>
          )}
          <div className="buttons-comments-ed">
            <div onClick={openEditButton}> 📝 </div>
            <div id={e._id} onClick={delButton}> ❌ </div>
          </div>
        </div>
      </div>
    </div>
  );
}
