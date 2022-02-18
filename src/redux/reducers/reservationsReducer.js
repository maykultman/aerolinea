import {ADD_ITEM, ADD_DATA_ITEM, REMOVE_ITEM, RESET_RESERVATION} from '../actions/cartActions'
const initialState = {
	reservations : [],
	data : {}
};
function reservation(state=initialState, action) {
	console.log(state.reservations)
	switch (action.type){
		case ADD_ITEM :
			return {
				...state,
				reservations: [
					action.payload,
					...state.reservations,
				]
			}
		case ADD_DATA_ITEM :
			return {
				...state,
				data: action.payload
			}
		case RESET_RESERVATION :
			return action.payload

		case REMOVE_ITEM :
			return {
				...state,
				reservations : state.reservations.filter(item=>item.id!==action.payload.id)
			}
		default: 
			return state
	}
}
export default reservation;