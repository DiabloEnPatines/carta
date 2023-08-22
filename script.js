const quesoImage = './images/queso.jpg';
const quesoChocloImage = './images/queso_choclo.jpg';
const quesoChampinon = './images/queso_champinon.jpg';
const quesoChampinonChoclo = './images/queso_champinon_choclo.jpg';
const napolitana = './images/napolitana.jpg';
const queso = './images/queso.jpg';
const quesoEspinaca = './images/queso_espinaca.jpg';
const quesoAceituna = './images/queso_aceituna.jpg';
const jamonQueso = './images/jamon_queso.jpg';
const quesoCamaron = './images/queso_camaron.jpg';
const quesoMechada = './images/mechada_queso.jpg';
const mariscos = './images/pino_marisco.jpg';
const Chaparrita = './images/chaparrita.jpg';


const papaIndividual = './images/IMG-20230816-WA0058.jpg';

const menuData = [
    {
      title: 'Empanadas',
      items: [
        {
          title: 'Queso Pollo Choclo',
          description: 'Rellena con Queso, Pollo Picado y Choclo en granos.',
          price: '$2.400',
          image: quesoImage
        },
        {
          title: 'Queso Choclo',
          description: 'Relleno de Queso y Choclo en granos.',
          price: '$2.100',
          image: quesoChocloImage
        },
        {
            title: 'Queso Champiñon',
            description: 'Relleno de Queso y Champiñón natural picado.',
            price: '$2.200',
            image: quesoChampinon
        },
        {
            title: 'Queso Champiñon Choclo',
            description: 'Relleno de Queso, Champiñón Natural Picado y Choclo en granos.',
            price: '$2.400',
            image: quesoChampinonChoclo
        },
        {
            title: 'Napolitana',
            description: 'Napolitana rellena con queso, tomate y jamón picado, más aceituna entera y un toque de orégano.',
            price: '$2.200',
            image: napolitana
        },
        {
            title: 'Queso',
            description: 'Rellena con Queso',
            price: '$1.900',
            image: queso
        },
        {
            title: 'Queso Espinaca',
            description: 'Rellena con Queso y Espinaca picada',
            price: '$2.100',
            image: quesoEspinaca
        },
        {
            title: 'Queso Aceituna',
            description: 'Rellena con Queso y aceitunas picadas',
            price: '$2.100',
            image: quesoAceituna
        },
        {
            title: 'Jamón Queso',
            description: 'Rellena con Jamón picado y Queso',
            price: '$2.100',
            image: jamonQueso
        },
        {
            title: 'Queso Camarón',
            description: 'Rellena con Queso y Camarones picados',
            price: '$2.500',
            image: quesoCamaron
        },
        {
            title: 'Queso Mechada',
            description: 'Rellena con Queso y Carne picada',
            price: '$2.500',
            image: quesoMechada
        },
        {
            title: 'Mariscos',
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
          title: 'Pollo',
          description: 'Hand Roll relleno de Pollo, Queso Crema y Cebollín',
          price: '$2.300',
          image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
            title: 'Champiñon',
            description: 'Hand Roll relleno de Champiñón, Queso Crema y Cebollín',
            price: '$2.300',
            image: 'ruta_imagen_hand_roll_salmon.jpg',
        },
        {
          title: 'Camarón',
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
  ];const menuItemsContainer = document.getElementById("menu-items");

  menuData.forEach(category => {
      const categoryId = category.title.toLowerCase().replace(/ /g, '-');
  
      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent = category.title;
      categoryTitle.id = categoryId; // Asigna el ID a la categoría
      menuItemsContainer.appendChild(categoryTitle);
  
      category.items.forEach(item => {
          const menuItem = document.createElement("div");
          menuItem.className = "menu-item";
  
          
          const itemText = document.createElement("div");
          itemText.className = "menu-item-text";
  
          const itemTitle = document.createElement("h3");
          itemTitle.className = "item-title";
          itemTitle.textContent = item.title;
          itemText.appendChild(itemTitle);
  
          const itemDescription = document.createElement("p");
          itemDescription.className = "item-description";
          itemDescription.textContent = item.description;
          itemText.appendChild(itemDescription);
  
          const itemPrice = document.createElement("p");
          itemPrice.className = "item-price";
          itemPrice.textContent = `Precio: ${item.price}`;
          itemText.appendChild(itemPrice);
  
          menuItem.appendChild(itemText);
          menuItemsContainer.appendChild(menuItem);

          const itemImage = document.createElement("img");
          itemImage.className = "menu-item-image";
          itemImage.src = item.image;
          itemImage.alt = item.title;
          menuItem.appendChild(itemImage);
  
      });
  });
  
  menuData.forEach(category => {
      const categoryLink = document.createElement("a");
      categoryLink.href = `#${category.title.toLowerCase().replace(/ /g, '-')}`;
      categoryLink.textContent = category.title;
      categoryLink.classList.add("navbar-link"); // Agrega una clase para estilizar los enlaces del navbar
      document.querySelector(".navbar-links").appendChild(categoryLink);
  });
  