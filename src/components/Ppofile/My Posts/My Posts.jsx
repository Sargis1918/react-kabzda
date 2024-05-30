import React from "react";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utilits/validators";
import {PostTextarea}  from "../../../common/Field-validation/Fiield Validation";
const maxLenght10=maxLengthCreator(10)
const MyPosts = (props) => {
  
  let addNewPost = (value) => {
    let text = value.postArea;
    props.addPost(text)
  };

  let posts = props.myPostData.map((p) => (
    <Post className="post" message={p.message} like={p.like} img={p.img} key={p.id} />
  ));
  return (
    <div className="div">
      <PostReduxForm onSubmit={addNewPost} />
      {posts}
    </div>
  );
};
const PostForm = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="form__title">My Post</div>
      <div className="form__imput">
        <Field
        validate={[required,maxLenght10]}
          component={PostTextarea}
          className="posts__textarea"
          placeholder="your news"
          cols="30"
          rows="3"
          name="postArea"
        />
        <div className="form__button">
          <button className="form__button-item">Send</button>
        </div>
      </div>
    </form>
  );
};
const PostReduxForm = reduxForm({ form: "addPostForm" })(PostForm);
export default MyPosts;
