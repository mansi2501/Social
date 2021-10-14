import React, { useEffect, useState } from "react";
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
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import EditIcon from "@mui/icons-material/Edit";
import { deletePost, loadPosts } from "../redux/Actions/actions";
import { useHistory } from "react-router";

const CardData = () => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  console.log(isLiked);
  const toggle = (id: number) => {
    setIsLiked(!isLiked);
  };

  const deleteHandler = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <Container>
      <Grid container>
        {posts &&
          posts.map((post) => (
            <Grid item md={4} xl={4} key={post.id}>
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
                  <Button
                    size="small"
                    className="icon_class"
                    onClick={() => toggle(post.id)}
                  >
                    {!isLiked ? <ThumbUpOutlinedIcon /> : <ThumbUpAltIcon />}
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
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CardData;
