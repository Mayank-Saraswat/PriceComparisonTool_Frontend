import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-2/3 mx-auto bg-white my-16 shadow-xl p-5">
      <h1 className="text-3xl font-semibold">About our tool</h1>
      <p className="my-3">
        Our price comparison tool is an online price monitoring, pricing
        analytics, and repricing tool, designed by eCommerce professionals and
        maintained by Mayank Saraswat for eCommerce professionals. A
        highly-specialized online tool based on 4 main mechanisms (price
        comparison, price change alerts, pricing analytics, and repricing), it
        provides essential aid – both in everyday pricing operations (an email
        alert each time it detects a price or availability change) and in
        strategic decision-making. Working in such a competitive market, we have
        learned that we need to listen to our clients and their ideas – it’s
        what helps us build a better tool. That’s where most of the new tool
        features come from.
      </p>

      <h1 className="text-2xl font-semibold">Inspiration</h1>
      <p>
        Our price comparison tool's story began out of pure necessity by
        analysing market owned by several online shops at that time meant for
        the Indian market. It was noticed that buyers do a lot of price
        comparisons before making a decision. That made us spend hours
        monitoring our competitors’ prices manually. The process wasn’t
        efficient, therefore we decided to build a tool to help ourselves. Some
        of the results we got after only 6 months are a 35% increase in turnover
        and a 100% automatic price check. This sparked the idea to make the tool
        worldwide used. In May 2024, We launched our price comparsion tool which
        is free to use. We thoroughly aligned business standards and procedures
        and heavily invested in security systems. Today, Our tool is ISO 27001
        certified.
      </p>

      <h1 className="mt-3 text-2xl font-semibold">Address</h1>
      <p>
        Please fill{" "}
        <Link to="/contact">
          <span className="text-indigo-600 font-semibold hover:underline">
            contact form
          </span>
        </Link>{" "}
        to reach us as of now.
      </p>
    </div>
  );
};

export default AboutUs;
