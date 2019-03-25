import Tone from 'tone';
import {connect} from 'react-redux';
import {Instrument} from './instrument.js';

const Instruments = {
	'piano': Tone.MembraneSynth,
	'guitar': Tone.Synth
	// TODO can't make other synths to work
}

const mapStateToProps = (state, selfProps) => {	
	
	return {
		trackIndex: selfProps.trackIndex,
		instrument: Instruments[state.tracks[selfProps.trackIndex].instrument]
	};
};

const InstrumentContainer = connect(mapStateToProps)(Instrument);

export {InstrumentContainer};