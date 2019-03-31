import React, { Component } from 'react';
import _ from 'underscore';
import {InstrumentKeyContainer} from './instrument-key-container.js';

export class Instrument extends Component {

	constructor() {
		super();
		
		// TODO audio stops working if this value increases
		let maxCompass = 4;
		let compassTime = 4; // 4/4		
		this.state = {maxCompass: maxCompass, compassTime: compassTime};
	}

	render() {

		let notes = [];
		if(this.props.magenta) {
			notes = [60, 62, 64, 65, 67, 69, 71, 72];
		}
		else {
			notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
		}

		let keyIdx = 0;
		let noteTracks = _.map(notes, (note, idx) => {
			
			let keys = [];
			for (let i = 1; i <= this.state.maxCompass; i++) {
				for(let j = 1; j <= this.state.compassTime; j++) {
					keys.push(<InstrumentKeyContainer key={keyIdx} magenta={this.props.magenta} player={this.props.player} noteIndex={idx} track={this.props.trackIndex} instrument={this.props.instrument} note={note} compass={i} position={j}/>);
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