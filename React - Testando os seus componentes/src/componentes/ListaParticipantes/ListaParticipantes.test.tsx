import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes'
import ListaParticipantes from './ListaParticipantes'

jest.mock('../../state/hooks/useListaParticipantes',()=>{
    return{
        useListaParticipantes:jest.fn()
    }
})

describe('o comportamento da lista de participantes para amigo secreto',()=>{
    beforeEach(()=>{
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })
    
    test('renderiza uma lista vazia',()=>{
        render(<RecoilRoot><ListaParticipantes/></RecoilRoot>)

        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })   

})

describe('o comportamento da lista de participantes para amigo secreto',()=>{
    const participantes=['teste um','teste dois']

    beforeEach(()=>{
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    
    test('renderiza uma lista com elementos',()=>{
        render(<RecoilRoot><ListaParticipantes/></RecoilRoot>)
        
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })    
})
