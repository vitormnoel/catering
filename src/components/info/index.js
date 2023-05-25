function Info(props) {
  let aux = [];
  //   console.log(props.content.map((item) => item.content.map((item) => item.span)));
  //   console.log(aux.map((item) => item.map((item) => item.span)));
  // TO DO: create a component to reuse the code.
  return (
    <section className="container m-auto mt-32">
      <div className="grid lg:grid-cols-3 px-20 gap-20">
        {props.content.map((item) => (
          <div className="" key={item.id}>
            <h4 className="capitalize text-4xl text-center pb-10">
              {item.title}
            </h4>
            <div>
              {item.content.map((item) => (
                <p className="pb-5 font-thin" key={item.span}>
                  <span className="font-normal">{item.span}</span> – {item.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Info;
