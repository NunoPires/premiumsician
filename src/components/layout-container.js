import {connect} from 'react-redux';
import {MainLayout} from './layout.js'
import {insertTrack} from '../redux/actions.js';

const mapStateToProps = (state, selfProps) => {

	return {
		tracks: state.tracks
	};
};

const mapDispatchToProps = (dispatch, selfProps) => {

	return {
		onInsertTrack: () => { dispatch(insertTrack()); }
	}
};

const MainLayoutContainer = connect(mapStateToProps, mapDispatchToProps)(MainLayout);

export {MainLayoutContainer};