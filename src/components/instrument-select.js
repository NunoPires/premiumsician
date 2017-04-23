import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
	
export class InstrumentSelector extends Component
{
	onSelect(instrument) {
		this.props.onSelect(instrument);
	}

	render() {
		
		let options = [
		    { value: 'piano', label: 'Piano' },
		    { value: 'guitar', label: 'Guitar' },
		    { value: 'drums', label: 'Drums' }
		];

		let placeholder = 'Select an option';
		return (
			<div className="content-wrapper">
				<Select options={options} value={this.props.instrument} onChange={this.onSelect.bind(this)} placeHolder={placeholder} clearable={false} />
			</div>
		);
	}
}