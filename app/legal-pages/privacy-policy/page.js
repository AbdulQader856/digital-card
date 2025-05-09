import privacyContent from '@/src/content/privacyContent';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 pt-28">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Privacy Policy</h1>

      <div className="space-y-10 text-gray-700">
        {privacyContent.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            {Array.isArray(section.body) ? (
              <div className="space-y-2">
                {section.body.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">{p}</p>
                ))}
              </div>
            ) : (
              <p className="leading-relaxed">{section.body}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
