import React from "react";
import "./CardData.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const CardData = () => {
  return (
    <div>
      <Grid item sm={4}>
        <Card className="mt-3 grid_post">
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" className="icon_class">
              <ThumbUpOutlinedIcon />
            </Button>
            <Button size="small" className="delete_btn icon_class">
              <DeleteOutlinedIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default CardData;
