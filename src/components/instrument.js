import React, { Component } from 'react';
import _ from 'underscore';
import Tone from 'tone';
import {InstrumentKey} from './instrument-key.js';

export class Instrument extends Component {
	
	constructor(props) {
		super(props);

		let synth;
		if(_.isNull(this.props.instrument)) {
			synth = Tone.Synth;
		} 
		else {
			synth = this.props.instrument;
		}

		this.state= {instrument: new Tone.PolySynth(4, synth)};
	}

	componentWillReceiveProps(nextProps) {
		
		this.setState({instrument: new Tone.PolySynth(4, nextProps.instrument)});	
	}

	render() {

		let notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'
					,'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5'
					,'C6', 'D6', 'E6', 'F6', 'G6', 'A6', 'B6'];

		let keys = _.map(notes, (note, idx) => {
			return (<InstrumentKey key={idx} instrument={this.state.instrument} note={note}/>);
		});	

		return (
			<div className="row content-wrapper">
				{keys}
			</div>
		);
	}
}	