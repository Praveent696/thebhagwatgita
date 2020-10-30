import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertDiv = (props) => {
    return (
        <>
            <Alert variant="dark">
                {
                  props.paragraphs.map(p => {
                    return (
                    <>
                        <p key={`${p.header}_${p.body}`} className="mb-0">
                            <Alert.Heading>{p.header}</Alert.Heading>
                            {p.body}
                        </p>
                        <hr />
                    </>
                    )
                  })
                }
            </Alert>
        </>
    )
};

export default AlertDiv;
