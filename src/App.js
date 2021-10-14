import { Route, Switch } from "react-router";
import "./App.css";
import Postdetail from "./components/Posts/Post/PostDetail";
import Navbar from "./UI/Navbar";
import Home from "./pages/Home";
import Addpost from "./pages/AddPost";
import UpdatePost from "./pages/UpdatePost";

function App() {
  return (
    <div>
      <Navbar />
<<<<<<< Updated upstream
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addpost" component={Addpost} />
        <Route exact path="/editpost/:id" component={UpdatePost} />
        <Route path="/postdetail/:id" component={Postdetail} />
      </Switch>
=======
      <Route exact path="/" component={CardData} />
      <Route exact path="/postform" component={PostForm} />
      <Route exact path="/postform/:id" component={PostForm} />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
