import {connect} from 'react-redux';
import {InstrumentKey} from './instrument-key.js'
import {selectNote} from '../redux/actions.js';

// Instrument Key needs to know no state
//const mapStateToProps = () => { return {}};

const mapDispatchToProps = (dispatch, selfProps) => {

	return {
		onKeyPress: (noteIndex, note) => { dispatch(selectNote(selfProps.track, noteIndex, note)) }
	};
};

const InstrumentKeyContainer = connect(null, mapDispatchToProps)(InstrumentKey);

export {InstrumentKeyContainer};