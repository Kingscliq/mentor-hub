import { FiLoader } from "react-icons/fi"

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <FiLoader size={40} className="animate-spin text-primary"/>
    </div>
  )
}

export default Loader