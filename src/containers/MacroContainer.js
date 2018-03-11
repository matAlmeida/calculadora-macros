import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	CardPanel,
	Col,
	Row,
} from 'react-materialize';
import { Field } from '../components';

import {
	ID_FIELD_GRAMS_PER_KG_FAT,
	ID_FIELD_GRAMS_PER_KG_PROTEIN,
	ID_FIELD_CALORIC_DEFICT,
	ID_FIELD_EXERCISE_TIME,
} from '../constants';

import { getFieldValue } from '../actions';

class MacroContainer extends Component {
	render() {
		return (
				<Col offset="s0 m1" s={12} m={10}>
					<CardPanel>
						<form id={this.props.id}>
							<h3>{this.props.title}</h3>
							<Row>
								<Col s={12}>
									<Field
										id={ID_FIELD_GRAMS_PER_KG_FAT}
										label="Gordura (g/Kg)"
										type="number"
										onChange={this.props.getFieldValue.bind(this)}
										value={this.props.field[ID_FIELD_GRAMS_PER_KG_FAT]}
									/>
									<Field
										id={ID_FIELD_GRAMS_PER_KG_PROTEIN}
										label="Proteina (g/Kg)"
										type="number"
										onChange={this.props.getFieldValue.bind(this)}
										value={this.props.field[ID_FIELD_GRAMS_PER_KG_PROTEIN]}
									/>
									<Field
										id={ID_FIELD_CALORIC_DEFICT}
										label="Calorias de manutenção (kcal)"
										placeholder="*Com base no tipo de cálculo escolhido acima"
										type="number"
										onChange={this.props.getFieldValue.bind(this)}
										value={this.props.field[ID_FIELD_CALORIC_DEFICT]}
									/>
									<Field
										id={ID_FIELD_EXERCISE_TIME}
										label="Exercicio diario (min)"
										type="number"
										onChange={this.props.getFieldValue.bind(this)}
										value={this.props.field[ID_FIELD_EXERCISE_TIME]}
									/>
								</Col>
							</Row>
						</form>
				</CardPanel>
			</Col>
		);
	}
}
// this uses the reducer name
const mapStateToProps = ({ field }) => ({ field });

export default connect(mapStateToProps, { getFieldValue })(MacroContainer);
