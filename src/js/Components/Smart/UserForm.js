import React from 'react';
import { connect } from 'react-redux';
import {
    CardPanel,
    Col,
    Row,
} from 'react-materialize';

import * as User from '../../actions/userActions';

import {
    Field,
    Select,
} from '../Dumb';

@connect((store) => {
    return {
        user: store.user,
    };
})
class UserForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(User.changeId(this.props.id));
    }

    render() {
        return (
            <Col offset="s0 m1" s={12} m={10}>
                <CardPanel>
                    <form id={this.props.id}>
                        <h3>{this.props.title}</h3>
                        <Row>
                            <Col s={12}>
                                <Field
                                    id="fieldName"
                                    label="Nome"
                                    type="text"
                                    onChange={this.User.changeName.bind(this)}
                                    value={this.state.user.name}
                                />
                                <Select
                                    id="selectSex"
                                    label="Sexo"
                                    onChange={this.User.changeSex.bind(this)}
                                    value={this.state.user.sex}
                                >
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
                                <Select
                                    id="selectCalc"
                                    label="Tipo de cálculo"
                                    onChange={this.User.changeGain.bind(this)}
                                    value={this.state.user.calc.gain}
                                >
                                    {[
                                        {
                                            key: true,
                                            optionLabel: 'Ganho de massa'
                                        },
                                        {
                                            key: false,
                                            optionLabel: 'Perda de peso'
                                        },
                                    ]}
                                </Select>
                                <Field
                                    id="fieldAge"
                                    label="Idade"
                                    type="number"
                                    onChange={this.User.changeAge.bind(this)}
                                    value={this.state.user.age}
                                />
                                <Field
                                    id="fieldWeight"
                                    label="Peso (Kg)"
                                    type="number"
                                    onChange={this.User.changeWeight.bind(this)}
                                    value={this.state.user.weight}
                                />
                                <Field
                                    id="fieldHeight"
                                    label="Altura (cm)"
                                    type="number"
                                    onChange={this.User.changeHeight.bind(this)}
                                    value={this.state.user.height}
                                />
                            </Col>
                        </Row>
                    </form>
                </CardPanel>
            </Col>
        );
    }
}

export default UserForm;
