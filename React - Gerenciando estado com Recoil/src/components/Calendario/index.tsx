
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import useAtualizarEvento from '../../state/hooks/useAtualizarEvento';
import useListaDeEventos from '../../state/hooks/useListaDeEventos';

interface IKalendEvento {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {

  const eventosKalend = new Map<string, IKalendEvento[]>();
  const eventos = useListaDeEventos()
  const atualizarEvento =useAtualizarEvento();

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10)
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue'
    })
  });

  const onEventDragFinish: OnEventDragFinish = (
    prevEvent: CalendarEvent,
    updatedEvent: CalendarEvent
  ) => {
    const evento = eventos.find(evento => evento.descricao===updatedEvent.summary);
    if(evento){
      const eventoAlterado={...evento};
      
      eventoAlterado.inicio=new Date(updatedEvent.startAt);
      eventoAlterado.fim=new Date(updatedEvent.endAt);

      atualizarEvento(eventoAlterado);
    }
  };


  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
}

export default Calendario