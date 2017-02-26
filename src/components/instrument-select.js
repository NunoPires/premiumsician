import React, { Component } from 'react';
import Select from 'react-select';
import Tone from 'tone';
import 'react-select/dist/react-select.css';

export class InstrumentSelector extends Component
{
	constructor(...args) {
		super();
		this.state = {value: null};
	}

	onSelect(value) {
		this.setState({'value': value});
		this.props.onChange(value);	
	}

	render() {

		let options = [
		    { value: Tone.MembraneSynth, label: 'Piano' },
		    { value: Tone.MonoSynth, label: 'Guitar' },
		    { value: Tone.PluckSynth, label: 'Drums' }
		];

		let placeholder = 'Select an option';
		return (
			<div className="content-wrapper">
				<Select options={options} value={this.state.value} onChange={this.onSelect.bind(this)} placeHolder={placeholder} clearable={false} />
			</div>
		);
	}
}