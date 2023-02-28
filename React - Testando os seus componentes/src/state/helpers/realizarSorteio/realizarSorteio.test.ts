import React from "react";
import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de amigo secreto',()=>{
    const participantes=['um','dois','tres','quatro','cinco','seis']

    test('cada participante não sorteie o próprio nome',()=>{
        const sorteio=realizarSorteio(participantes)
        participantes.forEach(participante=>{
            const amigoSecreto=sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})