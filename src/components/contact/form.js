function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="grid gap-6 my-10 uppercase">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">name*</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border-2 p-2 focus:outline-none focus:border-blue-logo"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">your e-mail*</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="catering@email.com"
          className="border-2 p-2 focus:outline-none focus:border-blue-logo"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="+1 604 5431234"
            className="border-2 p-2 focus:outline-none focus:border-blue-logo"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company">company name</label>
          <input
            type="text"
            id="company"
            name="company"
            className="border-2 p-2 focus:outline-none focus:border-blue-logo"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="address">meeting or event address</label>
        <input
          type="text"
          id="address"
          name="address"
          className="border-2 p-2 focus:outline-none focus:border-blue-logo"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="date">prefered date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="border-2 p-2 focus:outline-none focus:border-blue-logo"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="npeople">how many guests are you expecting?</label>
        <input
          type="text"
          id="npeople"
          name="npeople"
          className="border-2 p-2 focus:outline-none focus:border-blue-logo"
        />
      </div>

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="radio">will there be alcohol?</label>
        <div className="pl-5 grid grid-cols-2 gap-2 grid-rows-2">
          <input type="radio" id="yes" name="alcohol" value="yes" />
          <label htmlFor="yes">yes</label>

          <input type="radio" id="no" name="alcohol" value="no" />
          <label htmlFor="no">no</label>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="btime">What's the best time to contact you?</label>
        <div className="grid grid-rows-3 grid-cols-2 gap-4 capitalize">
          <input type="checkbox" id="btime" name="btime" value="morning" />
          Morning
          <input type="checkbox" id="btime1" name="btime1" value="afternoon" />
          afternoon
          <input
            type="checkbox"
            id="btime2"
            name="btime2"
            value="evening"
          />{" "}
          evening
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="textarea">your message</label>
        <textarea
          id="textarea"
          name="textarea"
          placeholder="Tell us about your event, food preferences, allergies, and any other details you'd like to share."
          rows={6}
          className="border-2 p-2 focus:outline-none focus:border-blue-logo"
        />
      </div>

      <input
        type="submit"
        value="submit"
        className="cursor-pointer text-blue-logo lg:w-[40%] hover:bg-blue-logo hover:text-white uppercase border-2 border-blue-logo px-4 p-2 duration-300 transition"
      ></input>
    </form>
  );
}

export default ContactForm;
