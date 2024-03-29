import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import Sorteio from "./Sorteio";

jest.mock('../../state/hooks/useListaParticipantes',()=>{
    return{
        useListaParticipantes:jest.fn()
    }
})

jest.mock('../../state/hooks/useResultadoSorteio',()=>{
    return{
        useResultadoSorteio:jest.fn()
    }
})

describe('página de sorteio',()=>{
    const participantes=['um','dois','tres']
    const resultado=new Map([
        ['um','dois'],
        ['dois','tres'],
        ['tres','um']
    ])

    beforeEach(()=>{
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado)
    })

    test('todos os participantes podem exibir o seu amigo secreto',()=>{
        render(<RecoilRoot><Sorteio/></RecoilRoot>)
        const opcoes=screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length+1)
    })

    test('o amigo secreto é exibido quando solicitado',()=>{
        render(<RecoilRoot><Sorteio/></RecoilRoot>)
        const select=screen.getByPlaceholderText('Selecione o seu nome')
        const botao=screen.getByRole('button')
        

        fireEvent.change(select,{
            target:{
                value:participantes[0]
            }
        })

        fireEvent.click(botao)

        const amigoSecreto=screen.getByRole('alert')
        
        expect(amigoSecreto).toBeInTheDocument()
    })
})