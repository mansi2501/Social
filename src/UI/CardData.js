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

const CardData = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const deleteHandler = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <Container>
      <Grid item>
        {posts &&
          posts.map((post) => (
            <Card className="mt-3 grid_post" key={post.id}>
              <CardMedia
                component="img"
                width="auto"
                height="300px"
                image={`https://picsum.photos/200/30${post.id}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.message}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" className="icon_class">
                  <ThumbUpOutlinedIcon />
                </Button>
                <Button onClick={() => history.push(`/postform/${post.id}`)}>
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
          ))}
      </Grid>
    </Container>
  );
};

export default CardData;
