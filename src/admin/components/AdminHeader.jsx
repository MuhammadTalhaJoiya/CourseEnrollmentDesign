import React from 'react'
import ThemeToggle from '../../components/ThemeToggle'

const AdminHeader = () => {
  return (
    <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark shadow-sm dark:shadow-dark-sm theme-transition">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="input w-64 py-2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <span className="text-text-secondary-light dark:text-text-secondary-dark">Admin User</span>
            <button className="p-2 rounded-full hover:bg-surface-elevated-light dark:hover:bg-surface-elevated-dark transition-colors duration-200">
              <img
                src="https://via.placeholder.com/40"
                alt="Admin"
                className="w-8 h-8 rounded-full border border-border-light dark:border-border-dark"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader