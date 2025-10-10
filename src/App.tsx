import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const artists = [
    { name: 'Lala Vinzon', role: 'Singer', image: '/Lala-Vinzon.jpeg' },
    { name: 'Michael Dutchi Libranda', role: 'Performer', image: '/Michael Dutchi.jpeg' },
    { name: 'Dream Seven', role: 'Band', image: '/D7.jpeg' },
    { name: 'AINT', role: 'RNB Singer', image: '/552929951_769686916064393_4016593325229758126_n.jpg' },
    { name: 'NEY', role: 'Artist', image: '/NEY.jpeg' },
    { name: 'J-king', role: 'Performer', image: '/J-king.jpeg' },
  ]

  const stats = [
    { number: '500+', label: 'Events' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '50+', label: 'Artists' },
    { number: '100%', label: 'Committed' },
  ]

  const eventHighlights = {
    id: 'hmtRLFDfKEw',
    title: 'Event Highlights',
    url: 'https://www.youtube.com/watch?v=hmtRLFDfKEw'
  }

  const videos = [
    { 
      id: 'YbP-v8GsjgM', 
      title: 'SCD AMBASSADOR LAUNCHING - AZ MARTINEZ',
      url: 'https://www.youtube.com/watch?v=YbP-v8GsjgM'
    },
    { 
      id: 'ZD5hqywqa-c', 
      title: 'Asinan Music and Arts Festival 2025 with Mayonnaise, Kleggy, Libranda & Sowhunly (Umingan Pangasinan)',
      url: 'https://www.youtube.com/watch?v=ZD5hqywqa-c'
    },
    { 
      id: '8fRnNVeSsq0', 
      title: '9th Kanlahi Music Festival 2025 | IDK Events Management',
      url: 'https://www.youtube.com/watch?v=8fRnNVeSsq0'
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                src="/android-chrome-192x192.png" 
                alt="IDK Events Management Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <h1 className={`text-lg md:text-2xl font-bold transition-colors leading-tight ${isScrolled ? 'text-purple-600' : 'text-white'}`}>
                  <span className="block">IDK EVENTS</span>
                  <span className="block">MANAGEMENT SERVICES</span>
                </h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Events', 'Artists', 'Videos', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-purple-600 font-medium ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Events', 'Artists', 'Videos', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            No. 1 Event Organizer in the Philippines
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            We don't just make events, We bring good memories
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We are IDK EVENTS MANAGEMENT SERVICES
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Through passion and experience, IDK EVENTS MANAGEMENT SERVICES was formed to meet the demands of the growing Philippine creative – events concept market. A demand we at IDK EVENTS MANAGEMENT SERVICES passionately conceptualize, formulate, provide, and implement to satiate these demands with high-class equipment, and popular primed Filipino performers, led by Mr. Irish Dominic Kintanar (IDK) aka Papa Carlo.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Events</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We specialize in creating unforgettable experiences for all types of events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Corporate Events', description: 'Professional event management for corporate gatherings, conferences, and team building' },
              { title: 'Weddings', description: 'Make your special day memorable with our complete wedding planning and entertainment services' },
              { title: 'Concerts & Shows', description: 'From intimate gigs to large-scale concerts with top Filipino artists' },
              { title: 'Birthday Parties', description: 'Celebrate your milestones with customized party entertainment and themes' },
              { title: 'Private Events', description: 'Exclusive event management for private celebrations and gatherings' },
              { title: 'Community Events', description: 'Bringing communities together through music, entertainment, and celebration' },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Artists</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Talented Filipino performers ready to make your event spectacular
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center overflow-hidden">
                  {artist.image ? (
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-white text-6xl font-bold">{artist.name.charAt(0)}</div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{artist.name}</h3>
                  <p className="text-purple-600 font-medium">{artist.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Performances</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Watch highlights from our amazing events
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Event Highlights Video */}
            <div className="mb-12">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="aspect-video relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${eventHighlights.id}?rel=0&modestbranding=1&showinfo=0`}
                    title={eventHighlights.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-t-xl"
                  ></iframe>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">🎉 Event Highlights</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Watch the best moments from our amazing events and performances!
                  </p>
                  <a
                    href={eventHighlights.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    <FaYoutube size={24} />
                    Watch Full Video on YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* YouTube Channel CTA */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-8 text-center shadow-2xl mb-12">
              <FaYoutube className="text-white text-5xl mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-4">Subscribe to Our Channel</h4>
              <p className="text-white mb-6">
                Get notified about our latest event videos and performances!
              </p>
              <a
                href="https://www.youtube.com/@idkeventsmanagementservice4523"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <FaYoutube size={20} />
                Visit Our YouTube Channel
              </a>
            </div>

            {/* Additional Event Videos */}
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">More Event Videos</h4>
              <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="aspect-video relative bg-gray-900 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{video.title}</h4>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 font-medium text-sm inline-flex items-center gap-2"
                    >
                      Watch on YouTube
                      <FaYoutube size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Clients Trust Us</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-white max-w-2xl mx-auto mb-12">
            Join hundreds of satisfied clients who have experienced unforgettable events with us
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Become a Client
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ask Us Anything, Anytime</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-700 font-medium italic">
              "We don't just make events, We bring good memories"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <FaPhone className="text-purple-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Phone</h4>
                      <a href="tel:09218628527" className="text-gray-600 hover:text-purple-600">0921-862-8527</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-purple-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Email</h4>
                      <a href="mailto:idkeventsmanagement@gmail.com" className="text-gray-600 hover:text-purple-600">idkeventsmanagement@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-purple-600 text-xl mt-1" />
      <div>
                      <h4 className="font-bold text-gray-900">Location</h4>
                      <p className="text-gray-600">Victoria Station 1 Edsa Kamuning<br />Brgy. South Triangle, Quezon City</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/idkeventsmanagementservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/idkeventsmanagementservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/@idkeventsmanagementservice4523"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <FaYoutube size={20} />
        </a>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/android-chrome-192x192.png" 
                alt="IDK Events Management Logo" 
                className="h-16 w-16 object-contain"
              />
              <h2 className="text-2xl font-bold text-white">IDK EVENTS MANAGEMENT SERVICES</h2>
            </div>
            <p className="text-gray-400 mb-2">
              © {new Date().getFullYear()} IDK EVENTS MANAGEMENT SERVICES. All rights reserved.
            </p>
            <p className="text-gray-500">
              Led by Mr. Irish Dominic Kintanar (IDK) aka Papa Carlo
        </p>
      </div>
        </div>
      </footer>
    </div>
  )
}

export default App
