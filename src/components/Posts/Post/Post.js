import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory, Link } from "react-router-dom";
import { deletePost, editPost } from "../../../redux/Actions/actions";

const Post = (props) => {
  const imageId = Math.floor(Math.random() * 10) + 1;
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteHandler = (id) => {
    dispatch(deletePost(id));
  };

  const likeHandler = () => {
    setLike(!like);
    dispatch(editPost({ like: like }, props.id));
  };

  return (
    <Grid item md={4} xl={4}>
      <Card className="grid_post">
        <CardMedia
          component="img"
          width="auto"
          height="300px"
          className="post_img"
          image={`https://picsum.photos/200/30${imageId}`}
          alt="Random Images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="post_desc"
          >
            {props.message}
          </Typography>
          <span className="read_data">
            <Link to={`/postdetail/${props.id}`}>Read More</Link>
          </span>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className="icon_class"
            onClick={() => likeHandler()}
          >
            {props.like ? <ThumbUpAltIcon /> : <ThumbUpOutlinedIcon />}
          </Button>
          <Button
            className="edit_btn"
            onClick={() => history.push(`/editpost/${props.id}`)}
          >
            <EditIcon />
          </Button>
          <Button
            size="small"
            onClick={() => deleteHandler(props.id)}
            className="delete_btn icon_class"
          >
            <DeleteOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
