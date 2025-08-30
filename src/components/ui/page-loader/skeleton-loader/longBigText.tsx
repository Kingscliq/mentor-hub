import React from 'react'
interface LongTextTypes{
    customStyle:string
}
const LongBigText:React.FC<LongTextTypes> = ({customStyle}) => {
  return (
    <div className={`w-48 h-8 rounded-t-xl ${customStyle} bg-[#dad8d8] `}/>
  )
}

export default LongBigText