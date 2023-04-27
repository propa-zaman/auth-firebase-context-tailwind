import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error.message)
            });


    }

    return (
        <div>
            <div className="navbar bg-primary text-neutral-content">
                <Link className="btn btn-ghost normal-case text-xl" to="/">Auth Master</Link>

                <Link className='btn btn-ghost normal-case text-xl' to="/" >Home</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/orders" >Orders</Link>
                { user && <Link className='btn btn-ghost normal-case text-xl' to="/profile" >Profile</Link>}
                <Link className='btn btn-ghost normal-case text-xl' to="/login" >Login</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/register" >Register</Link>
                
                {user ? <>
                    <span>{user.email}</span>
                    <button className="btn btn-xs ms-4" onClick={handleLogOut}>Sign Out</button>
                </>
                    : <Link to="/login" className='btn btn-xs'>Login</Link>}

            </div>
        </div>
    );
};

export default Header;