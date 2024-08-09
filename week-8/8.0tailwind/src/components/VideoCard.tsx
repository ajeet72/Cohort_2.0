export function VideoCard(props: any) {
    return <div className="p-3 cursor-pointer">
        <img src={props.image} className="rounded-xl" alt="thumbnail" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className="rounded-full w-20 h-20" src={props.thumbImage} alt="" />
            </div>
            <div className="col-span-11 pl-5">
                {props.title}
                <div className="col-span-11 text-gray-600 text-base">
                    {props.author}
                </div>
                <div className="col-span-11 text-gray-600 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}