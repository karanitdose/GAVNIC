"use client";
import { FaLaptop, FaMicrochip, FaKeyboard, FaMouse, FaHeadphones, FaHdd, FaServer } from "react-icons/fa";

const blogs = [
  {
    title: "Choosing the Right Laptop for Your Needs",
    icon: <FaLaptop className="text-6xl text-[#9333EA] mb-4" />,
    content: "Selecting the right laptop depends on your requirements. If you're a gamer, consider a powerful GPU. If you're a student, focus on battery life and portability. For professionals, high RAM and SSD storage are crucial.",
  },
  {
    title: "Why a Mechanical Keyboard is a Game Changer",
    icon: <FaKeyboard className="text-6xl text-[#9333EA] mb-4" />,
    content: "Mechanical keyboards offer superior durability, tactile feedback, and faster response times. They are excellent for both gaming and professional typing tasks, ensuring better productivity and comfort.",
  },
  {
    title: "Gaming Mouse: Wired vs Wireless - Which is Better?",
    icon: <FaMouse className="text-6xl text-[#9333EA] mb-4" />,
    content: "Wired gaming mice offer lower latency and better reliability, while wireless mice provide convenience and clutter-free desks. With advancements in technology, high-end wireless mice now rival wired ones in performance.",
  },
  {
    title: "Solid State Drive (SSD) vs Hard Disk Drive (HDD)",
    icon: <FaHdd className="text-6xl text-[#9333EA] mb-4" />,
    content: "SSDs are significantly faster, quieter, and more durable compared to traditional HDDs. While HDDs provide larger storage at a lower price, SSDs enhance performance and reduce system boot time drastically.",
  },
  {
    title: "Do You Really Need High-End Headphones?",
    icon: <FaHeadphones className="text-6xl text-[#9333EA] mb-4" />,
    content: "High-end headphones offer better sound clarity, noise cancellation, and comfort for long hours. Whether you are into gaming, music production, or casual listening, investing in good headphones is worth it.",
  },
  {
    title: "Why Your PC Needs a Powerful Processor?",
    icon: <FaMicrochip className="text-6xl text-[#9333EA] mb-4" />,
    content: "The processor is the heart of your computer. For multitasking, gaming, and content creation, a powerful CPU ensures smoother performance, faster response time, and increased efficiency.",
  },
  {
    title: "Cloud Storage vs External Hard Drives - What's Better?",
    icon: <FaServer className="text-6xl text-[#9333EA] mb-4" />,
    content: "Cloud storage offers accessibility and security, while external hard drives provide offline storage with large capacity. The best choice depends on your need for mobility and data security.",
  },
];

const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#9333EA] mb-10">GAVNIC Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              {blog.icon}
              <h2 className="text-xl font-semibold text-[#9333EA] mb-2">{blog.title}</h2>
              <p className="text-gray-700 text-sm">{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
