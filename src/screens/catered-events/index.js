import { Fragment } from "react";
import Image from "next/image";

import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

function CateredPage() {
  return (
    <Fragment>
      <NavBar />
      <main className="overflow-hidden container m-auto font-thin">
        <section className="mt-40 md:px-32 px-10">
          <h4 className="capitalize text-4xl text-center font-header text-blue-logo mb-10">
            Catering Events
          </h4>
          <p>
            As your trusted Vancouver events catering company, we have years of
            experience helping to bring impactful and memorable events to life.
            Catered events typically come with both food and service staff.
            Depending on your menu selection and preferences, we will customize
            our service to your preferences: served buffet, self-serve buffet,
            passed canapés, stations, bar, carvery…. There are lots of options.{" "}
          </p>
          <br />
          <p>
            Tell us what you envision and let's make it happen. If you would
            like rentals of tables, chairs, plates, etc., we know where to find
            them and are happy to arrange that as well. We love catering events!
          </p>
          <ul className="mt-20 grid grid-cols-2 items-center place-content-center place-items-center">
            <li>
              <Image
                src="/images/vancouver.jpg"
                height={800}
                width={800}
                className="object-fill max-h-[40vh] max-w-[30vw]"
                alt=""
              />

              <div className="text-center">
                <h5 className="font-header text-xl pt-4">Venues</h5>
                <p>There's a great place for your event in Metro Vancouver!</p>
              </div>
            </li>

            <li>
              <Image
                src="/images/catering.jpg"
                height={800}
                width={800}
                className="object-fill max-h-[40vh] max-w-[30vw]"
                alt=""
              />

              <div className="text-center">
                <h5 className="font-header text-xl pt-4">Venues</h5>
                <p>There's a great place for your event in Metro Vancouver!</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default CateredPage;
