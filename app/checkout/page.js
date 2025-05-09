'use client';

import { useState } from 'react';
import TemplateModal from '@/src/components/ui/buttons/TemplateModal';

const plans = [
  { title: "3 Year", price: 999 },
  { title: "2 Year", price: 799 },
  { title: "1 Year", price: 599 },
];

export default function ChoosePlanPage() {
  const [selected, setSelected] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [open, setOpen] = useState(false);

  const selectedPlan = plans[selected];

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Page Body */}
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
          <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded text-sm mb-6">← Go To Dashboard</button>
            {/* <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={() => setOpen(true)}
            >
              Choose Template
            </button>

            <TemplateModal isOpen={open} onClose={() => setOpen(false)} /> */}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plan Selection */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold">Choose Card Validity</h2>
              {plans.map((plan, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`cursor-pointer border rounded px-6 py-4 flex justify-between items-center transition-all shadow-sm ${
                    selected === i ? 'border-orange-500 ring-2 ring-orange-500 bg-orange-50' : 'bg-white'
                  }`}
                >
                  <span className="text-xl font-bold">{plan.title}</span>
                  <span className="text-xl font-bold">₹{plan.price}</span>
                </div>
              ))}
            </div>

            {/* Plan Summary */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Plan Summary</h2>
              <div className="bg-white rounded shadow p-4 text-sm space-y-3">
                <div className="flex justify-between">
                  <span>Price</span>
                  <span>₹{selectedPlan.price}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>₹0.00</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total</span>
                  <span>₹{selectedPlan.price}.00</span>
                </div>
              </div>

              <div className="bg-white rounded shadow p-4 space-y-3">
                <label className="block text-sm font-medium">Have a Coupon Code?</label>
                <div className="flex">
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l text-sm"
                  />
                  <button className="bg-indigo-600 text-white px-4 rounded-r text-sm hover:bg-indigo-700">Apply</button>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">Pay Now</button>
            </div>
          </div>
        </main>

        <footer className="text-center text-xs text-gray-500 py-4 border-t">
          All Rights Reserved ©2025 <a className="text-indigo-600 underline" href="https://digibcard.com">DigiBCard</a>
        </footer>
      </div>
    </div>
  );
}
