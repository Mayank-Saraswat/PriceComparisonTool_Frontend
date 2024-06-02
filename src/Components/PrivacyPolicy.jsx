import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-2/3 mx-auto bg-white my-16 shadow-xl p-5">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="my-3">
        This privacy policy sets out how our tool uses and protects any
        information that you give us when you use our service.
        <br /> First of all, we understand how sensitive and discrete are the
        information you have in your account. You can rest assured that we are
        committed to ensuring that the privacy of your data is fully protected,
        both in sense of technical data security as well as in business sense.
      </p>

      <h1 className="text-xl font-semibold">What We Collect</h1>
      <span>We may collect the following information:</span>
      <ul>
        <li>1. Name</li>
        <li>2. Contact information including email address</li>
        <li>3. Demographic information such as country location</li>
        <li>4. Information related to competitors you want monitored</li>
        <li>5. Information related to products you want monitored</li>
      </ul>

      <h1 className="mt-3 text-xl font-semibold">
        What We Do With the Information We Gather
      </h1>
      <span>
        We require this information to understand your needs and provide you
        with a better service, and in particular for the following reasons:
      </span>
      <ul>
        <li>1. Internal record keeping.</li>
        <li>
          2. We may use the information to improve our products and services.
        </li>
        <li>
          3. We may periodically send promotional emails about new products,
          special offers or other information which we think you may find
          interesting using the email address which you have provided.
        </li>
        <li>
          4. From time to time, we may also use your information to contact you
          for market research purposes. We may contact you by email, phone, fax
          or mail. We may use the information to customise the website according
          to your interests.
        </li>
      </ul>

      <h1 className="mt-3 text-xl font-semibold">Data Security</h1>
      <p>
        We are committed to ensuring that your information is secure. In order
        to prevent unauthorised access or disclosure, we have put in place
        suitable physical, electronic and managerial procedures to safeguard and
        secure the information we collect online.Since customers‘ data privacy
        is one of our main priorities, we enable you to fully control your
        personal data online under the law regulation on data privacy and
        protection by General Data Protection Regulation (GDPR). We as a company
        have been GDPR compliant and fully respect the legislation.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
