import {ImFeed} from "react-icons/im"
import {FaUserFriends} from "react-icons/fa"
import {BsCalendar2Event} from "react-icons/bs"
import {RxVideo} from "react-icons/rx"
import {SlPicture} from "react-icons/sl"
import {AiOutlineFileDone} from "react-icons/ai"
import {GiCampingTent} from "react-icons/gi"
import { IconType } from "react-icons"


 export interface Navitem {
    item : string
    Icon: IconType
    link : string
 
}


const navitems : Navitem[] = [
    {
      item: "Feed",
      Icon: ImFeed,
      link: "/account/feed",
    
    },
   
    {
      item: "Friends",
      Icon: FaUserFriends,
      link: "/account/friends",
    },
    {
      item: "Events",
      Icon: BsCalendar2Event,
      link: "/account/events",
    },
    {
      item: "Watch Videos",
      Icon: RxVideo,
      link: "/account/watchvideos",
    },
    {
      item: "Photos",
      Icon: SlPicture,
      link: "/account/photos",
    },
    {
        item: "Files",
        Icon: AiOutlineFileDone,
        link: "/account/files",
      },
      {
        item: "Market Place",
        Icon: GiCampingTent,
        link: "/account/marketplace",
      },

  ];

  

  export default navitems