import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">About LearnHub</h1>
      
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At LearnHub, we believe that quality education should be accessible to everyone. Our mission is to empower individuals worldwide with the knowledge and skills they need to succeed in today's digital world.
          </p>
          <p className="text-gray-600 mb-4">
            We collaborate with industry experts and leading professionals to create comprehensive, practical courses that prepare our students for real-world challenges.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, LearnHub started with a simple idea: to bridge the gap between traditional education and the rapidly evolving tech industry. What began as a small collection of programming courses has grown into a diverse platform offering everything from web development to data science.
          </p>
          <p className="text-gray-600 mb-4">
            Today, we serve thousands of students globally, helping them transform their careers and achieve their professional goals.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of real-world experience in their respective fields.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Practical Learning</h3>
              <p className="text-gray-600">
                Hands-on projects and real-world applications to ensure you can apply what you learn.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600">
                Join a vibrant community of learners and get support whenever you need it.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Flexible Learning</h3>
              <p className="text-gray-600">
                Learn at your own pace with lifetime access to course materials.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-1 h-6 bg-primary mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p className="text-gray-600">We maintain high standards in our course content and delivery.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-1 h-6 bg-primary mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">We constantly update our curriculum to reflect industry trends.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-1 h-6 bg-primary mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p className="text-gray-600">We believe everyone deserves access to quality education.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About