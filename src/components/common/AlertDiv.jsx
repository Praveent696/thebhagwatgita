import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertDiv = (props) => {
    return (
        <>
            <Alert variant="dark">
                {
                  props.paragraphs.map((p , i) => {
                    return (<div key={i}>
                                <Alert.Heading key={`alert_heading_${i}`}>{p.header}</Alert.Heading>
                                {p.body}
                            <hr key={`hr_${i}`} /> 
                        </div>
                    )
                  })
                }
            </Alert>
        </>
    )
};

export default AlertDiv;
