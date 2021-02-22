import React from "react";
import { Launch } from "../../generated/graphql";
interface Props {
  data: Launch;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  return (
    <div style={{}}>
      <h3> LAUNCH DETAILS </h3>

      <div className="inner-modal">
        <h4>
          Launched From {data.launch?.launch_site?.site_name} In Year{" "}
          {data.launch.launch_year}{" "}
        </h4>

        <p> Mission ID : {data.launch.flight_number}</p>

        <p>
       
          Mission Name :
          {data.launch.launch_success ? (
            <span className="green"> {data.launch.mission_name}</span>
          ) : (
            <span className="red"> {data.launch.mission_name}</span>
          )}
        </p>

        <p>
          {" "}
          LAUNCH SUCESS :
          {data.launch.launch_success ? (
            <span className="green"> YES </span>
          ) : (
            <span className="red"> NO</span>
          )}
        </p>

        {data.launch?.details ? <p> DETAILS : {data.launch?.details}</p> : null}

        <p> ROCKET NAME : {data.launch?.rocket?.rocket_name}</p>
         {((data.launch.links.flickr_images.length > 0 )) ?    <p style={{textAlign:"center"}}>ROCKET IMAGES</p> : null}
     
    

        {data.launch.links && data.launch.links.flickr_images.length > 0  ? (
          <div>
        

            {data.launch.links.flickr_images.map((image,index) =>
              image ? (
                  <div key={index} style={{float:"left"}}>
                <a href={data.launch?.links.wikipedia} target="_blank" rel="noreferrer">
                  <img className="img" src={image}  alt="Clickable"/>
                </a>   </div>
              ) : (
                <p>
               
                  {data.launch?.links.wikipedia} 
                </p>
              )
            )}
         
         </div>
             ) : (
           
             <a href={data.launch?.links.wikipedia}>
          <p style={{textAlign:"center",textDecoration:"none"}}> CLICK HERE FOR MORE DETAILS </p>
          </a>
         
         
          )

        }
        </div> 

    
    </div>
  );
};
export default LaunchDetails;
