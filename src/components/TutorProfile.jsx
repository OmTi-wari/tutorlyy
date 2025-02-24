"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const TutorProfile = () => {
  const [tutor, setTutor] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    // TODO: Fetch tutor data from the backend
    // For now, we'll use dummy data
    setTutor({
      id,
      name: "Jane Smith",
      subject: "Mathematics",
      bio: "Experienced math tutor with 5 years of teaching experience.",
      rating: 4.8,
    })
  }, [id])

  const handleBookSession = () => {
    // TODO: Implement booking functionality
    console.log("Booking session with tutor:", id)
  }

  if (!tutor) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">{tutor.name}</h2>
      <p className="text-xl mb-4">Subject: {tutor.subject}</p>
      <p className="mb-4">{tutor.bio}</p>
      <p className="mb-6">Rating: {tutor.rating} / 5</p>
      <button onClick={handleBookSession} className="bg-primary text-primary-foreground px-6 py-2 rounded-md">
        Book a Session
      </button>
    </div>
  )
}

export default TutorProfile

