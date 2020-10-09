import React from 'react'
import Description from './Description'
import Title from './Title'
import SubTitle from './SubTitle'
import {Row, Col} from 'react-bootstrap'

export default function StarInfo(props){
  const style = {
    paddingLeft: '15px'
  };
  const flex = {
    display: "flex",
    justifyContent : "space-around"
  } 

    return(
      <div style={style}>
        <Row>
          <Title title={props.star.name} />
        </Row>
        <Row style={flex}>
          <Col xs={4}>
            <SubTitle title={props.star.gender === 1 ? 'Female' : 'Male'} />
          </Col>
          <Col xs={8}>
            <SubTitle title={'Birthday ' + props.star.birthday} />
          </Col>
        </Row>
        <Row>
          <Description category={'Biography'} description={props.star.biography} />
        </Row>
      </div>
    );
}
