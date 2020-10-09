import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import Description from './Description'
import {Row, Col} from 'react-bootstrap'

export default function MovieInfo(props){
  const style = {
    paddingLeft: '15px',
  };
  const flex = {
    display: "flex",
    justifyContent : "space-around"
  } 
  const print = () => {
    console.log(props.movie)
  }

    return(
      <div style={style}>
        <Row>
          <Title title={props.movie.title} />
        </Row>
        <Row style={flex}>
          <Col xs={4}>
            <SubTitleWithIcon icon='star' title={props.movie.vote_average} />
          </Col>
          <Col xs={4}>
            <SubTitleWithIcon icon='heart' title={props.movie.vote_count} />
          </Col>
          <Col xs={4}>
            <SubTitle title={props.movie.release_date.substring(0,4)} />
          </Col>
        </Row>
        <Row>
          <Description category={'Overview'} description={props.movie.overview} />
        </Row>
      </div>
    );
}
