import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className='card card-bordered shadow-xl  compact side bg-base-100'>
            <div className="flex-row item-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title mb-4">{login}</h2>
                    <Link className='text-base-content text-opacity-60 ' to={`/user/${login}`}>Visit Profile</Link>
                </div>
            </div>
        </div>

        //new card

        // <div className="card card-side bg-base-100 shadow-xl compact flex flex-row justify-between">
        //     <figure className='w-20 h-30'><img src={avatar_url} alt="Movie" /></figure>
        //     <div className="card-body ">
        //         <h2 className="card-title text-center">{login}</h2>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-sm btn-primary">View Profile</button>
        //         </div>
        //     </div>
        // </div>
    )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
