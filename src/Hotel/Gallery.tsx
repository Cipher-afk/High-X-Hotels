import { FeaturesHeading } from "./RoomSection"
import { easeIn, motion } from "framer-motion"
import { hotel } from "../App"

export default function GallerySection(){
    const images = hotel.all_images
    const gallery = [...images,...images]
    const editedImages = gallery.map((image)=><img className="w-75 h-55 hover:scale-[1.05] hover:cursor-pointer transition-[scale]" src={image}/>)
    console.log(editedImages)
    return(
        <div className="mt-7 overflow-hidden " id="gallery">
            <FeaturesHeading title="Gallery" description={"A glimpse of " + hotel.name}/>
            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.4, ease:easeIn}} className={`flex p-10 gap-5 w-max animate-scroll hover:animation-paused`}>
                {editedImages}
            </motion.div>
        </div>
    )
}