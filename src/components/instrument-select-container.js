import {connect} from 'react-redux';
import {InstrumentSelector} from './instrument-select';
import {selectInstrument} from '../redux/actions.js';

const mapStateToProps = (state, selfProps) => {	
	return {
		instrument: state.tracks[selfProps.trackIndex].instrument
	};
};

const mapDispatchToProps = (dispatch, selfProps) => {
	return {
		onSelect: (instrument) => { dispatch(selectInstrument(instrument.value, selfProps.trackIndex)) }
	};
};

const InstrumentSelectorContainer = connect(mapStateToProps
										  , mapDispatchToProps)(InstrumentSelector);

export {InstrumentSelectorContainer};										  