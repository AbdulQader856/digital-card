'use client';
import React from 'react';


const AppointmentSection = ({styles}) => {
  return (
    <section className={styles.appointmentSection}>
      <div className={styles.wrapper}>
        <div className={styles.break}></div>
        <h1 className={`${styles.section_heading}`}>
          Make an Appointment
        </h1>

        {/* Date Slot */}
        <div className={`${styles.date_slot} mt-4 mb-4`}>
          <label htmlFor="myID" className={`${styles.date_label}`}>
              Date
          </label>
          <div className="w-full sm:w-2/12">
            <input
              id="myID"
              type="date"
              placeholder="Pick a Date"
              className={`${styles.date_input}`}
            />
          </div>
        </div>

        {/* Time Slots */}
        <div className={`${styles.time_slots} mb-4`}>
          <div className={`${styles.available_slots}`}>
              08:10 - 20:00
          </div>

          <div className={`${styles.available_slots}`}>
              08:10 - 20:00
          </div>
        </div>

        <div className={`${styles.time_slots}`}>
          <div className={`${styles.available_slots}`}>
              08:10 - 20:00
          </div>

          <div className={`${styles.available_slots}`}>
              08:10 - 20:00
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="button"
            className={`${styles.submit_btn}`}
          >
            Make an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

// 'use client';

// import { useState, useMemo } from 'react';
// import { format, parseISO } from 'date-fns';

// const AppointmentForm = ({Appointments}) => {
//   const sectionData = Appointments

//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   const rawAppointments = sectionData?.appointments || {};

//   const dayOfWeek = useMemo(() => {
//     if (!selectedDate) return '';
//     const dateObj = parseISO(selectedDate);
//     return format(dateObj, 'EEEE').toLowerCase();
//   }, [selectedDate]);

//   const availableSlots =
//     rawAppointments[dayOfWeek] ||
//     rawAppointments[dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)] ||
//     [];

//   const handleInputChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSave = (e) => {
//     e.preventDefault();

//     const appointmentData = {
//       ...formData,
//       date: format(parseISO(selectedDate), 'dd MMM yyyy'),
//       from_time: selectedSlot?.start,
//       to_time: selectedSlot?.end,
//       type: sectionData?.type || 'free',
//       amount: sectionData?.type === 'paid' ? sectionData?.amount : '',
//     };

//     console.log('Submitted Appointment:', appointmentData);

//     setShowModal(false);
//     setFormData({ name: '', email: '', phone: '' });
//     setSelectedSlot(null);
//   };

//   return (
//     <section className="py-10 bg-gray-50 ">
//       <h4 className="text-center text-2xl font-bold text-blue-700 mb-6">
//         Make an Appointment
//       </h4>

//       <div className="max-w-2xl mx-auto px-4 space-y-6">
//         <div>
//           <label className="block text-sm font-medium mb-1">Select a Date</label>
//           <input
//             type="date"
//             className="w-full p-2 border rounded"
//             value={selectedDate}
//             onChange={(e) => {
//               setSelectedDate(e.target.value);
//               setSelectedSlot(null);
//             }}
//           />
//         </div>

//         {selectedDate && (
//           <>
//             <p className="text-sm text-gray-600">
//               Available slots for{' '}
//               <strong>
//                 {dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}
//               </strong>
//             </p>

//             {availableSlots.length === 0 ? (
//               <p className="text-gray-500">No time slots available for this date.</p>
//             ) : (
//               <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
//                 {availableSlots.map((slot, index) => {
//                   const label = `${slot.start} - ${slot.end}`;
//                   return (
//                     <button
//                       key={index}
//                       className={`p-2 border rounded text-sm text-center ${
//                         selectedSlot === slot
//                           ? 'bg-blue-600 text-white'
//                           : 'bg-white hover:bg-gray-100'
//                       }`}
//                       onClick={() => {
//                         setSelectedSlot(slot);
//                         setShowModal(true);
//                       }}
//                     >
//                       {label}
//                     </button>
//                   );
//                 })}
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Modal */}
//       {showModal && selectedSlot && (
//         <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 px-2">
//           <div className="bg-white rounded-lg p-2 w-full max-w-md relative mx-2">
//             <h5 className="text-lg font-bold mb-4">Make Appointment</h5>

//             <form className="space-y-4" onSubmit={handleSave}>
//               <div>
//                 <label className="block text-xs font-medium">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Enter Name"
//                   className="w-full p-2 border rounded"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   placeholder="Enter Email"
//                   className="w-full p-2 border rounded"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-medium">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   required
//                   placeholder="Enter Phone"
//                   className="w-full p-2 border rounded"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="text-sm text-gray-700">
//                 <p>
//                   <strong>Selected Slot:</strong>{' '}
//                   {selectedSlot.start} - {selectedSlot.end}
//                 </p>
//                 <p>
//                   <strong>Date:</strong>{' '}
//                   {format(parseISO(selectedDate), 'dd MMM yyyy')}
//                 </p>
//                 {sectionData?.type === 'paid' && sectionData.amount && (
//                   <p>
//                     <strong>Amount:</strong> ${sectionData.amount}
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-end gap-3">
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded"
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Discard
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AppointmentForm;