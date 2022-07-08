import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";
import { listaDeEventosState } from "../atom";

export default function useCriarEvento(){
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
	return (evento:IEvento)=>{
		evento.id=obterId()
		return setListaDeEventos(listaAntiga => [...listaAntiga,evento])
	}
}