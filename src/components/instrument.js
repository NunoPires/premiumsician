import React, { Component } from 'react';
import _ from 'underscore';
import {InstrumentKeyContainer} from './instrument-key-container.js';

export class Instrument extends Component {

	constructor() {
		super();
		
		let notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
		// TODO audio stops working if this value increases
		let maxCompass = 2;
		let compassTime = 4; // 4/4		
		this.state = {notes: notes, maxCompass: maxCompass, compassTime: compassTime};
	}

	render() {

		let keyIdx = 0;
		let noteTracks = _.map(this.state.notes, (note, idx) => {
			
			let keys = [];
			for (let i = 1; i <= this.state.maxCompass; i++) {
				for(let j = 1; j <= this.state.compassTime; j++) {
					keys.push(<InstrumentKeyContainer key={keyIdx} noteIndex={idx} track={this.props.trackIndex} instrument={this.props.instrument} note={note} compass={i} position={j}/>);
					keyIdx++;
				}
			}

			return <InstrumentHelper key={idx} note={note} keys={keys} />
		});

		return (
			<div className="content-wrapper">
				{noteTracks}
			</div>
		);
	}
}	

export class InstrumentHelper extends Component {

	render() {
		return (
			<div className="row height-track">
				<div className="col padding-0375">{this.props.note}</div>
				<div className="col-11 row">{this.props.keys}</div>
			</div>
		);
	}
}