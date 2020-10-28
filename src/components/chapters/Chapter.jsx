import React from 'react';
import { Card , Col, Button } from 'react-bootstrap';
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
                <Card key={`chapter_${props.chapter_number}`} style={{backgroundColor:'#f2d0e5',textAlign:'center'}}>
                    <Card.Body>
                        <Card.Title className="custom-card-title">{props.name} </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.name_transliterated}</Card.Subtitle>
                        <Card.Text>
                            <p>{props.name_english}</p>
                            <span>{props.name_transliterated_simple}</span>
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
