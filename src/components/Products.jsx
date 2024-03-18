import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/userCart.js'

export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                        <img 
                            src={product.thumbnail} 
                            alt={product.title} 
                        />
                        <div>
                            <strong>{product.title} - ${product.price}</strong>
                        </div>
                        <div>
                            <button className={isProductInCart ? 'remove-from-cart-button' : 'add-to-cart-button'} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                            </button>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </main>
    )
}