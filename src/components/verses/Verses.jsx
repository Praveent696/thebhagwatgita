import React from 'react';
import Verse from '../verses/Verse';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionCreators from "../../store/action/index";


const Verses = (props) => {
    let verses = props.verses;
    
    return (
        <Row style={{padding:'20px',marginRight:'0',marginLeft:'0'}}>
          {
             verses && verses.map((item,index)=>{
                  return <Verse key={index} item_count={verses.length} {...item} onClickVerse={props.setVerse}/>
              })
          }
        </Row>
    )
};

const mapStateToProps = (state) => {
     return {
         verses : state.verses
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setVerse : (chapterNumber,verseNumber) => dispatch(actionCreators.setVerse(chapterNumber,verseNumber))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Verses);

