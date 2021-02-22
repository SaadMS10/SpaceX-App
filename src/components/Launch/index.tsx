import React from 'react'
import {useLaunchQuery} from "../../generated/graphql"
import Loader from '../Loader/loader';
import Launches from "./Launch";

const LaunchContainer = ()=>{
    const {loading,error,data}= useLaunchQuery();
    console.log(data)
    if (loading){
        return <Loader/>
    }
    if(error || !data){
        return <div>There was an error</div>
    }
    return <Launches data={data} />
}
export default LaunchContainer;