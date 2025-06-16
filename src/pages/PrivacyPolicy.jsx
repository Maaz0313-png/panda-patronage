import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-gray-800">
      <h1 className="mb-2 text-4xl font-bold">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500">September 27, 2023</p>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Introduction</h2>
        <p>
          Welcome to Codify ("we", "our", or "us"). At Neutra, we are committed
          to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy explains how we collect, use, and
          protect your personal data when you use our website, products, or
          services. By accessing or using our services, you consent to the
          practices described in this Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Information We Collect</h2>
        <p className="mb-2">
          We may collect various types of information, including:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <span className="font-medium">Personal Information:</span> Such as
            your name, email address, and other identifying information you
            provide when registering or contacting us.
          </li>
          <li>
            <span className="font-medium">Usage Data:</span> Information about
            how you interact with our website, products, and services, including
            IP addresses, device and browser information, and access times.
          </li>
          <li>
            <span className="font-medium">Cookies:</span> We use cookies to
            collect information about your preferences, settings, and browsing
            patterns. You can manage cookie preferences in your browser
            settings.
          </li>
          <li>
            <span className="font-medium">Third-party Information:</span>{" "}
            Information we may receive from third-party sources or services,
            which may include social media platforms.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">
          How We Use Your Information
        </h2>
        <p className="mb-2">
          We use your information for various purposes, including:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Providing and improving our products and services.</li>
          <li>Responding to your inquiries and support requests.</li>
          <li>
            Sending you promotional materials and updates (if you opt-in).
          </li>
          <li>Complying with legal obligations and protecting our rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Data Security</h2>
        <p>
          We take the security of your personal information seriously and employ
          appropriate technical and organizational measures to safeguard it.
          However, no method of online transmission or storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Third-party Links</h2>
        <p>
          Our website may contain links to third-party sites or services not
          operated by us. We are not responsible for the privacy practices of
          such third parties. We encourage you to review their privacy policies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Your Choices</h2>
        <p>
          You can update or delete your personal information by contacting us.
          You can also opt-out of receiving promotional communications from us.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will post the updated Privacy Policy on our website.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
