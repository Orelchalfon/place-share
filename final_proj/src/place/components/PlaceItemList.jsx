/* eslint-disable react/prop-types */
import PlaceItem from "./PlaceItem";

import { Button, Card } from "@mui/material";

import "./PlaceItemList.css";

const PlaceItemList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card sx={{padding:".75rem"}}>
          <h2>No places found. Maybe create one?</h2>
          <Button color="error" variant="contained" href="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceItemList;
