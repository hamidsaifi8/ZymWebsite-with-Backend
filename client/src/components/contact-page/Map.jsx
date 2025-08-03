function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28020.022573287948!2d77.31242786641849!3d28.61468844313148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4df9ed3ea47%3A0x17130e6bce42ec01!2sMayur%20Vihar%20Phase%20III%2C%20New%20Delhi%2C%20Delhi%2C%20110096!5e0!3m2!1sen!2sin!4v1754232771590!5m2!1sen!2sin"
      width={600}
      height={450}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-96 w-full shadow-xl grayscale-[70%]"
    />
  );
}

export default Map;
