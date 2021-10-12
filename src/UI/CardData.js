import React, { useEffect } from "react";
import "./CardData.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { deletePost, loadPosts } from "../redux/Actions/actions";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const CardData = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <Container>
      <Grid container>
        {posts &&
          posts.map((post) => (
            <Grid item md={4} xl={4}>
              <Card className="grid_post" key={post.id}>
                <CardMedia
                  component="img"
                  width="auto"
                  height="300px"
                  className="post_img"
                  image={`https://picsum.photos/200/30${post.id}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="post_desc"
                  >
                    {post.message}
                  </Typography>
                  <span className="read_data">
                    <Link to={`/postdetail/${post.id}`}>Read More>></Link>
                  </span>
                </CardContent>
                <CardActions>
                  <Button size="small" className="icon_class">
                    <ThumbUpOutlinedIcon />
                  </Button>
                  <Button
                    className="edit_btn"
                    onClick={() => history.push(`/postform/${post.id}`)}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    size="small"
                    onClick={() => deleteHandler(post.id)}
                    className="delete_btn icon_class"
                  >
                    <DeleteOutlinedIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CardData;
