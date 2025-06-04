// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log(cartList)
      const amount = cartList.reduce(
        (acc, currentValue) => acc + currentValue.quantity * currentValue.price,
        0,
      )
      return (
        <div className="cart-summary-container">
          <h1 className="total-heading">
            Order Total: <span className="amount">Rs {amount} /-</span>
          </h1>
          <p className="total-products-count">
            {cartList.length} items in cart
          </p>
          <button type="button" className="shop-now-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
