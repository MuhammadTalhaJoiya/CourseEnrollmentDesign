import React from 'react'
import AdminTable from '../components/AdminTable'

const Users = () => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Student',
      courses: 3,
      joinDate: '2024-01-01',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Instructor',
      courses: 2,
      joinDate: '2024-01-02',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'Student',
      courses: 1,
      joinDate: '2024-01-03',
    },
  ]

  const headers = ['Name', 'Email', 'Role', 'Courses', 'Join Date']

  const handleEdit = (user) => {
    console.log('Edit user:', user)
  }

  const handleDelete = (user) => {
    console.log('Delete user:', user)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Add New User
        </button>
      </div>

      <AdminTable
        headers={headers}
        data={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default Users