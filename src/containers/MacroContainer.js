import React, { Component } from 'react';
import { connect } from 'react-redux';
import { myType } from '../actions';

class MacroContainer extends Component {
    render() {
        return (
            <div/>
        );
    }
}
// this uses the reducer name
const mapStateToProps = ({ macro } => { macro });

export default connect(mapStateToProps, { myType })(MacroContainer);
