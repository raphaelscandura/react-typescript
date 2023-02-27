import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from 'recoil';
import Formulario from "./Formulario";

test('se o imput estiver vazio, novos participantes não podem ser adicionados',()=>{
    //renderizar o componente em questão
    render(<RecoilRoot>
            <Formulario/>
        </RecoilRoot>)

    //encontrar o input no DOM
    const input=screen.getByPlaceholderText('Insira os nomes dos participantes')

    //encontrar o botão de submit
    const botao=screen.getByRole('button')

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()

    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
})

test('adicionar um participante caso exista um nome preenchido',()=>{
        //renderizar o componente em questão
        render(<RecoilRoot>
                <Formulario/>
            </RecoilRoot>)

        //encontrar o input no DOM
        const input=screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        //encontrar o botão de submit
        const botao=screen.getByRole('button')

        //inserir um valor no input
        fireEvent.change(input,{
            target:{
                value: 'nome de teste'
            }
        })

        //clicar no botão de submeter
        fireEvent.click(botao)

        //garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus()

        //garantir que o input não tenha um valor
        expect(input).toHaveValue("")
})