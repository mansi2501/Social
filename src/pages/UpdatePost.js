import React, { useState, useEffect } from "react";
import { Grid, Button, TextField, Container } from "@mui/material";
import { getSinglePost, editPost } from "../redux/Actions/actions";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import postImg from "../assets/images/postImg.gif";
import "./styles.css";

const initialState = { title: "", message: "" };

const Updatepost = () => {
  const [post, setPost] = useState(initialState);
  const { id } = useParams();
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
    dispatch(editPost(post, id));
    history.push("/");
    clearData();
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
                Edit
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

export default Updatepost;
