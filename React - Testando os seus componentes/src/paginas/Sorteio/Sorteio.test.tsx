import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import Sorteio from "./Sorteio";

jest.mock('../../state/hooks/useListaParticipantes',()=>{
    return{
        useListaParticipantes:jest.fn()
    }
})

describe('página de sorteio',()=>{
    const participantes=['um','dois','tres']

    beforeEach(()=>{
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('todos os participantes podem exibir o seu amigo secreto',()=>{
        render(<RecoilRoot><Sorteio/></RecoilRoot>)
        const opcoes=screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length)
    })
})