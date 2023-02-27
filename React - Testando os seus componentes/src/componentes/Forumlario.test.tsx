import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

test('se o imput estiver vazio, novos participantes não podem ser adicionados',()=>{
    //renderizar o componente em questão
    render(<Formulario/>)

    //encontrar o input no DOM
    const input=screen.getByPlaceholderText('Insira os nomes dos participantes')

    //encontrar o botão de submit
    const botao=screen.getByRole('button')

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()

    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()


})