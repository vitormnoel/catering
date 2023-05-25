import { Fragment } from "react";
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
          <ul className="mt-20 py-10 flex flex-wrap gap-10 items-center justify-center">
            <li className="text-center">
                <div className="bg-stone-100 w-[300px] h-[300px]"/>
                <h5 className="capitalize text-xl mt-4 mb-2">Conferences & Meetings</h5>
                <a href="/" blank="_target" className="font-normal capitalize bg-blue-logo hover:bg-blue-800 duration-300 py-2 px-4 rounded-lg text-white">catering for conferences</a>
            </li>
            <li className="text-center">
                <div className="bg-stone-100 w-[300px] h-[300px]"/>
                <h5 className="capitalize text-xl mt-4 mb-2">Our BBQs Sizzle</h5>
                <a href="/" blank="_target" className="font-normal capitalize bg-blue-logo hover:bg-blue-800 duration-300 py-2 px-4 rounded-lg text-white">BBQ catering</a>
            </li>
            <li className="text-center">
                <div className="bg-stone-100 w-[300px] h-[300px]"/>
                <h5 className="capitalize text-xl mt-4 mb-2">Celebrations of life & memorials</h5>
                <a href="/" blank="_target" className="font-normal capitalize bg-blue-logo hover:bg-blue-800 duration-300 py-2 px-4 rounded-lg text-white">catering for memorials</a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default CateredPage;
