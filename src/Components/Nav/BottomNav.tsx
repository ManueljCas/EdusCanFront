import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Css/BottomNav.css';
import { FiHome, FiBell, FiUser, FiLogOut } from 'react-icons/fi';
import { MdAdd } from 'react-icons/md';

function BottomNav() {
    const navigate = useNavigate();

    return (
        <div className="bottom-nav-container">
            <button onClick={() => navigate('/home')} className="bottom-nav-button">
                <FiHome size={28} />
            </button>
            <button onClick={() => navigate('/notifications')} className="bottom-nav-button">
                <FiBell size={28} />
            </button>
            <div className="bottom-nav-add-button">
                <MdAdd size={36} />
            </div>
            <button onClick={() => navigate('/profile')} className="bottom-nav-button">
                <FiUser size={28} />
            </button>
            <button onClick={() => navigate('/logout')} className="bottom-nav-button">
                <FiLogOut size={28} />
            </button>
        </div>
    );
}

export default BottomNav;
