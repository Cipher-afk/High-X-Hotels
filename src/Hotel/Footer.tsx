import { hotel } from "../App"

interface FooterTabsProps{
    title: string
    tabs: string[]
}

function FooterTabs({title,tabs}:FooterTabsProps){
    const editedTabs = tabs.map((tab)=><p className="text-subText font-medium font-inter">{tab}</p>)
    return(
        <div className="flex flex-col gap-3">
            <p className="text-gold font-bold font-inter uppercase">{title}</p>
            <div className="flex flex-col gap-2.5">
                {editedTabs}
            </div>
            
        </div>
    )
}

export default function Footer(){
    return(
        <div className="flex flex-row p-2.5 lg:p-0 gap-4 lg:gap-0
         justify-between mt-7">
            <div className="lg:self-center self-start">
                <img src={hotel.logo} alt="Logo" className={"w-36 "}/>
                <p className="text-subText pl-2.5 lg:p-0 md:p-0 font-medium font-inter">Redefining luxury and hospitality with elegance, <br /> comfort, and unmatched service.</p>
            </div>  
            <FooterTabs title="Quick links" tabs={['Home','About Us','Rooms & Suites','Amenities','Gallery']}/>
            <FooterTabs title="Quick links" tabs={['Book a Stay','Special Offers','FAQs','Terms & Conditions','Privacy Policy']}/>
        </div>
    )
}