import React from 'react';
import { Card , Col } from 'react-bootstrap';
import useNavigation from '../../hooks/useNavigation';
import AlertDiv from '../common/AlertDiv';


const Verse = (props) => {

    // eslint-disable-next-line no-unused-vars
    let { goTo } = useNavigation();
    const onVerseClick = (chapter_number,verse_number) =>{
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
                body : props.word_meanings
            },
            {
                header: 'Meaning',
                body : props.meaning
            }
        ]
    }


    return (
      <>
        <Col md={colSize} style={{marginTop:'20px',marginBottom:'20px'}}>
                <Card key={`verse_${props.verse_number}`} style={{backgroundColor:'#ccc',textAlign:'center'}}  onClick={(event) => onVerseClick(props.chapter_number,props.verse_number)}>
                    <Card.Body>
                        <Card.Title className='custom-card-title'>{props.text}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Chapter {props.chapter_number}, Verse {props.verse_number}</Card.Subtitle>
                        <Card.Text>
                            <AlertDiv {...alertDivProps} />
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Col>
      </>
    )
}

export default Verse;
