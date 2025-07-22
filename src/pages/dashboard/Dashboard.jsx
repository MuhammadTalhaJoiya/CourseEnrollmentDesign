import { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';

// Temporary data
const enrolledCourses = [
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
    progress: 75,
    totalLessons: 48,
    completedLessons: 36
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
    progress: 30,
    totalLessons: 36,
    completedLessons: 12
  },
];

const recentLessons = [
  {
    id: 1,
    courseId: 1,
    title: 'Advanced React Hooks',
    courseName: 'Complete Web Development Bootcamp',
    lastWatched: '2024-02-20T10:30:00',
    progress: 80
  },
  {
    id: 2,
    courseId: 2,
    title: 'Introduction to Machine Learning',
    courseName: 'Data Science Fundamentals',
    lastWatched: '2024-02-19T15:45:00',
    progress: 60
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Enrolled Courses Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">My Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="relative">
              <CourseCard {...course} />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-surface border-t border-border-primary">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-text-primary">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-background-tertiary rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-text-muted">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Watched Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Recently Watched</h2>
        <div className="space-y-4">
          {recentLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-surface rounded-lg shadow-md p-4 flex items-center justify-between border border-border-primary"
            >
              <div>
                <h3 className="font-semibold">{lesson.title}</h3>
                <p className="text-sm text-text-muted">
                  {lesson.courseName}
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Last watched: {new Date(lesson.lastWatched).toLocaleDateString()}
                </p>
              </div>
              <Link
                to={`/dashboard/course-player/${lesson.courseId}?lesson=${lesson.id}`}
                className="btn btn-primary"
              >
                Continue Learning
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;