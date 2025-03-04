import { useContext } from "react";
import VideoContext from "../context/VideoContext";

function useVideos(){
    return useContext(VideoContext)
}

export default useVideos;