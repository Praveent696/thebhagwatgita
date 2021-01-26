import React from 'react';
import { Card , Col, Button } from 'react-bootstrap';
import useNavigation from '../../hooks/useNavigation';
import AlertDiv from '../common/AlertDiv';

const Chapter = (props) => {

    let { goTo } = useNavigation();
    const onChapterClick = (chapter_number) => {
        props.onClickChapter(chapter_number,props.verses_count)
        let url=`/chapter/${chapter_number}/verses`;
        goTo(url);
    }

    const alertDivProps = {
        paragraphs : [
            {
                header: 'Meaning English',
                body : props.meaning.en
            },
            {
                header: 'Meaning Hindi',
                body : props.meaning.hi
            },
            {
                header: 'Translation',
                body : props.translation
            }
        ]
    }

    return (
      <>
        <Col md={4} style={{marginTop:'20px',marginBottom:'20px'}} title={`${props.summary.en} (${props.summary.hi})`}>
            <Card key={`chapter_${props.chapter_number}`} style={{backgroundColor: props.is_favorate ?'#ff0023':'#ccc',textAlign:'center'}}>
                <Card.Body>
                    <Card.Title className="custom-card-title">{props.name} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Chapter {props.chapter_number}, Total verses count {props.verses_count}</Card.Subtitle>
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
