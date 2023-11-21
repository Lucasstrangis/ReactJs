const products = [
    {
        id: '1',
        name: 'Bolsa Camiseta',
        price: 100,
        category: 'bolsas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_690426-MLA44755055207_012021-O.webp',
        stock: 100,
        description: 'Bolsa camiseta 40x50 reforzada'
    },

    {
        id: '2',
        name: 'Bolsa Camiseta',
        price: 200,
        category: 'bolsas',
        img:'https://http2.mlstatic.com/D_NQ_NP_690426-MLA44755055207_012021-O.webp',
        stock: 200,
        description: 'Bolsa camiseta 30x40 reforzada'
    },

    {
        id: '3',
        name: 'Bandejas de expandido',
        price: 300,
        category: 'bandejas',
        img: 'https://images.app.goo.gl/w8pVXWYtA3doQt4BA',
        stock: 300,
        description: 'Bandejas de expandido'
    },

    {
        id: '4',
        name: 'Bandejas de carton',
        price: 400,
        category: 'bandejas',
        img: 'https://images.app.goo.gl/XA4jGvDdtM5Mk3TB7',
        stock: 400,
        description: 'Bandejas de carton'
    },

    {
        id: '5',
        name: 'papeles',
        price: 500,
        category: 'papeles',
        img: 'https://images.app.goo.gl/N817gUcRoYcFKmVh6',
        stock: 500,
        description: 'Papel diario'
    },

    {
        id: '6',
        name: 'papeles',
        price: 600,
        category: 'papeles',
        img: 'https://images.app.goo.gl/e3Rh2KHEr3bHfw4m9',
        stock: 600,
        description: 'Fondo pizzero'
    },
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}


export const getProductsById = (productId) => {
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