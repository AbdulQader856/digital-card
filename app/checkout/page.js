'use client';

import { useState } from 'react';

const plans = [
  { title: "3 Year", price: 999 },
  { title: "2 Year", price: 799 },
  { title: "1 Year", price: 599 },
];

export default function ChoosePlanPage() {
  const [selected, setSelected] = useState(0);
  const [coupon, setCoupon] = useState('');
  const selectedPlan = plans[selected];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-5xl lg:flex overflow-hidden">
        {/* Left Panel */}
        <div className="w-full lg:w-2/3 p-8 border-r border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

          {/* Billing Frequency */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-6">Billing Frequency</h3>
            <div className="flex flex-col gap-4">
              {plans.map((plan, i) => (
                <label
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`border rounded-md cursor-pointer flex justify-between items-center px-6 py-6 text-3sm font-medium transition-all ${
                    selected === i
                      ? 'border-primary bg-orange-50 ring-2 ring-primary'
                      : 'border-gray-300 hover:bg-orange-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="plan"
                      className="accent-indigo-600"
                      checked={selected === i}
                      onChange={() => setSelected(i)}
                    />
                    {plan.title}
                  </div>
                  <span className="font-semibold">₹{plan.price}/-</span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment Info (Optional for Future Use)
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Payment information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name on card" className="px-3 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Card Number" className="px-3 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Address Line 1" className="px-3 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Address Line 2" className="px-3 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="City" className="px-3 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="State" className="px-3 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Country" className="px-3 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-2" />
            </div>
          </div> */}
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-8">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Price</span>
              <span>₹{selectedPlan.price}.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>₹0.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{selectedPlan.price}.00</span>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="mt-6">
            <label className="text-sm font-medium block mb-1">Have a Coupon Code?</label>
            <div className="flex">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                type="text"
                placeholder="Enter code"
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-r-none w-full"
              />
              <button className="bg-primary text-white px-4 rounded-r-md hover:bg-orange-700 text-sm">Apply</button>
            </div>
          </div>

          {/* Pay Now Button */}
          <button className="mt-6 w-full bg-primary hover:bg-orange-700 text-white py-3 rounded text-sm font-medium transition">
            Pay ₹{selectedPlan.price}.00 Now
          </button>
        </div>
      </div>
    </div>
  );
}

