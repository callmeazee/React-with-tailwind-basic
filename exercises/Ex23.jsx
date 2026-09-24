//23. Implement a "Like" button that toggles between "Liked" and "Unliked".

import { useState } from "react"

const Ex23 = () => {
  const [like, setLike] = useState(false)
  return (
    <div>
      <button
        className="btn-primary"
      onClick={()=> setLike(!like)}
      >
        {like ? "dislike" : "like"}
      </button>
    </div>
  )
}

export default Ex23
