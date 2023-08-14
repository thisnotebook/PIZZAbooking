import { useState } from "react";
import { Form, redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },

  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const naviagtion = useNavigation();
  const isSubmitting = naviagtion.state === 'submitting';
  const formErroes = useActionData();
  const userName = useSelector(state => state.user.username)
  return (
    <div className="px-4 py-6 ">
      <h2 className="mb-6 text-yellow-400 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-[11.5rem]">First Name</label>
          <input type="text" name="customer" required className="input w-full" defaultValue={userName} />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErroes?.phone && <p className="mt-2 text-xs text-red-700 bg-red-100 p-2 rounded-md">{formErroes.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-10 flex items-center gap-2">
          <input
            className="h-4 w-4 accent-yellow-400 focus-outline-none focus:ring-yellow-400 focus:ring-offset-1 focus:ring-2"
            type="checkbox"
            name="priority"
            id="priority"
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>

          <Button disabled={isSubmitting}
            type="primary">
            {!isSubmitting ? "Order now" : "Placing Order..."}
          </Button>

        </div>
      </Form >
    </div >
  );
}

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  }

  const erros = {};
  if (!isValidPhone(data.phone))
    erros.phone = "Please Provide your Number , We requires to contact you";
  if (Object.keys(erros).length > 0) return erros;

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
2