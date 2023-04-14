import '../index.css'

const CartItem = ({ data, delFromCart }) => {
    let { id, name, price, quantity,descripcion } = data;
  
    return (
      <div style={{ borderBottom: "thin solid gray" }}>
      
<div className='card-content'>
  
        <h4 >{name}</h4>
        <h4 >
          ${price}.00 x {quantity} = ${price * quantity}.00
        </h4>
        <h4>{descripcion}</h4>
        <button  className='boton'  onClick={() => delFromCart(id)}>Eliminar Uno</button>
        <br />
        <button className='boton' onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
        <br />
        <br />
        </div>
        </div>
     
    );
  };
  
  export default CartItem;