import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-brand-blue relative overflow-hidden"
        style={{
          height: "clamp(150px, 30vh, 275px)",
          backgroundImage: `url('images/background2.png')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </motion.header>

      <main className="container mx-auto px-4 py-4 sm:py-8">
        <motion.a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }} 
          className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-yellow transition-colors mb-6 font-league-spartan"
          whileHover={{ x: -5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </motion.a>

        <motion.section 
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Case Study Navigation */}
          <div className="mb-10">
            <h3 className="font-league-spartan text-xl mb-4 text-gray-700">Jump to case study:</h3>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <motion.a 
                href="#luxury-networking" 
                className="px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-league-spartan hover:bg-brand-yellow hover:text-brand-blue transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Luxury Networking Club
              </motion.a>
              <motion.a 
                href="#influencer-facebook" 
                className="px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-league-spartan hover:bg-brand-yellow hover:text-brand-blue transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                B2C Influencer Facebook
              </motion.a>
              <motion.a 
                href="#boxway-packaging" 
                className="px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-league-spartan hover:bg-brand-yellow hover:text-brand-blue transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BoxWay Packaging
              </motion.a>
              <motion.a 
                href="#brasserie" 
                className="px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-league-spartan hover:bg-brand-yellow hover:text-brand-blue transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                The Brasserie
              </motion.a>
              <motion.a 
                href="#facebook-ad-project" 
                className="px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-league-spartan hover:bg-brand-yellow hover:text-brand-blue transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Facebook AD Project
              </motion.a>
              <motion.a 
                href="#boxway-linkedin-post" 
                className="px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-league-spartan hover:bg-brand-yellow hover:text-brand-blue transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BoxWay LinkedIn Post
              </motion.a>
            </div>
          </div>

          {/* Luxury Networking Club Case Study */}
          <motion.div 
            id="luxury-networking" 
            className="mb-8 sm:mb-16 bg-brand-yellow p-4 sm:p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-8 w-full">
              <div className="order-2 md:order-1 md:col-span-3 space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <img 
                      src="images/casestudies/goodtimeslogo.png" 
                      alt="The Good Times House Logo" 
                      className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-league-spartan font-semibold text-brand-blue">
                      The Good Times House
                    </h2>
                    <p className="font-sanchez text-brand-blue">Luxury Private Members Club</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                  <h3 className="font-league-spartan text-xl font-semibold mb-4 text-brand-blue">
                    Performance
                  </h3>
                  <img 
                    src="images/casestudies/performance.png" 
                    alt="Performance metrics showing dramatic increases" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div>
                  <h3 className="font-league-spartan text-xl font-semibold mb-4 text-brand-blue">Key highlights</h3>
                  <ul className="list-disc pl-5 space-y-3 font-sanchez text-brand-blue">
                    <li>Increased content reach by 536% within four weeks of management.</li>
                    <li>Increased content interactions by 106% in four weeks of management.</li>
                    <li>Increased CTR by 100% in four weeks of management.</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-league-spartan text-xl font-semibold mb-4 text-brand-blue">Customer feedback</h3>
                  <blockquote className="italic font-sanchez text-brand-blue pl-4 border-l-4 border-brand-blue">
                    "Thank you for all your hard work. We are very pleased with the outcome and we look forward to working with you again" - Mitch P
                  </blockquote>
                </div>
              </div>
              
              <div className="order-1 md:order-2 md:col-span-2">
                <div className="bg-transparent w-full max-w-[280px] mx-auto">
                  <div className="relative w-full" style={{ 
                    paddingBottom: "min(200%, 600px)",
                    maxHeight: "min(90vh, 600px)" 
                  }}>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                    >
                      <source src="/videos/goodtimesvideo.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* B2C Influencer Facebook Case Study */}
          <motion.div 
            id="influencer-facebook" 
            className="mb-16 bg-brand-blue p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-start mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <img 
                    src="images/clients/weightlossdoctor.png" 
                    alt="Weight Loss Doctor Logo" 
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-league-spartan font-semibold text-brand-yellow">
                    Dr Sally Norton
                  </h2>
                  <p className="font-sanchez text-white">B2C Influencer Facebook</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <h3 className="font-league-spartan text-xl font-semibold mb-4 text-brand-blue">Before & After</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-league-spartan text-lg font-semibold mb-2 text-brand-blue">Before Optimization</h4>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">👍</span>
                            <span className="font-sanchez">26 likes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">💬 1 comment</span>
                            <span className="text-gray-600">🔄 1 share</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">👍</span>
                            <span className="font-sanchez">29 likes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">💬 0 comments</span>
                            <span className="text-gray-600">🔄 3 shares</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-league-spartan text-lg font-semibold mb-2 text-brand-blue">After Optimization</h4>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">👍</span>
                            <span className="font-sanchez">256 likes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">💬 6 comments</span>
                            <span className="text-gray-600">🔄 20 shares</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">👍</span>
                            <span className="font-sanchez">121 likes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">💬 9 comments</span>
                            <span className="text-gray-600">🔄 11 shares</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-league-spartan text-xl font-semibold mb-4 text-brand-yellow">Key highlights</h3>
                    <ul className="list-disc pl-5 space-y-3 font-sanchez text-white">
                      <li>Increased engagement by over 800% on optimized posts</li>
                      <li>Improved content strategy based on audience research</li>
                      <li>Created a consistent brand voice that resonated with followers</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-transparent w-full max-w-[280px] mx-auto">
                    <div className="relative w-full" style={{ 
                      paddingBottom: "min(200%, 600px)",
                      maxHeight: "min(90vh, 600px)" 
                    }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                      >
                        <source src="/videos/weightlossdoctorvideo.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* BoxWay Packaging Case Study */}
          <motion.div 
            id="boxway-packaging" 
            className="mb-16 bg-brand-yellow p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <img 
                    src="images/clients/boxway.png" 
                    alt="BoxWay Packaging Logo" 
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-league-spartan font-semibold text-brand-blue">
                    BoxWay Packaging
                  </h2>
                  <p className="font-sanchez text-brand-blue">B2B Packaging Supplier</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
                <div className="order-2 md:order-1 md:col-span-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm mb-6">
                    <h3 className="font-league-spartan text-xl font-semibold mb-2 text-brand-blue">
                      Performance
                    </h3>
                    <img 
                      src="images/casestudies/newfollowermetrics.png" 
                      alt="New follower metrics showing competitor comparison" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-league-spartan text-xl font-semibold mb-4 text-brand-blue">Key highlights</h3>
                    <ul className="list-disc pl-5 space-y-2 font-sanchez text-brand-blue">
                      <li>Generated over 27,000+ website views</li>
                      <li>Consistently outperformed competitors on LinkedIn metrics</li>
                      <li>Generated 2,000 new followers on LinkedIn</li>
                      <li>Became recognised as an award winning business during management</li>
                    </ul>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 md:col-span-2">
                  <div className="bg-transparent w-full max-w-[280px] mx-auto">
                    <div className="relative w-full" style={{ 
                      paddingBottom: "min(200%, 600px)",
                      maxHeight: "min(90vh, 600px)" 
                    }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                      >
                        <source src="/videos/boxawayvideo.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Brasserie Case Study */}
          <motion.div 
            id="brasserie" 
            className="mb-16 bg-brand-blue p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <img 
                    src="images/clients/newwave.png" 
                    alt="The Brasserie Logo" 
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-league-spartan font-semibold text-brand-yellow">
                    The Brasserie
                  </h2>
                  <p className="font-sanchez text-white">Luxury Seafood Restaurant</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
                <div className="order-2 md:order-1 md:col-span-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <h3 className="font-league-spartan text-xl font-semibold mb-4 text-brand-blue">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-brand-blue">125.4K</div>
                        <div className="text-sm text-gray-600">Total Reach</div>
                        <div className="text-green-500 text-sm">↑ 100%</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-brand-blue">15.1K</div>
                        <div className="text-sm text-gray-600">Content Interactions</div>
                        <div className="text-green-500 text-sm">↑ 100%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-league-spartan text-xl font-semibold mb-4 text-brand-yellow">Key highlights</h3>
                    <ul className="list-disc pl-5 space-y-3 font-sanchez text-white">
                      <li>Over 5,600+ bookings made online from digital marketing efforts</li>
                      <li>Generated over 100,000 website views</li>
                      <li>Generated 2,000 new followers</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-league-spartan text-xl font-semibold mb-4 text-brand-yellow">Customer feedback</h3>
                    <blockquote className="italic font-sanchez text-white pl-4 border-l-4 border-brand-yellow">
                      "We received positive feedback from followers regarding the updates and engagement on our pages." - Maisie B
                    </blockquote>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 md:col-span-2">
                  <div className="bg-transparent w-full max-w-[280px] mx-auto">
                    <div className="relative w-full" style={{ 
                      paddingBottom: "min(200%, 600px)",
                      maxHeight: "min(90vh, 600px)" 
                    }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                      >
                        <source src="/videos/newwavevideo.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Facebook AD Project Case Study */}
          <motion.div 
            id="facebook-ad-project" 
            className="mb-16 bg-brand-blue p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-start">
              {/* Header section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <img 
                    src="images/clients/newwave.png" 
                    alt="New Wave Seafood Logo" 
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-league-spartan font-semibold text-brand-yellow">
                    Results: Analytics - Retail
                  </h2>
                  <p className="font-sanchez text-white">Facebook AD project</p>
                </div>
              </div>
              
              {/* Content section */}
              <div className="w-full">
                <div className="mb-6">
                  <h3 className="font-league-spartan text-xl font-semibold mb-2 text-white">
                    Performance
                  </h3>
                  <div className="w-full overflow-hidden">
                    <img 
                      src="images/casestudies/facebookadtest.png" 
                      alt="Facebook AD performance metrics" 
                      className="w-full h-auto scale-100 transform origin-top"
                      style={{ maxHeight: '400px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
                
                {/* Rest of content */}
                <div>
                  <h3 className="font-league-spartan text-xl font-semibold mb-2 text-brand-yellow">Key highlights</h3>
                  <ul className="list-disc pl-4 space-y-4 font-sanchez text-white">
                    <li>491% increased in sales thanks to copy strategy and design focused Facebook ADs</li>
                    <li>Consistent growth in engagement and reach</li>
                    <li>Significant improvement in conversion rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BoxWay LinkedIn Post Case Study */}
          <motion.div 
            id="boxway-linkedin-post" 
            className="mb-16 bg-brand-yellow p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-start">
              {/* Title Section */}
              <div className="flex items-center gap-6 mb-12 w-full">
                <img 
                  src="images/clients/boxway.png" 
                  alt="BoxWay Packaging Logo" 
                  className="h-20 w-20 bg-white rounded-full p-3"
                />
                <h2 className="text-3xl font-league-spartan font-semibold text-brand-blue">
                  Post copy & design - BoxWay Packaging - LinkedIn
                </h2>
              </div>
              
              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mb-12">
                <div className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform ">
                  <img 
                    src="images/casestudies/boxwaypost.png" 
                    alt="BoxWay LinkedIn post example" 
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transfor ">
                  <img 
                    src="images/casestudies/bxe.png" 
                    alt="Good luck post design" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
                <h3 className="font-league-spartan text-3xl font-semibold text-brand-blue max-w-2xl">
                  Human-led stories in B2B that far outperform competitor posts.
                </h3>
                <img 
                  src="images/casestudies/boxwayyellow.png" 
                  alt="BoxWay Packaging Group Logo" 
                  className="h-32 object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Career Highlights Section */}
          <motion.div 
            className="mb-16 bg-brand-yellow p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-start">
              <h2 className="text-3xl font-league-spartan font-semibold text-brand-blue mb-6">
                Career Highlights
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="order-2 md:order-1">
                  <p className="font-sanchez text-brand-blue text-xl mb-6">
                    Two of my clients won significant awards while under my management.
                  </p>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <img 
                        src="images/clients/cotworlds.png"
                        alt="Cotswold Food & Drink Awards Logo" 
                        className="w-24 h-24 object-contain"
                      />
                      <div>
                        <p className="font-sanchez text-brand-blue">
                          <strong>The New Wave Brasserie</strong> - First Place in Best Restaurant in the Cotswolds Food & Drink Awards
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <img 
                        src="images/clients/devonaward.png" 
                        alt="Food Drink Devon Awards Logo" 
                        className="w-24 h-24 object-contain"
                      />
                      <div>
                        <p className="font-sanchez text-brand-blue">
                          <strong>BoxWay Packaging Group</strong> - Silver in the Sustainability Pioneer Category at the Food Drink Devon Awards
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="space-y-4">
                    <div className="flex flex-col items-center gap-4">
                      <img 
                        src="images/clients/littlefuckers2.png" 
                        alt="Little Imagineers Logo" 
                        className="h-14 w-14 object-contain"
                      />
                      <img 
                        src="images/clients/metro.png" 
                        alt="Metro Logo" 
                        className="h-6"
                      />
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <img 
                        src="images/clients/metrolaptop.png" 
                        alt="Metro article feature screenshot" 
                        className="w-full"
                      />
                    </div>
                    
                    <p className="font-sanchez text-brand-blue">
                      My social media post was developed into an article which was featured in the Metro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div 
            className="mb-16 bg-brand-blue p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-start mb-8">
              <h2 className="text-3xl font-league-spartan font-semibold text-brand-yellow mb-8">
                Testimonials
              </h2>
              
              <div className="grid grid-cols-1 gap-8 w-full">
                {/* Little Imagineers Testimonial */}
                <div className="bg-white/10 p-4 sm:p-6 rounded-lg">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4">
                    <div className="bg-white p-3 rounded-full shadow-sm flex-shrink-0">
                      <img 
                        src="images/clients/littleimagineers.png" 
                        alt="Little Imagineers Logo" 
                        className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <blockquote className="font-sanchez text-white text-base sm:text-lg">
                        "I've had a fantastic experience working with Laura over the past six months. Her contributions have been crucial to the launch of my business. She works efficiently in a very organised manner with excellent communication. It is remarkable to reflect on what we have achieved in such a short time!"
                      </blockquote>
                      <cite className="block mt-4 text-brand-yellow font-league-spartan">- Tom H</cite>
                    </div>
                  </div>
                </div>

                {/* BoxWay Packaging Testimonial */}
                <div className="bg-white/10 p-4 sm:p-6 rounded-lg">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4">
                    <div className="bg-white p-3 rounded-full shadow-sm flex-shrink-0">
                      <img 
                        src="images/clients/boxway.png" 
                        alt="BoxWay Packaging Logo" 
                        className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <blockquote className="font-sanchez text-white text-base sm:text-lg">
                        "I just sent your post directly to some contacts and have two new business appoints from 30 minutes of it being posted! Well done on the post and really appreciate your efforts."
                      </blockquote>
                      <cite className="block mt-4 text-brand-yellow font-league-spartan">- Joe W</cite>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div 
            className="mb-16 bg-brand-yellow p-16 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.a
              href="mailto:laura@wonkytooth.com?subject=Enquiry: Looking for More Details"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white rounded-full text-xl font-league-spartan hover:bg-opacity-90 transition-all transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Curious</span>
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.section>
      </main>

      {/* Past Clients Logo Carousel */}
      <div className="mb-16">
        <h2 className="text-3xl font-league-spartan font-semibold text-brand-blue mb-8 text-center">
          Past Clients
        </h2>
        
        <div className="relative w-full overflow-hidden bg-white/50 py-4 sm:py-8">
          <div className="flex animate-carousel">
            <div className="flex gap-4 sm:gap-8 items-center mx-2 sm:mx-4 min-w-max">
              <img 
                src="images/clients/tata.png" 
                alt="TATA" 
                className="h-10 sm:h-16 object-contain client-logo" 
              />
              <img src="images/clients/boxway.png" alt="BoxWay Packaging Group" className="h-16 object-contain client-logo" />
              <img src="images/clients/prometheus.png" alt="Prometheus" className="h-16 object-contain client-logo" />
              <img src="images/clients/mellanox.png" alt="Mellanox Technologies" className="h-16 object-contain client-logo" />
              <img src="images/clients/netfoundry.png" alt="NetFoundry" className="h-16 object-contain client-logo" />
              <img src="images/clients/goodtimes.png" alt="The Good Times House" className="h-16 object-contain client-logo" />
              <img src="images/clients/newwave.png" alt="New Wave Seafood" className="h-16 object-contain client-logo" />
              <img src="images/clients/ricos.png" alt="Rico's" className="h-16 object-contain client-logo" />
              <img src="images/clients/versa.png" alt="Versa Networks" className="h-16 object-contain client-logo" />
              <img src="images/clients/britishhemp.png" alt="The British Hemp Co" className="h-16 object-contain client-logo" />
              <img src="images/clients/apstra.png" alt="Apstra" className="h-16 object-contain client-logo" />
              <img src="images/clients/kthealthcare.png" alt="KT Healthcare" className="h-16 object-contain client-logo" />
              <img src="images/clients/bioenergetics.png" alt="Bioenergetics Brighton" className="h-16 object-contain client-logo" />
              <img src="images/clients/bespoke.png" alt="Bespoke Getaways" className="h-16 object-contain client-logo" />
              <img src="images/clients/weightlossdoctor.png" alt="Weight Loss Doctor" className="h-16 object-contain client-logo" />
              <img src="images/clients/renewtrak.png" alt="RenewTrak" className="h-16 object-contain client-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;