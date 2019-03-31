import {connect} from 'react-redux';
import {ModeSwitch} from './mode-switch.js'
import {selectMode} from '../redux/actions.js';

const mapStateToProps = (state, selfProps) => {	
	return {
		magenta: state.magenta
	};
};

const mapDispatchToProps = (dispatch, selfProps) => {
	return {
		onChange: (toggleValue) => { dispatch(selectMode(toggleValue)) }
	};
};

const ModeSwitchContainer = connect(mapStateToProps
								  , mapDispatchToProps)(ModeSwitch);

export {ModeSwitchContainer};