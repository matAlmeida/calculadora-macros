import React from 'react';
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Button,
    Footer,
    Navbar,
    NavItem,
} from 'react-materialize';

import Panel from './components/Panel';
import UserForm from './containers/UserContainer';
import MacroForm from './containers/MacroContainer';
import Calculator from './helpers/Calculator';

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
    }

    render() {
        return (
            <div>
                <Row>
                <Navbar className="teal" brand='Macro Nutrientes' right>
                    <NavItem href='https://coisasdeatleta.com/livros/'>Comprar o livro</NavItem>
                    <NavItem href='https://github.com/matAlmeida/calculadora-macros'>Ajude a desenvolver</NavItem>
                </Navbar>
                </Row>
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
                            {this.state.carbo.toFixed(2)} g
                        </Panel>
                        <Panel
                            color='red darken-2'
                            label="Proteina"
                        >
                            {this.state.protein.toFixed(2)} g
                        </Panel>
                        <Panel
                            color='grey'
                            label="Gordura"
                        >
                            {this.state.fat.toFixed(2)} g
                        </Panel>
                        <Panel
                            color='brown lighten-1'
                            label="Fibra"
                        >
                            {this.state.fiber.toFixed(2)} g
                        </Panel>
                        <Panel
                            color='green darken-2'
                            label="Caloria total diaria"
                        >
                            {this.state.dailyCal.toFixed(2)} kcal
                        </Panel>
                    </Col>
                </Row>
                <Row>
                <Footer
                    copyrights="Copyright (c) 2017 Matheus Almeida"
                    moreLinks={
                        <a className="grey-text text-lighten-4 right" href="https://github.com/matAlmeida/calculadora-macros">Ajude a desenvolver</a>
                    }
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://twitter.com/mat_almeida"><b>Meu Twitter</b></a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/matAlmeida"><b>Meu GitHub</b></a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/caio.bottura"><b>Caio Bottura</b></a></li>
                            <li><a className="grey-text text-lighten-3" href="https://coisasdeatleta.com/livros/"><b>Livro Dieta Flexível</b></a></li>
                        </ul>
                    }
                    className='teal'
                >
                        <h5 className="white-text">Sobre a calculadora</h5>
                        <p className="grey-text text-lighten-4">
                            Este projeto é uma calculadora Macro Nutrients e usa os ensinamentos do livro do Caio Bottura, Dieta Flexível & Nutrição.
                        </p>
                </Footer>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = ({ field }) => ({ field });

export default connect(mapStateToProps)(App);
