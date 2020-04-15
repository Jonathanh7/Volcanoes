import React from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "react-bootstrap";

import { verifyUser, addToFavorites as addFav } from "../services/Constants";


const addToFavorites = async ({ volcanoID}) => {
  const params = { volcano_id: volcanoID }

  const resp = await addFav(params);

  console.log("Successfully added to favorite", resp);
}
const AddToFavorite = ({ volcanoID }) => (
  <Button onClick={() => addToFavorites(volcanoID)} variant="secondary" size="sm">
    <FaHeart />
  </Button>
);

export default AddToFavorite;
