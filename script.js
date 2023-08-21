const quesoImage = require('./images/queso.jpg');
const quesoChocloImage = require('./images/queso_choclo.jpg');
const quesoChampinon = require('./images/queso_champinon.jpg');
const quesoChampinonChoclo = require('./images/queso_champinon_choclo.jpg');
const napolitana = require('./images/napolitana.jpg');
const queso = require('./images/queso.jpg');
const quesoEspinaca = require('./images/queso_espinaca.jpg');
const quesoAceituna = require('./images/queso_aceituna.jpg');
const jamonQueso = require('./images/jamon_queso.jpg');
const quesoCamaron = require('./images/queso_camaron.jpg');
const quesoMechada = require('./images/mechada_queso.jpg');
const mariscos = require('./images/pino_marisco.jpg');
const Chaparrita = require('./images/chaparrita.jpg');


const papaIndividual = require('./images/IMG-20230816-WA0058.jpg');

const menuData = [
    {
      title: 'Empanadas',
      items: [
        {
          title: 'Empanada Queso Pollo Choclo',
          description: 'Rellena con Queso, Pollo Picado y Choclo en granos.',
          price: '$2.400',
          image: quesoImage
        },
        {
          title: 'Empanada Queso Choclo',
          description: 'Relleno de Queso y Choclo en granos.',
          price: '$2.100',
          image: quesoChocloImage
        },
        {
            title: 'Empanada Queso Champiñon',
            description: 'Relleno de Queso y Champiñón natural picado.',
            price: '$2.200',
            image: quesoChampinon
        },
        {
            title: 'Empanada Queso Champiñon Choclo',
            description: 'Relleno de Queso, Champiñón Natural Picado y Choclo en granos.',
            price: '$2.400',
            image: quesoChampinonChoclo
        },
        {
            title: 'Empanada Napolitana',
            description: 'Napolitana rellena con queso, tomate y jamón picado, más aceituna entera y un toque de orégano.',
            price: '$2.200',
            image: napolitana
        },
        {
            title: 'Empanada Queso',
            description: 'Rellena con Queso',
            price: '$1.900',
            image: queso
        },
        {
            title: 'Empanada Queso Espinaca',
            description: 'Rellena con Queso y Espinaca picada',
            price: '$2.100',
            image: quesoEspinaca
        },
        {
            title: 'Empanada Queso Aceituna',
            description: 'Rellena con Queso y aceitunas picadas',
            price: '$2.100',
            image: quesoAceituna
        },
        {
            title: 'Empanada Jamón Queso',
            description: 'Rellena con Jamón picado y Queso',
            price: '$2.100',
            image: jamonQueso
        },
        {
            title: 'Empanada Queso Camarón',
            description: 'Rellena con Queso y Camarones picados',
            price: '$2.500',
            image: quesoCamaron
        },
        {
            title: 'Empanada Queso Mechada',
            description: 'Rellena con Queso y Carne picada',
            price: '$2.500',
            image: quesoMechada
        },
        {
            title: 'Empanada Mariscos',
            description: 'Rellena con Pino y Mariscos',
            price: '$2.400',
            image: mariscos
        },
        {
            title: 'Chaparrita',
            description: 'Rellena con Vienesa y Queso',
            price: '$1.800',
            image: Chaparrita
        },
      ],
    },
    {
      title: 'Hand Rolls',
      items: [
        {
          title: 'Hand Roll Pollo',
          description: 'Hand Roll relleno de Pollo, Queso Crema y Cebollín',
          price: '$2.300',
          image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
            title: 'Hand Roll Champiñon',
            description: 'Hand Roll relleno de Champiñón, Queso Crema y Cebollín',
            price: '$2.300',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
          title: 'Hand Roll de Camarón',
          description: 'Hand Roll Relleno con Camarones picado en trozos, queso crema y cebollín.',
          price: '$2.700',
          image: 'ruta_imagen_hand_roll_atun.jpg',
        },
        {
          title: 'Promo Hand Roll de Camarón',
          description: 'Hand Roll Relleno con Camarones picado en trozos, queso crema y cebollín.',
          price: '$2.700',
          image: 'ruta_imagen_hand_roll_atun.jpg',
        },
        {
            title: 'Promo X3 Hand Roll Pollo',
            description: 'Hand Roll relleno de Pollo, Queso Crema y Cebollín',
            price: '$6.500',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
            title: 'Promo X3 Hand Roll Champiñon',
            description: 'Hand Roll relleno de Champiñón, Queso Crema y Cebollín',
            price: '$6.500',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
            title: 'Promo X3 Hand Roll de Camarón',
            description: 'Hand Roll Relleno con Camarones picado en trozos, queso crema y cebollín.',
            price: '$7.500',
            image: 'ruta_imagen_hand_roll_atun.jpg',
          },
      ],
    },
    {
        title:"Papas Fritas",
        items:[
            {
                title: 'Papas Fritas Tamaño Individual',
                description:'Deliciosas Papas Fritas cortadas en tiras finas.',
                price :' $2.000',
                image: papaIndividual
            },
            {
                title: 'Papas Fritas Tamaño Grande',
                description:'Deliciosas Papas Fritas cortadas en tiras finas.',
                price :' $4.000',
                image: papaIndividual
            },
            {
                title: 'Salchipapas Tamaño Individual',
                description:'Deliciosas Papas Fritas cortadas en tiras finas con vienesas cortada en trozos.',
                price :' $2.500',
                image: "ruta_imagen_papasfritas.jpeg"
            },
            {
                title: 'Salchipapas Tamaño Grande',
                description:'Deliciosas Papas Fritas cortadas en tiras finas con vienesas cortada en trozos.',
                price :' $4.800',
                image: "ruta_imagen_papasfritas.jpeg"
            },
        ],
    },
    {
        title: 'Bebidas',
        items:[
            {
                title: 'Bebida Lata Regular 350cc Pepsi',
                description:'Bebida refrescante aromatizada con azúcar y edulcorantes, en lata 350cc',
                price :'$1.490',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Bebida Lata Regular 350cc Bilz',
                description:'Bebida gaseosa 350cc.',
                price :'$1.490',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Bebida Lata 350cc Pap',
                description:'Bebida gaseosa 350ml.',
                price :'$1.490',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Bebida Lata Regular 350cc Kem',
                description:'Bebida gaseosa 350ml.',
                price :'$1.490',
                image: "ruta_imagen_bebidas_pepsi.png"
            },
            {
                title: 'Néctar Durazno Didrio 300ml Watts',
                description:'Botella de jugo sabor Durazno. 300ml.',
                price :'$1.490',
                image: "ruta_imagen_bebidas_pepsi.png"
            }
        ],
    },
    {
        title: 'Salsas y Aderezos',
        items:[
            {
                title: 'Pocillo de Pebre',
                description:'Salsa típica chilena, que contiene tomate, cebolla, cilantro y ajo picado finamente, todo muy bien condimentado y aliñado. Recuerda que también puedes añadir tu pocillo de pebre al pedir tu empanada.',
                price: '$590',
                image :"ruta_imagen_salsas.jpg",
            }
        ]
    }
  ];
  const menuItemsContainer = document.getElementById("menu-items");

menuData.forEach(category => {
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = category.title;
  menuItemsContainer.appendChild(categoryTitle);

  category.items.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const itemTitle = document.createElement("h3");
    itemTitle.className = "item-title";
    itemTitle.textContent = item.title;

    const itemDescription = document.createElement("p");
    itemDescription.className = "item-description";
    itemDescription.textContent = item.description;

    const itemPrice = document.createElement("p");
    itemPrice.className = "item-price";
    itemPrice.textContent = item.price;

    const itemImage = document.createElement("img");
    itemImage.className = "item-image";
    itemImage.src = item.image;
    itemImage.alt = item.title;

    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(itemImage);

    menuItemsContainer.appendChild(menuItem);
  });
});






  