import { TextField,Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import http_v2 from '../../../http/axios_v2';
import React, { useEffect, useState } from "react";
import IPrato from "../../../interfaces/IPrato";

export default function FormPrato(){
	const [nomePrato,setNomePrato]=useState('');
	const params=useParams();

	useEffect(()=>{
		if(params.id){
			http_v2.get<IPrato>(`pratos/${params.id}/`)
				.then(response => setNomePrato(response.data.nome));
		}
	},[params]);

	function submitForm(event:React.FormEvent<HTMLFormElement>){
		event.preventDefault();
		if(params.id){
			http_v2.put(`pratos/${params.id}/`,{
				nome:nomePrato
			}).then(()=>{
				window.location.href ='http://localhost:3000/admin/pratos';
			})
		}else{
			http_v2.post('pratos/',{
				nome:nomePrato
			}).then(()=>{
				window.location.href ='http://localhost:3000/admin/pratos';
			})
		}
	}

	return (
		<Box sx={({display:'flex',flexDirection:"column",alignItems:"center",flexGrow:1})}>
			<Typography component="h1" variant="h6">Formulário de Pratos</Typography>
			<Box 
				component="form" 
				onSubmit={submitForm}
				sx={{marginTop:2,width:'100%'}}
			>
				<TextField 
					id="standard-basic" 
					label="Prato" 
					variant="standard" 
					value={nomePrato} 
					onChange={event=>setNomePrato(event.target.value)}
					fullWidth 
					required
				/>
				<Button 
					type="submit" 
					variant="contained"
					sx={{marginTop:2}}
					fullWidth
				>
						Adicionar
				</Button>
			</Box>
		</Box>
	)
}