import gql from "graphql-tag"
export const Query_Launches=gql`
query launchinfo($id: String){
  launch(id: $id ){
    flight_number
    mission_name
     launch_success
    launch_year
    details
    launch_site{
      site_name
    }
   
  rocket{
    rocket_name
    rocket_id
  
  }
    links{
      video_link
      flickr_images
      wikipedia
    }
  }

}
`

  
 