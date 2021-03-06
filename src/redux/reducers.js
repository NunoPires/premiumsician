import _ from 'underscore';
import {ACT_INSTRUMENT_SELECT, ACT_NOTE_SELECT, ACT_TRACK_INSERT, ACT_MODE_SELECT} from './actions.js';

const initialState = {

	magenta: false,
	tracks: [
		{ 
			instrument: 0,
			notes: []
		}
	]
}

export function composerApp(state = initialState, action) {

	// TODO: separate actions into groups and do reducer combination
	let newState;
	switch(action.type) {

		case ACT_INSTRUMENT_SELECT: 

			newState = _.assign({}, state, {
				tracks: _.map(state.tracks, (track, index) => {
					if(index === action.idx) {
						return _.assign({}, track, {
							instrument: action.value,
							notes: track.notes
						})
					}
					return track;
				})
			});
			return newState;

		case ACT_NOTE_SELECT:

			newState = _.assign({}, state, {
				tracks: _.map(state.tracks, (track, index) => {
					if(index === action.actionIdx) {
						
						let notesUpdated = track.notes;
						if(_.isUndefined(notesUpdated[action.noteIdx])) {
							notesUpdated[action.noteIdx] = action.value;
						}
						else {
							notesUpdated[action.noteIdx] = undefined;
						}
						
						return _.assign({}, track, {
							instrument: track.instrument,
							notes: notesUpdated
						})
					}
					return track;
				})
			});
			return newState;

		case ACT_TRACK_INSERT:
		
			newState = _.assign({}, state, {
				tracks: [
					...state.tracks,
					{
						instrument: 0,
						notes: []
					}
				]
			});
			return newState;

		case ACT_MODE_SELECT:
			newState = _.assign({}, state, {
				magenta: action.value
			});
			return newState; 		

		default:
			return state;
	}
} 