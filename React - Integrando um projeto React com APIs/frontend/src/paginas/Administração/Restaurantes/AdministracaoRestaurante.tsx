import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import { Link } from 'react-router-dom';

export default function AdministracaoRestaurantes(){
	const [restaurantes,setRestaurantes]=useState<IRestaurante[]>([]);

	useEffect(()=>{
		axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
			.then(response=>setRestaurantes(response.data));
	},[])

	return (
		<TableContainer>
			<Link to="/admin/restaurantes/novo">Adicionar Restaurante</Link>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							Nome
						</TableCell>
						<TableCell>
							Ações
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
								[<Link to={`/admin/restaurantes/excluir/${item.id}`}>Excluir</Link>]
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>			
		</TableContainer>
	);
}