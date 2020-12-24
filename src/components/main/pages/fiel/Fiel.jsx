import React, { useState } from 'react';     // agregamos useContext
import axios from 'axios'; 
import swal from 'sweetalert'; 

export default function Fiel() {
	
	const [ fileCer, setFileCer ] = useState(null);
	const [ fileCerName, setFileCerName ] = useState('Archivo .cer');
	const [ fileKey, setFileKey ] = useState(null); 
	const [ fileKeyName, setFileKeyName ] = useState('Archivo .key');
	const [ passFiel, setPassFiel] = useState(''); 
	const [ chkPF, setChkPF] = useState(false); 

	
	// Para el resultado de el primer proceso
	const [ resPF, setResPF] 				= useState(false); 
	const [ resMes, setResMes] 				= useState('Resultado del Proceso Inicial'); 
	const [ Estatus, setEstatus] 			= useState(''); 
	const [ Certificado, setCertificado] 	= useState(''); 
	const [ PassOk, setPassOk] 				= useState(''); 
	const [ RFC, setRFC] 					= useState(''); 
	const [ RazonS, setRazonS] 				= useState(''); 
	const [ TipoCer, setTipoCer] 			= useState(''); 
	const [ ValHasta, setValHasta] 			= useState(''); 
	
	// Para la segunda consulta al SAT 
	const [tglSATButton, setTglSATButton] 	= useState(false);
	const [ resSAT, setResSAT] 				= useState(false);
	const [ resMesSAT, setResMesSAT] 		= useState(''); 
	const [ cert2, setCert2] 				= useState(''); 
	const [ keyPem, setKeyPem] 				= useState(''); 
	
	// Resultado de la segunda consulta 
	const [ idSol, setIDSol] 				= useState(''); 
	const [ codStat, setCodStat] 			= useState(''); 
	const [ menStat, setMenSat] 			= useState(''); 


	function handleCer(e){
		if (e.target.files[0]){
			setFileCer(e.target.files[0]); 
			setFileCerName(e.target.files[0].name); 
		}
		else{
			setFileCer(''); 
			setFileCerName(''); 
		}
	}
	
	function handleKey(e){
		if (e.target.files[0]){
			setFileKey(e.target.files[0]); 
			setFileKeyName(e.target.files[0].name); 
		}
		else{
			setFileKey(''); 
			setFileKeyName(''); 
		}	
	}

	function handlePass(e){
		setPassFiel(e.target.value); 
	}

	function handleChk(e){
		setChkPF(!chkPF); 
	}

	async function handleSubmit(e){
		e.preventDefault(); 
		console.log('chkPF', chkPF); 
		
		if (chkPF){

			let res = await uploadFile(); 
			
			console.log('res data: ', res.data);
			
			// El mensaje de respuesta: 
			setResMes(res.data.message); 

			// resultado positivo
			if (res.data.result){
				// actualizamos estados
				setResPF(res.data.result); 
				setEstatus(res.data.datas.Estatus);
				setCertificado(res.data.datas.No_Certificado);

				setPassOk(res.data.datas.Password_Correcto);
				
				setRFC(res.data.datas.RFC);
				setRazonS(res.data.datas.Razon_Social);
				setTipoCer(res.data.datas.Tipo_Certificado);
				setValHasta(res.data.datas.Valido_Hasta); 

				// Para el paso 2
				setTglSATButton(false); //por si estaba disabled
				setCert2(res.data.datas.Certificado_pem); 
				setKeyPem(res.data.datas.Llave_Privada_pem); 
			}
			else{
				console.log(res.data.log); 
			}
		}
		else{
			swal('Precaución', 'Para continuar por favor acepte el Acuerdo de Privacidad', 'warning'); 
		}
	}


	async function uploadFile(){
		const formData = new FormData(); 
		formData.append('cer', fileCer); 
		formData.append('key', fileKey);
		formData.append('pass', passFiel); 
		
		console.log('pass', passFiel); 

		const headers = {
            'Content-type': 'multipart/form-data' 
        }

        return await axios.post('uploadFiel', formData, {headers: headers});

	}


	async function handleConsultaSAT(e){
		e.preventDefault();
		setTglSATButton(true); 
		
		if(cert2 !== '' && keyPem !== ''){
			let res = await consultaSAT(); 

			// El mensaje de respuesta: 
			setResSAT(res.data.result); 
			setResMesSAT(res.data.message); 

			// resultado positivo
			if (res.data.result){ 
				// Asignamos los estados finales
				setIDSol(res.data.datas.ID_Solicitud); 
				setCodStat(res.data.datas.CodEstatus);
				setMenSat(res.data.datas.Mensaje); 

				// ya no hay necesidad de quitar el disabled del boton de consulta al SAT
			}
			else{
				setTglSATButton(false); 
			}
		}
		else{
			swal('Precaución', 'No se lograron recuperar el certificado y llave del paso anterior', 'warning');
			setTglSATButton(false);  
		}
	}

	async function consultaSAT(){
		const params ={
			cert2: cert2,
			keyPem: keyPem, 
			RFC: RFC
		}

		const headers = {
            'Content-type': 'application/json; charset=UTF-8' 
        }

        return await axios.get('uploadFiel', { params: params }, {headers: headers});
	}


	return (
    	<div className="container-fluid">
			<div className="row">
				<div className="col-12">
				<div className="card card-primary card-outline">
					<div className="card-body">
						<p className="card-text">
							Para conntinuar el proceso de Registro le solicitamos nos
							proporcione los archivos de su Firma Electrónica Avanzada (FIEL)
							una vez obtenidos y procesados se enviará una solicitud al SAT
							para verificar su validez
						</p>
					</div>
				</div>
				</div>
			</div>

      		<div className="row">
        		<div className="col-6">
          			<div className="card card-primary">
            			<div className="card-header">
              				<h3 className="card-title">Archivos de la FIEL</h3>
            			</div>

            			<form onSubmit={ handleSubmit }>
              				<div className="card-body">
					  			<div className="form-group">
                  					<label htmlFor="fileCer">Archivo .cer</label>
                  					<div className="input-group">
										<div className="custom-file">
											<input
												type="file"
												className="custom-file-input"
												id="fileCer" 
												onChange= { handleCer }
											/>
											<label
												className="custom-file-label"
												htmlFor="fileCer"
											>
												{ fileCerName }
											</label>
										</div>
                  					</div>
                				</div>

					  			<div className="form-group">
                  					<label htmlFor="fileKey">Archivo .key</label>
									<div className="input-group">
										<div className="custom-file">
											<input
												type="file"
												className="custom-file-input"
												id="fileKey" 
												onChange= { handleKey }
											/>
											<label
												className="custom-file-label"
												htmlFor="fileKey"
											>
												{ fileKeyName }
											</label>
										</div>
									</div>
                				</div>
						
								<div className="form-group">
									<label htmlFor="passFiel">Clave de la Fiel</label>
									<input
										type="password"
										className="form-control"
										id="passFiel"
										placeholder="Clave de la FIEL" 
										onChange={ handlePass }
									/>
								</div>

                				<div className="form-check">
									<input
										type="checkbox"
										className="form-check-input"
										id="chkPF"
										defaultChecked={ chkPF } 
										onChange={ handleChk }
									/>
									<label className="form-check-label" htmlFor="exampleCheck1">
										He leido y aceptado el <span data-toggle="modal" data-target="#modal-default" style={{ color: '#007bff', cursor: 'pointer' }}>acuerdo de privacidad</span>
									</label>
                				</div>
              				</div>
              				<div className="card-footer">
                				<button type="submit" className="btn btn-primary">
                  					Enviar Datos
                				</button>
              				</div>
            			</form>
         			</div>
        		</div>

				<div className="col-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">{ resMes }</h5> 
							{
								resPF && (
									<>
										<p>&nbsp;</p>
										<p>Estatus: <span>{ Estatus }</span></p>
										<p>Certificado: <span>{ Certificado }</span></p>
										<p>RFC: <span>{ RFC }</span></p>
										<p>Razón Social: <span>{ RazonS }</span></p>
										<p>Tipo de Certificado: <span>{ TipoCer }</span></p>
										<p>Vigencia hasta: <span>{ ValHasta }</span></p>
										<p><strong>Contraseña</strong> <span>{ PassOk ? 'Correcta' : 'Incorrecta' }</span></p>

										{
											TipoCer == 'FIEL' ? (
											<>	
												<p>
													<button type="button" class="btn btn-success" onClick={ handleConsultaSAT } disabled={ tglSATButton } style={{ width: '100%'}}>
														Realizar Consulta de Prueba ante el SAT
													</button>
												</p>
												
												
												<p> { resMesSAT } </p>
												{
													resSAT && (
														<>
															<p> ID Solicitud: { idSol } </p>
															<p> Cod. Status: { codStat } </p>
															<p> Mensaje: { menStat} </p>
														</>
													)
												}
											</>
											) : (
												<p>
												<button type="button" className="btn btn-danger">
													Archivo CSD detectado, Por favor proporcione el archivo correspondiente a la FIEL 
												</button>
											</p>
											)


										}

									</>
								)
							}
						</div>
					</div>
				</div>


      		</div>
    	
								<div className="modal fade" id="modal-default">
								<div className="modal-dialog">
									<div className="modal-content">
									<div className="modal-header">
										<h4 className="modal-title">Acuerdo de Privacidad</h4>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">×</span>
										</button>
									</div>
									<div className="modal-body">
										<p>Acuerdo de Privacidad detallado…</p>
									</div>
									<div className="modal-footer justify-content-between">
										<button type="button" className="btn btn-default" data-dismiss="modal">No Acepto</button>
										<button type="button" className="btn btn-primary" data-dismiss="modal">Acepto</button>
									</div>
									</div>
									{/* /.modal-content */}
								</div>
								{/* /.modal-dialog */}
								</div>

		</div>
  	);
}
