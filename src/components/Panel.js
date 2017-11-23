import React from 'react';
import {
    Col,
    Card
} from 'react-materialize';

const Panel = ({ label, children, color }) => {
    return (
        <Col m={4} s={12}>
            <Card className={color} textClassName='white-text' title={label}>
                {children}
            </Card>
        </Col>
    );
};

export default Panel;
