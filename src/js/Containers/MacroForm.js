import React from 'react';
import {
    CardPanel,
    Col,
    Row,
} from 'react-materialize';
import { Field } from '../components';

class MacroForm extends React.Component {
    render() {
        return (
            <Col offset="s0 m1" s={12} m={10}>
                <CardPanel>
                    <form id={this.props.id}>
                        <h3>{this.props.title}</h3>
                        <Row>
                            <Col s={12}>
                                <Field id="fieldGperKgFat" label="Gordura (g/Kg)" type="text" validate />
                                <Field id="fieldGperKgProtain" label="Proteina (g/Kg)" type="text" validate />
                                <Field id="fieldCaloricDefict" label="Defict Calorico (kcal)" type="text" validate />
                                <Field id="fieldExcerciseTime" label="Exercicio diario (min)" type="text" validate />
                            </Col>
                        </Row>
                    </form>
                </CardPanel>
            </Col>
        );
    }
}

export default MacroForm;
