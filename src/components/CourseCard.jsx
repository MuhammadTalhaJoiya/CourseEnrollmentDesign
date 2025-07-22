import { Link } from 'react-router-dom'

function CourseCard({ id, title, description, image, price, instructor }) {
  return (
    <div className="card overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-textMuted mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center mb-4">
          <img 
            src={instructor.avatar} 
            alt={instructor.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-textMuted">{instructor.name}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">
            {price === 0 ? 'Free' : `$${price}`}
          </span>
          <Link 
            to={`/course/${id}`}
            className="btn-primary py-2"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard