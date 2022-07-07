import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Button } from "@mui/material";
import { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import { Link } from 'react-router-dom';
import http_v2 from "../../../http/axios_v2";

export default function AdministracaoRestaurantes(){
	const [restaurantes,setRestaurantes]=useState<IRestaurante[]>([]);

	useEffect(()=>{
		http_v2.get<IRestaurante[]>('restaurantes/')
			.then(response=>setRestaurantes(response.data));
	},[]);

	function deleteRestaurante(restaurante_id:number){
		http_v2.delete<IRestaurante[]>(`restaurantes/${restaurante_id}/`)
			.then(()=>{
				const restaurantesList = restaurantes.filter(restaurante => restaurante.id !== restaurante_id);
				setRestaurantes([...restaurantesList]);
			});
	}

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							Nome
						</TableCell>
						<TableCell>
							Editar
						</TableCell>
						<TableCell>
							Excluir
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{restaurantes.map((item)=>(
						<TableRow key={item.id}>
							<TableCell>
								{item.nome}
							</TableCell>
							<TableCell>
								[<Link to={`/admin/restaurantes/editar/${item.id}`}>Editar</Link>]
							</TableCell>
							<TableCell>
								<Button variant="outlined" color="error" onClick={()=>deleteRestaurante(item.id)}>Excluir</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>			
		</TableContainer>
	);
}