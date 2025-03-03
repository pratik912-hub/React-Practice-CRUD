import { useState } from "react";
import "./AddVideos.css";
import { useEffect } from "react";

const initialState = {
  views: '',
  title: '',
  channel: "Coding Dost",
  time: "24hr Ago",
  verified: true
}
function AddVideos({addVideos,updateVideo,editableVideo}) {
  const [video, setVideos] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      updateVideo(video)
    }
    else{
      addVideos(video); //Sends the date to parent
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
        <button
          onClick={handleSubmit}>
          {editableVideo? 'Edit' : 'Add'} Video
        </button>
      </div>
    </form>
  );
}
export default AddVideos;
