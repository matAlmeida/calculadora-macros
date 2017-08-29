import React from 'react';
import {
    CardPanel,
    Col,
    Row,
} from 'react-materialize';
import { Field } from '../components';

class MacroForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            fieldGperKgFat: 0,
            fieldGperKgProtain: 0,
            fieldCaloricDefict: 0,
            fieldExcerciseTime: 0,
        };
    }

    componentDidMount() {
        this.setState({ id: this.props.id });
    }

    fieldListener({ target }) {
        const { id, value } = target;

        switch (id) {
            case 'fieldGperKgFat':
                this.setState({ fieldGperKgFat: value });
                this.props.onChange({ ...this.state, fieldGperKgFat: value });
                break;
            case 'fieldGperKgProtain':
                this.setState({ fieldGperKgProtain: value });
                this.props.onChange({ ...this.state, fieldGperKgProtain: value });
                break;
            case 'fieldCaloricDefict':
                this.setState({ fieldCaloricDefict: value });
                this.props.onChange({ ...this.state, fieldCaloricDefict: value });
                break;
            case 'fieldExcerciseTime':
                this.setState({ fieldExcerciseTime: value });
                this.props.onChange({ ...this.state, fieldExcerciseTime: value });
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
                                    id="fieldGperKgFat"
                                    label="Gordura (g/Kg)"
                                    type="number"
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.fieldGperKgFat}
                                />
                                <Field
                                    id="fieldGperKgProtain"
                                    label="Proteina (g/Kg)"
                                    type="number"
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.fieldGperKgProtain}
                                />
                                <Field
                                    id="fieldCaloricDefict"
                                    label="Defict Calorico (kcal)"
                                    type="number"
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.fieldCaloricDefict}
                                />
                                <Field
                                    id="fieldExcerciseTime"
                                    label="Exercicio diario (min)"
                                    type="number"
                                    onChange={this.fieldListener.bind(this)}
                                    value={this.state.fieldExcerciseTime}
                                />
                            </Col>
                        </Row>
                    </form>
                </CardPanel>
            </Col>
        );
    }
}

export default MacroForm;
