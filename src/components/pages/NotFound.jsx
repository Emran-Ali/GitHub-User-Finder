import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div className='hero'>
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mb-8">Opss....</h1>
                    <p className='mb-8 text-4xl'>Page Not Found</p>
                    <Link to='/' className='btn btn-primary btn-lg '>
                        <FaHome className='mr-2' /> back to home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
