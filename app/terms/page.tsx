import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the VertexForge terms of service for our website and software engineering services.",
};

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen text-stone">
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 bg-blush/40 border-b border-border/60 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 w-100 h-100 rounded-full bg-blush/60 blur-3xl opacity-60" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-800 text-stone tracking-tight">Terms of Service</h1>
          <p className="text-sm text-muted mt-4">Last Updated: July 12, 2026</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-stone-light">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing this website or engaging VertexForge for software development, cloud infrastructure, or DevOps services, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
              <p className="leading-relaxed">
                If you do not agree with any of these terms, you are prohibited from using or accessing this site or our services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">2. Scope of Services</h2>
              <p className="leading-relaxed">
                VertexForge provides bespoke software engineering, DevOps consultancy, and SaaS architecture services. The exact scope of any engagement, including deliverables, timelines, payment schedules, and SLAs, will be governed by a separate written Master Services Agreement (MSA) or Statement of Work (SOW) executed between VertexForge and the client.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">3. Intellectual Property</h2>
              <p className="leading-relaxed">
                Unless otherwise specified in an executed Statement of Work:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>
                  All software code, documentation, designs, and architectural plans built specifically for a client will be transferred to that client upon full payment of the corresponding fees.
                </li>
                <li>
                  VertexForge retains ownership of its pre-existing tools, code libraries, frameworks, and generic methodologies used to deliver the services.
                </li>
                <li>
                  All content on this website (logos, brand names, copy, images) is the intellectual property of VertexForge and may not be copied, reproduced, or used without our prior written permission.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">4. Client Responsibilities</h2>
              <p className="leading-relaxed">
                To enable VertexForge to deliver its services effectively, clients agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>
                  Provide timely access to the necessary repositories, cloud consoles, communication channels, and documentation.
                </li>
                <li>Ensure that all information provided is accurate and complete.</li>
                <li>
                  Ensure their team is available for scheduled scoping calls, reviews, and sign-offs as outlined in the Statement of Work.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall VertexForge or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VertexForge&apos;s website or our services, even if VertexForge has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">6. Governing Law</h2>
              <p className="leading-relaxed">
                Any claim relating to VertexForge&apos;s website or services shall be governed by the laws of the jurisdiction in which the founder operates, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">7. Modifications to Terms</h2>
              <p className="leading-relaxed">
                VertexForge may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-800 text-stone">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions or require clarification regarding these Terms of Service, please reach out to us at:
              </p>
              <div className="bg-blush/30 border border-border/50 rounded-2xl p-6 space-y-2">
                <p className="font-700 text-stone">VertexForge legal team</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hello@vertexforge.dev" className="text-amber hover:text-amber-dark underline font-600 transition-colors">
                    hello@vertexforge.dev
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
