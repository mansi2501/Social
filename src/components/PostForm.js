import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const handleSubmit = () => {};

const PostForm = () => {
  return (
    <Card>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
        />
        <TextField name="title" variant="outlined" label="Title" fullWidth />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" fullWidth>
          Clear
        </Button>
      </form>
    </Card>
  );
};

export default PostForm;
