import React from 'react';
import { 
    Row,
    Col,
    Button,
} from 'react-materialize';

import UserForm from './UserForm';
import MacroForm from './MacroForm';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userForm: {},
            macroForm: {},
        };
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
                            onClick={() => console.log(this.state)}
                        >
                            Calcular Macros
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Form;
