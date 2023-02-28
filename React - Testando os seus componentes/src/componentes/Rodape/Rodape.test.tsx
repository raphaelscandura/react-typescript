import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import Rodape from "./Rodape"

jest.mock('../../state/hooks/useListaParticipantes',()=>{
    return{
        useListaParticipantes:jest.fn()
    }
})

const mockNavegacao=jest.fn()

jest.mock('react-router-dom',()=>{
    return{
        useNavigate:()=>mockNavegacao
    }
})

describe('não existem participantes suficientes',()=>{
    beforeEach(()=>{
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })

    test('a brincadeira não pode ser iniciada com menos de 3 participantes',()=>{
        render(<RecoilRoot><Rodape/></RecoilRoot>)

        const botao=screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('existem participantes suficientes',()=>{
    const participantes=['teste um','teste dois','teste tres']

    beforeEach(()=>{
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('a brincadeira pode ser iniciada com 3 ou mais participantes',()=>{
        render(<RecoilRoot><Rodape/></RecoilRoot>)

        const botao=screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada',()=>{
        render(<RecoilRoot><Rodape/></RecoilRoot>)

        const botao=screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    })
})