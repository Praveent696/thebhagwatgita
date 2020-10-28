import React from 'react';
import { Card , Col , Badge } from 'react-bootstrap';
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
                <Card key={`chapter_${props.chapter_number}`} style={{backgroundColor:'#f2d0e5',textAlign:'center'}} onClick={(event) => onChapterClick(props.chapter_number)}>
                    <Card.Body>
                        <Card.Title>{props.name}<Badge style={{float:'right'}} variant="info">Total Verses {props.verses_count}</Badge> </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.name_transliterated}</Card.Subtitle>
                        <Card.Text>
                            <p>{props.name_english}</p>
                            <span>{props.name_transliterated_simple}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        
      </>
    )
}

export default Chapter;
