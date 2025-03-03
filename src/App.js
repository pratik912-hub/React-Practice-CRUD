import { Container } from "./components/Video";
import "./components/Video.css";
import objDB from "./data/data";
import Playbutton from "./components/Playbutton";
import { useReducer, useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";
import Clock from "./components/Clock";
import DropDown from "./components/DropDown";

// import { Thumbnails, Video } from './components/Video';
// import Lorem from './components/Video'
function App() {

  const [editableVideo, setEditableVideo] = useState(null);


  function videoReducer(obj,action){
    switch(action.type){
      case "Add":
        return [
               ...obj,{...action.payload,id: obj.length+1}
            ]
      case "DELETE":
        return obj.filter(video=>video.id!==action.payload)     
        
      case "UPDATE":
        const index = obj.findIndex(v => v.id === action.payload.id)
        const newVideos = [...obj]
        newVideos.splice(index,1,action.payload)
        setEditableVideo(null)
        return newVideos
        
        default:
    }
  }

  const [obj,dispatch] = useReducer(videoReducer,objDB)

  // const [obj, setVideos] = useState(objDB);
  

  // function addVideos(video){

  //   // dispatch({type:'Add', payload:video})

  //   //action : {type:'Add', payload:video}
  //   // setVideos([
  //   //     ...obj,{...video,id: obj.length+1}
  //   //   ]);
  // }

  // function deleteVideos(id){
  //   // dispatch({type:'DELETE', payload:id})

  // //   setVideos(
  // //   obj.filter(video=>video.id!==id)
  // // )
  // }

  function editVideos(id){
  //  console.log(id) 
   setEditableVideo(obj.find(video => video.id === id));
  }

  // function updateVideo(video){
  //   // dispatch({type:'UPDATE', payload:video})

  //   // const index = obj.findIndex(v => v.id === video.id)
  //   // const newVideos = [...obj]
  //   // newVideos.splice(index,1,video)
  //   // setVideos(newVideos)
  // }
  return (
    <>
      <div className="parent">
        <AddVideos dispatch={dispatch}  editableVideo={editableVideo}></AddVideos>
        <VideoList dispatch={dispatch} editVideos={editVideos} obj={obj}></VideoList>
      </div>

    </>
  );
}
export default App;
