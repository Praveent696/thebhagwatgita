import React from 'react';
import verses_dummy from '../../dummy/verses';
import Verse from '../verses/Verse';
import { Row } from 'react-bootstrap';
import useQuery from '../../hooks/useQuery';


const Verses = () => {
    let query = useQuery();
    const [verses, setVerses] = React.useState(verses_dummy);
    const [verseNumber ,  ] = React.useState(query.get('verse_number'))
    const [chapterNumber ,  ] = React.useState(query.get('chapter_number'))
    
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(()=>{
        let filter_verses = verses_dummy.verses;
        if(chapterNumber)
        {
            // eslint-disable-next-line eqeqeq
            filter_verses = filter_verses.filter(x=>x.chapter_number==chapterNumber);
        }
        if(verseNumber)
        {
            // eslint-disable-next-line eqeqeq
            filter_verses = filter_verses.filter(x=>x.verse_number==verseNumber)
        }
        setVerses({verses:filter_verses})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    

    

    return (
        <Row style={{padding:'20px',marginRight:'0',marginLeft:'0'}}>
          {
             verses && verses.verses.map((item)=>{
                  return <Verse item_count={verses.verses.length} {...item}/>
              })
          }
        </Row>
    )
};

export default Verses;

