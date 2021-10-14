import * as types from "./actionType";
<<<<<<< Updated upstream
import db from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
// import axios from "axios";

const postsCollectionRef = collection(db, "posts");
=======
import axios from "axios";
import { baseURL } from "../../api";
>>>>>>> Stashed changes

const getPosts = (posts) => ({
  type: types.GET_POSTS,
  payload: posts,
});

const postDelete = () => ({
  type: types.DELETE_POST,
});

const postAdd = () => ({
  type: types.ADD_POST,
});

const getPost = (post) => ({
  type: types.GET_SINGLE_POST,
  payload: post,
});

const postEdit = () => ({
  type: types.EDIT_POST,
});

const postLike = () => ({
  type: types.LIKE_POST,
});

export const loadPosts = () => {
<<<<<<< Updated upstream
  return async function (dispatch) {
    const data = await getDocs(postsCollectionRef);
    dispatch(getPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
=======
  return function (dispatch) {
    axios
      .get(baseURL)
      .then((res) => {
        dispatch(getPosts(res.data));
      })
      .catch((error) => console.log(error));
>>>>>>> Stashed changes
  };
  // return function (dispatch) {
  //   axios
  //     .get("http://localhost:4000/posts")
  //     .then((res) => {
  //       dispatch(getPosts(res.data));
  //     })
  //     .catch((error) => console.log(error));
  // };
};

export const addPost = (post) => {
<<<<<<< Updated upstream
  return (dispatch) => {
    addDoc(postsCollectionRef, post);
    dispatch(postAdd(post));
  };
  // return function (dispatch) {
  //   axios
  //     .post("http://localhost:4000/posts", post)
  //     .then((res) => {
  //       console.log(res);
  //       dispatch(postAdd());
  //       dispatch(loadPosts());
  //     })
  //     .catch((error) => console.log(error));
  // };
};
export const editPost = (post, id) => {
  return async (dispatch) => {
    const postDoc = doc(db, "posts", id);
    const newData = post;
    await updateDoc(postDoc, newData);
    dispatch(postEdit());
    dispatch(loadPosts());
=======
  return function (dispatch) {
    axios
      .post(baseURL, post)
      .then((res) => {
        dispatch(postAdd());
        dispatch(loadPosts());
      })
      .catch((error) => console.log(error));
>>>>>>> Stashed changes
  };
  // return function (dispatch) {
  //   axios
  //     .put(`http://localhost:4000/posts/${id}`, post)
  //     .then((res) => {
  //       dispatch(postEdit());
  //     })
  //     .catch((error) => console.log(error));
  // };
};

export const deletePost = (id) => {
<<<<<<< Updated upstream
  return async (dispatch) => {
    const postDoc = doc(postsCollectionRef, id);
    await deleteDoc(postDoc);
    dispatch(postDelete());
    dispatch(loadPosts());
=======
  return function (dispatch) {
    axios
      .delete(`${baseURL}/${id}`)
      .then((res) => {
        dispatch(postDelete());
        dispatch(loadPosts());
      })
      .catch((error) => console.log(error));
>>>>>>> Stashed changes
  };
  // return function (dispatch) {
  //   axios
  //     .delete(`http://localhost:4000/posts/${id}`)
  //     .then((res) => {
  //       dispatch(postDelete());
  //       dispatch(loadPosts());
  //     })
  //     .catch((error) => console.log(error));
  // };
};

export const getSinglePost = (id) => {
<<<<<<< Updated upstream
  return async (dispatch) => {
    const docRef = doc(postsCollectionRef, id);
    const docSnap = await getDoc(docRef);
    dispatch(getPost(docSnap.data()));
=======
  return function (dispatch) {
    axios
      .get(`${baseURL}/${id}`)
      .then((res) => {
        dispatch(getPost(res.data));
        console.log(res.data);
      })
      .catch((error) => console.log(error));
>>>>>>> Stashed changes
  };
  // return function (dispatch) {
  //   axios
  //     .get(`http://localhost:4000/posts/${id}`)
  //     .then((res) => {
  //       dispatch(getPost(res.data));
  //     })
  //     .catch((error) => console.log(error));
  // };
};

<<<<<<< Updated upstream
export const likePost = (post) => {
  console.log("likeActions", post);
  return async (dispatch) => {
    addDoc(postsCollectionRef, post);
    dispatch(postLike(post));
=======
export const editPost = (post, id) => {
  return function (dispatch) {
    axios
      .put(`${baseURL}/${id}`, post)
      .then((res) => {
        dispatch(postEdit());
      })
      .catch((error) => console.log(error));
>>>>>>> Stashed changes
  };
};
