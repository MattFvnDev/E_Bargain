import {Item} from "./"
import { useSelector } from "react-redux"

const CartItem = () => {
  const { cart } = useSelector((state) => state.cart)
  return (
    <ul className="divide-y divide-gray-300 border-y border-gray-300">
      {cart?.map((item) => (
        <Item key={item.id} {...item}/>
      ))}
    </ul>
  )
}

export default CartItem
