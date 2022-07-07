import { TextField,Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function FormRestaurante(){
	const [nomeRestaurante,setNomeRestaurante]=useState('');
	const params=useParams();

	useEffect(()=>{
		if(params.id){
			axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${params.id}/`)
				.then(response => setNomeRestaurante(response.data.nome));
		}
	},[params]);

	function submitForm(event:React.FormEvent<HTMLFormElement>){
		event.preventDefault();
		if(params.id){
			axios.put(`http://localhost:8000/api/v2/restaurantes/${params.id}/`,{
				nome:nomeRestaurante
			}).then(()=>{
				window.location.href ='http://localhost:3000/admin/restaurantes';
			})
		}else{
			axios.post('http://localhost:8000/api/v2/restaurantes/',{
				nome:nomeRestaurante
			}).then(()=>{
				window.location.href ='http://localhost:3000/admin/restaurantes';
			})
		}
	}

	return (
		<Box sx={({display:'flex',flexDirection:"column",alignItems:"center"})}>
			<Typography component="h1" variant="h6">Formulário de Restaurantes</Typography>
			<Box 
				component="form" 
				onSubmit={submitForm}
				sx={{marginTop:2}}
			>
				<TextField 
					id="standard-basic" 
					label="Restaurante" 
					variant="standard" 
					value={nomeRestaurante} 
					onChange={event=>setNomeRestaurante(event.target.value)}
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