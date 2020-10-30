import React from 'react';
import { Card , Col, Button, Alert } from 'react-bootstrap';
import useNavigation from '../../hooks/useNavigation';

const Chapter = (props) => {

    let { goTo } = useNavigation();
    const onChapterClick = (chapter_number) => {
    
        let url=`/chapter/${chapter_number}/verses`;
        goTo(url);
    }

    return (
      <>
        
            <Col md={4} style={{marginTop:'20px',marginBottom:'20px'}}>
                <Card key={`chapter_${props.chapter_number}`} style={{backgroundColor:'#ccc',textAlign:'center'}}>
                    <Card.Body>
                        <Card.Title className="custom-card-title">{props.name} </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Chapter {props.chapter_number}</Card.Subtitle>
                        <Card.Text>
                            <Alert variant="dark">
                                <p className="mb-0">
                                <Alert.Heading>Name english</Alert.Heading>
                                  {props.name_english}
                                </p>
                                <hr />
                                <p className="mb-0">
                                <Alert.Heading>Name transliterated simple</Alert.Heading>
                                  {props.name_transliterated_simple}
                                </p>
                                <hr />
                                <p className="mb-0">
                                <Alert.Heading>Transliterated</Alert.Heading>
                                  {props.name_transliterated}
                                </p>
                            </Alert>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={(event) => onChapterClick(props.chapter_number)} variant="dark">Open verses</Button>{' '}
                    </Card.Footer>
                </Card>
            </Col>
        
      </>
    )
}

export default Chapter;
