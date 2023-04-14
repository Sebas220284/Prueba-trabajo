const ProductItem = ({ data, addToCart }) => {
    let { id, name, price,descripcion } = data;
    return (
      <div className="product-card">
        <div className="product-info">
        <h4 >{name}</h4>
        <h4>{descripcion}</h4>
        <span className="product-price">${price}.00</span>
        <button className="botoon" onClick={() => addToCart(id)}>Agregar</button>
      </div>
      </div>
    );
  };
  
  export default ProductItem;