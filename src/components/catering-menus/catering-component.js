import Link from "next/link";

function CateringMenus(props) {
  return (
    <section className="bg-stone-50 w-[100vw] py-10">
      <div className="container m-auto">
        <div className="font-thin px-20">
          <h4 className="capitalize text-4xl text-center pb-10">
            catering menus
          </h4>

          <p>
            We've created specific menus for different occasions and service
            styles. Please take a look at the events catering menus you feel
            best suit the event you are creating. Feel free to{" "}
            <span className="cursor-pointer">contact us</span> if you have any
            question. Once you know what food you want, we will be happy to put
            together a proposal that includes rental items (such as tables,
            linens, dinnerware, etc.) and staffing.
          </p>
        </div>
        <ul className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 mt-28">
          {props.menus.map((menu) => (
            <li key={menu.id} className="">
              <div className="relative overflow-hidden">
                <img
                  src={`/images/${menu.image}.jpg`}
                  className="w-[300px] h-[300px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50" />

                <div className="absolute w-full py-2 px-4 top-[40%] text-white text-center">
                  <h5 className="font-semibold text-lg" >{menu.title}</h5>
                  <br />
                  <Link href="/files/menu.pdf" target="_blank" className="mt-4 px-4 py-2 uppercase hover:bg-white/90 hover:text-black duration-300 bg-white/30">
                    learn more
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CateringMenus;
