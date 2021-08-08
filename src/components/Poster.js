
import React, {useState} from 'react';
import Card  from 'react-bootstrap/Card';

import Detail from './Detail';

const Poster = (props) => {
    console.log("Props inside Poster ", props);
    const {movie} = props;
    const posterURL = process.env.REACT_APP_POSTER_URL+movie.poster_path;
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateModalData = (data) => setModalData(data); 
    
    const onClickImage = () => {
        handleShow();
    }

    return (
        <>
        <div>
            <Card>
                <Card.Img variant="top" src={posterURL} onClick={onClickImage}/>
                <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small>Fecha de estreno: {movie.release_date}</small>
                </Card.Footer>
            </Card>
            {show && 
            <Detail handleClose={handleClose} show={show} movie={movie} posterURL={posterURL}></Detail>
            }
        </div>

        </>
  );
}


export default Poster;