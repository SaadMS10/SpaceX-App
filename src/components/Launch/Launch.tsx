import React ,{useState} from 'react'
import {Launch} from "../../generated/graphql"
import {MdExpandMore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import Modal from "react-modal"
import LaunchDetailsContainer from '../LaunchDetails'
interface Props{
    data:Launch
}

 const Launches: React.FC<Props>=({data})=>{
     const [openModal,setopenModal ] = useState(false)
     const [id,setId]=useState();
 
     const openModel= (id1) =>{
          return(
        setopenModal(true),
        setId(id1)
          )
        
     }
  

     function closemodel(){
         setopenModal(false)
     }
     return(
    <div>
   
    <div >
    <ul >
       {
         

           data.launches.map((data,index)=>(
            (data.mission_name.length < 12 )  ?

            <li key={index} className="launches" >
                {data.flight_number}. MISSION <div className={(data.launch_success) ? "green" : "red "} > 
                {data.mission_name}  </div>
                <button className="details" onClick={()=>openModel(data.flight_number)} > <MdExpandMore size={25}/>

                </button>
            </li>
               : null
           ))
         
           

       }

        
    </ul>
    </div>
    <Modal
              className='modal'
              overlayClassName='overlay'
              isOpen={openModal}
              ariaHideApp={false}
              onRequestClose={closemodel}
              contentLabel='Modal'
            >
                <span className="nav">
                <button className="close"
                          
                          onClick={(()=> closemodel)()}>
                            <AiFillCloseCircle size={40} />
                        </button>
                        <h2 className="head">  LAUNCH DETAILS </h2>
                        </span>
                  
                        <div>
                  <LaunchDetailsContainer index={id} />
                  </div>

                 </Modal>
    </div>

     )
 }
export default Launches;  

