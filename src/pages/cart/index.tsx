import { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import {
  decreaseAmount,
  increaseAmount,
  removeFromCart,
  type ICartProduct,
} from "../../lib/features/cartSlice";
import { Link } from "react-router-dom";
import empty from "../../assets/empty.webp"

const Cart = () => {
  const carts = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const total = useMemo(() => {
    return carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [carts]);

  return (
    <div className="container mx-auto p-6">
      <h3 className="text-[40px] font-medium text-center my-12">Cart</h3>

      {carts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <table className="w-full border-t border-gray-200">
              <thead>
                <tr className="text-left text-gray-500 text-sm border-b">
                  <th className="py-3">Product</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {carts.map((item: ICartProduct) => (
                  <tr key={item.id} className="align-middle">
                    <td className="py-4 flex items-center gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg bg-[#F3F5F7]"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Stock: {item.stock}
                        </p>
                        <button
                          className="mt-1 text-[#6C7275] hover:underline text-sm"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          ✖ Remove
                        </button>
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center border rounded-md w-fit">
                        <button
                          disabled={item.quantity <= 1}
                          onClick={() => dispatch(decreaseAmount(item))}
                          className="px-3 py-1 disabled:opacity-30 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          disabled={item.quantity >= item.stock}
                          onClick={() => dispatch(increaseAmount(item))}
                          className="px-3 py-1 disabled:opacity-30 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="text-gray-700 font-medium">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white shadow rounded-xl p-6 h-fit border">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Cart summary
            </h2>

            <div className="space-y-2 text-gray-600">
              <p className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </p>
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between text-lg font-bold text-gray-900 mb-[30px]">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to={"/checkout"} className="px-auto bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition grid place-items-center">
  Checkout
</Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <img className="min-w-[350px]"
            src={empty}
            width={150}
            alt="Empty cart"
          />
          <p className="text-gray-500 mt-4">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default memo(Cart);
