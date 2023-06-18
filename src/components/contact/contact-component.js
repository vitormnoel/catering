import Link from "next/link";
import { BiCheckboxChecked } from "react-icons/bi";

import ContactForm from "./form";

function ContactComponent() {
  return (
    <section className="mt-40 md:px-32 px-10">
      <h4 className="capitalize text-4xl text-center font-header text-blue-logo mb-10">
        Contact us - Let's talk
      </h4>

      <div className="grid lg:grid-cols-2 gap-2">
        <div className="ml-28">
          <h4 className="text-center font-header text-2xl uppercase mb-4">
            what's new on our instagram
          </h4>
          <>
            <div className="flex items-center gap-2 mb-2">
              <img
                src={"images/waiter.png"}
                className="w-[40px] border-2 border-blue-logo  rounded-full p-2"
              />
              <p className="font-header text-start cursor-pointer">catering</p>
            </div>
            <div className="bg-[url('../public/images/14.jpg')] cursor-pointer bg-cover w-full h-[40vh]" />
          </>
        </div>
        <div className="order-first">
          <p>
            Maybe you've identified what type of meeting or event you're having
            and whether you want Drop-off or a Catered Event. Maybe you've
            looked over our{" "}
            <Link className="underline hover:text-blue-logo" href={"/faqs"}>
              FAQs
            </Link>{" "}
            page. Perhaps you've looked at our Drop-Off menus or our Catered
            Event menus and have a good idea what food you want.
          </p>

          <ul className=" mt-10 flex flex-col gap-4">
            <li className="flex items-center">
              <BiCheckboxChecked
                size={32}
                className="min-w-[2rem] hover:text-blue-logo duration-300 cursor-pointer"
              />
              <p>
                Do you have a quick question? You can{" "}
                <Link
                  href={"/"}
                  className="underline underline-offset-4 hover:text-blue-logo duration-300"
                >
                  send an e-mail
                </Link>{" "}
                to us instead.
              </p>
            </li>
            <li className="flex items-center">
              <BiCheckboxChecked
                size={32}
                className="min-w-[2rem] hover:text-blue-logo duration-300 cursor-pointer"
              />
              <p>
                Do you want to talk to someone? Call us at{" "}
                <Link
                  href={"/"}
                  className="underline underline-offset-4 hover:text-blue-logo duration-300"
                >
                  +1-604-543-1234
                </Link>
                .
              </p>
            </li>
            <li className="flex items-center">
              <BiCheckboxChecked
                size={32}
                className="min-w-[2rem] hover:text-blue-logo duration-300 cursor-pointer"
              />
              <p>
                Do you know what you want and you are ready to order? Try our
                <Link
                  href={"/"}
                  className="underline underline-offset-4 hover:text-blue-logo duration-300"
                >
                  {" "}
                  online ordering
                </Link>
                , we will send you a confirmation.
              </p>
            </li>
            <li className="flex items-center">
              <BiCheckboxChecked
                size={32}
                className="min-w-[2rem] hover:text-blue-logo duration-300 cursor-pointer"
              />
              <p>
                Or do you just want to get a quote? Fill out the form below.
              </p>
            </li>
          </ul>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
