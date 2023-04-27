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
      link: "/dashboard/feed",
    
    },
   
    {
      item: "Friends",
      Icon: FaUserFriends,
      link: "/dashboard/friends",
    },
    {
      item: "Events",
      Icon: BsCalendar2Event,
      link: "/dashboard/events",
    },
    {
      item: "Watch Videos",
      Icon: RxVideo,
      link: "/dashboard/videos",
    },
    {
      item: "Photos",
      Icon: SlPicture,
      link: "/dashboard/photos",
    },
    {
        item: "Files",
        Icon: AiOutlineFileDone,
        link: "/dashboard/files",
      },
      {
        item: "Market Place",
        Icon: GiCampingTent,
        link: "/dashboard/market",
      },

  ];

  

  export default navitems