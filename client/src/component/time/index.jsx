import { useState } from "react";

const Time = () => {
  
  const time = new Date().toLocaleTimeString()
  const [currentTime, setCurrentTime] = useState(time)

  const updateTime = () => {
    const time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }

  setInterval(updateTime, 1000)

  return (
    <div className="end_time">
      {currentTime}
    </div>
  )
}

export default Time
