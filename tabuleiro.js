const locais = ['1','2','3'], locais2 = ['1', '2', '3'];

export function getLocais(){
    return structuredClone(locais);
}

export function getLocais2(){
    return structuredClone(locais2);
}



export function getEmbaralhar(){
    const cartas = [
        { nome: "Flash", energia: 1, forca: 1 },
        { nome: "Falcão", energia:2, forca: 2 },
        { nome: "Spider-Man", energia: 3, forca: 3 },
        { nome: "DeadPool", energia: 1, forca: 2 },
        { nome: "Super Man", energia: 2, forca: 3 },
        { nome: "Thor", energia: 3, forca: 4 },
        { nome: "Odin", energia: 1, forca: 3 },
        { nome: "Hulk", energia: 2, forca: 4 },
        { nome: "Wolverine", energia: 3, forca: 5 },
        { nome: "Demolidor", energia: 1, forca: 4 },
        { nome: "Viúva Negra", energia: 2, forca: 5 },
        { nome: "Dr Estranho", energia: 3, forca: 6 },
    ];

  
    const mao = [];

    for (let i = 0; i <=11; i++) {
        const cartaIndex = Math.floor(Math.random() * cartas.length);
        const carta = cartas.splice(cartaIndex, 1)[0];
        mao.push(carta);
    }
    return mao;
}