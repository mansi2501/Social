import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/Actions/actions";
import Post from "./Post/Post";
import CardUI from "../../UI/CardUI";
const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.posts.reverse());
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <CardUI>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          message={post.message}
          like={post.like}
        />
      ))}
    </CardUI>
  );
};

export default Posts;
