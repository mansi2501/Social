import React, { useState } from "react";
import { Grid, Button, TextField, Container } from "@mui/material";
import postImg from "../assets/images/postImg.gif";
import "./PostForm.css";

const PostForm = () => {
  const [post, setPost] = useState({ title: "", message: "" });

  const InputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <div className="form_card">
        <Grid
          container
          direction="row"
          justify="flex-between"
          className=""
          xs={12}
        >
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
              />

              <Button
                className="button_submit"
                variant="contained"
                size="large"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
              <Button variant="contained" size="large" type="reset" fullWidth>
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
