import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Prices from "../components/Prices";
import EmailSubscription from "../components/EmailSubscription";
import Location from "../components/Location";

const Mainpage = () => {
  return (
    <section>
      <Hero />
      <Services />
      <Prices />
      <Location />
      <EmailSubscription />
    </section>
  );
};

export default Mainpage;
