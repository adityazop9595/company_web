import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4 py-12">
      <div className="bg-white  border border-gray-200 rounded-2xl max-w-3xl w-full overflow-hidden">
        {/* Image Section */}
        <div className="w-full flex justify-center p-6 border-b border-gray-100">
          <img
            src="https://assets.designtemplate.io/images/Privacy%20Policy%20Overview%20Woman%20with%20Document%20Vector%20Illustration-HD.webp"
            alt="Privacy and security illustration"
            className="w-full max-w-sm object-contain rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="p-8 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
            Privacy Policy — Website Development Services
          </h1>

          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            We value your privacy and confidentiality. Before starting any website development project, we require a 50% deposit to secure resources and schedule work; the remaining 50% is due upon delivery or at agreed milestones. This deposit helps cover initial design, planning, and any third-party costs (such as licensing or hosting) incurred to begin the project. By providing payment, you agree that work may commence and that changes to the scope may affect final pricing and delivery timelines.
          </p>

          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            Our services include design, front-end and back-end development, testing, deployment, and limited post-launch support as defined in your project quote. We treat all project files, credentials, and data you share as confidential and will not disclose them to third parties except as necessary to provide services (for example, hosting providers, payment processors, or analytics tools). You are responsible for providing accurate content and access where required; delays in providing these may shift project timelines.
          </p>

          <p className="leading-relaxed text-sm sm:text-base">
            We collect only the minimum personal information necessary to perform the service (name, email, billing details, and any website content you supply). We securely store credentials and backups for the duration needed to support your site and will delete them on request after a reasonable retention period, unless legally required to keep them. If you have questions about data handling, refunds, scope changes, or would like custom contract terms (NDAs, IP assignments), please contact us at <a href="fushiontech91@example.com" className="underline text-blue-600">fushiontech91@example.com</a>. Your continued use of our services constitutes acceptance of this policy.
          </p>

          <div className="mt-6 text-xs text-gray-500 text-center">
            <strong>Note:</strong> This page is a template and not legal advice. For contracts or complex engagements, consider consulting a lawyer.
          </div>
        </div>
      </div>
    </main>
  );
}
