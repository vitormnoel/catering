import faq from "./faq.json";
import LocationComponent from "../location/location-component";

function DropdownComponent() {
  return (
    <section className="mt-40 md:px-32 px-10">
      <h4 className="capitalize text-4xl text-center font-header text-blue-logo mb-10">
        Frequently Asked Questions
      </h4>

      <p>
        We know your time is valuable. That's why we've put together the most
        frequently asked questions that our clients ask. And, of course, we've
        provided straight-forward answers for each of them so you can look over
        them and be as efficient as possible. In addition, you can always
        connect with our Catering Consultants.
      </p>

      <ul className="mt-20">
        {faq.map((item) => (
          <li key={item.id} className="mb-10">
            <h5 className="font-header text-xl">{item.title}</h5>
            <p className="px-4">{item.answer}</p>
          </li>
        ))}
      </ul>

      <LocationComponent />
    </section>
  );
}

export default DropdownComponent;

{
  /* <div className="relative flex flex-col items-center w-full rounded-lg">
  <button
    onMouseEnter={() => setIsOpen((prev) => !prev)}
    onMouseLeave={() => setIsOpen((prev) => !prev)}
    className="bg-stone-200 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider"
  >
    dropdown
    {isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
  </button>
  {isOpen && (
    <div className="bg-stone-100 text-black absolute top-12 w-full h-[100px] p-4 rounded-lg mt-4">
      {<h1>oi</h1>}
    </div>
  )}
</div>; */
}
