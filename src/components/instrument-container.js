import Tone from 'tone';
import {connect} from 'react-redux';
import {Instrument} from './instrument.js';
import * as mm from '@magenta/music';

const mapStateToProps = (state, selfProps) => {	
	
	// TODO MAGENTA: load all samples first? delay with playing the note, problem playing the same note
	let synth = state.magenta ? 
					new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus') 
					: new Tone.PolySynth(4, Tone.MembraneSynth).toMaster(); 

	return {
		trackIndex: selfProps.trackIndex,
		instrument: state.tracks[selfProps.trackIndex].instrument,
		magenta: state.magenta,
		player: synth
	};
};

const InstrumentContainer = connect(mapStateToProps)(Instrument);

export {InstrumentContainer};