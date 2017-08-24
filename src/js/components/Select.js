// Example:
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

class Select extends React.Component {
    getOptions() {
        const options = [];

        this.props.children.forEach(function(option) {
            options.push(
                <option key={option.key}>
                    {option.optionLabel}
                </option>
            );
        }, this);

        return options;
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>
                    {this.props.label}: </label>
                <select name={this.props.id} id={this.props.id}>
                    {this.getOptions()}
                </select>
            </div>
        );
    }
}

export default Select;