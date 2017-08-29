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
    constructor(props) {
        super(props);

        this.state = {
            fieldName: '',
            selectSex: 'Homem',
            selectCalcType: 'Com % de gordura corporal',
            fieldAge: '',
            fieldWeight: '',
            fieldHeight: '',
            fieldCorporalFat: '',
        };
    }

    fieldListener({ target }) {
        const { id, value } = target;
        
        switch (id) {
            case 'fieldName':
                this.setState({ fieldName: value });
                break;
            case 'selectSex':
                this.setState({ selectSex: value });
                break;
            case 'selectCalcType':
                this.setState({ selectCalcType: value });
                break;
            case 'fieldAge':
                this.setState({ fieldAge: value });
                break;
            case 'fieldWeight':
                this.setState({ fieldWeight: value });
                break;
            case 'fieldHeight':
                this.setState({ fieldHeight: value });
                break;
            case 'fieldCorporalFat':
                this.setState({ fieldCorporalFat: value });
                break;
            default:
                break;
        }
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
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.fieldName}
                                />
                                <Select
                                    id="selectSex"
                                    label="Sexo"
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.selectSex}
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
                                    id="selectCalcType"
                                    label="Tipo de cálculo"
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.selectCalcType}
                                >
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
                                <Field
                                    id="fieldAge"
                                    label="Idade"
                                    type="text"
                                    validate
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.fieldAge}
                                />
                                <Field
                                    id="fieldWeight"
                                    label="Peso (Kg)"
                                    type="text"
                                    validate
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.fieldWeight}
                                />
                                <Field
                                    id="fieldHeight"
                                    label="Altura (cm)"
                                    type="text"
                                    validate
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.fieldHeight}
                                />
                                <Field
                                    id="fieldCorporalFat"
                                    label="% de Gordura Corporal"
                                    type="text"
                                    validate
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.fieldCorporalFat}
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
