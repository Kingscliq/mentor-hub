import { useEffect, useState } from "react"

export default function useDebounce<T>(value:T,delay:number): T {
    const [debounceVal,setDebounceVal] = useState<T>(value)
    useEffect(() => {
      const handler = setTimeout(() => {
          setDebounceVal(value)
      }, delay)
  
      return () => {
          clearTimeout(handler);
      }
    },[value,delay])
  
    return debounceVal;
  }