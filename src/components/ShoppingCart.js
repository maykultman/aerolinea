import {useState} from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { removeItem, addDataItem, resetReservation } from '../redux/actions/cartActions';
import NumberFormat from 'react-number-format';
import CheckoutForm from './CheckoutForm';
import { formatMoney } from "../helpers";
const Carrito = (props) => {
	let list = [], total = 0;
	let navigate = useNavigate();
	const { reservations } = props.reservations;
	const [openModal, setOpenModal] = useState(false);
	reservations.forEach((item, index) =>{
		total = total + (item.passenger*item.price);
		list.push(
			<tr key={index}>
				<td>{item.origin}</td>
				<td>{item.destino}</td>
				<td>{item.hour}</td>
				<td>{item.passenger}</td>
				<td>
					{formatMoney(NumberFormat,item.price)}
				</td>
				<td>
					{formatMoney(NumberFormat,(item.passenger*item.price))}
				</td>
				<td>
					<span className="actions">
						<FaRegTrashAlt onClick={()=>props.dispatch(removeItem(item))}/>
					</span>
				</td>
			</tr>
		);
	});
	
	return <>
		
		<div className="row"><br/>
		{reservations.length===0 && <h3 className="text-center">Carrito vacío</h3>}
			<div className="xs-12 sm-12 md-10 child-center lg-10 child-center">
				<table>
					<thead>
						<tr>
							<th>Origen</th><th>Destino</th><th>Hora</th>
							<th>Pasajeros</th><th>Precio</th><th>Subtotal</th><th>#</th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
					<tfoot>
						<tr>
							<th colSpan="5" className="text-right">Total</th><th>
								{formatMoney(NumberFormat,total)}
							</th><th></th>
						</tr>
					</tfoot>
				</table>
				{reservations.length > 0 &&<button onClick={()=>{setOpenModal(true)}}>Resevar</button>}
				
			</div>
		</div>
		<div className={openModal?"modal show":"modal"}>
			<div className="content">
				<CheckoutForm 
					closeModal={setOpenModal} 
					dispatch={props.dispatch}
					addDataItem={addDataItem}
					resetReservation={resetReservation}
				/>
			</div>
		</div>

	</>
}
export default connect((state)=>{
	return state
})(Carrito)