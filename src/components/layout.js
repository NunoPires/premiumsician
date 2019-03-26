import React, { Component } from 'react';
import {InstrumentSelectorContainer} from './instrument-select-container.js';
import {InstrumentContainer} from './instrument-container.js';	

export class MainLayout extends Component
{
	render() {

		let tracks = this.props.tracks.map((track, index) => {
			return (
				<div key={index}>
					<div className="row">
						<div className="col-md-4">
							<InstrumentSelectorContainer trackIndex={index} />
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<InstrumentContainer trackIndex={index} />	
						</div>
					</div>	
				</div>
			);
		});

		return (
			<div className="container-fluid">
				<div className="btn btn-default add-track-btn" onClick={this.props.onInsertTrack.bind(this)}>Add Track</div>
				{tracks}	
			</div>
		);
	}
}