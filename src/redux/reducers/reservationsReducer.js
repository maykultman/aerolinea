import {ADD_ITEM, ADD_DATA_ITEM, REMOVE_ITEM, RESET_RESERVATION} from '../actions/cartActions'
import { toast } from 'react-toastify';
const initialState = {
	reservations : [],
	data : {}
};
function reservation(state=initialState, action) {
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
			return { 
				...state, 
				reservations : [],
				data : {}
			}

		case REMOVE_ITEM :
			const flight = action.payload;
			toast.success(`El vuelo ha sido ${flight.origin} - ${flight.destino} eliminado del carrito`);
			return {
				...state,
				reservations : state.reservations.filter(item=>item.id!==action.payload.id)
			}
		default: 
			return state
	}
}
export default reservation;