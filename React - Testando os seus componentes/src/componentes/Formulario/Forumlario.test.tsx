import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from 'recoil';
import Formulario from "./Formulario";

describe('o comportamento do formulário',()=>{
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
    
    test('nomes duplicados não podem ser adicionados na lista',()=>{
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
    
        //inserir um valor no input
        fireEvent.change(input,{
            target:{
                value: 'nome de teste'
            }
        })
    
        //clicar no botão de submeter de novo
        fireEvent.click(botao)
    
        //encontrar alerta de erro caso o nome a ser inserido seja duplicado
        const mensagemDeErro=screen.getByRole('alert')
    
        //validar mensagem
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })
    
    
    test('mensagem de erro deve sumir apos X segundos',()=>{
        jest.useFakeTimers()
    
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
    
        //inserir um valor no input
        fireEvent.change(input,{
            target:{
                value: 'nome de teste'
            }
        })
    
        //clicar no botão de submeter de novo
        fireEvent.click(botao)
    
        //encontrar alerta de erro caso o nome a ser inserido seja duplicado
        let mensagemDeErro=screen.queryByRole('alert')
    
        //validar mensagem
        expect(mensagemDeErro).toBeInTheDocument()
    
        //espera X segundos e valida se mensagem sumiu
        act(() => {
            jest.runAllTimers()    
        });    
        mensagemDeErro=screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})