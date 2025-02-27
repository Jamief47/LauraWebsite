import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Linkedin, ArrowRight, Lightbulb, Heart, MessageCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-brand-blue relative overflow-hidden"
        style={{
          height: "275px",
          backgroundImage: `url('images/background.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <motion.section 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="bg-brand-yellow p-8 rounded-lg shadow-lg mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-league-spartan text-2xl font-semibold mb-4">Get Curious</h3>
            <p className="font-sanchez text-gray-700 mb-6">Sign up for free educational content from me.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-brand-blue text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-colors text-lg font-semibold"
              >
                <Send size={20} />
                {status === 'loading' ? 'Subscribing...' : 'Subscribe to Newsletter'}
              </button>
              {status === 'success' && (
                <p className="text-green-600 font-sanchez">Thanks for subscribing!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 font-sanchez">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Lightbulb className="text-brand-blue w-8 h-8 mb-4" />
              <h3 className="font-league-spartan text-xl font-semibold mb-2">Spark curiosity</h3>
              <p className="font-sanchez text-gray-600">Stand out with authentic, story-driven content that reflects your brand's personality and offers fresh, insightful perspectives.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="text-brand-blue w-8 h-8 mb-4" />
              <h3 className="font-league-spartan text-xl font-semibold mb-2">Connect</h3>
              <p className="font-sanchez text-gray-600">Build lasting relationships through meaningful content that resonates with your audience and invites trust.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MessageCircle className="text-brand-blue w-8 h-8 mb-4" />
              <h3 className="font-league-spartan text-xl font-semibold mb-2">Start conversations</h3>
              <p className="font-sanchez text-gray-600">Make your B2B page unforgettable with bold, well-researched insights and copy that sparks discussion and drives engagement.</p>
            </motion.div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-brand-blue w-6 h-6" />
              <h2 className="font-league-spartan text-3xl font-semibold">About Me</h2>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-brand-yellow to-brand-blue/30 mb-8 rounded-full"></div>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-md relative">
                  <img 
                    src="images/WTD_announcement.png" 
                    alt="Laura Fleming" 
                    className="w-full rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue to-transparent p-4">
                    <div className="text-brand-yellow font-league-spartan text-xl font-semibold">Laura Fleming</div>
                    <div className="text-white text-sm">Content & Copy Specialist</div>
                  </div>
                </div>
                
                <a
                  href="https://www.linkedin.com/in/laura-fleming-0187b1107/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-white border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors rounded-full px-4 py-2 text-sm font-league-spartan w-full justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
              
              <div className="md:w-2/3">
                <p className="font-sanchez text-gray-700 leading-relaxed">
                  Hi, I'm <span className="text-brand-blue font-semibold">Laura</span>, a professional marketing manager and copywriter with over six years of experience in B2B and B2C across agency and freelance business spaces. I specialise in creating <span className="text-brand-blue">story-driven content</span> that sparks curiosity and builds real relationships. Rooted in <span className="text-brand-blue">behavioural psychology</span> and ethical marketing, my approach isn't about chasing trends. I've always been drawn to movement and rhythm.
                </p>
                
                <p className="font-sanchez text-gray-700 leading-relaxed mt-4">
                  I grew up as a ballet dancer and gymnast, and today, you'll find me dancing salsa, even competing internationally in partner dancing. That same passion for connection, balance and storytelling shapes how I approach marketing and copywriting. I get under the skin (or behind the gums!) of your brand to uncover what makes you unique, turning deep insight into an online presence that feels both human and unforgettable. Oh, and if you're wondering about the name, yes, I'm an imperfectly perfect human with a wonky tooth to prove it!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <a 
              href="/case-studies" 
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-yellow transition-colors font-league-spartan text-xl"
            >
              <span>View Impact & Case Studies</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;