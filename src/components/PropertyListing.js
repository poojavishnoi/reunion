import React from "react";
import { database } from "../data/database";
import PropertyCard from "./PropertyCard";
import { Grid } from "@mui/material";
import GetFinalProperty from "../utils/finalPropertyList";

function PropertyListing() {
  const finalPropertyList = GetFinalProperty(database);

  return (
    <>
      {finalPropertyList.length === 0 ? (
        <img
          src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png?compress=1"
          style={{ width: "100%" }}
          alt=""
        />
      ) : (
        
        <Grid className="grid"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {finalPropertyList.map((item, index) => (
            <Grid item xs={1} sm={4} md={4} key={index}>
              <PropertyCard
                image={item.img}
                name={item.name}
                address={item.address}
                area={item.area}
                bathroom={item.bathroom}
                bedroom={item.bedroom}
                product={item.product}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default PropertyListing;
