import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the VertexForge privacy policy to learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen text-stone">
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 bg-blush/40 border-b border-border/60 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 w-100 h-100 rounded-full bg-blush/60 blur-3xl opacity-60" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-800 text-stone tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-muted mt-4">Last Updated: July 12, 2026</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-stone-light">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to VertexForge. We are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, contact us, or use our software engineering and DevOps services.
              </p>
              <p className="leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">2. Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information that you directly provide to us, as well as information collected automatically during your visit. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>
                  <strong>Personal Identifiers:</strong> Name, email address, phone number, and company name when you submit our contact forms.
                </li>
                <li>
                  <strong>Professional Information:</strong> Details regarding your software projects, team structure, tech stack, and development timelines provided during scoping calls.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, operating system, and usage statistics collected via basic server logs and analytical tools.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">3. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to operate, maintain, and improve our services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Providing and delivering our software development, cloud migration, and consulting services.</li>
                <li>Responding to inquiries, questions, and requests submitted via our contact forms.</li>
                <li>Evaluating project requirements, preparing engineering proposals, and scheduling discovery calls.</li>
                <li>Ensuring the security of our platform and preventing fraudulent or unauthorized activity.</li>
                <li>Complying with applicable legal obligations and regulations.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">4. Data Sharing and Disclosure</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal data to third parties. We may share your information only under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party providers who perform services for us (e.g., email delivery, contact form hosting, security validation), under strict confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If required by law, regulation, or legal process to protect our rights, properties, or safety, or the safety of others.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">5. Security of Your Data</h2>
              <p className="leading-relaxed">
                We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, loss, alteration, or misuse. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">6. Your Rights and Choices</h2>
              <p className="leading-relaxed">
                Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict how we use your data. To exercise any of these rights, please contact us at{" "}
                <a href="mailto:privacy@vertexforge.dev" className="text-amber hover:text-amber-dark underline font-600 transition-colors">
                  privacy@vertexforge.dev
                </a>.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">7. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-blush/30 border border-border/50 rounded-2xl p-6 space-y-2">
                <p className="font-700 text-stone">VertexForge legal team</p>
                <p>
                  Email:{" "}
                  <a href="mailto:privacy@vertexforge.dev" className="text-amber hover:text-amber-dark underline font-600 transition-colors">
                    privacy@vertexforge.dev
                  </a>
                </p>
                <p>Address: Remote — Global</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
