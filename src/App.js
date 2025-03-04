import { Container } from "./components/Video";
import "./components/Video.css";
import objDB from "./data/data";
import Playbutton from "./components/Playbutton";
import { useContext, useReducer, useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";
import Clock from "./components/Clock";
import DropDown from "./components/DropDown";
import ThemeContext from "./context/ThemeContext";
import "./App.css";
// import { Thumbnails, Video } from './components/Video';
// import Lorem from './components/Video'
function App() {

  const [editableVideo, setEditableVideo] = useState(null);

  //For The Change the State of dark mode to light mode for useContex
  const [mode,setMode] = useState('darkTheme')

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

  function editVideos(id){
   setEditableVideo(obj.find(video => video.id === id));
  }

  return (
    <>
    <ThemeContext.Provider value={mode}>
      <div className="custom-btn">
      <button onClick={()=>setMode(mode === 'darkTheme' ? 'lightTheme':'darkTheme')}>Mode</button>
      </div>
      <div className={`parent ${mode}`}>
        <AddVideos dispatch={dispatch}  editableVideo={editableVideo}></AddVideos>
        <VideoList dispatch={dispatch} editVideos={editVideos} obj={obj}></VideoList>
      </div>
    </ThemeContext.Provider>
    </>
  );
}
export default App;
