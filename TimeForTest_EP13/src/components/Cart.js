import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="flex justify-center m-4 p-4">
        <div>
          <h2>Items in cart</h2>
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h1>Cart is empty. Add items to the cart!</h1>
          )}
          <div className="w-6/12 m-auto">
            {/* Todo map all the items here */}
            <ItemList items={cartItems} />
          </div>
        </div>
        {/* <div className="w-3/12 m-auto">
          <h2>Price details</h2>
          <div></div>
        </div> */}
      </div>
      <h2>Checked out items will appear here</h2>
    </div>
  );
};

export default Cart;
