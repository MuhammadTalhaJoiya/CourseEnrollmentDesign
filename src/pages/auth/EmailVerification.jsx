import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function EmailVerification() {
  const [searchParams] = useSearchParams()
  const [verificationStatus, setVerificationStatus] = useState('verifying') // verifying, success, error
  const email = searchParams.get('email') || ''

  useEffect(() => {
    // Simulate email verification process
    const timer = setTimeout(() => {
      setVerificationStatus('success')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const renderContent = () => {
    switch (verificationStatus) {
      case 'verifying':
        return (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto"></div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Verifying your email</h3>
            <p className="mt-1 text-textMuted">This may take a moment...</p>
          </div>
        )

      case 'success':
        return (
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
                Email verified successfully!
              </h3>
              <p className="mt-1 text-sm text-green-700">
                Your email has been verified. You can now access all features of your account.
              </p>
            </div>
            <Link
              to="/login"
              className="btn btn-primary inline-block px-8 py-3"
            >
              Go to Login
            </Link>
          </div>
        )

      case 'error':
        return (
          <div className="text-center">
            <div className="mb-4 p-4 bg-red-50 rounded-lg">
              <svg
                className="mx-auto h-12 w-12 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-red-800">
                Verification failed
              </h3>
              <p className="mt-1 text-sm text-red-700">
                The verification link may have expired or is invalid.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary px-8 py-3"
              onClick={() => setVerificationStatus('verifying')}
            >
              Try Again
            </button>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Email Verification</h2>
          {email && (
            <p className="mt-2 text-textMuted">
              Verifying email: {email}
            </p>
          )}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-card">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default EmailVerification