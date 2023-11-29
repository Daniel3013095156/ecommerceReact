import { useDispatch } from "react-redux"
import { deleteProductFromCartThunk } from "../../store/slices/cart.slice"

const CartProduct = ({ prod }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
    dispatch (deleteProductFromCartThunk(prod.id))
    }

    return (

        <section>
            <header>
                <img src={prod.product.images[0].url} alt="" />
            </header>
            <article>
                <h3>{prod.product.title}</h3>
                <span>{prod.quantity}</span>
                <div>
                    <span>Price</span>
                    <span>{prod.product.price}</span>
                </div>
            </article>
            <button onClick={handleDelete}>
                <i className ='bx bx-trash'></i>
            </button>
        </section>
    )
}
export default CartProduct