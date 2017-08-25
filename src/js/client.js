import React from 'react';
import { render } from 'react-dom';
import { 
    Row,
    Col,
    CardPanel,
    Button,
} from 'react-materialize';

import Field from './components/Field';
import Select from './components/Select';
import Panel from './components/Panel';

const app = document.getElementById('app');
render(
    <div>
        <Row>
            <Col offset="s0 m1" s={12} m={10}>
                <CardPanel>
                    <h1>Suas informações</h1>
                    <Field id="fieldName" label="Nome" type="text" />
                    <Select id="selectSexo" label="Sexo">
                        {[
                            {
                                key: 'op1',
                                optionLabel: 'Homem'
                            },
                            {
                                key: 'op2',
                                optionLabel: 'Mulher'
                            },
                        ]}
                    </Select>
                    <Select id="selectCalcType" label="Tipo de cálculo">
                        {[
                            {
                                key: 'op1',
                                optionLabel: 'Com % de gordura'
                            },
                            {
                                key: 'op2',
                                optionLabel: 'Sem % de gordura'
                            },
                        ]}
                    </Select>
                    <Field id="fieldAge" label="Idade" type="text" validate />
                    <Field id="fieldWeight" label="Peso" type="text" validate />
                    <Field id="fieldHeight" label="Altura (cm)" type="text" validate />
                    <Field id="fieldFat" label="% de Gordura" type="text" validate />

                    <Field id="fieldGKgFat" label="Gordura (g/Kg)" type="text" validate />
                    <Field id="fieldGKgProtain" label="Proteina (g/Kg)" type="text" validate />
                    <Field id="fieldCaloricDefict" label="Defict Calorico (kcal)" type="text" validate />
                    <Field id="fieldExcerciseTime" label="Exercicio diario (min)" type="text" validate />
                    <br />
                    <br />
                    <br />
                    <span style={{ color: '#fff' }}>...............................</span>
                    <Button large waves='light' node='a'> Calcular Macros </Button>
                </CardPanel>
            </Col>
        </Row>

        <Row>
            <Col offset="s0 m1" s={12} m={10}>
                <Panel label="Carboidrato">000g</Panel>
                <Panel label="Proteina">000g</Panel>
                <Panel label="Gordura">000g</Panel>
                <Panel label="Fibra">000g</Panel>
                <Panel label="Caloria total diaria">000g</Panel>
                <Panel label="Caloria total semanal">000g</Panel>
            </Col>
        </Row>
    </div>,
app);
