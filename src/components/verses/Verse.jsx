import React from 'react';
import { Card , Col } from 'react-bootstrap';
import useNavigation from '../../hooks/useNavigation';
import AlertDiv from '../common/AlertDiv';


const Verse = (props) => {

    // eslint-disable-next-line no-unused-vars
    let { goTo } = useNavigation();
    const onVerseClick = (chapter_number,verse_number) =>{
        props.onClickVerse(chapter_number,verse_number)
        let url=`/chapter/${chapter_number}/verses/${verse_number}`;
        goTo(url);
    }
    
    let colSize = props.item_count === 1 ? 12 : 4;

    if(colSize === 4 && props.item_count === 2 )
    {
       colSize = 6;
    }

    const alertDivProps = {
        paragraphs : [
            {
                header: 'Transliteration',
                body : props.transliteration
            },
            {
                header: 'Word by word meaning',
                body : props.siva.ec
            },
            {
                header: 'Meaning',
                body : props.siva.et
            }
        ]
    }


    return (
      <>
        <Col md={colSize} style={{marginTop:'20px',marginBottom:'20px'}}>
                <Card key={`verse_${props.verse}`} style={{backgroundColor:'#ccc',textAlign:'center'}}  onClick={(event) => onVerseClick(props.chapter,props.verse)}>
                    <Card.Body>
                        <Card.Title className='custom-card-title'>{props.slok}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Chapter {props.chapter}, Verse {props.verse}</Card.Subtitle>
                        <Card.Body>
                            <AlertDiv key={new Date()} {...alertDivProps} />
                        </Card.Body>
                    </Card.Body>
                </Card>
        </Col>
      </>
    )
}

export default Verse;
