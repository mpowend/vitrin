import axios from 'axios'

const url ="https://vitrin.splus.ir/srvcs-app/v1/json/7743461522282941752/82ea802fec65c22c4bc30733474ec7e6/landing/get"

async function splusLandingRequest(landing:number){
   const {data} = await axios.post(url,{landing_id:landing})
   const result = await data
   return result
}

export default splusLandingRequest