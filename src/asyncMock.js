/* import CaninMini from "./img/royalCaninMini.png";
import CaninMedium from "./img/RoyalCaninMedium.png";
import CaninAdult from "./img/RoyalCaninMiniIndor.png";



const products = [
    {
        id: '1',
        name: 'Royal Canin Perro Mini Adulto 7.5Kg',
        price: 18700,
        category: 'alimentos',
        img: CaninMini,
        stock: 25,
        descripcion: 'Royal Canin Mini Adult es un alimento para perros adultos de tamaño pequeño (de 1 a 10 Kg) desde los 10 meses hasta los 8 años. La L-Carnitina estimula el metabolismo de las reservas grasas. Satisface las necesidades energéticas gracias al contenido adaptado en calorías ( Royal Canin es líder en el mercado mundial de alimento balanceado para gatos y perros. Fundada en 1967 en Francia por un médico veterinario, Royal Canin asumió el compromiso de la Nutrición Salud, con el objetivo de aportar las respuestas nutricionales más innovadoras y adaptadas a las necesidades específicas de gatos y perros.'
    },

    { 
        id: '2',
        name: 'Royal Canin Medium Adulto - 15 Kg',
        price: 32150,
        category: 'alimentos',
        img: CaninMedium,
        stock: 30,
        description: 'Royal Canin Medium Adult es un alimento para perros adultos de razas medianas (11 a 25 Kg) desde los 12 meses hasta los 7 años. Con palatabilidad reforzada mediante aromas naturales seleccionados, tamaño, forma y textura de la croqueta adaptados. Asegura una óptima digestibilidad gracias a las proteínas de alta calidad y al aporte equilibrado de fibras alimentarias. Royal Canin es líder en el mercado mundial de alimento balanceado para gatos y perros. Fundada en 1967 en Francia por un médico veterinario, Royal Canin asumió el compromiso de la Nutrición Salud, con el objetivo de aportar las respuestas nutricionales más innovadoras y adaptadas a las necesidades específicas de gatos y perros.'
    },

    { 
        id: '3',
        name:'Royal Canin Mini Indoor Adulto - 1 Kg',
        price: 3950,
        category: 'alimentos',
        img: CaninAdult,
        stock: 45,
        description: 'Royal Canin Mini Indoor es un alimento para perros adultos de interior y vida urbana de tamaño pequeño (de 1 a 10 kg) a partir de los 10 meses. Elaborado con ingredientes que ayudan a disminuir el olor y tamaño de las heces, suplementado con vitamina E y C como antioxidantes, L-carnitina para estimular el metabolismo y quelantes de calcio que reducen la formación de sarro. Royal Canin es líder en el mercado mundial de alimento balanceado para gatos y perros. Fundada en 1967 en Francia por un médico veterinario, Royal Canin asumió el compromiso de la Nutrición Salud, con el objetivo de aportar las respuestas nutricionales más innovadoras y adaptadas a las necesidades específicas de gatos y perros.'
    },
    {
        id: '4',
        name: 'Excellent para Perro Adulto Mediano y Grande - 20 Kg',
        price: 29590,
        category: 'alimentos',
        img: CaninMini,
        stock: 25,
        descripcion: 'La exclusiva combinación de ingredientes seleccionados le confiere a las fórmulas Excellent la propiedad de generar cambios significativos en la calidad de vida de los perros y gatos, a través de una nutrición de vanguardia con beneficios fácilmente comprobables, que van desde una protección extra al sistema de defensas, un incremento en la absorción de nutrientes, hasta una conformación más consistente de las heces. '
    },
    {
        id: '5',
        name: 'Alimento Maintenance Criadores Adulto - 22 kg',
        price: 13400,
        category: 'alimentos',
        img: CaninMini,
        stock: 15,
        descripcion: 'El Alimento Maintenance Criadores Adulto está desarrollado especialmente para perros adultos de todos los tamaños, de entre 1 y 7 años de edad. '
    },
    {
        id: '6',
        name: 'Pouch Pedigree Pollo para Perro Adulto - 100Gr',
        price: 291.67,
        category: 'alimentos',
        img: CaninMini,
        stock: 10,
        descripcion: 'Pedigree en sobrecitos adulto sabor pollo en salsa es un alimento húmedo, nutricionalmente completo y balanceado, formulado para el mantenimiento de perros adultos.'
    },
    {
        id: '7',
        name: 'Lata Sieger Energy Recovery Para Perro y Gato - 340 Gr',
        price: 1750,
        category: 'alimentos',
        img: CaninMini,
        stock: 15,
        descripcion: 'El Alimento Húmedo Sieger Energy Recovery es un alimento balanceado completo para perros y gatos adultos, formulado con una concentración de nutrientes específicos, sumamente digestibles.El Alimento Maintenance Criadores Adulto está desarrollado especialmente para perros adultos de todos los tamaños, de entre 1 y 7 años de edad. '
    },
    {
        id: '8',
        name: 'Pouch Royal Canin Mini Adulto - 85 Gr',
        price: 690,
        category: 'alimentos',
        img: CaninMini,
        stock: 43,
        descripcion: 'Royal Canin Pouch para Perro Mini Adulto, ayuda a mantener el peso ideal en los perros de tallas pequeñas y contiene nutrientes que ayudan a mantener la piel saludable. Está enriquecido con EPA-DHA.'
    },
    {
        id: '9',
        name: 'Pouch Homemade Delights Country Beef Perro Adulto - 100 Gr',
        price: 592.50,
        category: 'alimentos',
        img: CaninMini,
        stock: 20,
        descripcion: 'El Pouch Homemade Delights Country Beef Perro Adulto es un alimento húmedo balanceado desarrollado a partir de una fórmula equilibrada de macronutrientes, micronutrientes, vitaminas y minerales de alta calidad, que cubre los requerimientos alimenticios de tu perro adulto desde los 12 meses de edad.'
    },
    {
        id: '10',
        name: 'Alimento Maintenance Criadores Adulto - 22 kg',
        price: 13500,
        category: 'alimentos',
        img: CaninMini,
        stock: 18,
        descripcion: 'El Alimento Agility Carne Perro Adulto aporta todos los nutrientes necesarios para llevar una vida saludable, cubriendo los requerimientos específicos de cada etapa de vida.'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))

        }, 500)
    })
}

export const getProductsByCategory = (category)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter( prod => prod.category === category ))
        }, 500);
    })
} */