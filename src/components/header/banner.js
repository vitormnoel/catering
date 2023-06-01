function Banner() {
  return (
    <div className="mt-10 mx-24 text-center flex flex-col justify-center items-center gap-16 h-[95vh] static">
      <div className="md:flex flex-row gap-10 mt-10 hidden">
        <div className="hover:scale-105 transition duration-300 ease-in-out drop-shadow-xl w-[250px] h-[45vh] bg-slate-100 bg-[url('../public/images/catering.jpg')] bg-cover" />
        <div className="hover:scale-105 transition duration-300 ease-in-out drop-shadow-xl mt-16 w-[250px] h-[45vh] bg-slate-100 bg-[url('../public/images/5.jpg')] bg-cover" />
        <div className="hover:scale-105 transition duration-300 ease-in-out drop-shadow-xl w-[250px] h-[45vh] bg-slate-100 bg-[url('../public/images/4.jpg')] bg-cover" />
        <div className="hidden lg:block hover:scale-105 transition duration-300 ease-in-out drop-shadow-xl mt-16 w-[250px] h-[45vh] bg-slate-100 bg-[url('../public/images/6.jpg')] bg-cover" />
      </div>

      <div className="font-header text-blue-logo">
        <h2 className="text-7xl capitalize">your trusted corporate caterer</h2>
        <h3 className="text-lg capitalize font-extralight text-slate-600">
          with kitchens in Vancouver & Surrey - serving Metro Vancouver and the
          Fraser Valley
        </h3>
      </div>
    </div>
  );
}

export default Banner;
