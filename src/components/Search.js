import React, { useState } from "react";
import { Toolbar, TextField, Divider, MenuItem, Button } from "@mui/material";
import { useFilter } from "../context/filter-context";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Search() {
  const { filterDispatch } = useFilter();

  const productType = [
    {
      value: "House",
    },
    {
      value: "Shop",
    },
  ];

  const locationList = [
    {
      value: "United States",
    },
    {
      value: "England",
    },
    {
      value: "FL",
    },
    {
      value: "Auckland",
    },
    {
      value: "India",
    },
  ];

  const priceRange = [
    {
      value: "$1000 - $2000",
    },
    {
      value: "$2000 - $4000",
    },
    {
      value: "more than $4000",
    },
  ];

  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);

  const handlePropertyChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const searchHandler = () => {
    var dateValue;
    if (date) {
      dateValue = `${date.$D}/${date.$M + 1}/${date.$y}`;
    } else {
      dateValue = "";
    }

    filterDispatch({ type: "PRICE", payload: price });
    filterDispatch({ type: "LOCATION", payload: location });
    filterDispatch({ type: "PROPERTY_TYPE", payload: propertyType });
    filterDispatch({ type: "DATE", payload: dateValue });
  };

  return (
    <>
      <Toolbar
        style={{
          backgroundColor: "white",
          justifyContent: "space-around",
          padding: "1rem",
          marginBottom: "2rem",
          borderRadius: "0.5rem",
        }}
      >

        <Toolbar>
          <TextField
            style={{ width: "13rem" }}
            id="standard-select-location"
            select
            label="location"
            value={location}
            onChange={handleLocationChange}
            variant="standard"
          >
            {locationList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Toolbar>

        <Divider
          orientation="vertical"
          flexItem
          style={{ paddingLeft: "1rem" }}
        />

        <Toolbar>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select move in date"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => (
                <TextField variant="standard" {...params} />
              )}
            />
          </LocalizationProvider>
        </Toolbar>

        <Divider orientation="vertical" flexItem />
        
        <Toolbar>
          <TextField
            style={{ width: "13rem" }}
            id="standard-select-property"
            select
            label="Price"
            value={price}
            onChange={handlePriceChange}
            variant="standard"
          >
            {priceRange.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Toolbar>
        
        <Divider orientation="vertical" flexItem />

        <Toolbar>
          <TextField
            style={{ width: "13rem" }}
            id="standard-select-property"
            select
            label="Property"
            value={propertyType}
            onChange={handlePropertyChange}
            variant="standard"
          >
            {productType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Toolbar>

        <Button
          variant="contained"
          color="inherit"
          onClick={searchHandler}
          style={{ backgroundColor: "#271033", color: "white" }}
        >
          Search
        </Button>
      </Toolbar>
    </>
  );
}

export default Search;
