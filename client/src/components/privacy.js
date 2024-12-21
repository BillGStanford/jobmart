// components/privacy.js
import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p className="text-lg text-gray-700 mb-4">
        At JobMart, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our services.
      </p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-lg text-gray-700 mb-4">
          As a platform that connects job seekers and employers, we do not require users to create an account or provide personal details to browse or post jobs. We only collect basic information necessary to post or view job listings.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          This may include:
        </p>
        <ul className="list-disc pl-6">
          <li className="text-lg text-gray-700">Job details (title, description, location, etc.)</li>
          <li className="text-lg text-gray-700">Basic contact information (such as email or phone number) if provided during job posting</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="text-lg text-gray-700 mb-4">
          The information we collect is used to provide our services, such as enabling users to post jobs and apply for job listings. We may also use this information to improve our platform and ensure job listings are accurate and accessible.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We do not share or sell your personal information to third parties for marketing purposes. Your information is kept private within the platform.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
        <p className="text-lg text-gray-700 mb-4">
          We take the security of your information seriously. Although we do not store sensitive personal information like passwords or credit card details, we use standard industry practices to secure the information posted on our platform.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Rights and Control</h2>
        <p className="text-lg text-gray-700 mb-4">
          Since our platform does not require an account system, there are no user profiles to manage. However, you can always contact us to request the removal or modification of job listings you have posted.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">5. Changes to Privacy Policy</h2>
        <p className="text-lg text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the most recent update will be displayed at the bottom of the policy.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at support@jobmart.com.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
