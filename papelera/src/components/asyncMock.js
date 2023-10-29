const products = [
    {
        id: '1',
        name: 'Bolsa Camiseta',
        price: 500,
        category: 'bolsas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_690426-MLA44755055207_012021-O.webp',
        stock: 50,
        description: 'Bolsa camiseta 40x50 reforzada'
    },

    {
        id: '2',
        name: 'Bolsa Camiseta',
        price: 500,
        category: 'bolsas',
        img:'https://http2.mlstatic.com/D_NQ_NP_690426-MLA44755055207_012021-O.webp',
        stock: 50,
        description: 'Bolsa camiseta 40x50 reforzada'
    },

    {
        id: '3',
        name: 'Bolsa Camiseta',
        price: 500,
        category: 'bandejas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_690426-MLA44755055207_012021-O.webp',
        stock: 50,
        description: 'Bolsa camiseta 40x50 reforzada'
    },

    {
        id: '4',
        name: 'Bolsa Camiseta',
        price: 500,
        category: 'bandejas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_690426-MLA44755055207_012021-O.webp',
        stock: 50,
        description: 'Bolsa camiseta 40x50 reforzada'
    },

    {
        id: '5',
        name: 'papeles',
        price: 500,
        category: 'bolsas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_690426-MLA44755055207_012021-O.webp',
        stock: 50,
        description: 'Bolsa camiseta 40x50 reforzada'
    },

    {
        id: '6',
        name: 'papeles',
        price: 500,
        category: 'papeles',
        img: 'https://http2.mlstatic.com/D_NQ_NP_690426-MLA44755055207_012021-O.webp',
        stock: 50,
        description: 'Bolsa camiseta 40x50 reforzada'
    },
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}


export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 500);
    });
}