import React from 'react'

const Dashboard = () => {
  const stats = [
    { title: 'Total Students', value: '1,234', change: '+12%', icon: '👥' },
    { title: 'Total Earnings', value: '$12,345', change: '+8%', icon: '💰' },
    { title: 'Active Courses', value: '45', change: '+5%', icon: '📚' },
    { title: 'Completion Rate', value: '78%', change: '+3%', icon: '📈' },
  ]

  const recentOrders = [
    { id: 1, course: 'React Masterclass', student: 'John Doe', date: '2024-01-15', amount: '$99' },
    { id: 2, course: 'Python Basics', student: 'Jane Smith', date: '2024-01-14', amount: '$79' },
    { id: 3, course: 'Web Development', student: 'Mike Johnson', date: '2024-01-13', amount: '$149' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <span className="text-green-500 text-sm">{stat.change}</span>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Order ID</th>
                <th className="text-left py-3">Course</th>
                <th className="text-left py-3">Student</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.course}</td>
                  <td className="py-3">{order.student}</td>
                  <td className="py-3">{order.date}</td>
                  <td className="py-3">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard