import React from 'react';
import { Card , Col, Button } from 'react-bootstrap';
import useNavigation from '../../hooks/useNavigation';
import AlertDiv from '../common/AlertDiv';

const Chapter = (props) => {

    let { goTo } = useNavigation();
    const onChapterClick = (chapter_number) => {
    
        let url=`/chapter/${chapter_number}/verses`;
        goTo(url);
    }

    const alertDivProps = {
        paragraphs : [
            {
                header: 'Name english',
                body : props.name_english
            },
            {
                header: 'Name transliterated simple',
                body : props.name_transliterated_simple
            },
            {
                header: 'Transliterated',
                body : props.name_transliterated
            }
        ]
    }

    return (
      <>
        
            <Col md={4} style={{marginTop:'20px',marginBottom:'20px'}}>
                <Card key={`chapter_${props.chapter_number}`} style={{backgroundColor: props.is_favorate ?'#ff0023':'#ccc',textAlign:'center'}}>
                    <Card.Body>
                        <Card.Title className="custom-card-title">{props.name} </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Chapter {props.chapter_number}</Card.Subtitle>
                        <Card.Body>
                            <AlertDiv key={new Date()} {...alertDivProps}/>
                        </Card.Body>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={(event) => onChapterClick(props.chapter_number)} variant="dark">Open verses</Button>{' '}
                        <Button onClick={()=> props.onChangeFavorate(props.chapter_number,true)}>Make Favorate</Button>{' '}
                    </Card.Footer>
                </Card>
            </Col>
        
      </>
    )
}

export default Chapter;
