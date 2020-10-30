import React from 'react';
import { Card , Col, Alert } from 'react-bootstrap';
import useNavigation from '../../hooks/useNavigation';


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


    return (
      <>
        
        <Col md={colSize} style={{marginTop:'20px',marginBottom:'20px'}}>
                <Card key={`verse_${props.verse_number}`} style={{backgroundColor:'#ccc',textAlign:'center'}}  onClick={(event) => onVerseClick(props.chapter_number,props.verse_number)}>
                    <Card.Body>
                        <Card.Title className='custom-card-title'>{props.text}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Chapter {props.chapter_number}, Verse {props.verse_number}</Card.Subtitle>
                        <Card.Text>
                        <Alert variant="dark">
                            <p className="mb-0">
                               <Alert.Heading>Transliteration</Alert.Heading>
                               {props.transliteration}
                            </p>
                            <hr />
                            <p className="mb-0">
                               <Alert.Heading>Word by word meaning</Alert.Heading>
                               {props.word_meanings}
                            </p>
                            <hr />
                            <p className="mb-0">
                               <Alert.Heading>Meaning</Alert.Heading>
                               {props.meaning}
                            </p>
                        </Alert>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        
      </>
    )
}

export default Verse;
