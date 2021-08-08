
import React from 'react';
import Modal  from 'react-bootstrap/Modal';
import Button  from 'react-bootstrap/Button';
import ReactStars from "react-rating-stars-component";

const Detail = (props) => {
    const {movie, handleClose, show, posterURL} = props;
    const isForAdults =  movie.adult? "Sí": "No";

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    
    const  onSubmitClick = () => {
        console.log("store data");
    }

    return (
        <Modal show={show} onHide={handleClose}  backdrop="static" size="xl">
        <div style={{width: "95%", margin: "20px auto"}}>   
    
            <Modal.Header closeButton>
                <h2>{movie.title}</h2>
            </Modal.Header>
            
            <Modal.Body>
            <div className="row">
                <div className="col-md-6">
                    <img src={posterURL}/>
                </div>
                <div className="col-md-6">
                    <p><strong>Titulo original </strong> {movie.original_title}  </p> 
                    <p><strong>Resumen: </strong>{movie.overview}  </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p><strong>Para adultos:</strong> {isForAdults}</p>
                    <p><strong>Idioma original:</strong> {movie.original_language}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Fecha de lanzamiento </strong> {movie.release_date}</p>
                    <p><strong>Popularidad: </strong>{movie.popularity}</p>
                </div>
                
            </div>
            <div className="row">
                <ReactStars
                    count={10}
                    onChange={ratingChanged}
                    size={100}
                    activeColor="#ffd700"
                    isHalf={true}
                    value={movie.vote_average}

                />
            </div>
            <div className="row">
                <strong>Comentario</strong>
                <textarea></textarea>
            </div>

            </Modal.Body>
            <Modal.Footer>
            <div id="submitDiv">
                <div style={{float: "right", marginTop: "20px"}} >
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={onSubmitClick}>
                        Puntuar
                    </Button>                       
                </div>
            </div>     
            </Modal.Footer>  
       
        </div>
      </Modal>           
    );
                
}

export default Detail;