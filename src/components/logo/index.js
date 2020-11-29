import React from 'react'
import {Link} from 'react-router-dom'
import { HOME } from '../../constants/routes'

export default function Logo() {
    return (
        <Link to={HOME}>
            <div className="flex font-normal select-none">
                <img src="/assets/logo.png" className="block h-6 lg-h-8 w-auto" alt="Logo Daily Massage" />
                <p className="text-black ml-4">Daily <span className="text-green-500">Message</span></p>
            </div>
        </Link>
    )
}

Logo.Hamburger = function LogoHamburger({active}) {
    return(
        <svg
        className={`cursor-pointer h-6 w-6 transition duration-150 ease-in-out`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )
}
