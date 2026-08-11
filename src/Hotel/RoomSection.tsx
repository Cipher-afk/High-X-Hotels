import { AnimatePresence, easeIn, motion } from "framer-motion";
import { hotel } from "../App";
import { useIsMobile } from "../Hooks";
import { useState } from "react";

interface RoomProp{
    image: string
    title: string
    description:string
    price:string
    
}

interface FeaturesHeadingProp{
    title: string
    description: string
}

interface RoomsViewProp{
    rooms: React.JSX.Element[]
}

interface circleProps{
    active?:boolean
    incorrect?: boolean
}

export function FeaturesHeading({title,description}:FeaturesHeadingProp){
    return(
        <div className="flex flex-col gap-0.5 mb-2.5">
            <p className="text-gold uppercase font-inter font-medium">{title}</p>
            <p className="text-mainText font-cinzel text-4xl font-medium">{description}</p>
        </div>
    )
}

function Rooms({image,title,description,price}:RoomProp){
    const editedPrice = "\u20A6"+price
    const message = encodeURIComponent(`Hello i would like to book the ${title} that has the price of ${editedPrice}`)
    const editedWhatsappLink = hotel.whatsapp_link+`?text=${message}`
    return(
        <motion.div whileInView={{opacity:1,y:0}} initial={{scale:1,opacity:0,y:40}} viewport={{once:true}} transition={{duration:0.6, ease:easeIn}} whileHover={{scale:1.02, boxShadow:'1px 4px 7px grey', cursor:'pointer'}} exit={{scale:1, boxShadow:"0px 0px 0px black"}} className="border border-[#ffffff6c] bg-surface h-fit w-full lg:w-fit">
            <img src={image} alt={title} className="h-60 w-full shrink-0 snap-center"/>
            <div className="flex flex-row justify-between px-7 pb-7">
                <div className="flex mt-3 flex-col gap-4">
                    <p className="font-cinzel text-gold font-bold text-[23px]">{title}</p>
                    <p className="font-inter text-subText font-bold">{description}</p>
                    <div className="flex flex-row items-center justify-between">
                        <p className="uppercase font-bold font-inter text-gold items-center">From {editedPrice} / night</p>
                        <button className="border-2 border-gold uppercase text-gold font-medium font-inter w-fit py-1.5 px-3 m-0" onClick={()=>window.location.href = editedWhatsappLink}>Book now</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function DesktopRoomsView({rooms}:RoomsViewProp){
    return(
        <div className="lg:grid lg:grid-cols-3 lg:gap-6 flex flex-col gap-7.5">
                {rooms}
                {/* <Rooms image={room_images[0]} title="Standard Room" description="A perfect blend of comfort and style with modern anemities and cozy ambience" price="80,000"/>
                <Rooms image={room_images[1]} title="Deluxe Room" description="A perfect blend of comfort and style with modern anemities and cozy ambience" price="100,000"/>
                <Rooms image={room_images[2]} title="Premium Room" description="A perfect blend of comfort and style with modern anemities and cozy ambience" price="120,000"/> */}
        </div>
    )
    
}
function Circle({active = false}:circleProps){
    return(
        <div className={"rounded-full size-2.5 border border-[#ffffff75] " + `${active ? 'bg-gold':'bg-surface'} border border-[#ffffff62]`}></div>
    )
}

function MobileRoomsView({rooms}:RoomsViewProp){
    const rooms_copy = rooms.slice(0,(rooms.length+1))
    const [currentRoomIndex,setCurrentRoomIndex] = useState(0)
    const circles = rooms_copy.map((_,index)=>(<Circle active={currentRoomIndex === index ? true:false}/>))
    const handleNext = ()=>{
        setCurrentRoomIndex(prev => Math.min(prev + 1,rooms_copy.length-1))
    }

    const handlePrevious = ()=>{
       setCurrentRoomIndex(prev => Math.max(prev - 1,0))
    }
    return(
        <div className="flex flex-col gap-4">
            <AnimatePresence mode="sync">
                <motion.div className="flex flex-row gap-2 items-center" drag='x' dragConstraints={{left:0,right:0}} onDragEnd={(_,info)=>{
                    console.log(info.offset.x)
                    if(info.offset.x < -100 || info.velocity.x < -500){
                        handleNext()
                    }
                    if(info.offset.x > 100 || info.velocity.x > 500){
                        handlePrevious()
                    }
                }} key={currentRoomIndex}  transition={{duration:0.6}}>
                    {/* {<FiChevronLeft className={"text-[#ffffff44] size-15 " + `${currentRoomIndex <= 0 ? 'opacity-0':'opacity-100'}`} onClick={handlePrevious}/>} */}
                    {rooms_copy[currentRoomIndex]} 
                    {/* {<FiChevronRight className={"text-[#ffffff44] size-15 " + `${currentRoomIndex >= (rooms_copy.length - 1) ? 'opacity-0':'opacity-100'}`} onClick={handleNext}/>} */}
                </motion.div>
            </AnimatePresence>
            <div className="flex gap-2.5 self-center">
                    {circles}
            </div>
        </div>
        
    )
}

export function RoomSection(){
    const rooms_data = hotel.rooms
    const room_images = rooms_data.images
    const room_titles = rooms_data.titles
    const room_descriptions = rooms_data.description
    const room_prices = rooms_data.price
    const rooms = room_titles.map((title,index)=>(<Rooms image={room_images[index]} title={title} description={room_descriptions[index]} price={room_prices[index]}/>))
    const isMobile = useIsMobile()
    return(
        <div className=" mt-7 border-b border-[#ffffff7e] pb-6" id="rooms">
            <FeaturesHeading title="our rooms & suites" description="find your perfect stay"/>
            {isMobile ? <MobileRoomsView rooms={rooms}/>:<DesktopRoomsView rooms={rooms}/>}
        </div>
    )
}