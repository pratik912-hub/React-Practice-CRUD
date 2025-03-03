import { Container } from "./components/Video";
import "./components/Video.css";
import objDB from "./data/data";
import Playbutton from "./components/Playbutton";
import { useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";
import Clock from "./components/Clock";
import DropDown from "./components/DropDown";

// import { Thumbnails, Video } from './components/Video';
// import Lorem from './components/Video'
function App() {
  const [obj, setVideos] = useState(objDB);
  
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video){
    setVideos([
        ...obj,{...video,id: obj.length+1}
      ]);
  }

  function deleteVideos(id){
    setVideos(
    obj.filter(video=>video.id!==id)
  )
  }

  function editVideos(id){
   console.log(id) 
   setEditableVideo(obj.find(video => video.id === id));
  }

  function updateVideo(video){
    const index = obj.findIndex(v => v.id === video.id)
    const newVideos = [...obj]
    newVideos.splice(index,1,video)
    setVideos(newVideos)
  }
  return (
    <>
      <div className="parent">
        {/* <Clock></Clock>
        <DropDown></DropDown> */}

        {/* <div>Hello</div>
    <Video bgColor="red" title="First Video" ></Video>
    <Video bgColor="green" title="Second Video" ></Video>
    <Thumbnails></Thumbnails>
    <Lorem></Lorem> */}
        {/* <Container title="React Js Tutorial" verified={false} views="1M Views" time="2Months Ago" channel="Coder dost"></Container>
<Container title="Node Js Tutorial" views="2M Views" verified={false} time="45Months Ago" channel="Coder dost"></Container>
<Container title="View Js Tutorial" views="3M Views" verified={true} time="54Months Ago" channel="Coder dost"></Container>
<Container title="Angular Js Tutorial" views="4M Views" verified={false} time="25Months Ago" channel="Coder dost">
</Container>
<Container title="Next Js Tutorial" views="5M Views" verified={false} time="51Months Ago" channel="Coder dost"></Container>
<Container title="Express Js Tutorial" views="66M Views" verified={true} time="52Months Ago" channel="Coder dost"></Container> */}
        {/* <Container {...obj}></Container> */}
        <AddVideos addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideos>
        <VideoList deleteVideos={deleteVideos} editVideos={editVideos} obj={obj}></VideoList>
      </div>

    </>
  );
}
export default App;
