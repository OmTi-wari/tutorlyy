import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Welcome to TutorConnect</h1>
      <p className="text-xl mb-8">Connect with expert tutors and enhance your learning experience.</p>
      <div className="space-x-4">
        <Link to="/register" className="bg-primary text-primary-foreground px-6 py-2 rounded-md">
          Get Started
        </Link>
        <Link to="/about" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md">
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default LandingPage

