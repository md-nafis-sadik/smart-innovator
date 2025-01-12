"use client"

import HomeLayout from "../../layouts/HomeLayout";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RxCross2, RxPlus } from "react-icons/rx";
import { Range } from "react-range";
import { FaChartLine, FaPencilAlt, FaNetworkWired } from "react-icons/fa";

export default function Homepage() {



  const features = [
    {
      icon: '/why-choose-icon1.svg', // Replace with your icon
      title: 'Skilled and Trained Teams',
      description:
        'Our highly-skilled and trained team offers the best of both worlds - breadth and depth of expertise to deliver inclusive solutions on a global level.',
    },
    {
      icon: '/why-choose-icon2.svg', // Replace with your icon
      title: 'Cost-effective Services',
      description:
        'At our core, we are passionate professionals committed to helping others succeed. Our services are competitively priced and accessible across the board.',
    },
    {
      icon: '/why-choose-icon3.svg', // Replace with your icon
      title: 'Quality Assurance',
      description:
        'Our commitment to client satisfaction is unsurpassed. With outstanding work quality, and transparent communication, our services assure 99% client satisfaction.',
    },
    {
      icon: '/why-choose-icon4.svg', // Replace with your icon
      title: 'Quick Support',
      description:
        'With continuous accessibility, our teams offer prompt assistance for your business needs anytime and anywhere via a variety of communication methods.',
    },
    {
      icon: '/award-winner.svg', // Replace with your icon
      title: 'Award Winner',
      description:
        'By being recognized as an award-winning company, we have established ourselves as trendsetters.',
    },
    {
      icon: '/top-rated-icon.svg', // Replace with your icon
      title: 'Top Rated',
      description:
        'We’re proud to see how much our clients love our work. Our ratings on online platforms showcase our non-negotiable excellence.',
    },
  ];




  return (
    <HomeLayout>



      <section className="lg:flex block lg:space-x-20 bg-white py-20 px-10 md:px-16 lg:px-20">

        <div className="lg:w-[45%]">
          {/* Title and Description */}
          <div className="mb-10">
            <h2 className="text-5xl font-semibold text-[#25245d]">About Us</h2>
            <p className="text-gray-600 mt-8 max-w-3xl mx-auto">
              Smart Innoators is an award-winning web agency in India since 2007 serving clients across the globe.
              We are providing excellent solutions for web design, web development, eCommerce development,
              mobile app development, and SEO services to our global clients.
              We are the perfect choice for businesses looking to take their online presence to the next level.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 list-disc list-inside">
              <li className="text-gray-700 font-medium">Website Design</li>
              <li className="text-gray-700 font-medium">Web Development</li>
              <li className="text-gray-700 font-medium">Mobile App Development</li>
              <li className="text-gray-700 font-medium">Ecommerce Development</li>
              <li className="text-gray-700 font-medium">UI/UX Design</li>
              <li className="text-gray-700 font-medium">SEO</li>
            </ul>
          </div>




          <div className="mt-12">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 focus:ring focus:ring-green-300">
              Let's Connect
            </button>

          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6 lg:w-[55%] mt-10">
          <div className="flex justify-center space-x-6">
            <div className="px-4 py-6 min-h-[210px] w-[calc(50%-15px)] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] bg-[#fff2f0] rounded-md shadow-md flex flex-col justify-center items-center">
              <Image className="mb-3" src="/contact-work.svg" width={33} height={33} alt="" />
              <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#ff6900] to-[#e63535] bg-clip-text text-transparent">99%</h3>
              <p className="text-gray-800 text-sm text-center">Job Satisfaction Ratio</p>
            </div>
            <div className="px-4 py-6 min-h-[210px] w-[calc(50%-15px)] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] bg-[#fdf8ff] rounded-md shadow-md flex flex-col justify-center items-center">
              <Image className="mb-3" src="/contact-experiance.svg" width={31} height={31} alt="" />
              <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#3e7bfa] to-[#60c] bg-clip-text text-transparent">15+</h3>
              <p className="text-gray-800 text-sm  text-center">Years of Experience</p>
            </div>

          </div>
          <div className="flex flex-wrap justify-center">

            <div className="px-4 py-6 mr-6 min-h-[210px] w-[calc(50%-15px)] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] bg-[#f1fbf2] rounded-md shadow-md flex flex-col justify-center items-center">
              <Image className="mb-3" src="/successfull-parrot-clr.svg" width={33} height={33} alt="" />
              <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#00cfde] to-[#05a660] bg-clip-text text-transparent">9,050+</h3>
              <p className="text-gray-800 text-sm  text-center">Successful Projects</p>
            </div>
            <div className="px-4 py-6 lg:mr-6 min-h-[210px] w-[calc(50%-15px)] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] bg-[#f2f8ff] rounded-md shadow-md flex flex-col justify-center items-center">
              <Image className="mb-3" src="/team-mem.svg" width={32} height={30} alt="" />
              <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#5b8def] to-[#0063f7] bg-clip-text text-transparent">35+</h3>
              <p className="text-gray-800 text-sm  text-center">Experts</p>
            </div>
            <div className="px-4 py-6 mt-6 lg:mt-0 min-h-[210px] w-[100%] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] bg-[#f1fbf2] rounded-md shadow-md flex flex-col justify-center items-center">
              <div className="flex flex-col items-center">
                <Image className="mb-3" src="/contact-client-global.svg" width={33} height={33} alt="" />
                <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#00cfde] to-[#05a660] bg-clip-text text-transparent">580+</h3>
                <p className="text-gray-800 text-sm  text-center">Global Clients</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer with CTA */}


      </section>

      

      <section className="py-20 px-10 md:px-16 lg:px-20 bg-gradient-to-b from-white via-gray-100 to-white">
      <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-[#25245d] mb-5">
        What we believe
      </h2>
      <p className="text-gray-600">We believe in providing quality services, which means any website or application curated by us will be clean-coded, speed optimized, all-device tested and SEO friendly.</p>
    </div>


        <div className="what-we-belive-boxes">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 ">



            <div className="card bg-white shadow-lg rounded-md px-6 py-8">
              <div className="grid grid-cols-1 gap-10">                            
              <div className="reveal animating">
                <div className="image-wrap">
                  <img src="https://www.pixlogix.com/wp-content/uploads/2024/12/Our-Core-Values.svg" width="454" height="514" alt="Our Core Values" data-lazy-src="https://www.pixlogix.com/wp-content/uploads/2024/12/Our-Core-Values.svg" data-ll-status="loaded" className="entered lazyloaded w-full" />
                </div>
              </div>
                <div className="what-we-belive-info not-fading-up fading-up">

                  <h2 className="text-3xl text-[#25245d] font-semibold mb-4">Our Core Values</h2>
                  <p className="bigger text-sm  md:text-base">Our team focuses on “Delivering The Best” to the clients, and the rest follows! </p>                               
                  <ul className="listing list-disc list-inside text-sm  md:text-base">
                    

                  <li>Quality Delivered in <strong>TIME</strong></li>
                    <li>Transparency &amp; Integrity
                    </li>
                    <li>Continuous <strong>INNOVATION</strong> to embrace change
                    </li>
                    <li>Exceed <strong>EXPECTATIONS</strong> to make clients our fans!
                    </li>
                    <li>Being <strong>AGILE</strong>
                    </li>
                    <li>Collaborative &amp; Result-oriented
                    </li>
                    <li>Continuous <strong>LEARN</strong> and <strong>UPSKILL</strong></li>
                  </ul>                            </div>
              </div>
            </div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
            <div className="card bg-white shadow-lg rounded-md px-6 py-8">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 ">                            
              <div className="reveal animating">
                <div className="image-wrap">
                  <img src="https://www.pixlogix.com/wp-content/uploads/2024/12/Our-Mission.svg" width="454" height="514" alt="Our Mission" data-lazy-src="https://www.pixlogix.com/wp-content/uploads/2024/12/Our-Mission.svg" data-ll-status="loaded" className="entered lazyloaded" />
                </div>
              </div>
                <div className="what-we-belive-info not-fading-up fading-up">

                  <h2 className="text-3xl text-[#25245d] font-semibold mb-4">Our Vision</h2>
                  <p className="bigger text-sm md:text-base">Our vision is to continue to rise to be more agile, purpose-driven, customer-centric, and a <strong>GO-TO</strong> technology partner for entrepreneurs and individuals to deliver innovative digital solutions. </p>                                                           </div>
              </div>
            </div>




            <div className="card bg-white shadow-lg rounded-md px-6 py-8">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 ">                            
              <div className="reveal animating">
                <div className="image-wrap">
                  <img src="https://www.pixlogix.com/wp-content/uploads/2024/12/Our-Vision.svg" width="454" height="514" alt="Our Vision" data-lazy-src="https://www.pixlogix.com/wp-content/uploads/2024/12/Our-Vision.svg" data-ll-status="loaded" className="entered lazyloaded" />
                </div>
              </div>
                <div className="what-we-belive-info not-fading-up fading-up">

                  <h2 className="text-3xl text-[#25245d] font-semibold mb-4">Our Mission</h2>
                  <p className="bigger text-sm md:text-base"><span className="mb-4">“Anything is possible with the right technology...” </span> <span>At Pixlogix, we strive to be a catalyst for our clients' success by providing creative, innovative, and goal-oriented digital solutions, through business intelligence, cutting-edge tools, and top talent.</span> </p>                                                           </div>
              </div>
            </div>

            </div>

          </div>
        </div>
      </section>






      <hr />
      <section className="mb-12 py-20 px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-2">
          <div>
            <h2 className="mb-2 text-transparent text-[50px] lg:text-[70px]"
              style={{
                WebkitTextStroke: '2px #25245d',
                paintOrder: 'stroke fill',
              }}>What</h2>
            <h3 className="text-2xl lg:text-4xl font-semibold text-[#25245d]">We do</h3>
          </div>
          <div className="text-[#25245d]">
            <p className="  mb-3">Our innovative technology services comprise website design, web development, ecommerce development, mobile app development, and digital marketing & SEO. We have enabled thousands of clients to reach their business objectives globally!</p>
            <p className="">Our team of skilled professionals creates visually appealing and functional websites and web applications, ensuring optimal user experience and driving online growth for our clients. With a client-centric approach, we strive to deliver tailored solutions that align with our clients' specific needs and goals.</p>
          </div>
        </div>
        <h4 className="font-semibold text-3xl my-12 text-[#25245d]">We can successfully advance your business using three principles</h4>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {/* Strategy Box */}

          <div className="relative">
            <div className="flex md:block xl:flex gap-6">
            <div className="md:flex w-[100px] flex-col justify-between xl:items-center relative">
  {/* Circle */}
  <span className="border border-[#25245d] font-semibold text-lg md:text-xl xl:text-lg w-[60px] h-[60px] xl:w-20 xl:h-20 rounded-full flex items-center justify-center mx-auto xl:mx-4 relative">
    01
  </span>

  {/* Vertical Line */}
  <div className="w-[1px] h-10 lg:h-[calc(100%-115px)] bg-[#25245d] mx-auto"></div>

  {/* Text */}
  <h4 className="w-[100px] text-center md:w-auto mt-6 text-md md:text-xl text-[#25245d] font-semibold">
    Strategy
  </h4>
</div>

              <div className="border text-[15px] border-green-400 px-6 py-8 rounded-tr-[50px] rounded-b-[50px] mt-0 md:mt-[20px] xl:mt-[60px]">
                <p>
                  Making strategy to develop a solution as per your business goals is the
                  first step of the process.
                </p>
              </div>
            </div>
            <div className="absolute xl:static flex bottom-[-20px]  right-[-20px] xl:justify-start mt-8">
              <figure className="rounded-full bg-[#e5ffff] p-6 xl:p-10">
                <Image
                  src="https://www.pixlogix.com/wp-content/uploads/2023/02/strategy.svg"
                  alt="Strategy"
                  width={30}
                  height={30}
                  className="xl:w-[50px] xl:h-[50px]"
                />
              </figure>
            </div>
          </div>



          {/* Strategy Box */}
          <div className="relative">
            <div className="flex md:block xl:flex gap-6">
              <div className="md:flex w-[100px] flex-col justify-between xl:items-center">
                <span className="border border-[#25245d] font-semibold text-lg md:text-xl xl:text-lg w-[60px] h-[60px] xl:w-20 xl:h-20 rounded-full flex items-center justify-center mx-auto xl:mx-4">
                  02
                </span>
                <div className="w-[1px] h-10 lg:h-[calc(100%-115px)] bg-[#25245d] mx-auto"></div>
                <h4 className="w-[100px] text-center md:w-auto mt-6 text-md md:text-xl text-[#25245d] font-semibold">Design</h4>
              </div>
              <div className="border text-[15px] border-orange-400 px-6 py-8 rounded-tr-[50px] rounded-b-[50px] mt-0 md:mt-[20px] xl:mt-[60px]">
                <p>
                  Shaping your business growth by designing through innovative and pioneering initiatives.
                </p>
              </div>
            </div>
            <div className="absolute xl:static flex bottom-[-20px] right-[-20px] xl:justify-start mt-8">
              <figure className="rounded-full bg-[#fff8e5] p-6 xl:p-10">
                <Image
                  src="https://www.pixlogix.com/wp-content/uploads/2023/02/strategy.svg"
                  alt="Strategy"
                  width={30}
                  height={30}
                  className="xl:w-[50px] xl:h-[50px]"
                />
              </figure>
            </div>
          </div>



          {/* Strategy Box */}
          <div className="relative">
            <div className="flex md:block xl:flex gap-6">
              <div className="md:flex w-[100px] flex-col justify-between xl:items-center">
                <span className="border border-[#25245d] font-semibold text-lg md:text-xl xl:text-lg w-[60px] h-[60px] xl:w-20 xl:h-20 rounded-full flex items-center justify-center mx-auto xl:mx-4">
                  03
                </span>
                <div className="w-[1px] h-10 lg:h-[calc(100%-115px)] bg-[#25245d] mx-auto"></div>
                <h4 className="w-[100px] text-center md:w-auto mt-6 text-md md:text-xl text-[#25245d] font-semibold">Technology</h4>
              </div>
              <div className="border text-[15px] border-red-400 px-6 py-8 rounded-tr-[50px] rounded-b-[50px] mt-0 md:mt-[20px] xl:mt-[60px]">
                <p>
                  We accelerate your progress with cutting-edge technology with the power of originality.
                </p>
              </div>
            </div>
            <div className="absolute xl:static flex bottom-[-20px] right-[-20px] xl:justify-start mt-8">
              <figure className="rounded-full bg-[#fef0f0] p-6 xl:p-10">
                <Image
                  src="https://www.pixlogix.com/wp-content/uploads/2023/02/strategy.svg"
                  alt="Strategy"
                  width={30}
                  height={30}
                  className="xl:w-[50px] xl:h-[50px]"
                />
              </figure>
            </div>
          </div>





        </div>

      </section>


      <section className="bg-gray-50 py-24 px-10 md:px-16 lg:px-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#25245d] mb-5">
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
                  <img src={feature.icon}/>
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






    </HomeLayout>
  );
}
