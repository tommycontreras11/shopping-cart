import { useId } from 'react'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/userCart.js'

function CartItem({ thumbnail, title, price, quantity, addToCart }) {
    return (
        <li>
            <img
                src={thumbnail} alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const { addToCart, clearCart, cart } = useCart()
    const cartCheckboxId = useId()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className="cart">
                <ul>

                    {cart.map(product => (
                        <CartItem key={product.id} {...product}
                            addToCart={() => addToCart(product)} />
                    ))}
                </ul>
                <button onClick={() => clearCart()}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}