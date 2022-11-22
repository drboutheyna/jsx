import React from 'react';
import photo1 from '../component/photo1.png';
import './Profil.css';
function ProfilPhoto() {
    return (
        <div className="photo">
            <img  src={photo1} alt="pic" />
        </div>
    );
}

export default ProfilPhoto;