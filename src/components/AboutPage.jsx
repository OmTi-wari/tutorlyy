const AboutPage = () => {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">About TutorConnect</h2>
        <p className="text-xl mb-6">
          TutorConnect is a platform that connects students with expert tutors to enhance their learning experience.
        </p>
        <p className="mb-6">
          Our mission is to make quality education accessible to everyone by providing a seamless connection between
          learners and educators.
        </p>
        <h3 className="text-2xl font-bold mb-4">How it works</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Students can browse through our list of qualified tutors</li>
          <li>Tutors can create profiles showcasing their expertise and availability</li>
          <li>Students can book sessions with tutors that match their needs</li>
          <li>After each session, students can rate their experience with the tutor</li>
        </ul>
        <p>Join TutorConnect today and take your learning to the next level!</p>
      </div>
    )
  }
  
  export default AboutPage
  
  