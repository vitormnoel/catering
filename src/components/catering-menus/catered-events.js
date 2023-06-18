import Image from "next/image";
import Link from "next/link";

function CateredEvents() {
    return (
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
          <ul className="m-20 grid grid-cols-2 gap-10 place-items-center">
            <li>
              <Image
                src="/images/vancouver.jpg"
                height={800}
                width={800}
                className="object-fill max-h-[40vh] max-w-[30vw]"
                alt=""
              />

              <div className="text-center">
                <h5 className="font-header text-xl pt-4">Venues for special occasions</h5>
                <p className="mb-6">There's a great place for your event in Metro Vancouver!</p>
                <Link href="/venues" className="uppercase border-2 px-4 py-2 border-black hover:border-blue-logo hover:text-blue-logo duration-300">explore some venues</Link>
              </div>
            </li>

            <li>
              <Image
                src="/images/14.jpg"
                height={800}
                width={800}
                className="object-fill max-h-[40vh] max-w-[30vw]"
                alt=""
              />

              <div className="text-center">
                <h5 className="font-header text-xl pt-4">Check out our Menus</h5>
                <p className="mb-6">Whatever the occasion, let us handle the food.</p>
                <Link href="/menus" className="uppercase border-2 px-4 py-2 border-black hover:border-blue-logo hover:text-blue-logo duration-300">explore our menus</Link>
              </div>
            </li>
          </ul>
        </section>
    )
}

export default CateredEvents;