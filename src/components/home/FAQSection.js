import {FAQSlider} from "../ui/general/SwiperSlider"
import FAQAccordion from "../ui/general/Accordions";

const faqs = [
  { question: "How Does an Online visiting Card Work?",
    answer: <p>Your digital business card can be shared directly through various methods, including QR codes, email, text, or social media. The recipient can open it in their web browser, where they can easily save your contact details. DigiBcard also offers features like a payment gateway and the ability to add products, allowing your products to be ordered directly from your card. Additionally, recipients have the option to share their information with you, making follow-ups seamless and convenient.</p>
   },
  { question: "How are digital visiting cards different from Traditional Business Cards?",
    answer: <p>Digital biz cards offer a modern alternative to traditional paper cards, easily shared and accessed online. Unlike traditional business cards, which are limited to printed information, digital cards can be customized with multimedia content like website links, social media profiles, images, and videos. This offers a more comprehensive understanding of a person or business and their services, helping to maintain connections more effectively. <br/><br/> Additionally, business cards online are eco-friendly, eliminating paper production and allowing easy updates—making them a sustainable choice. Overall, they provide numerous benefits, making them an excellent investment for establishing a strong online presence and growing a professional network.</p>
   },
  { question: "Are business cards online Safe?",
    answer: <p>Yes, online digital visiting cards are safe to share. We implement various safety measures, such as encryption, to protect your data and reduce the risk of unauthorized access or misuse.</p>
   },
  { question: "Can I Create Multiple digital cards for business?",
    answer: <p>Yes, you can create multiple cards. Once you've chosen your subscription plan, you can add individual information or invite team members to create their own cards. Each member’s details can be added one by one.</p>
   },
  { question: "How Often Can I Update and design my business card online?",
    answer: <p>When you make your business card online, keeping it updated is easy and hassle-free. You can make unlimited updates as often as you need, with no restrictions. Changes are reflected instantly, though in rare cases, they may take a few minutes to appear. Best of all, updates are completely free, ensuring your business card always features the most current information.</p>
   },
  { question: "How do I make a digital business card?",
    answer: <p>Creating a digital business card with DigiBcard is incredibly simple.Simply <a href="/register" target="_blank" className="text-blue-600 underline hover:text-blue-800">click here to get started!</a> Sign in and follow the steps to create your card. Add your profile photo, company logo, and contact details, and you’ll be ready to share it instantly.</p>
   },
  { question: "Can I Add a Payment Section to My online digital visiting card?",
    answer: <p>Yes, you can easily add a payment section. Our platform allows integration with payment options like Razorpay and PhonePe, enabling clients or customers to make payments directly through your online business card, enhancing convenience.</p>
   },
  { question: "How Do I Add a YouTube Video Gallery to My digital visiting card?",
    answer: <p>To add a YouTube video gallery, follow these steps:<br/><br/>
        1. Copy the link to the desired YouTube videos.<br/><br/>
        2. Log in to your DigiBcard dashboard.<br/><br/>
        3. Navigate to the video gallery section and paste the video links.<br/><br/>
        4. Arrange the videos in your preferred order and save the changes. Your YouTube video gallery will now be displayed on your card for viewers to interact with.</p>
   },
  { question: "Can I Add an Inquiry Form to My digital cards for business?",
    answer: <p>Yes, you can add an inquiry form to your digital card. This allows potential clients or customers to contact you directly from the card, making it easy to request more information about your services.</p>
   },
  { question: "How Can I Track Inquiries Through My Digital Business Card?",
    answer: <p>You can track inquiries through the DigiBcard dashboard, where all form submissions are recorded. The platform provides that showing the number of inquiries and the details of those who contacted you. You'll also receive email notifications for each submission, helping you manage leads efficiently.</p>
   },
  { question: "How Can I share My Best Digital Business Cards with Someone?",
    answer: <p>You can share your digital card through several methods:<br/><br/>
        1. Link sharing<br/><br/>
        2. Email<br/><br/>
        3. Social media<br/><br/>
        4. QR Code</p>
   },
  { question: "What are the benefits of using a digital business card?",
    answer: <p>Digital business cards offer a modern and efficient way for professionals to connect. They eliminate the need for printing, reduce administrative tasks, and save on design costs.<br/><br/>
        Here are some key benefits our users appreciate:<br/><br/>
        <ul className="list-[square] list-inside">
            <li>Complete control over their branding with customizable options.</li><br/>
            <li>The convenience of always having an up-to-date card accessible on their phone.</li><br/>
            <li>An eco-friendly solution that reduces paper waste and supports sustainability.</li>
        </ul></p>
    }
];

const features = [
    {
      title: 'Why do digital business cards matter?',
      description:
        'Digital business cards offer a convenient and efficient way to share contact information. They are popular among modern businesses for their versatility, ease of use, and eco-friendly benefits. One of their greatest advantages is accessibility—you can store and share them directly from your smartphone or other devices. Updating information is seamless, with real-time updates ensuring your contacts always have the latest details. Moreover, you can enhance your digital card by adding links to social media, websites, and other resources, making it interactive and more engaging.',
      icon: '/images/icons/whybusiness.png',
    },
    {
      title: 'Stay Updated with a Personalized Digital Business Card!',
      description:
        'Change is inevitable, and there may be times when updating your contact details becomes necessary. With DigiBcard’s digital visiting card maker, customization is effortless. You can easily update your designation, phone number, or email address whenever needed. Whether you relocate to a new city or need to make any changes to your information, editing your e-business card is quick and hassle-free.',
      icon: '/images/icons/personalized.png',
    },
    {
      title: 'Perfect for teams and businesses of any size',
      description:
        'DigiBcard offers digital business card subscription plans designed for everyone—from small teams to businesses of all sizes. Whether you choose the Professional or Startup plan, you can enhance your brand identity by creating professional e-business cards for each employee in your company. Need to align the design with your brand guidelines? Our customization features let you upload your company logo, change backgrounds, and personalize the overall look and feel of your smart business cards with ease.',
      icon: '/images/icons/anysize.png',
    },
];

export default function FAQSection() {
  return (
    <section className="bg-[#F2FAFB] py-16 px-4">
      <div className="pt-10 max-w-7xl mx-auto">
        <h2 className="text-3xl mb-2 pt-10 text-center">Why Choose DigiBcard Over Traditional Business Cards?</h2>
        <div className="mt-2 mb-10 flex justify-center">
            <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
            <span className="w-2 h-1 bg-orange-400 rounded"></span>
            <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
        </div>
        <FAQSlider/>
      </div>
      <div id="faq" className="max-w-7xl pt-20 mb-10 mx-auto text-center">
        <h2 className="text-3xl md:text-3xl text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-2 flex justify-center">
          <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
          <span className="w-2 h-1 bg-orange-400 rounded"></span>
          <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
        </div>

        <FAQAccordion faqs={faqs}/>
      </div>
      
      <div className="py-16 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column: Full-height card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center justify-center">
            <img
                src={features[0].icon}
                alt=""
                className="w-14 h-14 mb-10 object-contain"
            />
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {features[0].title}
            </h3>
            <p className="text-lg text-gray-700">{features[0].description}</p>
          </div>

          {/* Right column: Two stacked smaller cards */}
          <div className="flex flex-col gap-6">
            {[features[1], features[2]].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <img
                    src={feature.icon}
                    alt=""
                    className="w-14 h-14 mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {feature.title}
                </h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>  
    </section>
  );
}
