import Link from 'next/link';
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <button className="p-2">
            <svg
              className="h-4 w-4 rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="rounded bg-black p-1">
                <svg
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <span className="text-xl font-semibold">SAT Suite</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Hi, Param</span>
          <button className="rounded-full bg-black p-1">
            <span className="text-sm text-white">R</span>
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b px-6 py-4">
        <h1 className="text-lg font-semibold">Your Score Reports</h1>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 p-6">
        <div className="flex-1">
          {/* Main Content */}
          <div className="rounded-t-lg bg-[#4C4CFF] px-8 pb-20 pt-8 text-white">
            <h2 className="mb-2 text-4xl font-light">Your Latest Test</h2>
            <p className="mb-1">SAT August 24, 2024 Administration</p>
            <p className="text-sm opacity-90">
              Tested on: Aug 24, 2024, No longer in high school
            </p>
          </div>

          {/* Score Card */}
          <div className="relative -mt-16 mx-8 bg-white rounded-lg shadow-lg p-6">
            <div className="mb-8">
              <div className="mb-6">
                <div className="mb-4 text-sm font-medium text-gray-600">
                  TOTAL SCORE
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl font-semibold">1170</span>
                  <span className="text-sm text-gray-600">400 - 1600</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="mb-2 text-sm font-medium text-gray-600">
                    Reading and Writing
                  </div>
                  <div className="text-3xl font-semibold">530</div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium text-gray-600">
                    Math
                  </div>
                  <div className="text-3xl font-semibold">640</div>
                </div>
              </div>
            </div>

            <div className="mb-6 border-t pt-6">
              <p className="mb-4 font-medium">
                You've improved{' '}
                <span className="font-bold">150 points since your last SAT test!</span>
              </p>
              <p className="text-gray-600">
                You meet or exceed our college and career readiness benchmarks
                in Reading and Writing and Math!
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="w-full justify-center gap-2 py-6 border border-gray-300 rounded-md text-[#4C4CFF] font-medium hover:bg-gray-50 transition-colors">
                See Score Details
              </button>
              <button className="w-full justify-center gap-2 py-6 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center">
                <svg
                  className="h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Report
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between border-t pt-6">
              <span className="font-medium">See Additional Scores</span>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Next Steps Sidebar */}
        <div className="w-full lg:w-80">
          <h2 className="mb-6 text-2xl font-bold">Next Steps</h2>
          <div className="flex flex-col gap-2">
            {[
              { icon: 'school', text: 'Practice and Improve' },
              { icon: 'school', text: 'Retake the SAT' },
              { icon: 'school', text: 'Help Colleges Find You' },
              { icon: 'send', text: 'Send Your Scores' },
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center justify-between py-6 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#4C4CFF] p-2">
                    <svg
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon === 'school' ? (
                        <>
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </>
                      ) : (
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
                      )}
                    </svg>
                  </div>
                  <span>{item.text}</span>
                </div>
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
