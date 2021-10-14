<<<<<<< Updated upstream:src/pages/AddPost.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, Button, TextField, Container } from "@mui/material";
import { addPost } from "../redux/Actions/actions";
import postImg from "../assets/images/postImg.gif";
import "./styles.css";

const initialState = { title: "", message: "" };
=======
import React, { useState, useEffect } from "react";
import { Grid, Button, TextField, Container, Typography } from "@mui/material";
import postImg from "../assets/images/postImg.gif";
import "./PostForm.css";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addPost, editPost, getSinglePost } from "../redux/Actions/actions";
>>>>>>> Stashed changes:src/components/PostForm.js

const Addpost = () => {
  const [post, setPost] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.data.post);

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (postData) {
      setPost({ ...postData });
    }
  }, [postData]);

  const InputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< Updated upstream:src/pages/AddPost.js
    dispatch(addPost(post));
    history.push("/");
    clearData();
=======

    if (id) {
      dispatch(editPost(post, id));
      history.push("/");
    } else {
      dispatch(addPost(post));
      history.push("/");
    }
>>>>>>> Stashed changes:src/components/PostForm.js
  };

  const clearData = () => {
    setPost(initialState);
  };

  return (
    <Container>
      <div className="form_card">
        <Grid container direction="row" justify="flex-between" item xs={12}>
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
              <Typography variant="h6">
                {id ? "Edit Post" : "Add a Post"}
              </Typography>
              <TextField
                className="form_textfield"
                name="title"
                variant="outlined"
                label="Title"
                onChange={InputChange}
                fullWidth
                required
              />
              <TextField
                name="message"
                className="form_textfield"
                variant="outlined"
                label="Message"
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
<<<<<<< Updated upstream:src/pages/AddPost.js
                Add Post
=======
                Submit
>>>>>>> Stashed changes:src/components/PostForm.js
              </Button>
              <Button
                className="button_clear"
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

export default Addpost;
