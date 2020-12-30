import React from 'react';
import Verse from '../verses/Verse';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';


const Verses = (props) => {

    let { chapter_number : chapterNumber , verse_number: verseNumber } = useParams();
    let verses = props.verses;
    console.log(props)
    if(chapterNumber)
    {
        // eslint-disable-next-line eqeqeq
        verses = verses.filter(x=>x.chapter_number==chapterNumber);
    }
    if(verseNumber)
    {
        // eslint-disable-next-line eqeqeq
        verses = verses.filter(x=>x.verse_number==verseNumber)
    }
    return (
        <Row style={{padding:'20px',marginRight:'0',marginLeft:'0'}}>
          {
             verses && verses.map((item,index)=>{
                  return <Verse key={index} item_count={verses.length} {...item}/>
              })
          }
        </Row>
    )
};

const mapStateToProps = (state) => {
     return {
         verses : state.vr.verses
    }
}

export default connect(mapStateToProps)(Verses);

