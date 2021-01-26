import React from 'react';
import Chapter from '../chapters/Chapter';
import { Row } from 'react-bootstrap';
import { connect } from "react-redux";
import * as actionCreators from "../../store/action/index";
import { useEffect } from 'react'

const Chapters = (props) => {
    useEffect(()=>{
        props.setChapters();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <Row style={{padding:'20px',marginRight:'0',marginLeft:'0'}}>
          {
             props.chapters.map((item,index)=>{
                  return <Chapter key={index} {...item} onChangeFavorate ={props.onChangeFavorate} onClickChapter={props.setVerses}/>
              })
          }
        </Row>
    )
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getChapters  : () => dispatch(actionCreators.getChapters()),
        setChapters  : () => dispatch(actionCreators.setChapters()),
        setVerses : (chapterNumber, versesCount) => dispatch(actionCreators.setVerses(chapterNumber,versesCount)),
        onChangeFavorate : (chapterNumber,isFavorate) => dispatch(actionCreators.makeFavorateChapter(chapterNumber,isFavorate))
    };
}

const mapStateToProps = (state) => {
    return {
        chapters: state.chapters
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chapters);
