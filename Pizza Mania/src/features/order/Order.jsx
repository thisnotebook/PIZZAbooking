// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utills/helpers"




function Order() {

  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex justify-between flex-wrap gap-2">
        <h2 className="font-semibold text-xl">Order #1234 Status</h2>

        <div className="uppercase font-semibold tracking-wider space-x-2">
          {priority && <span className="bg-red-500 rounded-full px-3 py-1 text-red-50">Priority</span>}
          <span className="bg-green-500 text-white px-3 py-1 rounded-full">{status} order</span>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-2 bg-stone-200 px-2 py-6 ">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500 border-b border-t">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-stone-200">
        {cart.map(item => <OrderItem item={item} key={item.id} />)}
      </ul>

      <div className="space-y-2 bg-stone-200 px-2 py-6">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-sm font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
