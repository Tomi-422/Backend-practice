const  products = []

class ProductManager {
    static id = 1
    
    constructor (title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        ProductManager.id
    }

    addProducts () {
        const product = ({
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            code: this.code,
            stock: this.stock,
            id: ProductManager.id
        })

        const check = products.find(e => e.code === product.code) //Validacion del campo code

        if(check == true) {
            console.log("Error")
        } else {
            products.push(product)
            ProductManager.id ++
        }

        if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Rellene todos los campos obligatorios")
        }
    }
}

const getProducts = () => {
    console.log(products)
}

const getProductsById = (id) => {
    const busqueda = products.find(product=> product.id === id)

    if (busqueda == undefined) {
        console.log("not found")
    } else {
        console.log(busqueda)
    }
}

const product1 = new ProductManager("Pica2", "Parapente clase EN-A", 2000, "ImgRoute", 1541, 5)
const product2 = new ProductManager("Falco", "Parapente clase EN-B", 2800, "ImgRoute", 1641, 8)

product1.addProducts()
product2.addProducts()

getProducts()


