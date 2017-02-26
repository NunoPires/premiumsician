import React, { Component } from 'react';
import {InstrumentSelector} from './instrument-select.js';
import {Instrument} from './instrument.js';	

export class MainLayout extends Component
{
	constructor() {
		super();
		
		this.state = {instrument: null};
	}

	onInstrumentChange(input) {
		this.setState({instrument: input.value});
	}

	render() {

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<InstrumentSelector onChange={this.onInstrumentChange.bind(this)} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Instrument instrument={this.state.instrument} />	
					</div>
				</div>
			</div>
		);
	}
}