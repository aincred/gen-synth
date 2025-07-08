'use client';

import { LogOut, Search } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clear tokens)
    router.push('/'); // Redirects to page.tsx ("/")
  };

  return (
    <div>
      <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
        {/* Search Bar */}
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-xl bg-white'>
          <Search />
          <input
            type="text"
            placeholder='Search....'
            className='outline-none'
          />
        </div>

        {/* Right Side: Welcome + Logout */}
        <div className='flex items-center gap-4'>
          <h2 className='bg-fuchsia-500 p-2 rounded-full text-xs text-white'>
            welcome to dashboard . . .
          </h2>
          <button
            onClick={handleLogout}
            className='flex items-center gap-1 text-sm bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition'
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
