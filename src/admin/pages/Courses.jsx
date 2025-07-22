import React from 'react'
import AdminTable from '../components/AdminTable'

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'React Masterclass',
      instructor: 'John Doe',
      students: 234,
      rating: 4.8,
      price: '$99',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Python Basics',
      instructor: 'Jane Smith',
      students: 189,
      rating: 4.6,
      price: '$79',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Web Development',
      instructor: 'Mike Johnson',
      students: 312,
      rating: 4.9,
      price: '$149',
      status: 'Active',
    },
  ]

  const headers = ['Title', 'Instructor', 'Students', 'Rating', 'Price', 'Status']

  const handleEdit = (course) => {
    console.log('Edit course:', course)
  }

  const handleDelete = (course) => {
    console.log('Delete course:', course)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Courses</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Add New Course
        </button>
      </div>

      <AdminTable
        headers={headers}
        data={courses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default Courses