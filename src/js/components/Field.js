import React from 'react';
import {
    Input,
} from 'react-materialize';

class Field extends React.Component {
    render() {
        return (
            <Input
                type={this.props.type}
                validate={this.props.validate}
                label={this.props.label}
                s={12}
                m={6}
                id={this.props.id}
                onChange={this.props.onChange}
            />
        );
    }
}

export default Field;
