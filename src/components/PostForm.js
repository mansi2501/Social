import React, { useState } from "react";
import { Grid, Button, TextField, Container } from "@mui/material";
import postImg from "../assets/images/postImg.gif";
import "./PostForm.css";
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addPost, editUser } from "../redux/Actions/actions";

const PostForm = () => {
  const [post, setPost] = useState({ title: "", message: "" });
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const InputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!post.title || !post.message) {
    //   console.log("Please Fill all Values");
    // }

    if (id) {
      dispatch(editUser(post, id));
      history.push("/");
    } else {
      dispatch(addPost(post));
      history.push("/");
    }
  };

  const clearData = () => {
    setPost({ title: "", message: "" });
  };

  return (
    <Container>
      <div className="form_card">
        <Grid container direction="row" justify="flex-between" xs={12}>
          <Grid item sm={6}>
            <img src={postImg} alt="post figure" height="300px" />
          </Grid>
          <Grid item sm={6}>
            <form
              autoComplete="off"
              className="post_form"
              noValidate
              onSubmit={handleSubmit}
            >
              <TextField
                className="form_textfield"
                name="title"
                variant="outlined"
                label="Title"
                value={post.title}
                onChange={InputChange}
                fullWidth
                required
              />
              <TextField
                name="message"
                className="form_textfield"
                variant="outlined"
                label="Message"
                value={post.message}
                onChange={InputChange}
                fullWidth
                multiline
                rows={4}
                required
              />

              <Button
                className="button_submit"
                variant="contained"
                size="large"
                type="submit"
                fullWidth
              >
                {id ? "Add Post" : "Update Post"}
              </Button>
              <Button
                onClick={clearData}
                variant="contained"
                size="large"
                type="reset"
                fullWidth
              >
                Clear
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default PostForm;
