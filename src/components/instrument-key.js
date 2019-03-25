import React, { Component } from 'react';
import Tone from 'tone';

export class InstrumentKey extends Component {

	constructor(...props) {
		super(...props);

		//create a synth and connect it to the master output (your speakers)
		let synth = new Tone.PolySynth(4, this.props.instrument).toMaster(); 
		this.state = {instrument: synth, pressed: false};	
	}

	componentWillReceiveProps(nextProps) {
		
		// TODO trigger attack release is not working properly after instrument change
		let synth = new Tone.PolySynth(4, nextProps.instrument).toMaster();
		this.setState({instrument: synth});
	}

	onKeyPress() {
		
		Tone.context.resume().then(() => {

			//play note for the duration of an 8th note
			this.state.instrument.triggerAttackRelease(this.props.note, "8n");
			this.props.onKeyPress(this.props.noteIndex, this.props.note);

			if(this.state.pressed) {
				this.setState({pressed: false});
			}
			else {
				this.setState({pressed: true});
			}
		});	
	}

	render() {

		//let noteLabel = this.props.note;
		let className = "btn btn-default width-100 height-100 border-note";
		if(this.state.pressed) {
			className += " key-pressed";
		}
		if(this.props.position === 4) {
			className += " separator-right";	
		}
		// removed {noteLabel}
		return (
			<div className="key">
				<div className={className} onClick={this.onKeyPress.bind(this)}>
				</div>
			</div>
		);
	}
}