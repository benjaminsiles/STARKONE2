import React from "react";
import { SmoothScroll } from "../../components/SmoothScroll";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar />
    <SmoothScroll>
      <div className="bg-white min-h-screen" style={{ fontFamily: "sans-serif" }}>
        {/* Main content */}
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="mb-16">
            <h1
              className="text-5xl md:text-6xl font-light text-black mb-4"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-sm">
              Effective Date: July 4, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose max-w-none text-gray-800">
            <p className="text-base leading-relaxed font-light mb-8">
              Welcome to S.T.A.R.K. One. S.T.A.R.K. One is a STEM education initiative based in Virginia, United States. We are committed to protecting your privacy and being transparent about how we collect, use, and protect your information.
            </p>
            <p className="text-base leading-relaxed font-light mb-8">
              This Privacy Policy applies to{" "}
              <a
                href="https://starkone.org"
                className="text-[#1d9e75] hover:text-[#17825f] transition-colors"
              >
                https://starkone.org
              </a>
              ,{" "}
              <a
                href="https://www.starkone.org"
                className="text-[#1d9e75] hover:text-[#17825f] transition-colors"
              >
                https://www.starkone.org
              </a>
              , and any related pages or services operated by S.T.A.R.K. One.
            </p>

            {/* Section 1 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Information We Collect
            </h2>

            <h3 className="text-lg font-bold text-black mb-4 uppercase" style={{ letterSpacing: "0.1em" }}>
              Information You Provide
            </h3>
            <p className="text-base leading-relaxed font-light mb-6">
              You may voluntarily provide information when you:
            </p>
            <ul className="list-disc list-inside text-base leading-relaxed font-light mb-6 space-y-2">
              <li>Register for an event</li>
              <li>Submit a volunteer application</li>
              <li>Join our mailing list</li>
              <li>Contact us</li>
              <li>Complete a Google Form</li>
            </ul>
            <p className="text-base leading-relaxed font-light mb-6">
              Depending on the form, we may collect:
            </p>
            <ul className="list-disc list-inside text-base leading-relaxed font-light mb-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Areas of interest</li>
              <li>Volunteer information</li>
              <li>Any additional information you choose to provide</li>
            </ul>

            <h3 className="text-lg font-bold text-black mb-4 uppercase mt-8" style={{ letterSpacing: "0.1em" }}>
              Automatically Collected Information
            </h3>
            <p className="text-base leading-relaxed font-light mb-6">
              When you visit our website, certain technical information may be collected automatically through analytics services, including:
            </p>
            <ul className="list-disc list-inside text-base leading-relaxed font-light mb-6 space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Date and time of your visit</li>
              <li>General usage information</li>
            </ul>
            <p className="text-base leading-relaxed font-light mb-8">
              This information helps us understand how visitors use our website and improve our services.
            </p>

            {/* Section 2 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Analytics
            </h2>
            <p className="text-base leading-relaxed font-light mb-8">
              We use Cloudflare Web Analytics and Google Analytics to understand website traffic and improve the performance and usability of our website.
            </p>
            <p className="text-base leading-relaxed font-light mb-8">
              These services may collect technical information about your visit in accordance with their own privacy policies.
            </p>

            {/* Section 3 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed font-light mb-6">
              We may use your information to:
            </p>
            <ul className="list-disc list-inside text-base leading-relaxed font-light mb-8 space-y-2">
              <li>Register you for events</li>
              <li>Respond to questions or requests</li>
              <li>Send newsletters or updates if you choose to subscribe</li>
              <li>Process volunteer applications</li>
              <li>Improve our educational programs and website</li>
              <li>Monitor website performance and security</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p className="text-base leading-relaxed font-light mb-8">
              We only use your information for purposes related to operating and improving S.T.A.R.K. One.
            </p>

            {/* Section 4 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Information Sharing
            </h2>
            <p className="text-base leading-relaxed font-light mb-6">
              We do not sell, rent, or trade your personal information.
            </p>
            <p className="text-base leading-relaxed font-light mb-6">
              We may share information only when necessary with trusted service providers that help us operate our website and programs, including:
            </p>
            <ul className="list-disc list-inside text-base leading-relaxed font-light mb-6 space-y-2">
              <li>Cloudflare (website hosting and analytics)</li>
              <li>Google (Google Forms and Google Analytics)</li>
              <li>Email service providers used to distribute newsletters</li>
            </ul>
            <p className="text-base leading-relaxed font-light mb-8">
              We may also disclose information when required by law or to protect the safety, rights, or property of S.T.A.R.K. One or others.
            </p>

            {/* Section 5 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Data Security
            </h2>
            <p className="text-base leading-relaxed font-light mb-6">
              We use reasonable administrative, technical, and organizational safeguards to protect the information we collect.
            </p>
            <p className="text-base leading-relaxed font-light mb-8">
              However, no method of transmitting information over the Internet or storing electronic data is completely secure. While we work to protect your information, we cannot guarantee absolute security.
            </p>

            {/* Section 6 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Children's Privacy
            </h2>
            <p className="text-base leading-relaxed font-light mb-6">
              S.T.A.R.K. One provides educational resources for learners of all ages.
            </p>
            <p className="text-base leading-relaxed font-light mb-8">
              We do not knowingly collect personal information from children under the age of 13 without appropriate consent where required by law. If you believe a child has provided personal information without appropriate permission, please contact us so we can review and remove the information if necessary.
            </p>

            {/* Section 7 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Email Communications
            </h2>
            <p className="text-base leading-relaxed font-light mb-6">
              If you subscribe to receive updates from S.T.A.R.K. One, you may receive newsletters, announcements, or information about upcoming programs and events.
            </p>
            <p className="text-base leading-relaxed font-light mb-8">
              You may unsubscribe from these communications at any time using the unsubscribe link provided in our emails or by contacting us directly.
            </p>

            {/* Section 8 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Third-Party Services
            </h2>
            <p className="text-base leading-relaxed font-light mb-6">
              Our website may link to third-party websites or services, including Google Forms and other educational resources.
            </p>
            <p className="text-base leading-relaxed font-light mb-8">
              We are not responsible for the privacy practices or content of third-party websites. We encourage you to review their privacy policies before providing personal information.
            </p>

            {/* Section 9 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Your Choices
            </h2>
            <p className="text-base leading-relaxed font-light mb-6">
              You may contact us to:
            </p>
            <ul className="list-disc list-inside text-base leading-relaxed font-light mb-8 space-y-2">
              <li>Request access to information you have submitted</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal information where appropriate</li>
              <li>Ask questions about this Privacy Policy</li>
            </ul>
            <p className="text-base leading-relaxed font-light mb-8">
              We will make reasonable efforts to respond to your request in accordance with applicable laws.
            </p>

            {/* Section 10 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Changes to This Privacy Policy
            </h2>
            <p className="text-base leading-relaxed font-light mb-6">
              We may update this Privacy Policy from time to time to reflect changes to our website, programs, or legal requirements.
            </p>
            <p className="text-base leading-relaxed font-light mb-8">
              When changes are made, we will update the Effective Date at the top of this page. Continued use of our website after changes become effective constitutes acceptance of the updated Privacy Policy.
            </p>

            {/* Section 11 */}
            <h2
              className="text-2xl font-light text-black mt-12 mb-6"
              style={{
                fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Contact Us
            </h2>
            <p className="text-base leading-relaxed font-light mb-4">
              If you have any questions about this Privacy Policy or how your information is handled, please contact us at:
            </p>
            <div className="bg-[rgba(29,158,117,0.06)] border border-[rgba(29,158,117,0.3)] p-8 rounded">
              <p className="text-black font-bold mb-4">S.T.A.R.K. One</p>
              <p className="text-base font-light">
                Email:{" "}
                <a
                  href="mailto:starkone.stem@gmail.com"
                  className="text-[#1d9e75] hover:text-[#17825f] transition-colors"
                >
                  starkone.stem@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </SmoothScroll>
    </>
  );
}
