import React from 'react'

const Certificates = () => {
  const templates = [
    {
      id: 1,
      name: 'Course Completion',
      preview: 'https://via.placeholder.com/300x200',
      description: 'Standard course completion certificate',
    },
    {
      id: 2,
      name: 'Achievement',
      preview: 'https://via.placeholder.com/300x200',
      description: 'Special achievement certificate',
    },
    {
      id: 3,
      name: 'Excellence',
      preview: 'https://via.placeholder.com/300x200',
      description: 'Certificate of excellence',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Certificate Templates</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Add New Template
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={template.preview}
              alt={template.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{template.name}</h3>
              <p className="text-gray-600 mt-2">{template.description}</p>
              <div className="mt-4 flex space-x-2">
                <button className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded hover:bg-indigo-200">
                  Edit
                </button>
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates