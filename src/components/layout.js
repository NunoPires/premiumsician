import React, { Component } from 'react';
import {InstrumentSelectorContainer} from './instrument-select-container.js';
import {InstrumentContainer} from './instrument-container.js';	
import {ModeSwitchContainer} from './mode-switch-container.js';

export class MainLayout extends Component
{
	render() {

		let magenta = this.props.magenta;
		let tracks = this.props.tracks.map((track, index) => {
			return (
				<div key={index}>
					{ magenta &&
						<div className="row">
							<div className="col-md-4">
								<InstrumentSelectorContainer trackIndex={index} />
							</div>
						</div>
					}
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
				<div className="mode-switch">
					<ModeSwitchContainer />
				</div>
				<div className="btn btn-default add-track-btn" onClick={this.props.onInsertTrack.bind(this)}>Add Track</div>
				{tracks}	
			</div>
		);
	}
}