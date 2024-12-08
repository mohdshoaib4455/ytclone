import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const PlayVideo = () => {
  const { id } = useParams();

  return (
    <>
      <div className="container-fluid PlayVideo px-0 overflow-hidden">
        <div className="row h-100">
          <div className="col-lg-12">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            ></ReactPlayer>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
