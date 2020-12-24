import React from 'react'
import { useFormik } from 'formik'; 
import * as Yup from 'yup'; 
import axios from 'axios'; 

function Conytribuyente() {
	// Para validacion del formulario
	const initialValues = {
		ID_RF: '', 
		RFC: '', 
		Nombre_Contribuyente: '', 
		Fecha_Nacimiento: '', 
		Calle: '', 
		No_Ext: '', 
		No_Int: '', 
		Colonia: '',  
		// ID_Pais: '',  
		// ID_Estado: '',  
		// ID_Municipio: '',  
		Codigo_Postal: '',  
	}

	const validationSchema = Yup.object({
		RFC: Yup.string().required('Requerido'), 
		Nombre_Contribuyente: Yup.string().required('Requerido'), 
		Fecha_Nacimiento: Yup.string().required('Requerido'), 
		Calle: Yup.string().required('Requerido'), 
		No_Ext: Yup.string().required('Requerido'), 
		Colonia: Yup.string().required('Requerido'), 
		// ID_Pais: Yup.string().required('Requerido'), 
		// ID_Estado: Yup.string().required('Requerido'), 
		// ID_Municipio: Yup.string().required('Requerido'), 
		Codigo_Postal: Yup.string().required('Requerido'), 
	});

	async function onSubmit(values){
		console.log('Form values: ', values); 
		
		let res = await postData(values); 
		
		console.log('res data: ', res.data);
	}

	async function postData(values){
		const headers = {
            'Content-type': 'multipart/form-data' 
        }
        return await axios.post('contribuyente', values, {headers: headers});
	}

	const formik = useFormik({
		initialValues, 
		onSubmit, 
		validationSchema 
	});  
	
	// Return 
	return (
    	<div className="container-fluid">
			<div className="row">
                <div className="col-12">
					<div className="card card-primary">
						<div className="card-header">
							<h3 className="card-title">Informacion del Contribuyente</h3>
						</div>
						
						<form id="contribuyenteform" action="" method="POST" autoComplete="off" onSubmit={formik.handleSubmit}>
							<div className="card-body">
								<div className="row">
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" name="RFC" placeholder="RFC" {...formik.getFieldProps('RFC')}/>
                            				{formik.touched.RFC && formik.errors.RFC ? <span className="label__error">{formik.errors.RFC}</span> : null }
										</div>
									</div>
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" name="Nombre_Contribuyente" placeholder="Nombre Contribuytente" {...formik.getFieldProps('Nombre_Contribuyente')}/>
											{formik.touched.Nombre_Contribuyente && formik.errors.Nombre_Contribuyente ? <span className="label__error">{formik.errors.Nombre_Contribuyente}</span> : null }
										</div>
									</div>
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" name="Fecha_Nacimiento" placeholder="Fecha Nacimiento" {...formik.getFieldProps('Fecha_Nacimiento')}/>
											{formik.touched.Fecha_Nacimiento && formik.errors.Fecha_Nacimiento ? <span className="label__error">{formik.errors.Fecha_Nacimiento}</span> : null }
										</div>
									</div>
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" name="Calle" placeholder="Calle" {...formik.getFieldProps('Calle')}/>
											{formik.touched.Calle && formik.errors.Calle ? <span className="label__error">{formik.errors.Calle}</span> : null }
										</div>
									</div>
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" name="No_Ext" placeholder="No. Exterior" {...formik.getFieldProps('No_Ext')}/>
											{formik.touched.No_Ext && formik.errors.No_Ext ? <span className="label__error">{formik.errors.No_Ext}</span> : null }
										</div>
									</div>
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="No. Interior" />
										</div>
									</div>
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" name="Colonia" placeholder="Colonia"  {...formik.getFieldProps('Colonia')}/>
											{formik.touched.Colonia && formik.errors.Colonia ? <span className="label__error">{formik.errors.Colonia}</span> : null }
										</div>
									</div>
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" name="Codigo_Postal" placeholder="Código Postal"  {...formik.getFieldProps('Codigo_Postal')}/>
											{formik.touched.Codigo_Postal && formik.errors.Codigo_Postal ? <span className="label__error">{formik.errors.Codigo_Postal}</span> : null } 
										</div>
									</div>

									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="ID_Estado" />
										</div>
									</div>
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="ID_Municipio" />
										</div>
									</div>
									<div className="col-3">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="ID_Pais" />
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
                				<button type="submit" className="btn btn-primary">
                  					Guardar Datos
                				</button>
              				</div>
						</form>
					</div>
                </div>
            </div>
        </div>
    )
}
export default Conytribuyente; 