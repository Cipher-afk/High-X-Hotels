import { FiArrowRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi"
import { FeaturesHeading } from "./RoomSection"
import type { IconType } from "react-icons"
import { easeIn, motion } from "framer-motion"
import { hotel } from "../App"

interface ContactProps{
    icon: IconType
    title: string
    value: string
}

function Contact({icon:Icon,title,value}:ContactProps){
    return(
        <div className="flex gap-2" id="contact">
            <Icon className="text-gold size-7"/>
            <div className="flex flex-col gap-1.5">
                <p className="text-mainText font-bold">{title}</p>
                <p className="text-subText font-medium">{value}</p>
            </div>
        </div>
    )
}


function ContactSection(){
    return(
        <div className="h-fit flex lg:flex-row flex-col p-5 bg-background gap-8">
            <Contact icon={FiPhone} title="Phone" value={hotel.phone}/>
            <Contact icon={FiMail} title="Email" value={hotel.email}/>
            <Contact icon={FiMapPin} title="Location" value={hotel.location}/> 
        </div>
    )
}



export default function ContactUs(){
    const message = encodeURIComponent(`Hello i would like to ask some questions on\n{question}`)
    const editedWhatsappLink = hotel.whatsapp_link+`?text=${message}`
    return(
        <motion.div initial={{opacity:0 ,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.6, ease:easeIn}} viewport={{once:true}} className="flex mt-7 p-10 lg:flex-row md:flex-row flex-col bg-surface items-center justify-between">
            <div className="flex flex-col">
                <FeaturesHeading title="Contact us" description="Let's Plan Your Perfect Stay"/>
                <div className="flex flex-col gap-2 -translate-y-3">
                    <p className="font-inter text-subText font-medium">Have questions or special requests? We're here to help</p>
                    <div className="flex gap-1.5 flex-row items-center border-2 border-gold uppercase text-gold font-medium font-inter w-fit py-1.5 px-3 m-0" onClick={()=>window.location.href = editedWhatsappLink}>
                        <p>Get in touch</p>
                        <FiArrowRight className="size-5"/>
                    </div>
                </div>
            </div>
            <ContactSection />
        </motion.div>
    )
}