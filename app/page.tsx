import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A] p-4 flex flex-wrap justify-between items-center border-b border-[#0B03FF]">
        <img
          src="/logo.png"
          alt="logo"
          className="w-28 md:w-36 transition-transform duration-300 hover:scale-110"
        />

        {/* Mobile menu button would go here */}

        <nav className="hidden md:flex gap-4 lg:gap-8 text-white font-normal order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-8 w-full md:w-auto">
            <a
              href="#hero"
              className="hover:text-[#0B03FF] transition-colors duration-200 py-2 px-2 text-sm md:text-base"
            >
              Home
            </a>
            <a
              href="#features"
              className="hover:text-[#0B03FF] transition-colors duration-200 py-2 px-2 text-sm md:text-base"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#0B03FF] transition-colors duration-200 py-2 px-2 text-sm md:text-base"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="hover:text-[#0B03FF] transition-colors duration-200 py-2 px-2 text-sm md:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#0B03FF] transition-colors duration-200 py-2 px-2 text-sm md:text-base"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="hover:text-[#0B03FF] transition-colors duration-200 py-2 px-2 text-sm md:text-base"
            >
              FAQ
            </a>
            <a
              href="/about"
              className="hover:text-[#0B03FF] transition-colors duration-200 py-2 px-2 text-sm md:text-base"
            >
              About
            </a>
          </div>
        </nav>

        <div className="flex gap-2 sm:gap-3 order-2 md:order-3">
          <a
            href="/dashboard"
            className="px-3 py-1 sm:px-4 text-xs sm:text-sm rounded-md border border-[#0B03FF] bg-[#0B03FF] text-white hover:bg-white hover:text-[#0B03FF] transition-colors duration-200"
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="px-3 py-1 sm:px-4 text-xs sm:text-sm rounded-md border border-[#0B03FF] text-white hover:text-[#0B03FF] hover:bg-[#121212] transition-colors duration-200"
          >
            Signup
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-auto min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-[#121212] to-black"
      >
        {/* Left Side - Text - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-0 order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 text-white">
            Generate Content with{" "}
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl block md:inline">
              Gen Synth{" "}
              <span className="font-roboto text-9xl text-white animate-glow">
                AI
              </span>
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4 lg:mb-6 max-w-lg text-[#CCCCCC]">
            Fast, SEO-friendly content generation in seconds. Unlock the power
            of AI for your writing needs.
          </p>
          <p className="mb-4 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base max-w-lg text-[#CCCCCC]">
            Whether you're a blogger, marketer, or business owner, our
            AI-powered platform helps you create compelling, original content
            effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
            <a
              href="/dashboard"
              className="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 text-xs sm:text-sm md:text-base bg-[#0B03FF] hover:bg-white text-white hover:text-[#0B03FF] font-semibold rounded-lg md:rounded-xl shadow-lg transition duration-200 inline-block"
            >
              Get Started
            </a>
            <button className="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 text-xs sm:text-sm md:text-base border border-white text-white hover:bg-[#0B03FF] hover:border-[#0B03FF] hover:text-white font-medium rounded-lg md:rounded-xl transition duration-200 shadow-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side - Image - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full order-1 md:order-2">
          <img
            src="/web.png"
            alt="Hero"
            className="h-full w-full object-cover object-center md:object-right"
          />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="bg-[#0A0A0A] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] mb-4 sm:mb-5 md:mb-6 tracking-tight">
            Premium Features
          </h2>
          <p className="text-[#E0E0E0] mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Power-packed tools built to enhance your content creation journey
            with speed, intelligence, and style.
          </p>

          <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {/* Feature Card 1 */}
            <div className="group relative bg-gradient-to-br from-[#000000] via-[#121212] to-[#000000] p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#121212] hover:border-[#0B03FF] shadow-lg hover:shadow-[0_0_20px_#0B03FF] sm:hover:shadow-[0_0_30px_#0B03FF] transition duration-300 hover:scale-[1.02] sm:hover:scale-[1.03]">
              <div className="text-4xl sm:text-5xl text-[#0B03FF] mb-4 sm:mb-6 group-hover:rotate-6 transition-transform">
                ⚡
              </div>
              <h3 className="text-xl sm:text-2xl text-[#FFFFFF] mb-2 sm:mb-3">
                Blazing Fast AI
              </h3>
              <p className="text-[#E0E0E0] text-xs sm:text-sm md:text-base leading-relaxed">
                Experience ultra-fast content creation using our cutting-edge AI
                engine, built for efficiency and accuracy.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative bg-gradient-to-br from-[#000000] via-[#121212] to-[#000000] p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#121212] hover:border-[#0B03FF] shadow-lg hover:shadow-[0_0_20px_#0B03FF] sm:hover:shadow-[0_0_30px_#0B03FF] transition duration-300 hover:scale-[1.02] sm:hover:scale-[1.03]">
              <div className="text-4xl sm:text-5xl text-[#0B03FF] mb-4 sm:mb-6 group-hover:-rotate-6 transition-transform">
                🚀
              </div>
              <h3 className="text-xl sm:text-2xl text-[#FFFFFF] mb-2 sm:mb-3">
                SEO Optimized Output
              </h3>
              <p className="text-[#E0E0E0] text-xs sm:text-sm md:text-base leading-relaxed">
                Generate content that's built to rank with proven optimization
                techniques baked in.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative bg-gradient-to-br from-[#000000] via-[#121212] to-[#000000] p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#121212] hover:border-[#0B03FF] shadow-lg hover:shadow-[0_0_20px_#0B03FF] sm:hover:shadow-[0_0_30px_#0B03FF] transition duration-300 hover:scale-[1.02] sm:hover:scale-[1.03]">
              <div className="text-4xl sm:text-5xl text-[#0B03FF] mb-4 sm:mb-6 group-hover:rotate-6 transition-transform">
                🌐
              </div>
              <h3 className="text-xl sm:text-2xl text-[#FFFFFF] mb-2 sm:mb-3">
                Multi-language Mastery
              </h3>
              <p className="text-[#E0E0E0] text-xs sm:text-sm md:text-base leading-relaxed">
                Break barriers and reach global users with seamless
                multi-language support built into the platform.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="group relative bg-gradient-to-br from-[#000000] via-[#121212] to-[#000000] p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#121212] hover:border-[#0B03FF] shadow-lg hover:shadow-[0_0_20px_#0B03FF] sm:hover:shadow-[0_0_30px_#0B03FF] transition duration-300 hover:scale-[1.02] sm:hover:scale-[1.03]">
              <div className="text-4xl sm:text-5xl text-[#0B03FF] mb-4 sm:mb-6 group-hover:-rotate-6 transition-transform">
                🖱️
              </div>
              <h3 className="text-xl sm:text-2xl text-[#FFFFFF] mb-2 sm:mb-3">
                One-Click Publishing
              </h3>
              <p className="text-[#E0E0E0] text-xs sm:text-sm md:text-base leading-relaxed">
                Publish content instantly to your blogs or platforms—one click,
                zero friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-[#0A0A0A] py-12 sm:py-16 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 tracking-wide">
            How It Works
          </h2>
          <div className="mx-auto w-20 sm:w-24 h-1 rounded mb-4 sm:mb-6 bg-gradient-to-r from-[#0600D3] to-[#1A1AFF]"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Follow these simple steps to create amazing AI-powered content
            effortlessly.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12 max-w-3xl mx-auto">
          {/* Step 1 */}
          <div className="relative bg-gradient-to-r from-[#050517] via-[#0C0C2F] to-[#050517] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-[0_0_20px_#0600D399] sm:hover:shadow-[0_0_30px_#0600D399] transition-shadow duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="absolute -top-6 sm:-top-7 left-4 sm:left-6 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-r from-[#0600D3] to-[#1A1AFF] flex items-center justify-center text-white font-semibold text-xl sm:text-2xl shadow-md z-10">
              1
            </div>
            <div className="mt-0 sm:mt-2 text-white text-2xl sm:text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 sm:h-10 w-8 sm:w-10 text-[#1A1AFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l3 3-3 3"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl sm:text-2xl mb-2 sm:mb-3 tracking-wide">
                Input Your Idea
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                Start by entering your topic, keywords, or a short description
                of what you need.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-gradient-to-r from-[#07071A] via-[#15154B] to-[#07071A] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-[0_0_20px_#1A1AFF99] sm:hover:shadow-[0_0_30px_#1A1AFF99] transition-shadow duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="absolute -top-6 sm:-top-7 left-4 sm:left-6 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-r from-[#0600D3] to-[#1A1AFF] flex items-center justify-center text-white font-semibold text-xl sm:text-2xl shadow-md z-10">
              2
            </div>
            <div className="mt-0 sm:mt-2 text-white text-2xl sm:text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 sm:h-10 w-8 sm:w-10 text-[#1A1AFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M7 21V3m13 18v-6a4 4 0 00-4-4h-1"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl sm:text-2xl mb-2 sm:mb-3 tracking-wide">
                AI Generates Content
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                Our powerful AI instantly crafts optimized, high-quality content
                tailored to your input.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-gradient-to-r from-[#060616] via-[#1A1A5C] to-[#060616] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-[0_0_20px_#0600D399] sm:hover:shadow-[0_0_30px_#0600D399] transition-shadow duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="absolute -top-6 sm:-top-7 left-4 sm:left-6 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-r from-[#0600D3] to-[#1A1AFF] flex items-center justify-center text-white font-semibold text-xl sm:text-2xl shadow-md z-10">
              3
            </div>
            <div className="mt-0 sm:mt-2 text-white text-2xl sm:text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 sm:h-10 w-8 sm:w-10 text-[#1A1AFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl sm:text-2xl mb-2 sm:mb-3 tracking-wide">
                Publish or Export
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                Review, edit if needed, and publish instantly or export your
                content with one click.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#0600D3] to-[#1A1AFF] text-white font-semibold text-sm sm:text-base hover:brightness-110 transition-transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="bg-[#0A0A0A] bg-opacity-90 py-12 sm:py-16 md:py-20 px-4 sm:px-6 backdrop-blur-md"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold mb-8 sm:mb-12 md:mb-16 text-center tracking-tight">
          Pricing Plans
        </h2>

        <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <div
            tabIndex={0}
            className="group bg-gradient-to-tr from-[#1A1A1A]/80 to-[#121212]/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10
                       border border-[#2a2a2a] shadow-md shadow-[#0B03FF22] transform transition
                       hover:scale-[1.02] sm:hover:scale-[1.03] md:hover:scale-105 hover:border-[#0B03FF] hover:shadow-lg hover:shadow-[#0B03FF77]
                       focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#0B03FF99] cursor-pointer"
          >
            <h3 className="text-xl sm:text-2xl text-[#0B03FF] mb-3 sm:mb-4 font-semibold">
              Basic
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              For personal use & beginners
            </p>
            <p className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-wide">
              $9
              <span className="text-xs sm:text-sm md:text-base font-normal text-gray-400">
                /month
              </span>
            </p>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
              <li className="flex items-start">
                <span className="mr-2">✔️</span> 5 AI-generated articles/month
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span> SEO optimized content
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span> Basic support
              </li>
            </ul>
            <button className="w-full bg-[#0B03FF] hover:bg-[#3A3AFF] text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition">
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div
            tabIndex={0}
            className="group bg-gradient-to-tr from-[#060229] to-[#1a1a6b] backdrop-blur-xl rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12
                       border border-[#0B03FF] shadow-lg sm:shadow-xl md:shadow-2xl shadow-[#0B03FFAA] transform transition
                       hover:scale-[1.02] sm:hover:scale-[1.03] md:hover:scale-105 hover:shadow-[#0B03FFDD]
                       focus:outline-none focus:ring-2 sm:focus:ring-4 md:focus:ring-6 focus:ring-[#0B03FFAA] cursor-pointer"
          >
            <div className="absolute top-0 right-0 bg-[#0B03FF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
              POPULAR
            </div>
            <h3 className="text-2xl sm:text-3xl text-[#F3E8FF] mb-3 sm:mb-4 md:mb-5 font-bold sm:font-extrabold">
              Pro
            </h3>
            <p className="text-[#D1D5DB] text-sm sm:text-base mb-6 sm:mb-8 md:mb-10">
              For marketers & professionals
            </p>
            <p className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 md:mb-10 tracking-tight">
              $29
              <span className="text-sm sm:text-base md:text-lg font-normal text-gray-300">
                /month
              </span>
            </p>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-300 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-10">
              <li className="flex items-start">
                <span className="mr-2">✔️</span> 50 AI-generated articles/month
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span> SEO & multi-language support
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span> Priority support & updates
              </li>
            </ul>
            <button className="w-full bg-white text-[#0B03FF] py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-semibold sm:font-bold text-sm sm:text-base hover:bg-[#e6e6ff] transition">
              Choose Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div
            tabIndex={0}
            className="group bg-gradient-to-tr from-[#1A1A1A]/80 to-[#121212]/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10
                       border border-[#2a2a2a] shadow-md shadow-[#0B03FF22] transform transition
                       hover:scale-[1.02] sm:hover:scale-[1.03] md:hover:scale-105 hover:border-[#0B03FF] hover:shadow-lg hover:shadow-[#0B03FF77]
                       focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#0B03FF99] cursor-pointer"
          >
            <h3 className="text-xl sm:text-2xl text-[#0B03FF] mb-3 sm:mb-4 font-semibold">
              Enterprise
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              For businesses & teams
            </p>
            <p className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-wide">
              Custom
            </p>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
              <li className="flex items-start">
                <span className="mr-2">✔️</span> Unlimited articles
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span> Dedicated account manager
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span> Custom integrations & support
              </li>
            </ul>
            <button className="w-full bg-[#0B03FF] hover:bg-[#3A3AFF] text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="bg-[#0A0A0A] py-12 md:py-16 px-4 sm:px-6 font-roboto"
      >
        <h2 className="text-3xl sm:text-4xl text-white font-semibold text-center mb-8 md:mb-12 font-poppins">
          What Our Users Say
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {[
            {
              quote: `"This tool boosted my productivity and SEO reach tremendously!"`,
              author: "— Sarah L., Blogger",
            },
            {
              quote: `"Simple, elegant, and powerful. My go-to platform for content."`,
              author: "— Mike T., Marketer",
            },
            {
              quote: `"Easy to use, even for a non-techie like me. Game-changer!"`,
              author: "— Priya D., Entrepreneur",
            },
            {
              quote: `"Within minutes, I had high-quality content ready to publish."`,
              author: "— Alex M., Content Creator",
            },
            {
              quote: `"Love the speed and precision. Saves me hours every week."`,
              author: "— Lina K., Agency Owner",
            },
            {
              quote: `"A beautifully designed, efficient content assistant. Highly recommended!"`,
              author: "— Daniel R., Freelancer",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-xl bg-gradient-to-br from-[#0F0F2F]/60 to-[#1A1A40]/40 border border-[#1F1F5F]/30 shadow-md hover:shadow-[0_0_25px_#0B03FF66] transition hover:scale-[1.02] md:hover:scale-105 text-white"
            >
              <p className="text-[#CCCCCC] text-base md:text-lg italic font-roboto">
                {testimonial.quote}
              </p>
              <div className="mt-4 md:mt-6 text-[#7F89FF] font-medium font-poppins">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-[#0A0A0A] py-12 md:py-16 px-4 sm:px-6 text-white backdrop-blur-md font-roboto"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-10 font-poppins">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 md:space-y-6">
            {/* FAQ Item */}
            {[
              {
                question: "What is AIWriter and how does it work?",
                answer:
                  "AIWriter is a smart AI-powered content creation tool that helps you generate blogs, marketing copy, emails, and more with a few clicks using advanced machine learning models.",
              },
              {
                question: "Is AIWriter free to use?",
                answer:
                  "We offer a free trial with limited credits. For extended usage, you can choose from our flexible monthly or yearly premium plans.",
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer:
                  "Yes, you can cancel or change your subscription at any time from your account dashboard with no hidden fees.",
              },
              {
                question: "What kind of content can I create?",
                answer:
                  "AIWriter supports blogs, product descriptions, social media posts, emails, ad copy, and more. Just select a type and input a prompt!",
              },
              {
                question: "Is my content unique and safe?",
                answer:
                  "Yes, all content is generated uniquely per user. We do not reuse or store your data, ensuring privacy and originality.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="bg-[#1c1c1c] rounded-lg md:rounded-xl p-4 md:p-5 shadow-md md:shadow-lg border border-transparent hover:border-[#0B03FF] hover:shadow-[0_0_8px_#0B03FF] transition duration-300"
              >
                <summary className="cursor-pointer text-base md:text-lg font-semibold font-poppins">
                  {item.question}
                </summary>
                <p className="mt-2 md:mt-3 text-[#B0B0B0] text-sm md:text-base font-roboto">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] text-[#B0B0B0] pt-10 pb-6 px-4 sm:px-6 border-t border-[#2b2b2b] backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-sm">
          {/* Logo and About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo.png"
              alt="GenSynth Logo"
              className="w-28 sm:w-32 mb-3 sm:mb-4"
            />
            <p className="text-[#888] leading-relaxed text-sm sm:text-base">
              Craft premium content with speed and precision. Powered by AI.
              Designed for creators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {[
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Pricing", href: "#pricing" },
                { name: "Testimonials", href: "#testimonials" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[#0B03FF] hover:drop-shadow-[0_0_8px_#0B03FF] transition duration-200 ease-in-out text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Resources
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {[
                { name: "Blog", href: "#" },
                { name: "Help Center", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Privacy Policy", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[#0B03FF] hover:drop-shadow-[0_0_8px_#0B03FF] transition duration-200 ease-in-out text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Connect
            </h4>
            <div className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-4">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 4.01a8.65 8.65 0 0 1-2.4.66 4.15 4.15 0 0 0 1.8-2.29 8.62 8.62 0 0 1-2.7 1.03 4.27 4.27 0 0 0-7.1 3.89A12.17 12.17 0 0 1 3 3.57a4.23 4.23 0 0 0 1.32 5.68A4.22 4.22 0 0 1 2.8 8.4v.06a4.28 4.28 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.92.07 4.29 4.29 0 0 0 4 3A8.56 8.56 0 0 1 2 18.58 12.07 12.07 0 0 0 8.29 20c7.55 0 11.68-6.14 11.68-11.45 0-.17 0-.35-.01-.52A8.08 8.08 0 0 0 22 4.01Z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 8a6 6 0 0 1 0 8l-4 4a6 6 0 0 1-8-8l4-4a6 6 0 0 1 8 0zm-1.4 6.6a4 4 0 1 0-5.2-5.2l-4 4a4 4 0 0 0 5.2 5.2l4-4z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.41 2.86 8.15 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.88 1.51 2.31 1.07 2.88.82.09-.64.34-1.07.61-1.31-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02a9.47 9.47 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.58 4.94.35.31.67.93.67 1.88v2.8c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.51-4.45-9.96-9.96-9.96z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-[#0B03FF] hover:drop-shadow-[0_0_8px_#0B03FF] transition duration-200 ease-in-out"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-[#888] text-sm sm:text-base">
              contact@gensynthai.com
            </p>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 text-[#666] text-xs border-t border-[#2a2a2a] pt-4 sm:pt-6">
          © 2025 Gen Synth AI. All rights reserved.
        </div>
      </footer>
      
    </div>
  );
}
