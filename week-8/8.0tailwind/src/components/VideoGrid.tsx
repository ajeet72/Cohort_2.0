import { VideoCard } from "./VideoCard"

const Videos = [{
    title: "how to learn coding in 30 days | code with me",
    image: "photo.png",
    thumbImage: "thumb.png",
    author: "harkirat singh",
    views: "40 M views",
    timestamp: "40 days ago",
}, {
    title: "how to learn coding in 30 days | code with me 22",
    image: "photo.png",
    thumbImage: "thumb.png",
    author: "harkirat singh",
    views: "40 M views",
    timestamp: "40 days ago",
},  {
    title: "how to learn coding in 30 days | code with me 33",
    image: "photo.png",
    thumbImage: "thumb.png",
    author: "harkirat singh",
    views: "40 M views",
    timestamp: "40 days ago",
},{
    title: "how to learn coding in 30 days | code with me 544",
    image: "photo.png",
    thumbImage: "thumb.png",
    author: "harkirat singh",
    views: "40 M views",
    timestamp: "40 days ago",
},{
    title: "how to learn coding in 30 days | code with me we",
    image: "photo.png",
    thumbImage: "thumb.png",
    author: "harkirat singh",
    views: "40 M views",
    timestamp: "40 days ago",
},{
    title: "how to learn coding in 30 days | code with me we",
    image: "photo.png",
    thumbImage: "thumb.png",
    author: "harkirat singh",
    views: "40 M views",
    timestamp: "40 days ago",
},{
    title: "how to learn coding in 30 days | code with me we",
    image: "photo.png",
    thumbImage: "thumb.png",
    author: "harkirat singh",
    views: "40 M views",
    timestamp: "40 days ago",
},{
    title: "how to learn coding in 30 days | code with me we",
    image: "photo.png",
    thumbImage: "thumb.png",
    author: "harkirat singh",
    views: "40 M views",
    timestamp: "40 days ago",
},{
    title: "how to learn coding in 30 days | code with me we",
    image: "photo.png",
    thumbImage: "thumb.png",
    author: "harkirat singh",
    views: "40 M views",
    timestamp: "40 days ago",
} ]


export const VideoGrid = () => {
    return <div className="grid grid-cols-4 mt-39">
        {Videos.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views} 
                timestamp={video.timestamp} 
            ></VideoCard>
        </div>)}
    </div>
}