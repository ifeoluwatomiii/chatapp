import {BiComment} from 'react-icons/bi'
import {BsHeart, BsShare,BsBookmark} from 'react-icons/bs'

const PostReactions = () => {
  return (
    <div className='flex items-center justify-between dark:text-white/70'>
        <div className='flex items-center gap-2 py-3'>
            <BiComment/>
            <p>25 Comments</p>
        </div>
        <div className='flex items-center gap-2 py-3'>
            <BsHeart/>
            <p>250 Likes</p>
        </div>
        <div className='flex items-center gap-2 py-3'>
            <BsShare/>
            <p>400 Shares</p>
        </div>
        <div className='flex items-center gap-2 py-3'>
            <BsBookmark/>
            <p>23 Saves</p>
        </div>
    </div>
  )
}

export default PostReactions