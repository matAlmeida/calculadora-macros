import React from 'react';
import { render } from 'react-dom';
import { 
    Row,
    Col,
    Button,
} from 'react-materialize';

import Panel from './components/Panel';
import UserForm from './Containers/UserForm';
import MacroForm from './Containers/MacroForm';
import Form from './Containers/Form';

const app = document.getElementById('app');
render(
    <div>
        <Form />

        <Row>
            <Col offset="s0 m1" s={12} m={10}>
                <Panel color='amber darken-2' label="Carboidrato">000g</Panel>
                <Panel color='red darken-2' label="Proteina">000g</Panel>
                <Panel color='grey' label="Gordura">000g</Panel>
                <Panel color='brown lighten-1' label="Fibra">000g</Panel>
                <Panel color='green darken-2' label="Caloria total diaria">000g</Panel>
                <Panel color='green darken-2' label="Caloria total semanal">000g</Panel>
            </Col>
        </Row>
    </div>,
app);
