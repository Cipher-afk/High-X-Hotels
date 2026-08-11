import { FaQuoteLeft } from "react-icons/fa6"
import { FeaturesHeading } from "./RoomSection"
import { FaStar } from "react-icons/fa"
import { easeIn, motion } from "framer-motion"

interface TestimonialProps{
    testimonial: string
    user: string
    location: string
}

function Testimonial({testimonial,user,location}:TestimonialProps){
    const initials = `${user[0].toUpperCase()}${user.split(" ")[1][0].toUpperCase()}`
    const stars = []
    for(let i=0; i<5; i++){
        stars.push(<FaStar className="size-5 text-gold"/>)
    }
    return(
        <motion.div whileInView={{opacity:1,y:0}} initial={{scale:1,opacity:0,y:40}} viewport={{once:true}} transition={{duration:0.6, ease:easeIn}} whileHover={{scale:1.02, boxShadow:'1px 4px 7px grey', cursor:'pointer'}} exit={{scale:1, boxShadow:"0px 0px 0px black"}} className="flex flex-col gap-8 font-inter rounded-[10px] bg-surface p-2">
            <div className="flex border-b p-4 text-[18px] gap-1 items-start justify-start border-[#ffffff7e]">
                <FaQuoteLeft className="size-20 text-gold -translate-y-6.75"/>
                <p className="text-subText font-medium ">{testimonial}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-row gap-6 items-center">
                    <div className="rounded-full size-11 bg-transparent border-3 p-2.5 border-gold text-gold font-bold flex items-center justify-center">
                        <p className="text-[20px]">{initials}</p>
                    </div>
                    <div>
                        <p className="uppercase font-inter font-bold text-gold">{user}</p>
                        <p className="text-subText font-medium font-inter">{location}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-1.5">
                    {stars}
                </div>
            </div>
        </motion.div>
    )
}

export default function Testimonials(){
    return(
        <div className="mt-7" id="testimonials">
            <FeaturesHeading title="Testimonials" description="Guests love their stay"/>
            <div className="lg:grid md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 flex flex-col">
                <Testimonial testimonial="An exceptional experience from start to finish. The staff went above and beyond to make our stay unforgettable" user="Chiamaka O" location="Port-Harcourt, Nigeria"/>
                <Testimonial testimonial="The perfect blend of luxury and comfort. I can't wait to come back" user="Emmanuel K" location="Port-Harcourt, Nigeria"/>
                <Testimonial testimonial="Breathtaking views and impeccable service. A truly memorable experience" user="Amanda P" location="Port-Harcourt, Nigeria"/>
            </div>
        </div>
    )
}