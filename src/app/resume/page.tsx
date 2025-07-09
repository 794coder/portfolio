
import React from "react";

const Resume = () => {
  return (
    <div className="bg-purple-400 min-h-screen py-10 px-6 text-black">
        <div className="mb-8">
          <h1 className="text-4xl font-bold ">Hamza Goraya</h1>
          <p className="text-xl ">Full Stack  Developer</p>
          <p >Islamabad,Pakistan</p>
          <p>+92 327 575 53787 | hamza.coder.794@gmail.com</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Summary */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-purple-500 pl-3 mb-2">Summary</h2>
            <p >
              Hi, I&#39;m Muhammad Hamza Javed, a passionate full-stack developer from Islamabad.
I enjoy building modern web applications with clean UI, solid backend architecture, and practical problem-solving in mind.
I&#39;m fluent in JavaScript, React, Node.js, and love experimenting with open-source tools and AI-driven workflows.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-l-4 border-purple-500 pl-3 mb-2">Professional Experience</h2>
            <div className="mb-4">
              <h3 className="font-bold">JUNIOR WEB DEVELOPER</h3>
              <p className="text-sm text-gray-600">TechCorp — 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Built scalable full-stack applications using React & Express.</li>
                <li>Worked with a team of 4 developers on multiple client projects.</li>
                <li>Improved app performance and SEO by 40%.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">FRONTEND DEVELOPER</h3>
              <p className="text-sm text-gray-600">Creative Studio — Jun,2024 - Sep,2024</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Designed responsive UI components with Tailwind CSS.</li>
                <li>Worked closely with designers and backend team.</li>
                <li>Created reusable component libraries for internal tools.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold border-l-4 border-purple-500 pl-3 mb-2">Education</h2>
          <div className="mb-4">
            <h3 className="font-bold">BSc Computer Science</h3>
            <p className="text-sm text-gray-600">Comsats University — 2023-2026</p>
            <p className="text-gray-700">Focused on software engineering, data structures, and AI.</p>
          </div>
        </div>
    </div>
  );
};

export default Resume;
