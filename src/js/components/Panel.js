import React from 'react';
import {
    Col,
    Card
} from 'react-materialize';

const Panel = ({ label, children }) => {
    return (
        <Col m={4} s={12}>
            <Card className='red darken-2' textClassName='white-text' title={label} m={4} s={12}>
                {children}
            </Card>
        </Col>
    );
};

export default Panel;
