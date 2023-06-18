import Link from "next/link";

function Menu(props) {
  const { drop, catering } = props;

  return (
    <section className="mt-40 md:px-32 px-10 container m-auto">
      <h4 className="capitalize text-4xl text-center font-header text-blue-logo mb-10">
        Menus
      </h4>
      <p>
        We've created specific menus for different occasions and service styles.
        Please take a look at the events catering menus you feel best suit the
        event you are creating. Feel free to{" "}
        <Link
          href={"/contact"}
          className="hover:text-blue-logo duration-300 transition underline underline-offset-4"
        >
          contact our Catering Consultants
        </Link>{" "}
        if you have questions. Once you know what food you want, we will be
        happy to put together a proposal that includes rental items (such as
        tables, linens, dinnerware, etc.) and staffing.
      </p>

      <h5 className="mt-20 capitalize text-2xl font-header">
        1. Drop-Off Menus
      </h5>

      <ul className="mt-10 flex flex-wrap gap-10 justify-center">
        {drop.map((item) => {
          return (
            <li
              key={item.id}
              className="flex items-center gap-6 bg-stone-100/80 w-[50vw] h-[35vh] mr-10"
            >
              <img
                src={`/images/${item.image}.jpg`}
                className="pl-3 object-cover h-[32vh] min-w-[15vw]"
              />
              <div className="pr-4">
                <h6 className="text-xl capitalize font-header pb-4">
                  {item.title}
                </h6>
                <p className="">{item.description}</p>
                <div className="text-end mt-10">
                  <Link
                    href={item.url}
                    target="_blank"
                    className="uppercase border-2 px-4 py-2 border-black hover:border-blue-logo hover:text-blue-logo duration-300"
                  >
                    learn more
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <h5 className="mt-20 capitalize text-2xl font-header">
        2. Catering Menus
      </h5>

      <ul className="mt-10 flex flex-wrap gap-10 justify-center">
        {catering.map((item) => {
          return (
            <li
              key={item.id}
              className="flex items-center gap-6 bg-stone-100/80 w-[50vw] h-[35vh] mr-10"
            >
              <img
                src={`/images/${item.image}.jpg`}
                className="pl-3 object-cover h-[32vh] min-w-[15vw]"
              />
              <div className="pr-4">
                <h6 className="text-xl capitalize font-header pb-4">
                  {item.title}
                </h6>
                <p className="">{item.description}</p>
                <div className="text-end mt-10">
                  <Link
                    href={item.url}
                    className="uppercase border-2 px-4 py-2 border-black hover:border-blue-logo hover:text-blue-logo duration-300"
                  >
                    learn more
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Menu;
