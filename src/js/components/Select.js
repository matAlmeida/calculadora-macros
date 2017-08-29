// Data example:
// <Select id="test" label="teste">
//     {[
//         {
//             key: 'op1',
//             optionLabel: 'teste1'
//         },
//         {
//             key: 'op2',
//             optionLabel: 'teste2'
//         },
//     ]}
// </Select>

import React from 'react';
import {
    Input,
} from 'react-materialize';

class Select extends React.Component {
    getOptions() {
        const options = [];

        this.props.children.forEach(option => {
            options.push(
                <option value={option.key} key={option.key}>
                    {option.optionLabel}
                </option>
            );
        }, this);

        return options;
    }

    render() {
        return (
            <Input
                type='select'
                label={this.props.label}
                s={12}
                m={6}
                id={this.props.id}
                onChange={this.props.onChange}
            >
                {this.getOptions()}
            </Input>
        );
    }
}

export default Select;
