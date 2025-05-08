import { ContactUsForm } from "/src/components/ui/general/Forms";

export default function FormSection() {
  return (
    <section id="contact" className="bg-[#f1fafa] py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left Column - Contact Info */}
        <div className="bg-gradient-to-b from-[#f5821f] to-[#f15a24] text-white p-8 sm:p-10 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Contact Details
          </h2>
          <p className="mb-4 flex items-center text-sm sm:text-base">
            <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24">
              <path d="M21 8V7l-3 2-2-2-4 3-4-4-6 6v6h20v-9z" />
            </svg>
            <a href="mailto:info@digibcard.com" className="underline">
              info@digibcard.com
            </a>
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold pt-5 mb-2">
            A Product By KCS Edutech Pvt. Ltd.
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "CIN: U80302RJ2013PTC044524",
              "GST: 08AAFCK3959C2ZG",
              "PAN: AAFCK3959C",
            ].map((text, i) => (
              <li className="flex items-start" key={i}>
                <svg className="w-4 h-4 mr-2 mt-1" fill="white" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path fill="black" d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
                </svg>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Form */}
        <div className="p-6 sm:p-10 md:p-14">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Submit Your Query
          </h2>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}
