import React, { Component } from "react";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utilits/validators";
import { PostTextarea } from "../../../common/Field-validation/Fiield Validation";

const maxLenght10 = maxLengthCreator(10);

class MyPosts extends Component {
 
  addNewPost = (value) => {
    let text = value.postArea;
    this.props.addPost(text);
  };

  render() {
    
    let posts = [...this.props.myPostData].map((p) => (
      <Post className="post" message={p.message} like={p.like} img={p.img} key={p.id} />
    ));

    return (
      <div className="div">
        <PostReduxForm onSubmit={this.addNewPost} />
        {posts}
      </div>
    );
  }
}

class PostForm extends Component {
  render() {
    
    return (
      <form className="form" onSubmit={this.props.handleSubmit}>
        <div className="form__title">My Post</div>
        <div className="form__imput">
          <Field
            validate={[required, maxLenght10]}
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
  }
}

const PostReduxForm = reduxForm({ form: "addPostForm" })(PostForm);

export default MyPosts;
