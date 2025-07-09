

const Page = () => {
    return (
        <div className="w-full h-screen bg-purple-400 mt-0 overflow-x-hidden">
        <div className="flex flex-col w-full justify-center items-start ml-6 ">
            <h1 className="text-3xl font-bold mt-10">
                About
            </h1>
            <div className="w-[500px] mt-6">
                <p className="text-lg leading-tight font-normal">
                Hi, I&#39;m Muhammad Hamza Javed, a passionate full-stack developer from Islamabad.
I enjoy building modern web applications with clean UI, solid backend architecture, and practical problem-solving in mind.
I&#39;m fluent in JavaScript, React, Node.js, and love experimenting with open-source tools and AI-driven workflows.
            </p>
            </div>
        </div>
            <div className=" h-0.5 bg-black ml-20 mr-20 mt-4"/>
            <div className="flex justify-center flex-col items-center p-4">
                <h1 className="text-3xl font-bold mb-4">Full Stack Developer</h1>
                <p className="text-sm">
                    I’m Muhammad Hamza Javed, a creative full-stack developer passionate about building responsive web apps and solving real-world problems using modern technologies like React,Next js,Golang,Python, Node.js,Postgres, MongoDB, and AI tooling.
Driven by curiosity, I love crafting clean UIs, writing maintainable backend code, and learning something new every day.
                </p>
               <div className="flex flex-col mt-10 w-[500px]">
                   <ul>
                       <div className="flex justify-between items-center">
                           <li><strong>Birthday:</strong> Sep 7,2004</li>
                           <li><strong>Age:</strong> 21</li>
                       </div>
                       <div className="flex justify-between items-center">
                           <li><strong>Degree:</strong> Computer Science</li>
                           <li><strong>University:</strong> Comsats University</li>
                       </div>
                       <div className="flex justify-between items-center">
                           <li><strong>MobileNo:</strong> 03275753787</li>
                           <li><strong>Email:</strong> hamza.coder.794@gmail.com</li>
                       </div>
                       <div className="flex justify-between items-center">
                           <li><strong>City:</strong> Islamabad,Pakistan</li>
                           <li><strong>Freelance:</strong> Available</li>
                       </div>
                   </ul>
               </div>
            </div>
            <div className="flex ml-6 flex-col ">
                <h1 className="text-3xl font-bold">Skills</h1>
                <ol className="list-disc m-1 p-4">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Golang</li>
                    <li>Python</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Nest js</li>
                    <li>PostgreSql</li>
                    <li>MongoDb</li>
                </ol>
            </div>
        </div>
    );
};

export default Page;