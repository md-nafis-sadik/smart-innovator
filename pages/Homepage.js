"use client"

import HomeLayout from "../layouts/HomeLayout";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RxCross2, RxPlus } from "react-icons/rx";
import { Range } from "react-range";

export default function Homepage() {
  // Array of services

  const [range, setRange] = useState([20, 80]);
  const [activeCategory, setActiveCategory] = useState('Backend');

  const handleSliderChange = (values) => {
    setRange(values);
  };


  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description:
        "Accelerate your customer service management and develop cloud-native apps. Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor ...",
      icon: "/group.png",
      link: "#",
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description:
        "Secure and scalable cloud solutions to optimize your business processes. Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor ...",
      icon: "/group.png",
      link: "#",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description:
        "Leverage AI to gain insights and improve operational efficiency. Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor ...",
      icon: "/group.png",
      link: "#",
    },
  ];

  // Fixed light colors for IDs
  const fixedColors = ["#9dbff9", "#F9C9BB", "#d0f5e1"];

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer a wide range of services including custom software development, cloud solutions, and AI & machine learning.",
    },
    {
      id: 2,
      question: "How can I start a project?",
      answer: "You can start a project by contacting us through our website or sending an email to hello@squareup.com.",
    },
    {
      id: 3,
      question: "What is your development process?",
      answer: "Our process involves requirement gathering, design, development, testing, and deployment with ongoing support.",
    },
    {
      id: 4,
      question: "What services do you offer?",
      answer: "We offer a wide range of services including custom software development, cloud solutions, and AI & machine learning.",
    },
    {
      id: 5,
      question: "How can I start a project?",
      answer: "You can start a project by contacting us through our website or sending an email to hello@squareup.com.",
    },
    {
      id: 6,
      question: "What is your development process?",
      answer: "Our process involves requirement gathering, design, development, testing, and deployment with ongoing support.",
    },
    {
      id: 7,
      question: "What is your development process?",
      answer: "Our process involves requirement gathering, design, development, testing, and deployment with ongoing support.",
    },

  ];

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };



  const features = [
    {
      icon: '⭐', // Replace with your icon
      title: 'Skilled and Trained Teams',
      description:
        'Our highly-skilled and trained team offers the best of both worlds - breadth and depth of expertise to deliver inclusive solutions on a global level.',
    },
    {
      icon: '💰', // Replace with your icon
      title: 'Cost-effective Services',
      description:
        'At our core, we are passionate professionals committed to helping others succeed. Our services are competitively priced and accessible across the board.',
    },
    {
      icon: '📋', // Replace with your icon
      title: 'Quality Assurance',
      description:
        'Our commitment to client satisfaction is unsurpassed. With outstanding work quality, and transparent communication, our services assure 99% client satisfaction.',
    },
    {
      icon: '📞', // Replace with your icon
      title: 'Quick Support',
      description:
        'With continuous accessibility, our teams offer prompt assistance for your business needs anytime and anywhere via a variety of communication methods.',
    },
    {
      icon: '🏆', // Replace with your icon
      title: 'Award Winner',
      description:
        'By being recognized as an award-winning company, we have established ourselves as trendsetters.',
    },
    {
      icon: '🌟', // Replace with your icon
      title: 'Top Rated',
      description:
        'We’re proud to see how much our clients love our work. Our ratings on online platforms showcase our non-negotiable excellence.',
    },
  ];


  const steps = [
    {
      id: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your business needs.',
      color: 'text-orange-500',
      icon: '🔍', // Replace with a suitable icon or SVG
    },
    {
      id: '02',
      title: 'UX/UI Design',
      description: 'Creating wireframes and prototypes.',
      color: 'text-blue-500',
      icon: '🎨', // Replace with a suitable icon or SVG
    },
    {
      id: '03',
      title: 'Development',
      description: 'Building scalable and robust solutions.',
      color: 'text-teal-500',
      icon: '💻', // Replace with a suitable icon or SVG
    },
    {
      id: '04',
      title: 'QA Testing',
      description: 'Ensuring quality with rigorous testing.',
      color: 'text-indigo-500',
      icon: '✅', // Replace with a suitable icon or SVG
    },
    {
      id: '05',
      title: 'Deployment & UAT',
      description: 'Deploying and gathering feedback.',
      color: 'text-red-500',
      icon: '🚀', // Replace with a suitable icon or SVG
    },
    {
      id: '06',
      title: 'Delivery & Support',
      description: 'Delivering and maintaining the solution.',
      color: 'text-green-500',
      icon: '🌟', // Replace with a suitable icon or SVG
    },
  ];


  const categories = [
    'Frontend',
    'Backend',
    'Mobile App',
    'Databases',
    'Cloud Services',
    'Tools',
  ];
  
  const technologies = {
    Backend: [
      { name: 'PHP', logo: '/php-logo.png' },
      { name: 'Laravel', logo: '/laravel.png' },
      { name: 'Node.JS', logo: '/nodejs-logo.png' },
      { name: 'Symfony', logo: '/symfony-logo.png' },
      { name: 'Python', logo: '/python-logo.png' },
      { name: 'GraphQL', logo: '/graphql-logo.png' },
      { name: 'Typo3', logo: '/typo3-logo.png' },
      { name: 'CakePHP', logo: '/cakephp-logo.png' },
    ],
    Frontend: [

      { name: 'CodeIgniter', logo: '/codeigniter-logo.png' },
      { name: 'Node.JS', logo: '/nodejs-logo.png' },
      { name: 'Symfony', logo: '/symfony-logo.png' },
      { name: 'Python', logo: '/python-logo.png' },
      { name: 'Yii', logo: '/yii-logo.png' },
      { name: 'GraphQL', logo: '/graphql-logo.png' },
      { name: 'Typo3', logo: '/typo3-logo.png' },
      { name: 'CakePHP', logo: '/cakephp-logo.png' },
    ],
  };
  

  return (
    <HomeLayout>
      {/* Cover Image Section */}
      <div className="relative my-[-86px] w-full h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-[34px] md:text-4xl lg:text-[45px] xl:text-[45px] leading-[45px] lg:leading-[60px] font-bold mb-3">
            Empowering Your Business with Innovative Software Solutions
          </h1>
          <p className="mt-3">
            Custom software development tailored to meet your business needs.
          </p>
          <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <Link
      href="/start-project"
      className="px-4 py-2 rounded-sm bg-[#8cff00] text-gray-800 font-semibold transition transform hover:scale-105 hover:shadow-lg"
    >
      Start Your Project
    </Link>
    <Link
      href="/portfolio"
      className="px-4 py-2 rounded-sm border border-3 border-[#8cff00] font-semibold transition transform hover:scale-105 hover:shadow-lg"
    >
      See Our Portfolio
    </Link>

          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-[120px] mb-[50px] py-12 px-10 md:px-16 lg:px-20">
        <h2 className="text-3xl md:text-[42px] font-semibold mb-8 text-[#632ad9] text-center">
          Our Services
        </h2>
        <p className="mb-12 text-center">
          We make sure to use the precise technology for various problem
          solutions, accelerate business processes by creating more flexible
          solutions for different business tasks such as digitalizing systems,
          easing communication, securing business data, managing customer flow,
          improving customer care, and much more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Cards */}
          {services.map((service, index) => (
  <div
    key={service.id}
    className="p-6 flex flex-col justify-between rounded-md group transition-all duration-500 ease-in-out relative bg-gray-50 hover:bg-gradient-to-r hover:from-[#4316b9] hover:to-[#8640fc] overflow-hidden"
  >
    {/* Top section (imn) */}
    <div
      className="imn flex justify-between mb-6 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-6"
    >
      <Image src={service.icon} width={33} height={33} alt="" className="w-12" />
      <div
        className="font-extrabold text-5xl"
        style={{ color: fixedColors[index % fixedColors.length] }}
      >
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </div>
    </div>

    {/* Title and description */}
    <div
      className="transition-all duration-500 ease-in-out group-hover:text-white group-hover:-translate-y-12"
    >
      <h3 className="text-xl font-semibold mb-4 text-[#632ad9] group-hover:text-white">
        {service.title}
      </h3>
      <p className="group-hover:text-white text-sm">
        {service.description}
      </p>
    </div>

    {/* Learn More section */}
    <Link href={service.link}
      className="flex items-center text-white opacity-0 translate-y-6 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
    >
      <span className="text-xl font-semibold">Learn More</span>
      <span className="ml-2">
        <FiArrowUpRight size={30} />
      </span>
    </Link>
  </div>
))}








        </div>
      </div>
      <div className="relative w-full h-64 bg-cover bg-middle-sec">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-[34px] text-3xl md:text-4xl lg:text-[42px] xl:text-[45px] leading-[42px] lg:leading-[60px] mb-3 text-[#9eff00]">
          Why Choose Smart Innovative?
          </h1>
          <p className="mt-3">
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.          </p>

        </div>
      </div>


      <div className="">
          {/* Additional content or cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {/* Example service card */}
            <div className="px-10 md:px-16 lg:px-24 py-20 bg-white border border-[#8cff00]">
            <div className="flex items-center mb-6">
            <div className="bg-gradient-to-b from-green-100 via-green-200 to-green-100 rounded-md p-4 border border-[#8cff00]">
            <Image src="/icon1.png"  width={33} height={33} alt="" className="w-5" />
            </div>
            <div className="font-bold text-xl ml-4 text-gray-800">Expertise</div>
            </div>
              
              <p className="">
              Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="px-10 md:px-16 lg:px-24 py-20 bg-white border border-[#8cff00]">
            <div className="flex items-center mb-6">
            <div className="bg-gradient-to-b from-green-100 via-green-200 to-green-100 rounded-md p-4 border border-[#8cff00]">
            <Image src="/icon2.png"  width={33} height={33} alt="" className="w-5" />
            </div>
            <div className="font-bold text-xl ml-4 text-gray-800">Client-Centric Approach</div>
            </div>
              
              <p className="">
              We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.
              </p>
            </div>
            <div className="px-10 md:px-16 lg:px-24 py-20 bg-white border border-[#8cff00]">
            <div className="flex items-center mb-6">
            <div className="bg-gradient-to-b from-green-100 via-green-200 to-green-100 rounded-md p-4 border border-[#8cff00]">
            <Image src="/icon.png"  width={33} height={33} alt="" className="w-4" />
            </div>
            <div className="font-bold text-xl ml-4 text-gray-800">Results-Driven Solutions</div>
            </div>
              
              <p className="">
              Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.
              </p>
            </div>
            <div className="px-10 md:px-16 lg:px-24 py-20 bg-white border border-[#8cff00]">
            <div className="flex items-center mb-6">
            <div className="bg-gradient-to-b from-green-100 via-green-200 to-green-100 rounded-md p-4 border border-[#8cff00]">
            <Image src="/icon4.png"  width={33} height={33} alt="" className="w-5" />
            </div>
            <div className="font-bold text-xl ml-4 text-gray-800">Collaborative Partnership</div>
            </div>
              
              <p className="">
              We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 bg-cover bg-middle-sec">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-[34px] text-3xl md:text-4xl lg:text-[42px] xl:text-[45px] leading-[42px] lg:leading-[60px] mb-3 text-[#9eff00]">
          Frequently Asked Questions          </h1>
          <p className="mt-3">
          Still you have any questions? Contact our Team via hello@squareup.com          </p>

        </div>
      </div>



      <div className="py-12 px-10 md:px-16 lg:px-20">
  <div className="flex flex-wrap lg:flex-nowrap">
    {/* Left column */}
    <div className="w-full lg:w-1/2">
      {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq) => (
        <div
          key={faq.id}
          className="py-6 sm:p-6 rounded-md cursor-pointer border"
          onClick={() => toggleQuestion(faq.id)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-16 sm:w-20 py-5 text-center rounded-md border border-lime-400 text-2xl sm:text-3xl bg-gradient-to-t from-white via-green-100 to-white">
                0{faq.id}
              </div>
              <h3 className="ml-8 text-md md:text-lg font-medium md:font-semibold text-gray-800">
                {faq.question}
              </h3>
            </div>
            <span className="font-bold">
              {expandedQuestion === faq.id ? (
                <RxCross2 className="font-semibold" size={23} />
              ) : (
                <RxPlus className="font-semibold" size={23} />
              )}
            </span>
          </div>
          <div
            className={`transition-transform transition-opacity duration-500 ease-in-out ${
              expandedQuestion === faq.id
                ? "max-h-[500px] opacity-100 scale-100"
                : "max-h-0 opacity-0 scale-95"
            } overflow-hidden`}
          >
            <p className="ml-[89px] sm:ml-28 text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Right column */}
    <div className="w-full lg:w-1/2">
      {faqs.slice(Math.ceil(faqs.length / 2)).map((faq) => (
        <div
          key={faq.id}
          className="py-6 sm:p-6 rounded-md cursor-pointer border"
          onClick={() => toggleQuestion(faq.id)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-16 sm:w-20 py-5 text-center rounded-md border text-2xl sm:text-3xl border-lime-400 bg-gradient-to-t from-white via-green-100 to-white">
                0{faq.id}
              </div>
              <h3 className="ml-8 text-md md:text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
            </div>
            <span className="font-bold">
              {expandedQuestion === faq.id ? (
                <RxCross2 className="font-semibold" size={23} />
              ) : (
                <RxPlus className="font-semibold" size={23} />
              )}
            </span>
          </div>
          <div
            className={`transition-transform transition-opacity duration-500 ease-in-out ${
              expandedQuestion === faq.id
                ? "max-h-[500px] opacity-100 scale-100"
                : "max-h-0 opacity-0 scale-95"
            } overflow-hidden`}
          >
            <p className="ml-[89px] sm:ml-28 text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



<h3 className="text-3xl md:text-[42px] font-semibold mb-8 text-[#9eff00] text-center">Contact Us</h3>

<div className="flex justify-center items-center mb-12 min-h-screen bg-white md:px-20 lg:px-24">

      <form className="bg-white border-2 border-gray-500 p-8 md:p-12 rounded-md w-full  shadow-md">
        {/* Full Name and Email */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="border border-gray-500 rounded-lg px-8 py-6">
            <label htmlFor="fullName" className="block text-lg text-gray-700 font-medium mb-3">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Type here"
              className="w-full border-b-2 border-gray-400 focus:border-black outline-none py-1 text-gray-700"
            />
          </div>
          <div className="border border-gray-500 rounded-lg px-8 py-6">
            <label htmlFor="email" className="block text-lg text-gray-700 font-medium mb-3">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Type here"
              className="w-full border-b-2 border-gray-400 focus:border-black outline-none py-1 text-gray-700"
            />
          </div>
        </div>

        {/* Why Are You Contacting Us? */}
        <div className="mb-6 border border-gray-500 rounded-lg px-8 py-6">
          <label className="block text-lg text-gray-700 font-medium mb-6">
            Why are you contacting us?
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox w-5 h-5 text-[#9eff00] border-gray-300 focus:ring-[#9eff00]"
                style={{ accentColor: '#9eff00' }}
              />
              <span className="text-gray-700">Web Design</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox w-5 h-5 text-[#9eff00] border-gray-300 focus:ring-[#9eff00]"
                style={{ accentColor: '#9eff00' }}
              />
              <span className="text-gray-700">Collaboration</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox w-5 h-5 text-[#9eff00] border-gray-300 focus:ring-[#9eff00]"
                style={{ accentColor: '#9eff00' }}
              />
              <span className="text-gray-700">Mobile App Design</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox w-5 h-5 text-[#9eff00] border-gray-300 focus:ring-[#9eff00]"
                style={{ accentColor: '#9eff00' }}
              />
              <span className="text-gray-700">Others</span>
            </label>
          </div>
        </div>

        {/* Dual-Point Budget Slider */}
        <div className="mb-6 flex flex-col items-center border border-gray-500 rounded-lg px-8 py-6">
        <label className="w-full text-lg font-medium mb-6">
          Your Budget
        </label>
      <div className="mb-4 w-full">
        
        <Range
          values={range}
          step={1}
          min={0}
          max={100}
          onChange={handleSliderChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "5px",
                background: `linear-gradient(to right, #ddd ${range[0]}%, #9eff00 ${range[0]}%, #9eff00 ${range[1]}%, #ddd ${range[1]}%)`,
                borderRadius: "3px",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "30px",
                width: "30px",
                backgroundColor: "#9eff00",
                borderRadius: "50%",
                cursor: "pointer",
                border: "7px solid #406800",
              }}
            />
          )}
        />
      </div>

     
    </div>



    

        {/* Message */}
        <div className="mb-6 border border-gray-500 rounded-lg px-8 py-6">
          <label htmlFor="message" className="block text-lg text-gray-700 font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Type here"
            className="w-full border-b-2 border-gray-400 focus:border-black outline-none py-1 text-gray-700"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex w-full justify-center items-center"><button
          type="submit"
          className="w-40 bg-[#9eff00] text-gray-800 py-3 rounded-md font-medium  transition transform hover:scale-105 hover:shadow-lg"
        >
          Submit
        </button></div>
      </form>
    </div>



    <section className="bg-gray-50 py-24 px-10 md:px-16 lg:px-24">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-[#632ad9] mb-5">
        Why Choose Us
      </h2>
      <p className="text-gray-600">Know More</p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="feature bg-white p-9 shadow-md rounded-sm hover:cursor-pointer"
        >
          <div className="icon-container text-4xl text-indigo-500 mb-6">
            {feature.icon}
          </div>
          <h3 className="text-[21px] font-semibold text-gray-800 mb-4">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm leading-6">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>




    <div className="py-24 px-10 md:px-16 lg:px-24">
      <h2 className="text-4xl text-[#632ad9] font-semibold text-center mb-20">Modern Technologies We are Leveraging</h2>
      <div className="flex flex-wrap justify-center mb-12  bg-gradient-to-b from-white via-gray-50 to-gray-50">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 h-full font-medium transition-colors cursor-pointer ${
              activeCategory === category
                ? 'bg-white text-[#632ad9] border-x border-t border-gray-100 rounded-t-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {category}
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-10 justify-items-center"
        >
          {technologies[activeCategory]?.map((tech) => (
            <motion.div key={tech.name} className="flex flex-col items-center">
              <motion.img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-[47px] transition-transform duration-300 transform hover:scale-110"
              />
              <p className="mt-2 text-gray-700 text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-24 text-center transition transform hover:scale-105">
          <Link href='#' className="px-6 py-3 bg-[#632ad9] text-white font-medium text-sm md:text-base rounded-lg shadow  transition transform hover:scale-105 hover:shadow-lg">
            Get a Quote Now!
          </Link>
        </div>
    </div>


    <section className=" bg-gray-50 py-24 px-0 md:px-10 lg:px-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-[#632ad9] mb-5">Our Working Method</h2>
          <p className="text-gray-600 uppercase tracking-wide text-sm mt-2">
            Accelerate Your Success With Agile Drive
          </p>
        </div>
        {/* <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 ${step.color} text-2xl`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
 
          <div className="absolute w-full h-full top-0 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 500 200"
              strokeWidth={0.5}
              className="text-gray-300"
            >
              <path d="M10 50 Q 50 10, 90 50 T 170 50 T 250 50 T 330 50 T 410 50 T 490 50" />
            </svg>
          </div>
        </div> */}


    <Image src='/work-process2.svg' width={33} height={33} alt="" />

        
      </div>
    </section>





      <div className="mb-12 relative w-full sm:w-[86%] mx-auto h-60  lg:h-[290px] rounded-lg overflow-hidden px-4 md:px-0">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/back-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#132b6e] bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h2 className="text-[34px] text-3xl md:text-4xl lg:text-[42px] xl:text-[45px] leading-[42px] mb-5">
          Have a project idea?
        </h2>
        <p className="max-w-xl text-sm md:text-base">
          Harness the Power of Your Business Project Ideas with Our Dedicated
          Team, Turning Visions into Strategic Realities.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#8cff00] text-gray-900 rounded-lg text-sm font-medium transition transform hover:scale-105 hover:shadow-lg">
          Contact us
        </button>
      </div>
    </div>







    </HomeLayout>
  );
}
