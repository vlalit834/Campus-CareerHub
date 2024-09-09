import React, { useState } from 'react';
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react';
import { Navbar } from '../Navbar_home';
import { Footer } from '../Footer';
import { useNavigate } from 'react-router-dom';

export function CSidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate
  return (
    <>
      <div className="flex ">
        {/* Sidebar Toggle Button */}
        <button
          className="p-2 text-gray-600 lg:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-20 w-64 bg-white border-r px-5 py-8 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col lg:overflow-y-auto`}
        >
          <a href="#">
            <h2 className="text-lg font-bold mx-6">Welcome&nbsp;&nbsp;Admin</h2>
          </a>
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-6">
              <div className="space-y-9 mx-3">
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/company/dashboard"
                  // onClick={() => navigate('/company/dashboard')}
                >
                  <BarChart className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Dashboard</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/company/updateprofile"
                >
                  <Wallet className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Update Profile</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/company/postdrive"
                >
                  <Newspaper className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Post Drive</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/company/currentdrives"
                >
                  <BellRing className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Current Drives</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/company/driveapplications"
                >
                  <Paperclip className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Drive Applications</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/company/settings"
                >
                  <Brush className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Settings</span>
                </a>
                {/* <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/company/resumedatabase"
                >
                  <Brush className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Resume Database</span>
                </a> */}
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Logout</span>
                </a>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
