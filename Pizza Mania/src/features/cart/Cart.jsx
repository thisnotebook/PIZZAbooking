import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from "../cart/CartItem"
import { useDispatch, useSelector } from 'react-redux';
import cartSlice, { clearItem, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';


function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.username)

  if (!cart.length) return <EmptyCart />
  return (
    <div className='px-4 py-3 '>
      <LinkButton to={"/menu"} >&larr; Back to menu</LinkButton >

      <h2 className='mt-3 text-xl font-semibold'>Your cart,{userName}</h2>
      <ul className='divide-y divide-stone-200 border- mt-3'>
        {cart.map(item => (<CartItem item={item} key={item.key} />))}
      </ul>

      <div className="space-x-3">
        <Button to={"/order/new"} type="primary">Order pizzas</Button>
        <Button type="secondary" onClick={() => dispatch(clearItem())}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
