import Image from "next/image";
import Link from "next/link";

function Clients(props) {
  const companies = [];
  return (
    <section className="container m-auto mt-32 font-thin">
      <h4 className="capitalize text-4xl text-center pb-10">our clients</h4>

      <ul className="grid grid-cols-3 md:grid-cols-6 grid-wrap gap-10 justify-items-center">
        {props.client.map((company) => (
          <li className="" key={"img" + company.id}>
            <Link href={company.link}>
              <Image
                src={company.logo}
                alt={company.title}
                width={100}
                height={50}
                style={{ width: 100, height: 40 }}
                priority={true}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Clients;
