import termsContent from '@/src/content/termsContent';

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 pt-28">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Terms and Conditions</h1>

      <div className="space-y-10 text-gray-700">
        {termsContent.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className='leading-relaxed pb-3'>{section.subtitle}</p>
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
