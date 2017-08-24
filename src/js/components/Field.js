import React from 'react';

class Field extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}: </label>
                <input id={this.props.id} type={this.props.type}/>
            </div>
        );
    }
}

export default Field;