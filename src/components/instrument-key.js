import React, { Component } from 'react';

export class InstrumentKey extends Component {

	constructor(...props) {
		super(...props);

		//create a synth and connect it to the master output (your speakers)
		let synth = this.props.instrument.toMaster();
		this.state = {instrument: synth}	
	}

	componentWillReceiveProps(nextProps) {
		
		this.setState({instrument: nextProps.instrument.toMaster()});
	}

	onKeyPress() {
		
		//play note for the duration of an 8th note
		this.state.instrument.triggerAttackRelease(this.props.note, "8n");	
	}

	render() {

		let noteLabel = this.props.note;
		return (
			<div className="key">
				<div className="btn btn-default width-100 height-100" onClick={this.onKeyPress.bind(this)}>
					{noteLabel}
				</div>
			</div>
		);
	}
}