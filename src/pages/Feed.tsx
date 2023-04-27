import Post from "../components/Post"
import PostFeed from "../components/PostFeed"

const Feed = () => {
  return (
    <div className="bg-[#fafafb] p-8 min-h-[100vh]  dark:bg-[#141D26]">
    
        <div>
            <Post/>
        </div>
        <div>
            <PostFeed/>
        </div>
    </div>
  )
}

export default Feed