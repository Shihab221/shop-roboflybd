import Image from "next/image"
import roboarm from '../public/images/roboarm.png'
import robocar from '../public/images/robocar.png'
const Hero = () => {
  return (
    <div className="m-4 flex flex-row space-x-4">
        <div className="flex flex-row  rounded-lg bg-gray-800 items-center">
            <Image 
                src={roboarm}
                width="300"
                height="300"
                alt="roboarm_image"
                className="mx-6 py-10"
            />
            <div className="px-6">
                <p className="text-sm text-gray-400">Special offer</p>
                <p className="text-4xl font-bold text-start mb-1">
                Best Robotics Sale  
                </p>
                <p className="text-gray-400">Buy Robotics, Drone, SoccerBot  <span className="font-bold text-green-500">Components </span> at Lowest Price</p>
            </div>
            
        </div>
        <div className="bg-gray-800 rounded-lg">
            <Image 
                src={robocar}
                width = "300"
                height= "300"
                alt="robocar_image"
                className=""
                
            />
        </div>
      
    </div>
  )
}

export default Hero
