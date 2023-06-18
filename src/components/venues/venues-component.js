import Link from "next/link";

import Location from "../location/location-component";

function VenuesComponent(props) {
  const { locations } = props;
  return (
    <section className="mt-40 md:px-32 px-10">
      <h4 className="capitalize text-4xl text-start font-header mb-10">
        Venues
      </h4>

      <p className="">
        Here are a few of the venues we've had the privileged to cater in. We
        pride ourselves in building longstanding relationships with venues and
        are very proud to have developed a partnership with some of the below
        venues.
      </p>

      <h5 className="text-center capitalize text-2xl font-header my-10">
        Let our team know if you need help finding a venue.
      </h5>

      <ul className="flex gap-10 flex-wrap justify-center">
        {locations.map((location) => {
          return (
            <li className="flex flex-col items-center gap-4">
              <div className="overflow-hidden w-[300px] h-[300px]">
                <img
                  src={`/images/location/${location.image}.jpg`}
                  className="object-cover w-[300px] h-[300px] hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
              <h5 className="">{location.name}</h5>
            </li>
          );
        })}
      </ul>

      <h4 className="capitalize text-4xl text-center font-header mt-36 mb-10">
        Still looking for a venue?
      </h4>

      <p className="px-40">
        Regardless what venue you choose, we would be delighted to bring the yum
        to help make your meeting, event or celebration exactly what you
        envision. Take a look at our <Link href="/menus" className="hover:text-blue-logo duration-300 transition underline underline-offset-4">menus</Link>.
        Then connect with our <Link href="/contact" className="hover:text-blue-logo duration-300 transition underline underline-offset-4">Catering Consultants</Link> to take the next step in your
        planning.
      </p>

      <Location />
    </section>
  );
}

export default VenuesComponent;
