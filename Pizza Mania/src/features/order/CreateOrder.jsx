import { useState } from "react";
import { Form, redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

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

  return (
    <div className="max-w-3xl mx-auto overflow-scroll p-5">
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required className="input" />
        </div>

        <div>
          <label >Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
          </div>
          {formErroes?.phone && <p>{formErroes.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required
              className="input"
            />
          </div>
        </div>

        <div>
          <input
            className="h-4 w-4 accent-yellow-400 focus-outline-none focus:ring-yellow-400 focus:ring-offset-1 focus:ring-2"
            type="checkbox"
            name="priority"
            id="priority"
          // value={withPriority}
          // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>

          <Button disabled={isSubmitting}
          >
            {!isSubmitting ? "Order now" : "Placing Order..."}
          </Button>

        </div>
      </Form>
    </div>
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