import SkeletonLoader from "."
import ShortHeader from "./short-header"


const SummarySkeletonLoader = () => {
  return (
    <SkeletonLoader classname='h-full rounded-xl mt-6 '>
         <section className="grid md:grid-cols-12 gap-x-5">
           <div className="md:col-span-8 gap-y-2 flex flex-col">
              {/* <div className="w-full h-[400px] bg-[#dad8d8] rounded-md "/> */}
              <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row gap-x-3">
                <div className="w-full h-[100px] bg-[#dad8d8] rounded-md wave-effect "/>
                <div className="w-full h-[100px] bg-[#dad8d8] rounded-md wave-effect"/>
              </div>
              <div className="flex flex-col md:flex-row gap-x-3">
                <div className="w-full h-[500px] bg-[#dad8d8] rounded-md wave-effect "/>
                <div className="w-full h-[500px] bg-[#dad8d8] rounded-md wave-effect"/>
              </div>
           </div>
           <div className="md:col-span-4 flex flex-col gap-y-7">
             <div className="w-full h-[300px] bg-[#dad8d8] rounded-md wave-effect"/>
             <div className="flex flex-col gap-y-1">
                <div className="w-full h-[40px] bg-[#dad8d8] rounded-3xl wave-effect "/>
                <div className="w-full h-[40px] bg-[#dad8d8] rounded-3xl wave-effect "/>
                <div className="w-full h-[40px] bg-[#dad8d8] rounded-3xl wave-effect "/>
                <div className="w-full h-[40px] bg-[#dad8d8] rounded-3xl wave-effect"/>
             </div>

             <div className="flex flex-col gap-y-1">
                <div className="w-full h-[40px] bg-[#dad8d8] rounded-3xl wave-effect"/>
                <div className="w-full h-[40px] bg-[#dad8d8] rounded-3xl wave-effect"/>
                <div className="w-full h-[40px] bg-[#dad8d8] rounded-3xl wave-effect"/>
                <div className="w-full h-[40px] bg-[#dad8d8] rounded-3xl wave-effect"/>
             </div>
              
           </div>
         </section>
    </SkeletonLoader>
  )
}

export default SummarySkeletonLoader

export const CardSkeleton = () => {
    return (
    <SkeletonLoader classname=' py-6 px-3 rounded-xl'>
      
        <div className="mt-3 grid grid-cols-1 gap-y-8">
            {Array(10).fill(0).map((item,index) => (
                <div key={`${index}${item}`} className="flex items-center justify-between border-l ">
                    <ShortHeader/>
                    <ShortHeader/>
                    <ShortHeader/>
                    <ShortHeader/>
                    <ShortHeader/>
                </div>
            ))}
        </div>
    </SkeletonLoader>
    )
}