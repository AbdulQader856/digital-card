import refundContent from "@/src/content/refundContent";

export default function RefundPolicyPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 pt-28">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Refund Policy</h1>
      <p className="text-center">The website listed above, hereinafter referred to as "Website" is operated by the following party:<br/>KCS Edutech Pvt. Ltd., a company based in India (hereinafter referred to as "Operator").</p><br/>
      <p className="text-center">We understand the importance of providing a transparent and fair refund process to our valued customers. Please read the following refund policy carefully:</p><br/>

      <div className="space-y-10 text-gray-700 pt-10">
        {refundContent.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            {Array.isArray(section.body) ? (
              <ul className="list-disc pl-5 space-y-2 list-inside">
                {section.body.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="leading-relaxed whitespace-pre-wrap">{section.body}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
