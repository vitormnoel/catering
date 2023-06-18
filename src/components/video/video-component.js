import Youtube from "react-youtube";

function VideoSection() {
  return (
    <section className="container m-auto mt-32 font-normal font-header">
      <div className="flex flex-col items-center">
        <h4 className="capitalize text-4xl text-center pb-10">
          catering youtube video series
        </h4>
        <Youtube videoId="gNgXpu4PrbI" opts={{ playerVars: { autoPlay: 0 } }} />
      </div>
    </section>
  );
}

export default VideoSection;
