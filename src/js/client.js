import React from 'react';
import { render } from 'react-dom';
import Field from './components/Field';
import Select from './components/Select';
import Button from './components/Button';
import Card from './components/Card';

const app = document.getElementById('app');
render(
    <div>
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
        <Field id="fieldAge" label="Idade" type="text" />
        <Field id="fieldWeight" label="Peso" type="text" />
        <Field id="fieldHeight" label="Altura (cm)" type="text" />
        <Field id="fieldFat" label="% de Gordura" type="text" />

        <Field id="fieldGKgFat" label="Gordura (g/Kg)" type="text" />
        <Field id="fieldGKgProtain" label="Proteina (g/Kg)" type="text" />
        <Field id="fieldCaloricDefict" label="Defict Calorico (kcal)" type="text" />
        <Field id="fieldExcerciseTime" label="Exercicio diario (min)" type="text" />
        <Button id="buttonCalc">Calcular macros</Button>

        <Card label="Carboidrato">000g</Card>
        <Card label="Proteina">000g</Card>
        <Card label="Gordura">000g</Card>
        <Card label="Fibra">000g</Card>
        <Card label="Caloria total diaria">000g</Card>
        <Card label="Caloria total semanal">000g</Card>
    </div>,
app);