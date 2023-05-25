import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { BsCalendarEvent } from "react-icons/bs";

function TestimonialSection(props) {
  return (
    <section className="container m-auto mt-32 font-thin">
      <h4 className="capitalize text-4xl text-center pb-10">Testimonials</h4>

      <ul>
        {props.testimonials.map((testimonial) => (
          <li key={testimonial.id} className="flex flex-col items-center px-10 lg:flex-row gap-10 justify-center">
            <Image src="/images/2.jpg" alt="" width={300} height={400} />
            <div className="lg:w-1/3">
              <h5 className="text-2xl pb-4 font-header">
                {testimonial.client}
              </h5>
              <div className="flex place-content-between font-normal mb-4">
                <p className="flex items-center gap-2 capitalize">
                  <GoLocation /> {testimonial.location}
                </p>
                <p className="flex items-center gap-2 capitalize">
                  <BsCalendarEvent /> {testimonial.date}
                </p>
              </div>

              <hr/>

              <p className="pt-10">{testimonial.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TestimonialSection;
