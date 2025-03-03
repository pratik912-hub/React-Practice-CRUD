import "./Video.css";

function Video({ title, bgColor }) {
  return <div style={{ backgroundColor: bgColor }}>{title}</div>;
}

function Thumbnails() {
  return (
    <>
      <img src="http://via.placeholder.com/1280x720"></img>
    </>
  );
}

function Lorem() {
  let colour = "dark";
  return <div className={colour}>Lorem</div>;
}

function Container({title,views,time,channel,verified,id,children,deleteVideos,editVideos}) {
  let channeJSX;
//  if(verified){
//   channeJSX = <p>{channel}✅</p>
//  }
//  else{
//   channeJSX = <p>{channel}</p>
//  }
  return (
   <>
    <div className="box" onClick={()=>console.log("App")}>
      <img 
        src={`https://picsum.photos/id/${id}/200/300`}
        alt="Placeholder" 
        className="box-image"
      />
      <div className="box-content">
        <span>{title}</span>
        <span>{views}</span>
        <div className="subInfo">
          {/* {verified ? <p>{channel}✅</p> : <p>{channel}</p> } */}
          <p>{channel} { verified ? '✅' : null}</p>
          {/* <p>{channel} {verified && '✅'}</p> */}
        <p className="time">{time}</p>
        </div>
      </div>

      <div className="custom-btn">
        {children}
      </div>
      <button className="close" onClick={() =>deleteVideos(id)}>X</button>
      <button className="close edit" onClick={() =>editVideos(id)}>Edit</button>
    </div>
    </>
  );
}
export default Lorem;
export { Thumbnails, Video, Container };
