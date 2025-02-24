"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const TutorListing = () => {
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    // TODO: Fetch tutors data from the backend
    // For now, we'll use dummy data
    setTutors([
      { id: 1, name: "Jane Smith", subject: "Mathematics", rating: 4.8 },
      { id: 2, name: "John Doe", subject: "Physics", rating: 4.5 },
      { id: 3, name: "Alice Johnson", subject: "Chemistry", rating: 4.9 },
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Available Tutors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="border rounded-md p-6">
            <h3 className="text-xl font-bold mb-2">{tutor.name}</h3>
            <p className="mb-2">Subject: {tutor.subject}</p>
            <p className="mb-4">Rating: {tutor.rating} / 5</p>
            <Link
              to={`/tutors/${tutor.id}`}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md inline-block"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TutorListing

