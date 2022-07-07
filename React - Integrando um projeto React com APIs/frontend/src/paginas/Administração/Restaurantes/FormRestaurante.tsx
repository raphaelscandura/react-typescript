import { TextField,Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function FormRestaurante(){
	const [nomeRestaurante,setNomeRestaurante]=useState('');
	function submitForm(event:React.FormEvent<HTMLFormElement>){
		event.preventDefault();
		axios.post('http://localhost:8000/api/v2/restaurantes/',{
			nome:nomeRestaurante
		}).then(()=>{
			window.location.href ='http://localhost:3000/admin/restaurantes';
		})
	}

	return (
		<form onSubmit={submitForm}>
			<TextField id="standard-basic" label="Restaurante" variant="standard" value={nomeRestaurante} onChange={event=>setNomeRestaurante(event.target.value)} />
			<br />
			<br />
			<Button type="submit" variant="contained">Adicionar</Button>
		</form>
	)
}