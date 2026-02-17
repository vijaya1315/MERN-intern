const SkeletonCardText = () => {
    return(
        <div className="animate-pulse space-y-4 flex gap-3">
            <div className="h-5 bg-[#313139] rounded w-5 mb-0"></div>
            <div className="w-full ">
                 <div className="flex gap-x-1.5 mb-1.5">
                    <div className="h-2 bg-[#313139] rounded w-3/4"></div>
                    <div className="h-2 bg-[#313139] rounded w-1/4"></div>
                </div>
                <div className="flex gap-x-1.5">
                    <div className="h-2 bg-[#313139] rounded w-[30%]"></div>
                    <div className="h-2 bg-[#313139] rounded w-[20%]"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonCardText