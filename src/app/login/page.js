"use client";
import LoginForm from "./loginForm";
import Image from "next/image";
import StarImage from "../../../public/Review.png";
import FaceImage from "../../../public/BG.png";

export default function Page() {
  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      style={{ width: "1600px", height: "858px" }}
    >
      {/* Left side */}
      <div
        //className="flex flex-col justify-center items-center bg-blue-600 text-white p-8"
        className="flex bg-blue-600 text-white"
        style={{ width: "709px", height: "858px" }}
      >
        <div
          style={{
            width: "473px",
            height: "633.77px",
            marginTop: "110px",
            marginLeft: "152px",
          }}
        >
          <h1 className="text-6xl font-semibold mb-4">
            Welcome to our community
          </h1>
          <p className="text-lg mb-5 text-[#CBD5E1] mr-[35px]">
            Clarity gives you the blocks & components you need to create a truly
            professional website.
          </p>
          <div className="flex items-center mt-[197px]">
            <Image src={StarImage} alt="Stars" quality={100} />
          </div>

          <p className="text-xl mt-8">
            "We love Landingfolio! Our designers were using it for their
            projects, so we already knew what kind of design they want."
          </p>

          <div className="flex items-center space-x-4 mt-8">
            <Image src={FaceImage} alt="Face" quality={100} />
            <div>
              <p className="font-semibold">Devon Lane</p>
              <p className="font-normal text-sm text-[#CBD5E1]">
                Co-Founder, Design.co
              </p>
            </div>
          </div>
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
