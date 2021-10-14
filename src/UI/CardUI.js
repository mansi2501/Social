import { Container, Grid } from "@mui/material";

const CardUI = (props) => {
  return (
    <Container>
      <Grid container>{props.children}</Grid>
    </Container>
  );
};

export default CardUI;
