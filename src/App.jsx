import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import AboutPage from "./components/AboutPage"
import Dashboard from "./components/Dashboard"
import TutorProfile from "./components/TutorProfile"
import TutorListing from "./components/TutorListing"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/tutors/:id" component={TutorProfile} />
          <Route path="/tutors" component={TutorListing} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

