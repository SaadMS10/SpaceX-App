import gql from 'graphql-tag'
export const Query_Launch= gql`
query launch{
    launches{
        flight_number
        mission_name
        launch_success
        launch_year
      
      }
    }
`
