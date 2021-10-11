import { Route } from "react-router";
import "./App.css";
import PostForm from "./components/PostForm";
import CardData from "./UI/CardData";
import Navbar from "./UI/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={CardData} />
      <Route exact path="/postform" component={PostForm} />
    </div>
  );
}

export default App;
