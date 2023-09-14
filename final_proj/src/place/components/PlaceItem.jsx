/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { Button, Card, useMediaQuery } from "@mui/material";
import { useState } from "react";
import MapModal from "../../shared/components/UIElements/MapModal";
import Map from "../../shared/components/UIElements/Map";
import "./PlaceItem.css";
import { useNavigate } from "react-router-dom";

const PlaceItem = (props) => {
  const responsiveWidth = {
    width: {
      xs: 135, // theme.breakpoints.up('xs')
      sm: 134.785, // theme.breakpoints.up('sm')
      md: 120, // theme.breakpoints.up('md')
      lg: 140, // theme.breakpoints.up('lg')
      xl: 142, // theme.breakpoints.up('xl')
    },
  };

  const navTo = useNavigate();
  const [isHover, setIsHover] = useState({
    view: false,
    edit: false,
    delete: false,
  });
  const [showMap, setShowMap] = useState(false); //
  const showMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false);
  };
  return (
    <>
      <MapModal
        open={showMap}
        onClose={closeMapHandler}
        title={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <Button variant="contained" onClick={closeMapHandler}>
            CLOSE
          </Button>
        }
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </MapModal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button
              sx={responsiveWidth}
              variant={isHover.view ? "outlined" : "contained"}
              color="success"
              onMouseOver={() => setIsHover({ ...isHover, view: true })}
              onMouseLeave={() => setIsHover({ ...isHover, view: false })}
              onClick={showMapHandler}
            >
              View on Map
            </Button>
            <Button
              variant={isHover.edit ? "contained" : "outlined"}
              color="primary"
              onMouseOver={() => setIsHover({ ...isHover, edit: true })}
              onMouseLeave={() => setIsHover({ ...isHover, edit: false })}
              onClick={() => navTo(`/places/${props.id}`)}
            >
              Edit
            </Button>
            <Button
              variant={isHover.delete ? "contained" : "outlined"}
              color="error"
              onMouseOver={() => setIsHover({ ...isHover, delete: true })}
              onMouseLeave={() => setIsHover({ ...isHover, delete: false })}
            >
              Delete
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
