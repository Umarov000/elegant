import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../../lib";
import type { ICartProduct } from "../../../lib/features/cartSlice";

const AccountOrders = () => {
  const orders = useSelector((state: RootState) => state.orders.value);

  const totalAmount = useMemo(() => {
    return orders.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [orders]);

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <img
          src="https://uzum.uz/static/img/shopocat.490a4a1.png"
          width={150}
          alt="No orders"
        />
        <p className="text-gray-500 mt-4">You don't have any orders yet.</p>
        <Link
          to="/shop"
          className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-t border-gray-200">
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b">
              <th className="py-3">Product</th>
              <th className="py-3">Quantity</th>
              <th className="py-3">Price</th>
              <th className="py-3">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((item: ICartProduct) => (
              <tr key={item.id} className="align-middle hover:bg-gray-50">
                <td className="py-4">
                  <Link
                    to={`/product/${item.id}`}
                    className="flex items-center gap-4 group"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg bg-[#F3F5F7] group-hover:scale-105 transition"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:underline">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Stock: {item.stock}
                      </p>
                    </div>
                  </Link>
                </td>
                <td className="text-gray-700">{item.quantity}</td>
                <td className="text-gray-700 font-medium">
                  ${item.price.toLocaleString()}
                </td>
                <td className="font-bold text-gray-900">
                  ${(item.price * item.quantity).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end border-t pt-4">
        <p className="text-lg font-bold text-gray-900">
          Total amount: ${totalAmount.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default memo(AccountOrders);
