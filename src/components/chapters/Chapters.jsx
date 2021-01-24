import React from 'react';
import Chapter from '../chapters/Chapter';
import { Row } from 'react-bootstrap';
import { connect } from "react-redux";
import * as actionTypes from "../../store/action/actionTypes";

const Chapters = (props) => {
    let chapters = props.chapters
    console.log('chapters:',chapters)

    return (
        <Row style={{padding:'20px',marginRight:'0',marginLeft:'0'}}>
          {
             chapters.map((item,index)=>{
                  return <Chapter key={index} {...item} onChangeFavorate ={props.onChangeFavorate}/>
              })
          }
        </Row>
    )
};

const mapDispatchToProps = (dispatch) =>{
    return {
        onChangeFavorate : (chapterNumber,isFavorate) => dispatch({type: actionTypes.SET_CHAPTER_FAV_STATUS ,payload: { chapterNumber : chapterNumber , isFavorate: isFavorate } })
    };
}

const mapStateToProps = (state) => {
    return {
        chapters: state.chapters
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chapters);
