import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Button } from "@mui/material";
import { useEffect, useState } from "react";
import IPrato from "../../../interfaces/IPrato";
import { Link } from 'react-router-dom';
import http_v2 from "../../../http/axios_v2";

export default function AdministracaoPratos(){
	const [pratos,setPratos]=useState<IPrato[]>([]);

	useEffect(()=>{
		http_v2.get<IPrato[]>('pratos/')
			.then(response=>setPratos(response.data));
	},[]);

	function deletePrato(prato_id:number){
		http_v2.delete<IPrato[]>(`pratos/${prato_id}/`)
			.then(()=>{
				const pratosList = pratos.filter(prato => prato.id !== prato_id);
				setPratos([...pratosList]);
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
							Descrição
						</TableCell>
						<TableCell>
							Tag
						</TableCell>
						<TableCell>
							Imagem
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
					{pratos.map((item)=>(
						<TableRow key={item.id}>
							<TableCell>
								{item.nome}
							</TableCell>
							<TableCell>
								{item.descricao}
							</TableCell>
							<TableCell>
								{item.tag}
							</TableCell>
							<TableCell>
								<a href={item.imagem} target="_new">Ver Imagem</a>						
							</TableCell>
							<TableCell>
								[<Link to={`/admin/pratos/editar/${item.id}`}>Editar</Link>]
							</TableCell>
							<TableCell>
								<Button variant="outlined" color="error" onClick={()=>deletePrato(item.id)}>Excluir</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>			
		</TableContainer>
	);
}