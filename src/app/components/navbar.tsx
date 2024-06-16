import Link from 'next/link';
import React from 'react';

export default function navbar() {
  return (
    <nav className="flex justify-between items-center bg-white-400 p-2 mb-4">
      <Link className="font-bold bg-black-100 p-1 hover:text-white" href="/">
        JK REACT{' '}
      </Link>
      <div className="font-bold font-mono p-1">
        <Link className="hover:text-black" href="/about">
          ABOUT{' '}
        </Link>
        <Link className="hover:text-black" href="/project">
          PROJECT{' '}
        </Link>
        <Link className="hover:text-black" href="/contact">
          CONTACT{' '}
        </Link>
      </div>
    </nav>
  );
}
