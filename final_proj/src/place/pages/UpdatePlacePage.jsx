/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import { PlaceShareContext } from "../../shared/context/PlaceShareContextProvider";
import { useForm } from "../../shared/hooks/FormHook";
import { Button, Card, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import "./NewPlacePage.css";
import { useEffect } from "react";
import { useState } from "react";
import { HashLoader } from "react-spinners";
const UpdatePlacePage = () => {
  const { placeId } = useParams();

  const { places } = useContext(PlaceShareContext);

  const [formIsLoading, setFormIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const chosenPlace = places.find((place) => place.id === placeId);

  useEffect(() => {
    chosenPlace &&
      setFormData(
        {
          title: {
            value: chosenPlace.title,
            isValid: true,
          },
          description: {
            value: chosenPlace.description,
            isValid: true,
          },
        },
        true
      );
    setFormIsLoading(false);
  }, [setFormData, chosenPlace]);
  const submitUpdateForm = (e) => {
    e.preventDefault();
    console.table(formState.inputs);
  };

  if (!chosenPlace) {
    return (
      <div className="center">
        <Card sx={{ padding: ".75rem" }}>
          <h2>{`could'nt find place`}</h2>
        </Card>f
      </div>
    );
  }
  if (formIsLoading) {
    return (
      <div className="center">
        <HashLoader color="#d64a36" loading={formIsLoading} size={100} />
      </div>
    );
  }
  return (
    <form action="" onSubmit={submitUpdateForm} className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Please enter a valid title."
        defaultValue={formState.inputs.title.value}
        defaultValidation={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        errorText="Please enter a valid description (at least 5 characters)."
        defaultValue={formState.inputs.description.value}
        defaultValidation={formState.inputs.description.isValid}
      />
      <IconButton
        type="submit"
        variant="text"
        color="primary"
        className="updateBtn"
        size="large"
        disabled={!formState.formIsValid}
        TouchRippleProps={{ style: { color: "#60ccea", opacity: 0.325 } }}
        timeout={{ enter: 750, exit: 350 }}
      >
        <FontAwesomeIcon icon={faUpload} />
      </IconButton>
      {/* <Button disabled={!formState.formIsValid}>UPDATE PLACE</Button> */}
    </form>
  );
};

export default UpdatePlacePage;
