import { useState } from 'react'
import CourseCard from '../components/CourseCard'

// Temporary course data
const allCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch. Master HTML, CSS, JavaScript, React, Node.js, and more.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 99.99,
    instructor: {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    category: 'Web Development',
    difficulty: 'Beginner',
    duration: '12 weeks'
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science, including statistics, Python, machine learning, and data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 79.99,
    instructor: {
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    category: 'Data Science',
    difficulty: 'Intermediate',
    duration: '8 weeks'
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Learn modern design principles, user research, wireframing, prototyping, and design tools like Figma.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 89.99,
    instructor: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    category: 'Design',
    difficulty: 'Intermediate',
    duration: '10 weeks'
  },
  {
    id: 4,
    title: 'Digital Marketing Strategy',
    description: 'Master digital marketing channels, SEO, social media marketing, content strategy, and analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: 69.99,
    instructor: {
      name: 'Michael Brown',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    category: 'Marketing',
    difficulty: 'Beginner',
    duration: '6 weeks'
  },
  {
    id: 5,
    title: 'Advanced Machine Learning',
    description: 'Deep dive into neural networks, deep learning, computer vision, and natural language processing.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: 129.99,
    instructor: {
      name: 'David Chen',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    category: 'Data Science',
    difficulty: 'Advanced',
    duration: '12 weeks'
  },
  {
    id: 6,
    title: 'Business Analytics Essentials',
    description: 'Learn data-driven decision making, business intelligence tools, and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzJTIwYW5hbHl0aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 89.99,
    instructor: {
      name: 'Emily Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    category: 'Business',
    difficulty: 'Intermediate',
    duration: '8 weeks'
  }
]

const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Business', 'Marketing']
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']
const durations = ['All', '0-4 weeks', '4-8 weeks', '8-12 weeks', '12+ weeks']

function Courses() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedDuration, setSelectedDuration] = useState('All')

  // Filter courses based on search and filters
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty
    const matchesDuration = selectedDuration === 'All' || course.duration.includes(selectedDuration)

    return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration
  })

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Explore Courses</h1>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search courses..."
            className="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <select
              className="input"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              className="input"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>

            {/* Duration Filter */}
            <select
              className="input"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              {durations.map(duration => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-textMuted">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Pagination (to be implemented) */}
        <div className="mt-8 flex justify-center">
          {/* Pagination components will go here */}
        </div>
      </div>
    </div>
  )
}

export default Courses