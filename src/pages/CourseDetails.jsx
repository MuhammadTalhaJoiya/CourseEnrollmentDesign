import { useParams } from 'react-router-dom'

// Temporary course data
const courseData = {
  id: 1,
  title: 'Complete Web Development Bootcamp',
  description: 'Learn full-stack web development from scratch. Master HTML, CSS, JavaScript, React, Node.js, and more.',
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  price: 99.99,
  instructor: {
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Senior Web Developer with 10+ years of experience. Passionate about teaching and helping others learn web development.'
  },
  whatYoullLearn: [
    'Build responsive websites using HTML5, CSS3, and JavaScript',
    'Master modern frontend frameworks like React',
    'Develop backend APIs using Node.js and Express',
    'Work with databases including MongoDB and MySQL',
    'Deploy applications to production',
    'Implement authentication and authorization'
  ],
  lessons: [
    { id: 1, title: 'Introduction to Web Development', duration: '45 mins' },
    { id: 2, title: 'HTML Fundamentals', duration: '1 hour' },
    { id: 3, title: 'CSS Styling and Layout', duration: '1.5 hours' },
    { id: 4, title: 'JavaScript Basics', duration: '2 hours' },
    { id: 5, title: 'Working with DOM', duration: '1 hour' },
    { id: 6, title: 'Introduction to React', duration: '1.5 hours' }
  ]
}

function CourseDetails() {
  const { id } = useParams()

  // In a real app, fetch course data based on id
  const course = courseData

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-textMuted mb-6">{course.description}</p>
            
            {/* Instructor Info */}
            <div className="flex items-center mb-6">
              <img 
                src={course.instructor.avatar} 
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{course.instructor.name}</h3>
                <p className="text-textMuted">Course Instructor</p>
              </div>
            </div>

            {/* Price and Enroll Button */}
            <div className="bg-cardBg rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-primary">
                  ${course.price}
                </span>
                <button className="btn btn-primary text-lg px-8">
                  Enroll Now
                </button>
              </div>
              <p className="text-textMuted text-sm">
                Full lifetime access • Certificate of completion
              </p>
            </div>
          </div>

          <div>
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* What You'll Learn */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.whatYoullLearn.map((item, index) => (
              <div 
                key={index}
                className="flex items-start p-4 bg-cardBg rounded-lg"
              >
                <svg
                  className="w-6 h-6 text-primary mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Course Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Course Content</h2>
          <div className="bg-cardBg rounded-xl overflow-hidden">
            {course.lessons.map((lesson, index) => (
              <div 
                key={lesson.id}
                className={`flex items-center justify-between p-4 ${
                  index !== course.lessons.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3">
                    {index + 1}
                  </span>
                  <span>{lesson.title}</span>
                </div>
                <span className="text-textMuted">{lesson.duration}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Instructor Bio */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
          <div className="bg-cardBg rounded-xl p-6">
            <div className="flex items-center mb-4">
              <img 
                src={course.instructor.avatar} 
                alt={course.instructor.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                <p className="text-textMuted">Course Instructor</p>
              </div>
            </div>
            <p className="text-gray-600">{course.instructor.bio}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CourseDetails