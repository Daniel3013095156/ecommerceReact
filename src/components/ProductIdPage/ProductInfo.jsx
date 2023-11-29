import { useState } from "react"
import { addProductToCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)

    const handleMinus = () => {
        setQuantity(quantity - 1)
    }

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addProductToCartThunk(product.id, quantity))
    }

    return (
        <article>
            <h3>{product?.brand}</h3>
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <footer>
                <div>
                    <span>Price</span>
                    <span>{product?.price}</span>
                </div>
                <div>
                    <button onClick={handleMinus}>-</button>
                    <div>{quantity}</div>
                    <button onClick={handlePlus}>+</button>
                </div>
                <button onClick={handleAddToCart}>Add to cart</button>
            </footer>
        </article>
    )
}
export default ProductInfo