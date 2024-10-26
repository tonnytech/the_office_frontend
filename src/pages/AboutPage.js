import React from "react";
import AboutUs from "../components/AboutUs";
import PhotoGallery from "../components/PhotoGallery";
import EmailSubscription from "../components/EmailSubscription";
import Location from "../components/Location";

const AboutPage = () => {
  return (
    <section>
      <AboutUs />
      <PhotoGallery />
      <Location />
      <EmailSubscription />
    </section>
  );
};

export default AboutPage;
