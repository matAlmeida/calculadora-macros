import React from 'react';
import { 
    Row,
    Col,
    Button,
} from 'react-materialize';

import Panel from './components/Panel';
import UserForm from './Containers/UserForm';
import MacroForm from './Containers/MacroForm';
import Calculator from './Helpers/Calculator';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userForm: {},
            macroForm: {},
            carbo: 0,
            protein: 0,
            fat: 0,
            fiber: 0,
            dailyCal: 0,
        };

        this.calculator = new Calculator(this.state.userForm, this.state.macroForm);
    }

    formListener(form) {
        switch (form.id) {
            case 'userForm':
                this.setState({ userForm: form });
                break;
            case 'macroForm':
                this.setState({ macroForm: form });
                break;
            default:
                break;
        }
    }

    formSubmit() {
        this.calculator.updateForms(this.state.userForm, this.state.macroForm);
        const newMacros = this.calculator.calculate();
        this.setState({ ...newMacros });
        console.log(newMacros);
    }

    render() {
        return (
            <div>
                <Row>
                    <UserForm
                        id="userForm"
                        title="Suas Informações"
                        onChange={this.formListener.bind(this)}
                    />
                </Row>
                <Row>
                    <MacroForm
                        id="macroForm"
                        title="Macro Nutrientes"
                        onChange={this.formListener.bind(this)}
                    />
                </Row>
                
                <Row>
                    <Col offset="s3 m5">
                        <Button
                            large waves='light'
                            node='a'
                            onClick={this.formSubmit.bind(this)}
                        >
                            Calcular Macros
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col offset="s0 m1" s={12} m={10}>
                        <Panel
                            color='amber darken-2'
                            label="Carboidrato"
                        >
                            {this.state.carbo} g
                        </Panel>
                        <Panel
                            color='red darken-2'
                            label="Proteina"
                        >
                            {this.state.protein} g
                        </Panel>
                        <Panel
                            color='grey'
                            label="Gordura"
                        >
                            {this.state.fat} g
                        </Panel>
                        <Panel
                            color='brown lighten-1'
                            label="Fibra"
                        >
                            {this.state.fiber} g
                        </Panel>
                        <Panel
                            color='green darken-2'
                            label="Caloria total diaria"
                        >
                            {this.state.dailyCal} kcal
                        </Panel>
                        <Panel
                            color='green darken-2'
                            label="Caloria total semanal"
                        >
                            {this.state.dailyCal * 7} kcal
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
