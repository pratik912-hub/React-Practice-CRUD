import { Container } from "./Video";
import Playbutton from "./Playbutton";
import useVideos from "../hooks/Videos";

function VideoList({editVideos}){
  const obj = useVideos();
    return(
        <>
        {obj.map((videos) => (
            <Container
              title={videos.title}
              key={videos.id}
              views={videos.views}
              verified={videos.verified}
              time={videos.time}
              channel={videos.channel}
              id={videos.id}
              editVideos={editVideos}
            >
              <Playbutton
                onPlay={() => console.log("Playing", videos.title)}
                onPause={() => console.log("Paused", videos.title)}
              >
                {videos.title}
              </Playbutton>
            </Container>
          ))}
          </>
    )
}
export default VideoList;