import { useNavigate } from "react-router-dom";
import { addProductToCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { title, brand, description, price, images, id } = product;

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/product/${id}`)
  }

  const dispatch = useDispatch()

  const handleAddCart = e => {
  e.stopPropagation()
  dispatch (addProductToCartThunk(product.id,1))
  }

  return (
    <article onClick={handleNavigate}>
      <header>
        <img src={images[0].url} alt="img" />
      </header>
      <section>
        <h4>{brand}</h4>
        <h3>{title}</h3>
        <div>
          <span>Price</span>
          <span>{price}</span>
        </div>
        <button onClick={handleAddCart}>
          <i className='bx bx-cart-add'></i>
        </button>
      </section>
    </article>
  );
};
export default ProductCard 