/** Action Types **/
export const ACT_INSTRUMENT_SELECT = 'CHANGE_INSTRUMENT';
export const ACT_NOTE_SELECT = 'CLICK_NOTE';
export const ACT_TRACK_INSERT = 'ADD_TRACK';

/** Action Creators **/
export function selectInstrument(instrument, index) { // TODO: pass the corresponding track?
	return { type: ACT_INSTRUMENT_SELECT, value: instrument, idx: index }
}

export function selectNote(index, noteIndex, note) {
	return { type: ACT_NOTE_SELECT, noteIdx: noteIndex, value: note, actionIdx: index }
}

export function insertTrack() { 
	return { type: ACT_TRACK_INSERT }
}	

