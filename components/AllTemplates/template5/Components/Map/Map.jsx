import React from 'react';

const MapComponent = () => {
  return (
    <iframe
      title="Google Maps Embed"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6793.969926684304!2d73.09289123936261!3d31.63426208135722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922158ff33a2ab5%3A0x39b077f9a44f8666!2sChak%20103%20J.B.%20Barnala%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708676354710!5m2!1sen!2s"
      // width="600"
      // height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapComponent;
