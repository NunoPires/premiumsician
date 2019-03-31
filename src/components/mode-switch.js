import React, { Component } from 'react';
import Switch from "react-switch";

export class ModeSwitch extends Component {
	
	onChange() {
		this.props.onChange(!this.props.magenta);
	}

	render() {
		return(
			<label>
				<Switch onChange={this.onChange.bind(this)} checked={this.props.magenta} />
				<span>Activate Real Music</span>
			</label>
		);
	}
}