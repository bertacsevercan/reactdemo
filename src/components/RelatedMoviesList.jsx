import React, { Fragment } from 'react';
import {Link} from 'react-router';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import MovieList from './MovieList';

export default function RelatedMoviesList({data}) {
    const StyledLink = styled(Link)`
      &:hover {
        text-decoration:none;
      }
    `;
    const flex = {
      display : "flex",
      justifyContent: "space-around"
    }

    const titleStyle = {
      marginTop: "15px",
      paddingLeft: '20px'
    };
    if(data.length > 0 ){
      return(
        <div>
        <h3 style={titleStyle}>Related Movies</h3>
        <div style={flex}>
          <div> 
            <Col key={data.id} >
              <StyledLink to={'/movie/'+data.id} > <MovieList movies={data} /> </StyledLink>
            </Col>
            </div>
        </div>
        </div>
      );
    }else{
      return null;
    }

      
}