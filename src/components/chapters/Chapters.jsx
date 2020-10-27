import React from 'react';
import chapters_dummy from '../../dummy/chapters';
import Chapter from '../chapters/Chapter';
import { Row } from 'react-bootstrap';

const Chapters = () => {
    const [chapters, setChapters] = React.useState(chapters_dummy);

    React.useEffect(()=>{
        setChapters(chapters_dummy)
    },[])

    return (
        <Row style={{padding:'20px',marginRight:'0',marginLeft:'0'}}>
          {
             chapters.chapters.map((item)=>{
                  return <Chapter {...item}/>
              })
          }
        </Row>
    )
};

export default Chapters;
