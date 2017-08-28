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

const app = document.getElementById('app');
render(
    <div>
        <Row>
            <UserForm id="userForm" title="Suas Informações" />
        </Row>
        <Row>
            <MacroForm id="macroForm" title="Macro Nutrientes" />
        </Row>
        <Row>
            <Col offset="s3 m5">
                <Button large waves='light' node='a'> Calcular Macros </Button>
            </Col>
        </Row>

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
