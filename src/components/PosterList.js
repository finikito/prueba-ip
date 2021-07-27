
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Poster from './Poster';

const PosterList = (props) => {
    console.log()
    const {movieData} = props;
    console.log("movie ", movieData);
    let itemList = [];
    let tempCols = [];
    movieData.forEach((movie,index)=>{
        if(index % 3 === 0 && index!==0){
            itemList.push(
                <Row className="g-3">
                    {tempCols}
                </Row> 
            );
            tempCols=[];
        }           
        tempCols.push(
            <Col  xs={6} md={4} lg={3}>
                <Poster movie={movie} index={index}></Poster>
            </Col>
        ) ;
       
    });

    return (
        <Container>
            {itemList}   
        </Container>
        
            
    );
}


export default PosterList;