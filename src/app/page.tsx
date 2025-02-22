// Remove unused import since Image component is not used in this file

export default function Home() {
  const handleDemoRequest = () => {
    // Track CTA click event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'cta_click', {
        event_category: 'Engagement',
        event_label: 'Demo Request'
      });
    }
    // Here you can add additional functionality like opening a form or modal
    console.log('Demo requested');
  };

  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>ASTRORIA - Advanced Sports Analytics</title>
        <meta name="description" content="ASTRORIA provides cutting-edge sports analytics solutions using AI and machine learning for predictive analytics, performance tracking, and real-time insights." />
        <meta name="keywords" content="sports analytics, predictive analytics, performance tracking, real-time insights, ASTRORIA" />
      </head>

      {/* Hero Section */}
      <section className="bg-[#006400] min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-16" role="banner" aria-label="Hero section">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">ASTRORIA</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
          Revolutionizing Sports Analytics with Advanced Technology
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-white" role="region" aria-label="Our services">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006400]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="border-2 border-[#006400] p-8 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-[#006400] mb-4">Predictive Analytics</h3>
            <p className="text-gray-600">Leverage AI and machine learning to predict game outcomes and player performance with unprecedented accuracy.</p>
          </div>
          <div className="border-2 border-[#006400] p-8 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-[#006400] mb-4">Performance Tracking</h3>
            <p className="text-gray-600">Real-time monitoring and analysis of athlete performance metrics for data-driven decision making.</p>
          </div>
          <div className="border-2 border-[#006400] p-8 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-[#006400] mb-4">Real-Time Insights</h3>
            <p className="text-gray-600">Instant access to critical game statistics and strategic recommendations during live matches.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" role="region" aria-label="Client testimonials">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006400]">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-6">"ASTRORIA's predictive analytics have transformed our approach to game strategy. We've seen a 20% improvement in our win rate since implementation."</p>
            <p className="font-semibold text-[#006400]">— Coach John Anderson, Elite Sports</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-6">"The real-time insights provided by ASTRORIA have been game-changing for our team's performance analysis and decision-making process."</p>
            <p className="font-semibold text-[#006400]">— Sarah Martinez, Performance Director</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#006400] text-center" role="region" aria-label="Call to action">
        <h2 className="text-3xl font-bold text-white mb-8">Ready to Elevate Your Game?</h2>
        <button 
          className="bg-white text-[#006400] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          onClick={handleDemoRequest}
          aria-label="Request a demo"
        >
          Request a Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center" role="contentinfo">
        <p>© 2025 ASTRORIA. All rights reserved.</p>
      </footer>
    </div>
  );
}
