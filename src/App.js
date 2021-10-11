import { AppBar, Container, Grid, Typography } from "@mui/material";
import "./App.css";
import PostForm from "./components/PostForm";
import CardData from "./UI/CardData";

function App() {
  return (
    <Container>
      <AppBar position="static" className="main_head" color="inherit">
        <Typography className="heading">Posts</Typography>
      </AppBar>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={8}>
            <CardData />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PostForm />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
