import HotelHeader from "./Hotel/HotelHeader";
import AboutUsSection from "./Hotel/AboutUs";
import { RoomSection } from "./Hotel/RoomSection";
import AmenitiesSection from "./Hotel/Amenities";
import GallerySection from "./Hotel/Gallery";
import Testimonials from "./Hotel/Testimonials";
import ContactUs from "./Hotel/ContactUs";
import Footer from "./Hotel/Footer";
import firstImage from "./assets/hotel_images/headingImage1.png"
import secondImage from "./assets/hotel_images/headingImage2.png"
import BarImage from "./assets/hotel_images/headingImage3.png"
import StandardRoom from "./assets/hotel_images/standardRoom.png"
import DeluxeRoom from "./assets/hotel_images/deluxeRoom.png"
import PremiumRoom from "./assets/hotel_images/PremiumRoom.png"
import gallery1 from "./assets/hotel_images/gallery1.png"
import gallery2 from "./assets/hotel_images/gallery2.png"
import gallery3 from "./assets/hotel_images/gallery3.png"
import gallery4 from "./assets/hotel_images/gallery4.png"
import gallery5 from "./assets/hotel_images/gallery5.png"
import gallery6 from "./assets/hotel_images/gallery6.png"
import AboutUsImage from "./assets/hotel_images/AboutUsImage.png"
import Logo from "./assets/hotel_images/high_x_hotel_main_logo.png"

const heading_images = [firstImage,secondImage,BarImage]
const rooms_images = [StandardRoom,DeluxeRoom,PremiumRoom]
const rooms = {
  titles:["Standard Room","Deluxe Room","Premium Room"],
  description:["A perfect blend of comfort and style with modern anemities and cozy ambience","A perfect blend of comfort and style with modern anemities and cozy ambience","A perfect blend of comfort and style with modern anemities and cozy ambience"],
  price:["80,000","100,000","120,000"],
  images:rooms_images
}
export const hotel = {
  name:'High X Hotel',
  phone:'+234 801 234 5678',
  email:'info@highxhotel.com',
  logo:Logo,
  whatsapp_link:'https://wa.me/2347025614656',
  location:'Ogbogoro, Rivers State',
  heading_images : heading_images,
  about_us_image: AboutUsImage,
  rooms:rooms,
  all_images: [...heading_images,...rooms_images,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6]

}


export default function App(){
  return(
    <div className="flex flex-col">
      <HotelHeader />
      <div className="lg:p-10 p-3">
        <AboutUsSection />
        <RoomSection />
        <AmenitiesSection />
        <GallerySection />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}