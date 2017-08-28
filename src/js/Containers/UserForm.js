import React from 'react';
import {
    CardPanel,
    Col,
    Row,
} from 'react-materialize';
import {
    Field,
    Select,
} from '../components';

class UserForm extends React.Component {
    render() {
        return (
            <Col offset="s0 m1" s={12} m={10}>
                <CardPanel>
                    <form id={this.props.id}>
                        <h3>{this.props.title}</h3>
                        <Row>
                            <Col s={12}>
                                <Field id="fieldName" label="Nome" type="text" />
                                <Select id="selectSex" label="Sexo" >
                                    {[
                                        {
                                            key: 'man',
                                            optionLabel: 'Homem'
                                        },
                                        {
                                            key: 'woman',
                                            optionLabel: 'Mulher'
                                        },
                                    ]}
                                </Select>
                                <Select id="selectCalcType" label="Tipo de cálculo" >
                                    {[
                                        {
                                            key: 'withCorporalFat',
                                            optionLabel: 'Com % de gordura corporal'
                                        },
                                        {
                                            key: 'withoutCorporalFat',
                                            optionLabel: 'Sem % de gordura corporal'
                                        },
                                    ]}
                                </Select>
                                <Field id="fieldAge" label="Idade" type="text" validate />
                                <Field id="fieldWeight" label="Peso (Kg)" type="text" validate />
                                <Field id="fieldHeight" label="Altura (cm)" type="text" validate />
                                <Field id="fieldCorporalFat" label="% de Gordura Corporal" type="text" validate />
                            </Col>
                        </Row>
                    </form>
                </CardPanel>
            </Col>
        );
    }
}

export default UserForm;
