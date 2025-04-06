'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Footer = () => {
    const router = useRouter()
  return (
    <footer className="bg-[var(--black-accent)] text-[var(--text-color)] py-10 mt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold"><span className='text-[var(--secondary)]'>Quick</span> Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/#linkup" className="text-[var(--text-accent)] hover:text-[var(--text-color)] transition-colors">
                Link Up
              </Link>
            </li>
            <li>
              <Link href="/#nearby" className="text-[var(--text-accent)] hover:text-[var(--text-color)] transition-colors">
                Nearby
              </Link>
            </li>
            <li>
              <Link href="/#whats-new" className="text-[var(--text-accent)] hover:text-[var(--text-color)] transition-colors">
                What's New
              </Link>
            </li>

          </ul>
        </div>
        

        {/* Support and Social Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold">About Us</h3>
          <ul className="space-y-2">
            {/* <li>
              <div onClick={() => router.push("/deleteDetails")} className="text-[var(--text-accent)] hover:text-[var(--text-color)] transition-colors cursor-pointer">
                Delete Your Data
              </div>
            </li> */}
            <li>
              <div onClick={() => router.push("/aboutUs")} className="text-[var(--text-accent)] hover:text-[var(--text-color)] transition-colors cursor-pointer">
                All you need to know
              </div>
            </li>
          </ul>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.instagram.com/collge.io/" target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors">
              <FaInstagram className="text-white" />
            </Link>
          </div>
        </div>
          
        

        {/* Policies */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold"><span className='text-[var(--secondary)]'>Privacy</span> & <span className='text-[var(--secondary)]'>Policies</span></h3>
          <ul className="space-y-2">
            {/* <li>
              <div onClick={() => router.push("/deleteDetails")} className="text-[var(--text-accent)] hover:text-[var(--text-color)] transition-colors cursor-pointer">
                Delete Your Data
              </div>
            </li> */}
            <li>
              <div onClick={() => router.push("/ChildSafety")} className="text-[var(--text-accent)] hover:text-[var(--text-color)] transition-colors cursor-pointer">
                Child Safety Policy
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-[var(--text-accent)]">
        <p>&copy; {new Date().getFullYear()} Collge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
