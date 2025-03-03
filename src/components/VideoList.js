import { Container } from "./Video";
import Playbutton from "./Playbutton";

function VideoList({obj,deleteVideos,editVideos}){
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
              deleteVideos={deleteVideos}
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