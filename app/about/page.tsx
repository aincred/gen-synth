import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import logo from '../../public/logo_pro.png';

function BackButton({ asChild = false, className = '', ...props }) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={`inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 font-medium ${className}`}
      {...props}
    />
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Gen Synth – AI-Powered Content Creation Platform</title>
        <meta
          name="description"
          content="Discover Gen Synth, the AI-driven platform revolutionizing content creation with intelligent, high-quality, and efficient solutions."
        />
      </Head>

      <main className="relative min-h-screen bg-[#121212] text-white px-4 sm:px-6 md:px-12 py-12 sm:py-16 font-poppins overflow-hidden">

        {/* Floating Back Button */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
          <BackButton asChild>
            <Link href="/" passHref>
              <span className="inline-flex items-center text-sm sm:text-base">
                <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Back
              </span>
            </Link>
          </BackButton>
        </div>

        {/* Background Logo */}
        <div className="absolute inset-0 flex justify-center items-start opacity-10 z-0 pointer-events-none select-none">
          <Image
            src={logo}
            alt="Gen Synth Logo Background"
            width={800}
            height={200}
            className="blur-lg"
            priority
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          {/* Logo */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <Image
              src={logo}
              alt="Gen Synth Logo"
              width={280}
              height={80}
              className="w-48 sm:w-64 h-auto"
              priority
            />
          </div>

          {/* Page Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-roboto font-extrabold text-white mb-6 sm:mb-8 leading-tight">
            About Gen Synth
          </h1>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#CCCCCC] mb-10 leading-relaxed max-w-3xl">
            Gen Synth is a next-generation AI-powered content creation platform designed to empower creators, marketers, and businesses by delivering high-quality, tailored content with speed and precision.
          </p>

          {/* Sections */}
          <section className="mb-10 sm:mb-12 max-w-3xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-roboto font-bold mb-3 sm:mb-4 text-white">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#CCCCCC] leading-relaxed">
              We strive to revolutionize the way content is created by harnessing the latest advancements in artificial intelligence. Our mission is to make content generation seamless, efficient, and accessible—enabling you to focus on creativity and strategy.
            </p>
          </section>

          <section className="mb-10 sm:mb-12 max-w-3xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-roboto font-bold mb-3 sm:mb-4 text-white">
              How Gen Synth Works
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#CCCCCC] leading-relaxed">
              Leveraging sophisticated natural language processing and machine learning models, Gen Synth transforms your input into compelling blog posts, product descriptions, social media content, and more — all crafted to your unique specifications.
            </p>
          </section>

          <section className="mb-10 sm:mb-12 max-w-3xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-roboto font-bold mb-3 sm:mb-4 text-white">
              Why Choose Gen Synth?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-[#CCCCCC] leading-relaxed">
              <li>Lightning-fast, reliable content generation tailored to your needs</li>
              <li>Highly customizable outputs ensuring brand-aligned messaging</li>
              <li>Intuitive, user-centric interface for effortless content creation</li>
              <li>Continuous innovation with regular updates incorporating cutting-edge AI technology</li>
            </ul>
          </section>

          <section className="max-w-3xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-roboto font-bold mb-3 sm:mb-4 text-white">
              Connect With Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#CCCCCC] leading-relaxed break-words">
              We’re here to support your journey. For inquiries, feedback, or partnership opportunities, please contact us at{' '}
              <a
                href="mailto:support@gensynth.com"
                className="text-[#0B84FF] hover:underline font-semibold"
              >
                support@gensynth.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
