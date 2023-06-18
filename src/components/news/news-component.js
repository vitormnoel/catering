import Link from "next/link";

function Newsletter() {
  return (
    <section className="container m-auto mt-32 font-thin">
      <h4 className="capitalize text-4xl text-center pb-10">What's new?</h4>
      <div className="flex gap-20 justify-center items-center">
        <div className="flex flex-col gap-2 w-[300px]">
          <h4 className="text-xl capitalize font-normal">new menu items</h4>
          <p>Two new salads, a new hot entree plus a new hot meal.</p>
          <p>Check them out!</p>
          {/* TO DO: NEWSLETTER */}
          <Link
            href={""}
            className="text-end capitalize font-normal underline duration-300"
          >
            newsletter
          </Link>
        </div>
        <div className="h-[30vh] w-[25vw] bg-cover bg-[url('../public/images/2.jpg')]" />
      </div>
    </section>
  );
}

export default Newsletter;
