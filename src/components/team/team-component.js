function TeamComponent(props) {
  return (
    <div className="container m-auto mt-40">
      <h4 className="capitalize text-4xl text-center font-header">Our Team</h4>

      <ul className="mt-20 flex flex-wrap gap-20 justify-center">
        {props.team.map((member) => (
          <li key={member.id} className="flex flex-col items-center">
            <img
              className="min-w-[120px] max-w-[130px] p-2 rounded-full bg-stone-200"
              src={`/images/${member.profile}.png`}
            />
            <h5 className="capitalize">{member.name}</h5>
            <p className="text-sm text-center capitalize">{member.position}</p>
          </li>
        ))}
      </ul>

      <section>
        <h4 className="capitalize text-4xl text-start mt-40 font-header">
          Working at{" "}
          <span className="text-blue-logo">W Cartering</span>
        </h4>
        <p></p>
      </section>

      <section>
        <h4 className="capitalize text-4xl text-start mt-40 font-header text-blue-logo">
          Openings
        </h4>

        <div className="mt-10 w-full bg-stone-100 h-[30vh] rounded-lg flex justify-center items-center">
          <p className="font-semibold text-slate-500 cursor-pointer">
            We don't have any openings currently posted.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TeamComponent;
