import{selector}from"recoil";
import{filtroDeEventos,listaDeEventosState}from"../atom";

export const eventosFiltradosState=selector({
  key:'eventosFiltradosState',
  get:({get})=>{
    const filtro=get(filtroDeEventos)
    const todosOsEventos=get(listaDeEventosState)
	return todosOsEventos.filter(evento => (filtro.data?filtro.data.toISOString().slice(0,10)===evento.inicio.toISOString().slice(0,10):true))
 }
})