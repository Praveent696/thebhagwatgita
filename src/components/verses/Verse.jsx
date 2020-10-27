import React from 'react';
import { Card , Col , Badge } from 'react-bootstrap';
import useNavigation from '../../hooks/useNavigation';


const Verse = (props) => {

    // eslint-disable-next-line no-unused-vars
    let { goTo } = useNavigation();
    const onVerseClick = (chapter_number,verse_number) =>{
        let url=`/verses?chapter_number=${chapter_number}&verse_number=${verse_number}`;
        window.location.href=url;
    }
    
    const colSize = props.item_count === 1 ? 12 : 4;
    

    return (
      <>
        
        <Col md={colSize} style={{marginTop:'20px',marginBottom:'20px'}}>
                <Card key={`verse_${props.verse_number}`} style={{backgroundColor:'#f2d0e5',textAlign:'center'}} onClick={(event) => onVerseClick(props.chapter_number,props.verse_number)}>
                    <Card.Body>
                        <Card.Title>Verses {props.verse_number}<Badge style={{float:'right'}} variant="info">Chapter {props.chapter_number}</Badge> </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.text}</Card.Subtitle>
                        <Card.Text>
                            <p>{props.transliteration}</p>
                            <p>{props.word_meanings}</p>
                            <p>{props.meaning}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        
      </>
    )
}

export default Verse;
