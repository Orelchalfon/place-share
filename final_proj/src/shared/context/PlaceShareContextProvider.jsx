/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  orelProf,
  kobiProf,
  sapirProf,
  alonProf,
  amitProf,
} from "../../shared/img/imgsPath.js";
import Place from "../../shared/models/Place";
import User from "../models/User";
const initialPlaces = [
  new Place(
    "p1",
    "Empire State Building",
    "One of the most famous sky scrapers in the world!",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/1200px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    "avnei derech 1",
    {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    "u1"
  ),
  new Place(
    "p2",
    "Empire State Building",
    "One of the most famous sky scrapers in the world!",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/1200px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    "avnei derech 1",
    {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    "u3"
  ),
  new Place(
    "p2",
    "Empire State Building",
    "One of the most famous sky scrapers in the world!",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/1200px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    "dizengoff center",
    {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    "u2"
  ),
  new Place(
    "p6",
    "dizengoff center",
    "One of the most famous sky scrapers in the world!",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/1200px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    "dizengoff center",
    {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    "u2"
  ),
];
const initialUsers = [
  new User("u1", "orel", "orelchalfon@gmail.com", "111111", orelProf, 1),
  new User("u2", "sapir", "sapir@gmail.com ", "222222", sapirProf, 2),
  new User("u3", "kobi", "kobi@gmail.com ", "333333", kobiProf, 1),
  new User("u4", "alon", "alon@gmail.com", "444444", alonProf, 2),
  new User("u5", "amit", "amit@gmail.com ", "555555", amitProf, 2),
];

export const PlaceShareContext = createContext({
  users: [],
  setUsers: () => {},
  places: [],
  setPlaces: () => {},
  addPlace: (placeId) => {},
  updatePlace: (placeId) => {},

  deletePlace: (placeId) => {},
});

const PlaceShareContextProvider = ({ children }) => {
  const [initUsers, setInitUsers] = useState(initialUsers);
  const [initPlaces, setInitPlaces] = useState(initialPlaces);
  const addPlace = (place) => {
    setInitPlaces((prevPlaces) => [...prevPlaces, place]);
  };
  const updatePlace = (place) => {
    setInitPlaces((prevPlaces) => {
      const placeIndex = prevPlaces.findIndex((p) => p.id === place.id);
      const updatedPlaces = [...prevPlaces];
      updatedPlaces[placeIndex] = place;
      return updatedPlaces;
    });
  };
  const deletePlace = (placeId) => {
    setInitPlaces((prevPlaces) => prevPlaces.filter((p) => p.id !== placeId));
  };

  return (
    <PlaceShareContext.Provider
      value={{
        users: initUsers,
        setUsers: setInitUsers,
        places: initPlaces,
        setPlaces: setInitPlaces,
        addPlace,
        updatePlace,
        deletePlace,
      }}
    >
      {children}
    </PlaceShareContext.Provider>
  );
};

export default PlaceShareContextProvider;
