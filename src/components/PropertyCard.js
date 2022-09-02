import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  IconButton,
  Typography,
  CardMedia,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

function PropertyCard({
  image,
  name,
  address,
  area,
  bedroom,
  bathroom,
  price,
}) {
  return (
    <>
      <Card
        style={{ borderRadius: "0.4rem" }}
        variant="outlined"
        sx={{ maxWidth: 400 }}
      >
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />

        <CardContent>
          <IconButton style={{ float: "right" }} aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="h6">
            <span style={{ color: "purple" }}><b>${price}</b></span>
            <small>/month</small>
          </Typography>
          <Typography variant="h6"><b>{name}</b></Typography>
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
        </CardContent>

        <Divider />

        <CardActions style={{ justifyContent: "space-around" }} disableSpacing>
          <IconButton aria-label="bed">
            <BedIcon />
            <Typography variant="body2" color="text.secondary">
              {bedroom} beds
            </Typography>
          </IconButton>
          <IconButton aria-label="bathroom">
            <ShowerIcon />
            <Typography variant="body2" color="text.secondary">
              {bathroom} bathroom
            </Typography>
          </IconButton>

          <IconButton aria-label="area">
            <SquareFootIcon />
            <Typography variant="body2" color="text.secondary">
              {area} sq m
            </Typography>
          </IconButton>

        </CardActions>
        
      </Card>
    </>
  );
}

export default PropertyCard;
