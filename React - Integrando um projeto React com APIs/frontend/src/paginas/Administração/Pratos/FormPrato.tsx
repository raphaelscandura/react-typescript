import { TextField,Button, Typography, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import http_v2 from '../../../http/axios_v2';
import React, { useEffect, useState } from "react";
import IPrato from "../../../interfaces/IPrato";
import ITag from "../../../interfaces/ITag";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function FormPrato(){
	const [nomePrato,setNomePrato]=useState('');
	const [descricaoPrato,setDescricaoPrato]=useState('');
	const [tagPrato,setTagPrato]=useState('');
	const [imagemPrato,setImagemPrato]=useState<File | null>(null);
	const [restaurantePrato,setRestaurantePrato]=useState('');
	
	const [tags,setTags]=useState<ITag[]>([]);
	const [restaurantes,setRestaurantes]=useState<IRestaurante[]>([]);
	const params=useParams();

	useEffect(()=>{
		if(params.id){
			http_v2.get<IPrato>(`pratos/${params.id}/`)
				.then(response => {
					setNomePrato(response.data.nome)
					setDescricaoPrato(response.data.descricao)
					setTagPrato(response.data.tag)
					setRestaurantePrato(response.data.restaurante.toString())
				});
		}
	},[params]);

	useEffect(()=>{
		http_v2.get<{tags:ITag[]}>('tags/')
			.then(response => setTags(response.data.tags));
		http_v2.get<IRestaurante[]>('restaurantes/')
			.then(response => setRestaurantes(response.data));
	},[]);

	function submitForm(event:React.FormEvent<HTMLFormElement>){
		event.preventDefault();

		const formData = new FormData();
		var method=(params.id?'PUT':'POST');
		var url=(params.id?`pratos/${params.id}`:'pratos/');
		
		formData.append('nome',nomePrato);
		formData.append('descricao',descricaoPrato);
		formData.append('tag',tagPrato);
		formData.append('restaurante',restaurantePrato);
		if(imagemPrato){
			formData.append('imagem',imagemPrato);
		}

		http_v2.request({
			url:url,
			method:method,
			headers:{
				'Content-Type':'multipart/form-data'
			},
			data:formData
		}).then(()=>{
			window.location.href ='http://localhost:3000/admin/pratos';
		})
	}

	function selecionarArquivo(event:React.ChangeEvent<HTMLInputElement>){
		if(event.target.files?.length){
			setImagemPrato(event.target.files[0]);
		}else{
			setImagemPrato(null);
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
					margin="dense"
				/>
				<TextField 
					id="standard-basic" 
					label="Descrição" 
					variant="standard" 
					value={descricaoPrato} 
					onChange={event=>setDescricaoPrato(event.target.value)}
					fullWidth 
					required
					margin="dense"
				/>
				<FormControl margin="dense" fullWidth>
					<InputLabel id='select-tag'>Tag</InputLabel>
					<Select labelId="select-tag" value={tagPrato} onChange={event=>setTagPrato(event.target.value)}>
						{tags.map((item)=>
							<MenuItem 
								key={item.id} 
								value={item.value}
							>
								{item.value}
							</MenuItem>
						)}
					</Select>
				</FormControl>
				<FormControl margin="dense" fullWidth>
					<InputLabel id='select-restaurante'>Restaurante</InputLabel>
					<Select labelId="select-restaurante" value={restaurantePrato} onChange={event=>setRestaurantePrato(event.target.value)}>
						{restaurantes.map((item)=>
							<MenuItem 
								key={item.id} 
								value={item.id}
							>
								{item.nome}
							</MenuItem>
						)}
					</Select>
				</FormControl>
				<input type="file" onChange={event => selecionarArquivo(event)} />
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