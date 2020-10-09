import React, { Fragment } from 'react';
import Cast from './Cast';
import {Link} from 'react-router';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function CastList({data}) {
  const StyledLink = styled(Link)`
    &:hover {
      text-decoration:none;
    }
  `;
  const flex = {
    display : "flex",
    justifyContent: "space-around"
  }
  const border = {
    border: "1px solid lightgrey",
    
    margin: "1rem",
    boxSizing: "content-box"


  }
    let casts = data.map(function(cast) {
      if(cast.profile_path != null) {
        return(
          <div style={border}> 
          <Col xs={4} sm={3} md={2} key={cast.id} >
            <StyledLink to={'/star/'+cast.id} ><Cast cast={cast} /></StyledLink>
          </Col>
          </div>
        );
      }

      return null;
    });

    return(
      <div>
      <h3>Casts</h3>
      <div style={flex}>
        {casts}
      </div>
      </div>
    );
}
