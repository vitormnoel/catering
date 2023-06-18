import { GoLocation } from "react-icons/go";
import { BsCalendarEvent } from "react-icons/bs";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

function TestimonialSection(props) {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const lastIndex = isFirstSlide ? props.testimonials.length - 1 : index - 1;
    setIndex(lastIndex);
  };

  const nextSlide = () => {
    const isLastSlide = index === props.testimonials.length - 1;
    const firstIndex = isLastSlide ? 0 : index + 1;
    setIndex(firstIndex);
  };

  const dotClick = (index) => {
    setIndex(index);
  };

  return (
    <section className="container m-auto mt-32 font-thin">
      <h4 className="capitalize text-4xl text-center pb-10">Testimonials</h4>

      <ul className="relative lg:h-[40vh]">
        <MdArrowBackIosNew
          size={40}
          className="md:block hidden cursor-pointer absolute top-[50%] left-10 -translate-x-0 translate-y-[-100%]"
          onClick={prevSlide}
        />
        <MdOutlineArrowForwardIos
          size={40}
          className="md:block hidden cursor-pointer absolute top-[50%] right-10 -translate-x-0 translate-y-[-100%]"
          onClick={nextSlide}
        />

        <li
          key={props.testimonials[index].id}
          className="flex flex-col items-center lg:items-start px-10 lg:flex-row gap-10 justify-center"
        >
          <img
            src={`/images/` + props.testimonials[index].image}
            alt=""
            width={400}
            height={400}
          />
          <div className="lg:w-1/3">
            <h5 className="text-2xl pb-4 font-header">
              {props.testimonials[index].client}
            </h5>
            <div className="flex place-content-between font-normal mb-4">
              <p className="flex items-center gap-2 capitalize">
                <GoLocation /> {props.testimonials[index].location}
              </p>
              <p className="flex items-center gap-2 capitalize">
                <BsCalendarEvent /> {props.testimonials[index].date}
              </p>
            </div>

            <hr />

            <p className="pt-10">{props.testimonials[index].content}</p>
          </div>
        </li>
        <div className="mt-10 flex justify-center">
          {props.testimonials.map((testimonial, index) => (
            <div key={index} onClick={() => dotClick(index)}>
              <RxDotFilled size={26} className="cursor-pointer" />
            </div>
          ))}
        </div>
      </ul>
    </section>
  );
}

export default TestimonialSection;

// {props.testimonials.map((testimonial) => (
//   <li
//     key={testimonial.id}
//     className="flex flex-col items-center px-10 lg:flex-row gap-10 justify-center"
//   >
//     <img
//       src={`/images/` + testimonial.image}
//       alt=""
//       width={400}
//       height={400}
//     />
//     <div className="lg:w-1/3">
//       <h5 className="text-2xl pb-4 font-header">
//         {testimonial.client}
//       </h5>
//       <div className="flex place-content-between font-normal mb-4">
//         <p className="flex items-center gap-2 capitalize">
//           <GoLocation /> {testimonial.location}
//         </p>
//         <p className="flex items-center gap-2 capitalize">
//           <BsCalendarEvent /> {testimonial.date}
//         </p>
//       </div>

//       <hr />

//       <p className="pt-10">{testimonial.content}</p>
//     </div>
//   </li>
// ))}
