import { TYPES } from "../actions/shoppingAction";
export const shoppingInitialState = {
  products: [
    { id: 1, name: "Among Us",descripcion: 'El juego consiste en un grupo de tripulantes a bordo de una nave espacial que deben supervisar el adecuado funcionamiento del vehículo, al mismo tiempo que investigan a los impostores que intentan sabotear la nave y asesinarlos durante cada partida.',
     price: 100 },
    { id: 2, name: "ARK", descripcion: 'En el juego, los jugadores deben sobrevivir en un mundo lleno de dinosaurios y otros animales prehistóricos que deambulan por el mapa, peligros naturales y otros jugadores potencialmente hostiles.',price: 950 },
    { id: 3, name: "Call Of Duty: Vanguard",descripcion: 'Es un videojuego de disparos en primera persona, donde se puedes jugar el modo historia, zombies y multijugador.', price: 300 },
    { id: 4, name: "Farcry 6",descripcion: 'Es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry.', price: 540 },
    { id: 5, name: "Minecraft", descripcion: 'Es un videojuego de construcción, de tipo mundo abierto o sandbox creado originalmente por el sueco Markus Persson y posteriormente desarrollado por su empresa, Mojang Studios.',price: 549 },
    { id: 6, name: "The Last of Us: Part TWO", descripcion: 'Es un juego de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.',price: 699 },
  ],
  cart: [],
};

/*const shoppingInitialState = {
  {nombre:'Among Us',descripcion: 'El juego consiste en un grupo de tripulantes a bordo de una nave espacial que deben supervisar el adecuado funcionamiento del vehículo, al mismo tiempo que investigan a los impostores que intentan sabotear la nave y asesinarlos durante cada partida.', clave: 'AMU78945', precio: 39.99},
  {nombre:'ARK: Survival Evolved',descripcion: 'En el juego, los jugadores deben sobrevivir en un mundo lleno de dinosaurios y otros animales prehistóricos que deambulan por el mapa, peligros naturales y otros jugadores potencialmente hostiles.', clave: 'ASE58791', precio: 242.99},
  {nombre:'Call Of Duty: Vanguard',descripcion: 'Es un videojuego de disparos en primera persona, donde se puedes jugar el modo historia, zombies y multijugador.', clave: 'CODV7896', precio: 1650.00},
  {nombre:'Farcry 6',descripcion: 'Es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry.', clave: 'F6567951', precio: 1199.00},
  {nombre:'Forza Horizon 5',descripcion: 'Es un videojuego de carreras ambientado en un entorno de mundo abierto con sede en México.', clave: 'FH576428', precio: 1499.00},
  {nombre:'Halo Infinite',descripcion: 'Es un videojuego de disparos en primera persona próximo a estrenarse de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries.', clave: 'HI649782', precio: 1499.00},
  {nombre:'Minecraft',descripcion: 'Es un videojuego de construcción, de tipo mundo abierto o sandbox creado originalmente por el sueco Markus Persson y posteriormente desarrollado por su empresa, Mojang Studios.', clave: 'MNFT4682', precio: 496.00},
  {nombre:'Plantas Vs Zombies',descripcion: 'Es un videojuego de estilo defensa de torres desarrollado y publicado el 5 de mayo de 2009 por PopCap Games.', clave: 'PVZ23496', precio: 55.99},
  {nombre:'Roblox',descripcion: 'Es una plataforma de videojuegos en línea, el cual tiene un sistema de creación de juegos desarrollado por Roblox Corporation en la que los usuarios pueden crear sus propios mundos virtuales.', clave: 'RX975264', precio: 109.99},
  {nombre:'The Last of Us: Part TWO',descripcion: 'Es un juego de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.', clave: 'TLOSPT96', precio: 722.00}
},
cart: [],
};;
*/

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );


      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}