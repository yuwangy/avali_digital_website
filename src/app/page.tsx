import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="https://ext.same-assets.com/3325390307/2563901416.svg"
                alt="Avali Digital"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-xl font-semibold">Avali Digital</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#research" className="text-gray-300 hover:text-white transition-colors">
                Technology
              </a>
              <a href="#team" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="border-gray-600 text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black border-gray-800 text-white">
                  <div className="flex flex-col space-y-6 mt-8">
                    <a href="#" className="text-lg text-gray-300 hover:text-white transition-colors">
                      About
                    </a>
                    <a href="#research" className="text-lg text-gray-300 hover:text-white transition-colors">
                      Technology
                    </a>
                    <a href="#team" className="text-lg text-gray-300 hover:text-white transition-colors">
                      Careers
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://ext.same-assets.com/3325390307/395308861.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-6xl">
          {/* AI Powered Text */}
          <div className="mb-6">
            <h1 className="text-7xl md:text-9xl font-black hero-text tracking-tight">
              <span className="text-gradient-red">
                AI POWERED
              </span>
            </h1>
          </div>

          {/* Filmmaking Solutions Text */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-black hero-text tracking-tight leading-tight">
              <span className="text-gradient-blue">
                FILMMAKING
              </span>
              <br />
              <span className="text-white drop-shadow-lg">SOLUTIONS</span>
            </h2>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-20 left-0 right-0 z-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              {/* Description */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">Avali Digital - Your Creative Partner</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Avali Digital is a creative service provider in the film and media industry.
                  Powered by AI, we aim to simplify the filmmaking process and help everyone realize their cinematic dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction Sections */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* AI-Powered Editing */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Video Editing</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your raw footage into professional content with our advanced AI editing tools.
              From automated color grading to intelligent scene detection, we handle the technical details
              so you can focus on your creative vision.
            </p>
          </div>

          {/* Creative Services */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Full-Service Production</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From concept to final cut, our team of creative professionals and AI tools work together
              to bring your vision to life. Whether it's a commercial, documentary, or narrative film,
              we provide end-to-end production services.
            </p>
          </div>

          {/* Accessible Filmmaking */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Filmmaking for Everyone</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Break down the barriers to professional filmmaking. Our AI-assisted workflow and
              expert guidance make high-quality video production accessible to creators of all skill levels,
              from independent filmmakers to major studios.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Avali Digital's mission is to democratize professional filmmaking through AI-powered creative services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">01</h3>
                <p className="text-gray-300 leading-relaxed">
                  The future of filmmaking lies in the seamless integration of human creativity and artificial intelligence.
                  We believe that technology should enhance, not replace, the artistic vision of filmmakers.
                </p>
                <p className="text-white font-semibold mt-4">
                  Every story deserves to be told beautifully.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Traditional film production can be complex, expensive, and time-consuming.
                At Avali Digital, we leverage cutting-edge AI tools and experienced professionals
                to streamline the creative process without compromising artistic integrity.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">
                  We combine human expertise with AI innovation
                </span> – creating a workflow that empowers filmmakers to focus on what matters most:
                storytelling. From pre-production planning to post-production magic, we're your creative partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6" id="research">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Technology</h2>
            <h3 className="text-2xl font-semibold mb-6">
              We leverage cutting-edge AI technology to revolutionize the filmmaking process
            </h3>
            <p className="text-xl text-gray-300 max-w-6xl mx-auto leading-relaxed">
              Our team combines deep expertise in artificial intelligence with decades of film industry experience.
              We stay at the forefront of AI innovation, implementing the latest breakthroughs in computer vision,
              natural language processing, and machine learning to enhance every aspect of video production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* AI Editing Suite */}
            <div className="bg-gray-900 rounded-2xl p-8 card-hover cursor-pointer">
              <div className="flex items-center mb-6">
                <Image
                  src="https://ext.same-assets.com/3325390307/2320907649.svg"
                  alt="AI Editing"
                  width={40}
                  height={40}
                  className="w-10 h-10 mr-4"
                />
                <h4 className="text-2xl font-bold">AI Editing Suite</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Intelligent video editing tools that automate tedious tasks like color correction,
                audio syncing, and scene transitions while preserving your creative intent.
              </p>
            </div>

            {/* Smart Production Tools */}
            <div className="bg-gray-900 rounded-2xl p-8 card-hover cursor-pointer">
              <div className="flex items-center mb-6">
                <Image
                  src="https://ext.same-assets.com/3325390307/1998606599.svg"
                  alt="Production Tools"
                  width={40}
                  height={40}
                  className="w-10 h-10 mr-4"
                />
                <h4 className="text-2xl font-bold">Smart Production</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                AI-powered pre-production planning, script analysis, and shot optimization tools
                that help streamline your entire filmmaking workflow from concept to completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h2>
            <h3 className="text-2xl font-semibold mb-6">
              Professional filmmaking solutions powered by AI innovation
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <span className="text-white font-semibold">Great storytelling starts with great tools.</span>
              We combine human creativity with advanced AI technology to deliver exceptional
              results that bring your cinematic vision to life, efficiently and beautifully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Creative Services */}
            <div className="text-center">
              <div className="bg-gray-900 rounded-2xl p-8 card-hover">
                <h4 className="text-2xl font-bold mb-4">Creative Services</h4>
                <p className="text-gray-300 leading-relaxed">
                  From concept development to final delivery, our team provides comprehensive
                  filmmaking services. Whether you need commercial content, documentaries,
                  or narrative films, we bring your vision to life with professional quality.
                </p>
              </div>
            </div>

            {/* AI Tools & Technology */}
            <div className="text-center">
              <div className="bg-gray-900 rounded-2xl p-8 card-hover">
                <h4 className="text-2xl font-bold mb-4">AI Tools & Technology</h4>
                <p className="text-gray-300 leading-relaxed">
                  Leverage our cutting-edge AI tools for video editing, color grading, and post-production.
                  Our technology stack accelerates your workflow while maintaining the highest quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Community Section */}
      <section className="py-20 px-6 bg-gray-900" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Community & Careers</h2>
            <h3 className="text-2xl font-semibold mb-6">
              Building the future of filmmaking together
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're a passionate team of filmmakers, technologists, and creative professionals
              working to make professional-quality video production accessible to everyone.
            </p>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
              Join our growing community of creators and innovators!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Careers */}
            <div className="text-center">
              <div className="bg-black rounded-2xl p-8 card-hover">
                <h4 className="text-2xl font-bold mb-4">Join Our Team</h4>
                <p className="text-gray-300 leading-relaxed">
                  We're looking for passionate filmmakers, AI engineers, and creative professionals
                  who share our vision of democratizing filmmaking through technology. Join us in
                  shaping the future of creative storytelling.
                </p>
              </div>
            </div>

            {/* Client Showcase */}
            <div className="text-center">
              <div className="bg-black rounded-2xl p-8 card-hover">
                <h4 className="text-2xl font-bold mb-4">Client Showcase</h4>
                <p className="text-gray-300 leading-relaxed">
                  Discover the amazing projects our clients have created with Avali Digital.
                  From independent short films to major commercial campaigns, see how our
                  AI-powered workflow helps bring creative visions to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-xl font-semibold">Avali Digital</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/avalidigital/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="https://x.com/AvaliDigital20" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">X (Twitter)</span>
                  🐦
                </a>
                <a href="https://www.linkedin.com/company/avali-digital-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Production</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Editing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post-Production</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Creative Consulting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Films</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentaries</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Media Kit</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span className="text-gray-400">© 2025 Avali Digital. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
