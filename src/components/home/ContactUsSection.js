import { ContactUsForm } from "/src/components/ui/general/Forms";

export default function ContactUsSection() {
  return (
    <section id="contact" className="bg-white pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl text-black mb-2">Contact Us</h2>
        <p className="text-sm text-gray-700 mb-6">
          Any questions or remarks? Just write us a message!
        </p>

        {/* FORM */}
        <ContactUsForm/>

        <button
          type="submit"
          className="bg-primary hover:bg-orange-700 text-white font-semibold px-10 py-2 rounded-full transition mb-12"
        >
          SUBMIT
        </button>
      </div>

      {/* Bottom Icons Row */}
      <div className="bg-primary py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around text-white text-center px-4 gap-10">
          {/* About */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                <img src="/images/i.png" alt="Run" className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-1">A PRODUCT BY KCS EDUTECH PVT.LTD</h3>
            <p className="text-sm pt-2">CIN: U80302RJ2013PTC044524</p>
            <p className="text-sm pt-2">GST: 08AAFCK3959C2ZG</p>
            <p className="text-sm pt-2">PAN: AAFCK3959C</p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                <img src="/images/phone.png" alt="Phone" className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-1">CONTACT</h3>
            <p className="text-sm pt-2">Phone No.: +91-97832-07700</p>
            <p className="text-sm pt-2">Email: info@digibcard.com</p>
          </div>

          {/* Location */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                <img src="/images/location.png" alt="Location" className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">OUR OFFICE LOCATION</h3>
            <p className="text-sm">G-1 242, The Paradise Complex,</p>
            <p className="text-sm">Opposite Agarwal Dharmshala,</p>
            <p className="text-sm">Sector 11, Hiran Magri,</p>
            <p className="text-sm">Udaipur, Rajasthan 313001</p>
          </div>
        </div>
      </div>
    </section>
  );
}
