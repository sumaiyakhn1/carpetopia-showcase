import React from "react";
import { PopupButton } from "react-calendly";

const Calendly = () => {
  return (
    <div className="calendly-container">
      <PopupButton
        url="https://calendly.com/dreamknotcreations7/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Book a Free Consultation"
      />
    </div>
  );
};

export default Calendly;