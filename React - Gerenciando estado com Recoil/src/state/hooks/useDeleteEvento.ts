import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

export default function useDeleteEvento(){
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
	return (evento:IEvento)=>{
		return setListaDeEventos((listaAntiga) => [
			...listaAntiga.filter(evt => evento.id !== evt.id)
		  ])
	}
}