import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    CardPanel,
    Col,
    Row,
} from 'react-materialize';
import {
    Field,
    Select,
} from '../components';

import {
	ID_FIELD_NAME,
	ID_SELECT_SEX,
	ID_SELECT_CALC,
	ID_FIELD_AGE,
	ID_FIELD_WEIGHT,
	ID_FIELD_HEIGHT,
} from '../constants';

import { getFieldValue } from '../actions';

class UserContainer extends Component {
	render() {
		return (
			<Col offset="s0 m1" s={12} m={10}>
				<CardPanel>
					<form id={this.props.id}>
						<h3>{this.props.title}</h3>
						<Row>
							<Col s={12}>
								<Field
									id={ID_FIELD_NAME}
									label="Nome"
									type="text"
									onChange={this.props.getFieldValue.bind(this)}
									value={this.props.field[ID_FIELD_NAME]}
								/>
								<Select
									id={ID_SELECT_SEX}
									label="Sexo"
									onChange={this.props.getFieldValue.bind(this)}
									value={this.props.field[ID_SELECT_SEX]}
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
									id={ID_SELECT_CALC}
									label="Tipo de cálculo"
									onChange={this.props.getFieldValue.bind(this)}
									value={this.props.field[ID_SELECT_CALC]}
								>
									{[
											{
													key: true,
													optionLabel: 'Ganho de massa'
											},
											{
													key: false,
													optionLabel: 'Perda de peso'
											},
									]}
								</Select>
								<Field
									id={ID_FIELD_AGE}
									label="Idade"
									type="number"
									onChange={this.props.getFieldValue.bind(this)}
									value={this.props.field[ID_FIELD_AGE]}
								/>
								<Field
									id={ID_FIELD_WEIGHT}
									label="Peso (Kg)"
									type="number"
									onChange={this.props.getFieldValue.bind(this)}
									value={this.props.field[ID_FIELD_WEIGHT]}
								/>
								<Field
									id={ID_FIELD_HEIGHT}
									label="Altura (cm)"
									type="number"
									onChange={this.props.getFieldValue.bind(this)}
									value={this.props.field[ID_FIELD_HEIGHT]}
								/>
							</Col>
						</Row>
					</form>
				</CardPanel>
			</Col>
		);
	}
}

const mapStateToProps = ({ field }) => ({ field });

export default connect(mapStateToProps, { getFieldValue })(UserContainer);
