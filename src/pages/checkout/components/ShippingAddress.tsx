// src/components/ShippingAddress.tsx

import React, { type ChangeEvent } from 'react';
import type { FormData } from '../../../types';

interface ShippingAddressProps {
  formData: FormData;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const ShippingAddress: React.FC<ShippingAddressProps> = ({ formData, handleChange }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-xl mb-6">
      <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
      <div className="mb-4">
        <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address</label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          required
        >
          <option value="">Country</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="town" className="block text-sm font-medium text-gray-700">Town / City</label>
        <input
          type="text"
          id="town"
          name="town"
          value={formData.town}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            required
          />
        </div>
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            required
          />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="useDifferentBilling"
          name="useDifferentBilling"
          checked={formData.useDifferentBilling}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="useDifferentBilling" className="ml-2 block text-sm text-gray-900">Use a different billing address (optional)</label>
      </div>
    </div>
  );
};

export default ShippingAddress;