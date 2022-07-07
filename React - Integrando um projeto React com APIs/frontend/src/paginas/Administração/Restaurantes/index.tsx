import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function AdministracaoRestaurantes(){
	const [restaurantes,setRestaurantes]=useState<IRestaurante[]>([]);

	useEffect(()=>{
		axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
			.then(response=>setRestaurantes(response.data));
	},[])

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							Nome
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{restaurantes.map((item)=>(
						<TableRow key={item.id}>
							<TableCell>
								{item.nome}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>			
		</TableContainer>
	);
}