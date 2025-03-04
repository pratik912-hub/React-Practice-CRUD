import { useContext, useState } from "react";
import "./AddVideos.css";
import { useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";


const initialState = {
  views: '',
  title: '',
  channel: "Coding Dost",
  time: "24hr Ago",
  verified: true
}

function AddVideos({editableVideo}) {
  const [video, setVideos] = useState(initialState);
  const dispatch = useVideoDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({type:'UPDATE', payload:video})    }
    else{
      dispatch({type:'Add', payload:video})
    }
    setVideos(initialState) //Resets Form
    console.log(video);
  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideos({
       ...video, 
      [e.target.name] : e.target.value 
    });
    console.log(video)
  }

  useEffect(() => {
    if (editableVideo) {
      setVideos(editableVideo);
    }
  }, [editableVideo]);
  
  const theme = useContext(ThemeContext);

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={video.title}
      />
      <input  
        type="text"
        name="views"
        placeholder="Views"
        onChange={handleChange}
        value={video.views}
      />
      <div className="custom-btn">
        <button className={theme}
          onClick={handleSubmit}>
          {editableVideo? 'Edit' : 'Add'} Video
        </button>
      </div>
    </form>
  );
}
export default AddVideos;
