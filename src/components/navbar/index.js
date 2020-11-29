import React, {useState} from  'react'
import Logo from '../logo'
import {Link} from 'react-router-dom'

export default function NavbarComponent() {
    const [hamburger, setHamburger] = useState(false);
    
    return (

        <div>
            <div className="relative bg-white py-5">
                <div className="flex justify-between">
                    <Logo />
                    <div className="md:block hidden">
                        <Link to="/" className="mx-3 hover:text-green-500">Home</Link>
                        <Link to="/timeline" className="mx-3 hover:text-green-500">Future Message</Link>
                        <Link to="/timeline" className="mx-3 hover:text-green-500">Timeline</Link>
                    </div>
                    <div className="md:hidden block" onClick={() => setHamburger(!hamburger)}>
                    <Logo.Hamburger active={"hidden"}/>
                    </div>
                </div>
            </div>
                    <div className={`bg-green-500 ${hamburger === true ? "block md-hidden" : "hidden"} rounded p-2`}>
                        <Link to="/" className="hover:text-white block py-2 ml-3">Home</Link>
                        <Link to="/timeline" className="hover:text-white block py-2 ml-3">Future Message</Link>
                        <Link to="/timeline" className="hover:text-white block py-2 ml-3">Timeline</Link>
                    </div>
        </div>
    )
}
