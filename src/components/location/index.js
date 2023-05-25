function LocationSection() {
  return (
    <section className="container m-auto mt-32 font-thin">
      <h4 className="capitalize text-4xl text-center">
        Our catering kitchens
      </h4>
      <p className="text-center">The only Metro Vancouver full service caterer with 2 locations to serve you better!</p>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center content-between pt-10 w-full">
        <map name="vancouver-kitchen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48933.21691948981!2d-122.84188626030667!3d49.15990926573246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d72822801d37%3A0x677a726528dbb9d!2sTynehead%20Regional%20Park!5e0!3m2!1sen!2sus!4v1685055546412!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[90vw] lg:w-[35vw] h-[40vh]"
          />
          <p className="mt-4 text-center font-normal text-blue-logo font-header">Surrey Catering Kitchen</p>
        </map>
        <map name="surrey-kitchen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20821.08159011969!2d-123.14582875650943!3d49.28331137248349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486722f68e4acf3%3A0x2e8b93c8034168e0!2sEnglish%20Bay%20Beach!5e0!3m2!1sen!2sus!4v1685055598598!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[90vw] lg:w-[35vw] h-[40vh]"
          />
          <p className="mt-4 text-center font-normal text-blue-logo font-header">Vancouver Catering Kitchen</p>
        </map>
      </div>
    </section>
  );
}

export default LocationSection;
