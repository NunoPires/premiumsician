import React, { Component } from 'react';
import Tone from 'tone';

export class InstrumentKey extends Component {

	constructor(...props) {
		super(...props);
		this.state = {pressed: false};	
	}

	onKeyPress() {
		
		if(this.props.magenta) {
			let sequence = {notes: [{pitch: this.props.note, startTime: 0.0, endTime: 1.0, program: this.props.instrument}], totalTime: 1.0};
			this.props.player.start(sequence);
		}
		else {
			Tone.context.resume().then(() => {
				//play note for the duration of an 8th note
				this.props.player.triggerAttackRelease(this.props.note, "8n");
			});
		}
		/**/

		this.props.onKeyPress(this.props.noteIndex, this.props.note);
		this.setState({pressed: !this.state.pressed});
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