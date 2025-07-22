import { useState } from 'react';

// Temporary data
const certificates = [
  {
    id: 1,
    courseTitle: 'Complete Web Development Bootcamp',
    issueDate: '2024-02-15',
    instructor: 'John Doe',
    progress: 100,
    certificateUrl: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    id: 2,
    courseTitle: 'Data Science Fundamentals',
    issueDate: null, // Not completed yet
    instructor: 'Jane Smith',
    progress: 75,
    certificateUrl: null,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
];

const Certificates = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">My Certificates</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={cert.image}
                alt={cert.courseTitle}
                className="w-full h-full object-cover"
              />
              {cert.progress === 100 && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Completed
                </div>
              )}
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{cert.courseTitle}</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Instructor</span>
                  <span>{cert.instructor}</span>
                </div>
                
                {cert.issueDate && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Issue Date</span>
                    <span>{new Date(cert.issueDate).toLocaleDateString()}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span>{cert.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${cert.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {cert.certificateUrl ? (
                <button className="btn btn-primary text-lg">
                  Download Certificate
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-2 px-4 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md cursor-not-allowed"
                >
                  Complete Course to Earn Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {certificates.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No Certificates Yet</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Complete courses to earn certificates
          </p>
        </div>
      )}
    </div>
  );
};

export default Certificates;