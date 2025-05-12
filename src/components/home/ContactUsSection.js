import { ContactUsForm } from "../ui/general/Forms";

export default function ContactUsSection() {
  return (
    <section className="bg-white">
      {/* Contact Form */}
      <div className="max-w-4xl mx-auto text-center py-12 px-4">
        <h2 className="text-3xl font-bold text-black mb-2">Contact Us</h2>
        <p className="text-base text-gray-700 mb-6">
          Any questions or remarks? Just write us a message!
        </p>

        <ContactUsForm/>

        
      </div>

      {/* Background bar */}
      <div className="w-full bg-primary relative z-0 mt-20">

      {/* Cards */}
      <div className=" max-w-7xl mx-auto bg-[#f5f5f5] relative py-16 px-4 z-10 -top-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative -top-12">
          {[
            {
              icon: "/images/i.png",
              title: "A PRODUCT BY KCS EDUTECH PVT.LTD",
              lines: ["CIN: U80302RJ2013PTC044524", "GST: 08AAFCK3959C2ZG", "PAN: AAFCK3959C"],
            },
            {
              icon: "/images/phone.png",
              title: "CONTACT INFO",
              lines: ["Phone No.: +91-97832-07700", "Email: info@digibcard.com"],
            },
            {
              icon: "/images/location.png",
              title: "OUR OFFICE LOCATION",
              lines: [
                "G-1 242, The Paradise Complex,",
                "opposite Agarwal Dharmshala,",
                "Sector 11, Hiran Magri, Udaipur,",
                "Rajasthan 313001",
              ],
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              {/* Icon bubble */}
              <div className="absolute top-[-48px] left-1/2 transform -translate-x-1/2">
                <div className="bg-primary hover:bg-orange-700 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                  <img src={item.icon} alt={item.title} className="w-6 h-6" />
                </div>
              </div>

              {/* Card content */}
              <div className="pt-12">
                <h3 className="font-bold text-base mb-2 text-gray-900">
                  {item.title}
                </h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-sm text-gray-700">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

