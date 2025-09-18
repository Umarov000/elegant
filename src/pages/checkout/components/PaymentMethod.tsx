// src/components/PaymentMethod.tsx

import React, { type ChangeEvent } from 'react';
import type { FormData } from '../../../types';

interface PaymentMethodProps {
  formData: FormData;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ formData, handleChange }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-xl mb-6">
      <h2 className="text-xl font-bold mb-4">Payment method</h2>
      <div className="space-y-4">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="payByCard"
              name="paymentMethod"
              type="radio"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 cursor-pointer"
            />
          </div>
          <label htmlFor="payByCard" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
            Pay by Card Credit
          </label>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="payByPaypal"
              name="paymentMethod"
              type="radio"
              value="paypal"
              checked={formData.paymentMethod === 'paypal'}
              onChange={handleChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 cursor-pointer"
            />
          </div>
          <label htmlFor="payByPaypal" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
            Paypal
          </label>
        </div>
      </div>
      {formData.paymentMethod === 'card' && (
        <div className="mt-4">
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-xs font-medium text-gray-700 uppercase tracking-wide">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 1234 1234 1234"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expirationDate" className="block text-xs font-medium text-gray-700 uppercase tracking-wide">Expiration Date</label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                required
              />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-xs font-medium text-gray-700 uppercase tracking-wide">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="CVC code"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                required
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;