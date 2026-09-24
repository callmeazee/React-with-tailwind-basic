//27. Create a state variable that stores the current date and updates it every second.

import { useEffect, useState } from "react"



const Ex27 = () => {

     const [time, setTime] = useState(new Date())

     useEffect(() => {
          const timer = setInterval(() => {
               setTime(new Date())
          }, 1000)

          return ()=> clearInterval(timer)
     }, [])


  return (
    <div>
            <h1>{time.toLocaleString() }</h1>
    </div>
  )
}

export default Ex27
