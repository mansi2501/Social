import React, { useEffect, useState } from "react";
import { Grid, Button, TextField, Container, Typography } from "@mui/material";
import postImg from "../../assets/images/postImg.gif";
import "./Form.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPost, editPost, getSinglePost } from "../../redux/Actions/actions";
import { useQuery } from "../../hooks";

const initialState = { title: "", message: "" };

const PostForm = () => {
  const query = useQuery();
  const postId = query.get("id") || "";

  const [post, setPost] = useState(initialState);

  const history = useHistory();
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.data.post);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch, postId]);

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

    if (postId) {
      dispatch(editPost(post, postId));
      history.push("/");
    } else {
      dispatch(addPost(post));
      history.push("/");
    }
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
                {postId ? "Edit Post" : "Add a Post"}
              </Typography>
              <TextField
                className="form_textfield"
                name="title"
                variant="outlined"
                label="Title"
                value={post.title || ""}
                onChange={InputChange}
                fullWidth
                required
              />
              <TextField
                name="message"
                className="form_textfield"
                variant="outlined"
                label="Message"
                value={post.message || ""}
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
                {postId ? "Update" : "Add "}
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

export default PostForm;
