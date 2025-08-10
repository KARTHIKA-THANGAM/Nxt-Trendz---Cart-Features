// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Payment from '../Payment'
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
          <Popup
            modal
            trigger={
              <button className="checkout-btn" type="button">
                Checkout
              </button>
            }
            position="top left"
          >
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
