import React from 'react'
import AdminTable from '../components/AdminTable'

const Orders = () => {
  const orders = [
    {
      id: 1,
      course: 'React Masterclass',
      student: 'John Doe',
      date: '2024-01-15',
      amount: '$99',
      status: 'Completed',
    },
    {
      id: 2,
      course: 'Python Basics',
      student: 'Jane Smith',
      date: '2024-01-14',
      amount: '$79',
      status: 'Pending',
    },
    {
      id: 3,
      course: 'Web Development',
      student: 'Mike Johnson',
      date: '2024-01-13',
      amount: '$149',
      status: 'Completed',
    },
  ]

  const headers = ['Order ID', 'Course', 'Student', 'Date', 'Amount', 'Status']

  const handleEdit = (order) => {
    console.log('Edit order:', order)
  }

  const handleDelete = (order) => {
    console.log('Delete order:', order)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Orders</h1>
      </div>

      <AdminTable
        headers={headers}
        data={orders}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default Orders