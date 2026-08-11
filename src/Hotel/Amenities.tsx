import type { IconType } from "react-icons";
import { FeaturesHeading } from "./RoomSection";
import { FaCar, FaSwimmingPool, FaWifi } from "react-icons/fa";
import { MdDining } from "react-icons/md";
import { FaSpa } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { easeIn, motion } from "framer-motion";

interface ExperiencesProps{
    icon: IconType
    title: string
}

function Experiences({icon:Icon,title}:ExperiencesProps){
    return(
        <motion.div whileInView={{opacity:1,scale:1}} initial={{opacity:0,scale:0.8}} transition={{duration:0.6, ease:easeIn}} viewport={{once:true}} className="flex flex-col p-4 items-center bg-surface md:text-center font-inter font-medium rounded-[10px] gap-1">
            <Icon className="text-gold size-10"/>
            <p className="text-subText font-bold">{title}</p>
        </motion.div>
    )
}


export default function AmenitiesSection(){
    return(
        <div className="mt-7" id="amenities">
            <FeaturesHeading title="Amenities" description="Experience more than just a stay"/>
            <div className="lg:grid lg:grid-cols-6 md:grid md:grid-cols-6 gap-5 mt-5 flex flex-col">
                <Experiences icon={FaSwimmingPool} title="Infinity Pool"/>
                <Experiences icon={MdDining} title="Fine Dining"/>
                <Experiences icon={FaSpa} title="Spa & Wellness"/>
                <Experiences icon={CgGym} title="Fitness Center"/>
                <Experiences icon={FaCar} title="Free Parking"/>
                <Experiences icon={FaWifi} title="High-Speed WiFi"/>
            </div>
        </div>
    )
}