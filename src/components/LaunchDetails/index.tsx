import React from "react"
import  {useLaunchinfoQuery} from "../../generated/graphql"
import Loader from "../Loader/loader";
import LaunchDetails from "./LaunchDetails"


const LaunchDetailsContainer=({index})=> {
    const{data,error,loading}=useLaunchinfoQuery({variables: {id: `${index}`}});
    if (loading){
        return <Loader/>
    }
    if(error || !data){
        return <div>There was an error {console.log(error)}</div>
    }
    return <LaunchDetails data={data} />
    
}
export default LaunchDetailsContainer