//40. Build a component that switches between two different user profiles stored in state.

import { useState } from "react"

const Ex40 = () => {
  const profiles = {
    profile1: {
      name: "ishan",
      email: "ishan@gmail.com",
      mobile: 9893997392
    },
    profile2: {
      name: "abhishek",
      email: "abhishek@gmail.com",
      mobile: 9893956789
    },

  }


  const [profile, setProfile] = useState("profile1")

  return (
    <div>
      <div className="w-60 h-50 ml-60 mt-30 bg-gray-500 p-4">
        <h1>{profiles[profile].name}</h1>
        <h3>{profiles[profile].email}</h3>
        <h3>{profiles[profile].mobile}</h3>
      </div>
      <button
        className="btn-primary"
        onClick={() => setProfile(profile === 'profile1' ? 'profile2' : 'profile1')}
      >
      Toggle
      </button>
    </div>
  )
}

export default Ex40
