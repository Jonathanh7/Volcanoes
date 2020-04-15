import React from "react";
import { Card } from "react-bootstrap";
import AddToFavorite from './AddToFavorite';

const Details = (props) => {
  const selectedVolcano = props.volcanos.find((volcano) => {
    return parseInt(volcano.id) === parseInt(props.match.params.id);
  });

  const params = { volcanoID: props.match.params.id }



  return (
    <>
      {selectedVolcano && (
        <Card>
          <Card.Img src={selectedVolcano.image_url} alt="Card image" />

          <Card.Title>{selectedVolcano.name}</Card.Title>

          <p>Elevation: {selectedVolcano.elevation}</p>
          <p>Location: {selectedVolcano.location}</p>
          <p>Ideal For: {selectedVolcano.ideal_for}</p>

          <AddToFavorite volcanoID={params} />
        </Card>
      )}
    </>
  );
};

export default Details;
