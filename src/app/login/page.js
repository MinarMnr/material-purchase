"use client";
import LoginForm from "./loginForm";

export default function Page() {
  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      style={{ width: "1600px", height: "858px" }}
    >
      {/* Left side */}
      <div
        className="flex flex-col justify-center items-center bg-blue-600 text-white p-8"
        style={{ width: "709px", height: "858px" }}
      >
        <div
          style={{
            width: "472px",
            height: "633.77px",
            top: "110px",
            left: "152px",
          }}
        >
          <h1 className="text-6xl font-bold mb-4">Welcome to our community</h1>
          <p className="text-lg mb-8">
            Clarity gives you the blocks & components you need to create a truly
            professional website.
          </p>
          <div className="flex items-center">
            <div className="flex text-yellow-400 mb-4">
              {/* Star Icons for Ratings */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polygon points="12 2 15 10 22 10 17 14 19 22 12 18 5 22 7 14 2 10 9 10 12 2" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-lg italic mb-4">
            "We love Landingfolio! Our designers were using it for their
            projects, so we already knew what kind of design they want."
          </p>
          <p className="font-semibold">Devon Lane</p>
          <p>Co-Founder, Design.co</p>
        </div>
      </div>

      {/* Right side - Adjusting the form size */}
      <div
        className="flex justify-center items-center"
        style={{ width: "891px", height: "858px" }}
      >
        <LoginForm />
      </div>
    </div>
  );
}
