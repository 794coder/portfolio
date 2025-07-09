

import React from "react";
import { Brain, Code2, Monitor, Database, Layout, Settings2 } from "lucide-react";

const services = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-white" />,
    description:
      "Developing intelligent systems using deep learning, NLP, and AI-driven automation solutions.",
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-white" />,
    description:
      "Building responsive, accessible, and high-performing UIs with React, Tailwind CSS, and modern frontend stacks.",
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6 text-white" />,
    description:
      "Designing scalable backend systems and APIs using Node.js, Express, MongoDB, and PostgreSQL.",
  },
  {
    title: "Full-Stack Engineering",
    icon: <Code2 className="w-6 h-6 text-white" />,
    description:
      "Delivering complete web solutions from frontend to backend with seamless integration and deployment.",
  },
  {
    title: "Python Development",
    icon: <Settings2 className="w-6 h-6 text-white" />,
    description:
      "Automation scripts, data processing tools, and backend systems using clean, efficient Python code.",
  },
  {
    title: "Go (Golang) Services",
    icon: <Monitor className="w-6 h-6 text-white" />,
    description:
      "High-performance backend services and concurrent systems built with Go for speed and reliability.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-6 bg-purple-400">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          I specialize in delivering modern web and AI-based solutions that are scalable, maintainable,
          and performance-driven. From concept to deployment, I’ve got you covered.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="text-left">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-4 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 pl-16">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
