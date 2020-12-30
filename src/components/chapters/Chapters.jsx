import React from 'react';
import Chapter from '../chapters/Chapter';
import { Row } from 'react-bootstrap';
import { connect } from "react-redux";

const Chapters = (props) => {
    let chapters = props.chapters

    return (
        <Row style={{padding:'20px',marginRight:'0',marginLeft:'0'}}>
          {
             chapters.map((item,index)=>{
                  return <Chapter key={index} {...item}/>
              })
          }
        </Row>
    )
};

const mapStateToProps = (state) => {
    return {
        chapters: state.ch.chapters
    }
}

export default connect(mapStateToProps)(Chapters);
