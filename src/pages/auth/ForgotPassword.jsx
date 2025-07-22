import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log('Password reset requested for:', email)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Reset your password</h2>
          <p className="mt-2 text-textMuted">
            Enter your email address and we'll send you instructions to reset your password
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-card">
          {!isSubmitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Reset Password
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="mb-4 p-4 bg-green-50 rounded-lg">
                <svg
                  className="mx-auto h-12 w-12 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-green-800">
                  Reset instructions sent!
                </h3>
                <p className="mt-1 text-sm text-green-700">
                  Please check your email for instructions to reset your password.
                </p>
              </div>

              <button
                type="button"
                className="btn btn-outline w-full"
                onClick={() => setIsSubmitted(false)}
              >
                Back to Login
              </button>
            </div>
          )}

          <p className="mt-8 text-center text-sm text-textMuted">
            Remember your password?{' '}
            <Link
              to="/login"
              className="link"
            >
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword