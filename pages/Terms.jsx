import React from "react";
import { IMG } from "../assets/img";

const Terms = () => {
  return (
    <div>
      <TermsBanner />
      <div className="boot-container">
        <div>
          <h3 className="text-lg font-bold mb-4">Definitions</h3>

          <div className="mb-6">
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                "Company", "We", "Our", or "Us" refers to Outstrive Limited.
              </li>
              <li>
                "User", "You", or "Your" refers to any individual or entity
                accessing or using our services.
              </li>
              <li>
                "Services" means any products, software, or digital content
                provided by Outstrive Limited.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Use of Services</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>You must be at least 18 years old to use our services.</li>
              <li>
                You agree to use our services only for lawful purposes and in
                accordance with these Terms and Conditions.
              </li>
              <li>
                We reserve the right to modify or discontinue our services at
                any time without prior notice.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Intellectual Property</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                All content, trademarks, logos, and intellectual property on our
                platform are owned by Outstrive Limited.
              </li>
              <li>
                You may not reproduce, distribute, or modify our content without
                prior written consent.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">User Accounts</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                You may be required to create an account to access certain
                services.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account information.
              </li>
              <li>
                We reserve the right to suspend or terminate accounts that
                violate our terms.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Payments and Refunds</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                All payments for our services are subject to our pricing and
                billing policies.
              </li>
              <li>
                We offer refunds only as per our refund policy, which may be
                updated from time to time.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Limitation of Liability</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                Outstrive Limited is not liable for any indirect, incidental, or
                consequential damages arising from the use of our services.
              </li>
              <li>
                We do not guarantee that our services will be error-free or
                uninterrupted.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Privacy Policy</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                Your use of our services is also governed by our Privacy Policy,
                which outlines how we collect, use, and protect your data.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Termination</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                We may terminate or suspend your access to our services if you
                violate these terms.
              </li>
              <li>You may stop using our services at any time.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Governing Law</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                These terms shall be governed by and interpreted in accordance
                with the laws of Indian Jurisdiction.
              </li>
              <li>
                Any disputes shall be resolved in the courts of Indian
                Jurisdiction.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Changes to Terms</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                We reserve the right to update these Terms and Conditions at any
                time.
              </li>
              <li>
                Continued use of our services after changes take effect
                constitutes acceptance of the revised terms.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>
                For any questions about these Terms and Conditions, please
                contact us at:
              </li>
              <li>
                Email: <stromg>info@outstrive.co</stromg>
              </li>
              <li>
                Address:{" "}
                <strong>No 911/A, and 912, 8th Floor, Oxford Tower, New Municipal No 139, HAL Airport Road, Bangalore -  560008</strong>
              </li>
            </ul>
          </div>

          <p>
            By using our services, you acknowledge that you have read,
            understood, and agree to these Terms and Conditions.
            <br/>
        Effective Date: 09th August 2020 | Last Updated March 08th 2025

          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

const TermsBanner = () => (
  <section style={{ backgroundImage: `url(${IMG.ContactBanner})` }}>
    <div className="boot-container contact-banner">
      <h2>Terms and Conditions</h2>
      
    </div>
  </section>
);
