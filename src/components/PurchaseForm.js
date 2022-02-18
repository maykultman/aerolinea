import { useFormik } from "formik";
import { getId } from "../helpers";
import { hours, initialDataFlight } from "../initializerVars";
import MenuStates from "./FormBuy/MenuStates"
import Hours from "./FormBuy/Hours"
const PurchaseForm = ({estados, addItem, dispatch}) => {

	const formik = useFormik({
		initialValues: initialDataFlight, 
		onSubmit : values => {
			values.id = getId();
			dispatch(addItem(values));
			formik.resetForm();
		}
	})
	
	return (
		<form onSubmit={formik.handleSubmit} className="formFome">
			<h3>Reserve su viaje</h3>
			<label>Origen</label>
			<MenuStates handleChange={formik.handleChange} estados={estados} name="origin"/>
			<label>Destino</label>
			<MenuStates handleChange={formik.handleChange} estados={estados} name="destino"/>
			<div>
				<label>Horarios</label>
				{formik.values.destino&&<Hours hours={hours} handleChange={formik.handleChange}/>}
			</div>
			<div>
				<label>Pasajeros</label><br/>
				<input type="number" name="passenger" 
					onChange={formik.handleChange}
					value={formik.values.passenger}
				/>
			</div>
			<button type="submit">Reservar</button>
		</form>
	)
}
export default PurchaseForm;