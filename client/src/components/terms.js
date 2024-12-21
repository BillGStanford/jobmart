// components/terms.js
import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>
      <p className="text-lg text-gray-700 mb-4">
        Please read these Terms of Service carefully before using the JobMart website and services.
      </p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-lg text-gray-700 mb-4">
          By accessing or using the JobMart platform, you agree to comply with and be bound by these Terms of Service and our Privacy Policy.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
        <p className="text-lg text-gray-700 mb-4">
          As a user of the JobMart platform, you are responsible for the content you post, the interactions you engage in, and the accuracy of the information you provide.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          You agree to use the platform in accordance with all applicable laws and regulations.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">3. Prohibited Activities</h2>
        <p className="text-lg text-gray-700 mb-4">
          Users of JobMart must refrain from engaging in the following prohibited activities:
        </p>
        <ul className="list-disc pl-6">
          <li className="text-lg text-gray-700">Posting fraudulent or misleading content.</li>
          <li className="text-lg text-gray-700">Harassing or threatening other users.</li>
          <li className="text-lg text-gray-700">Using the platform for illegal activities.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">4. Account Termination</h2>
        <p className="text-lg text-gray-700 mb-4">
          We reserve the right to suspend or terminate your account if you violate these Terms of Service. Upon termination, you will lose access to your account and any data associated with it.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="text-lg text-gray-700 mb-4">
          JobMart will not be liable for any damages arising from the use or inability to use the platform, including, but not limited to, any errors, omissions, or interruptions in service.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
        <p className="text-lg text-gray-700 mb-4">
          We may update these Terms of Service from time to time. When updates occur, we will notify users via email or post a notice on the platform.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Continued use of the platform after any changes constitutes your acceptance of the new terms.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions or concerns about these Terms of Service, please contact us at support@jobmart.com.
        </p>
      </section>
    </div>
  );
};

export default Terms;
