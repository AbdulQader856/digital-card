// 'use client';
// import { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { HiOutlineCheckCircle } from 'react-icons/hi';

// const plans = [
//   { id: 3, years: '3 Year', price: 999 },
//   { id: 2, years: '2 Year', price: 799 },
//   { id: 1, years: '1 Year', price: 599 },
// ];

// export default function ChoosePlanPage() {
//   const [selectedPlan, setSelectedPlan] = useState(3);
//   const [collapsed, setCollapsed] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false); // new

//   const discount = 0;
//   const selectedPrice = plans.find(p => p.id === selectedPlan)?.price ?? 0;

//   return (
//     <div className="flex h-screen overflow-hidden bg-[#f4f7fc] text-gray-800">
      
//       {/* Sidebar */}
//       <aside className={`
//         fixed top-0 left-0 h-full z-40 bg-white border-r
//         transition-all duration-300 ease-in-out
//         ${mobileOpen ? 'w-64' : 'w-0'} 
//         lg:static lg:w-${collapsed ? '20' : '64'} overflow-hidden
//       `}>
//         <div className="p-4"></div>
//           <div className="flex items-center justify-between mb-6">
//             {!collapsed && (
//               <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
//             )}
//             <button onClick={() => {
//               if (window.innerWidth < 1024) setMobileOpen(false);
//               else setCollapsed(!collapsed);
//             }} className="text-xl ml-auto">
//               <FaBars />
//             </button>
//           </div>
//           {!collapsed && (
//             <>
//               <input type="text" placeholder="Search" className="w-full px-3 py-2 border rounded mb-4 text-sm" />
//               <ul className="space-y-3 text-sm">
//                 {[
//                   'Dashboard', 'VCards', 'Inquiries', 'Appointments',
//                   'Product Orders', 'Virtual Backgrounds', 'Affiliations',
//                   'Storage', 'Settings'
//                 ].map((item, idx) => (
//                   <li key={idx} className={`hover:bg-blue-50 hover:border-l-blue-600 cursor-pointer ${item === 'VCards' ? 'text-orange-600 font-semibold' : ''}`}>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//       </aside>

//       {/* Mobile Overlay */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-auto">
//         {/* Header */}
//         <header className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-sm text-gray-500 font-medium underline">VCards</h1>
//             <button className="mt-2 bg-white text-sm border px-4 py-1 rounded-md shadow-sm hover:bg-gray-50 transition">
//               ← Go To Dashboard
//             </button>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-semibold">
//               U
//             </div>
//             <span className="text-sm font-medium">User</span>
//           </div>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-full mx-auto">
//           {/* Plan Selection */}
//           <div className="lg:col-span-2">
//             <h2 className="text-xl font-semibold mb-4">Choose Card Validity</h2>
//             <div className="space-y-4">
//               {plans.map(plan => (
//                 <label key={plan.id} htmlFor={`plan-${plan.id}`}>
//                   <div
//                     className={`flex justify-between items-center border rounded-lg p-6 cursor-pointer transition ${
//                       selectedPlan === plan.id
//                         ? 'border-orange-500 bg-white ring-2 ring-orange-300'
//                         : 'bg-white border-gray-200'
//                     }`}
//                   >
//                     <div className="text-xl font-bold">{plan.years}</div>
//                     <div className="flex items-center gap-3 text-xl font-bold text-gray-900">
//                       ₹{plan.price}
//                       <input
//                         type="radio"
//                         id={`plan-${plan.id}`}
//                         name="plan"
//                         checked={selectedPlan === plan.id}
//                         onChange={() => setSelectedPlan(plan.id)}
//                         className="accent-orange-600 scale-125"
//                       />
//                     </div>
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Plan Summary */}
//           <div>
//             <div className="bg-white shadow rounded-md p-6 mb-4">
//               <h3 className="text-lg font-semibold mb-4">Plan Summary</h3>
//               <div className="space-y-3 text-sm">
//                 <div className="flex justify-between">
//                   <span>Price</span>
//                   <span>₹ {selectedPrice.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Discount</span>
//                   <span>₹ {discount.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between font-bold">
//                   <span>Total</span>
//                   <span>₹ {(selectedPrice - discount).toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white shadow rounded-md p-6 mb-4">
//               <label className="text-sm font-medium block mb-2">Have a Coupon Code?</label>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Enter code"
//                   className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
//                 />
//                 <button className="bg-indigo-500 text-white px-4 rounded hover:bg-indigo-600 text-sm">
//                   Apply
//                 </button>
//               </div>
//             </div>

//             <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition text-sm font-semibold">
//               Pay Now
//             </button>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="text-center mt-10 text-sm text-gray-500">
//           All Rights Reserved ©2025 <a href="/" className="text-blue-600 underline">DigiBcard</a>
//         </footer>
//       </main>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const plans = [
  { title: "3 Year", price: 999 },
  { title: "2 Year", price: 799 },
  { title: "1 Year", price: 599 },
];

export default function ChoosePlanPage() {
  const [collapsed, setCollapsed] = useState(false); // for desktop
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [coupon, setCoupon] = useState('');

  const selectedPlan = plans[selected];

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Page Body */}
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
          <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded text-sm mb-6">← Go To Dashboard</button>

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
