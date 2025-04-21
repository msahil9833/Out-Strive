import React from "react";
import { IMG } from "../assets/img";

const Privacy = () => {
  return (
    <div>
      <PrivacyBanner />
      <div className="boot-container">
        <div>
          <h1 className="text-2xl font-bold mb-4">Overview</h1>
          <p className="text-stone-900 mb-6">
            At <strong>Outstrive Limited,</strong> we respect your privacy and
            are committed to protecting the personal information you share with
            us. This Privacy Policy outlines how we collect, use, disclose, and
            safeguard your information when you interact with our services,
            website, and products.
          </p>

          <h3 className="text-lg font-semibold mb-2">Information We Collect</h3>
          <p className="text-gray-700 mb-6">
            We may collect the following types of information:
          </p>

          <div className="mb-6">
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                {" "}
                <strong>Personal Information:</strong> Name, email address,
                phone number, billing details, and any other information you
                provide to us.
              </li>
              <li>
                {" "}
                <strong>Non-Personal Information:</strong> Browser type, IP
                address, device information, and usage data to improve our
                services.
              </li>
              <li>
                {" "}
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar technologies to enhance user experience and
                analyze website traffic.
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold">
            {" "}
            How We Use Your Information
          </h3>
          <p className="text-gray-700 mb-6">
            We use the information collected for the following purposes:
          </p>

          <div className="mb-6">
            <ul className="list-disc  text-gray-700 ml-10">
              <li>To provide, operate, and maintain our services.</li>
              <li>
                {" "}
                To communicate with you regarding your inquiries, transactions,
                and support requests.
              </li>
              <li> To improve and personalize your experience.</li>
              <li> To comply with legal obligations.</li>
              <li>
                {" "}
                To send promotional materials or updates, subject to your
                consent.
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold">
            {" "}
            How We Share Your Information
          </h3>
          <p className="text-gray-700 mb-6">
            We do not sell or rent your personal data. However, we may share
            your information with:{" "}
          </p>

          <div className="mb-6">
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                <stron>Service Providers:</stron> Third-party vendors who assist
                in service delivery, such as payment processors or cloud hosting
                providers.
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by law or to
                protect our legal rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> In case of mergers,
                acquisitions, or business restructuring.
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold"> Your Rights and Choices</h3>
          <p className="text-gray-700 mb-6">
            Depending on your location, you may have the right to:
          </p>

          <div className="mb-6">
            <ul className="list-disc list-inside text-gray-700 ml-5">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt-out of marketing communications</li>
              <li>Restrict or object to data processing.</li>
              <li>Request data portability.</li>
            </ul>
          </div>

          <h2 className="text-lg font-semibold"> Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate security measures to safeguard your
            personal data. However, no method of transmission over the internet
            is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-lg font-semibold"> Third-Party Links</h2>
          <p className="text-gray-700 mb-6">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites.
          </p>

          <h2 className="text-lg font-semibold">
            {" "}
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-lg font-semibold"> Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about this Privacy Policy or how we handle
            your data, please contact us at:
          </p>

          <div className="mb-6">
            <p>
              <strong>Outstrive Limited</strong>
            </p>
            <p>
              Email: <strong>info@outstrive.co</strong>
            </p>
            <p>
              Address:{" "}
              <strong>No 911/A, and 912, 8th Floor, Oxford Tower, New Municipal No 139, HAL Airport Road, Bangalore -  560008</strong>
            </p>
          </div>

          <p>
            By using our services, you consent to the collection and use of your
            information as described in this Privacy Policy.
            <br/>
            Last Updated March 08th 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

const PrivacyBanner = () => (
  <section style={{ backgroundImage: `url(${IMG.ContactBanner})` }}>
    <div className="boot-container contact-banner">
      <h2 >Privacy Policy</h2>
    </div>
  </section>
);
