
import React from 'react';
import Card  from 'react-bootstrap/Card';

const Poster = (props) => {
    console.log("Props inside Poster ", props);
    const {movie} = props;
    const posterURL = process.env.REACT_APP_POSTER_URL+movie.poster_path;
    return (
        <Card>
            <Card.Img variant="top" src={posterURL} />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Fecha de estreno: {movie.release_date}</small>
            </Card.Footer>
        </Card>
  );
}


export default Poster
;