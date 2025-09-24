import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import AddNew from "./sections/AddNew.jsx";
import Features from "./sections/Features.jsx";
import Hero from "./sections/Hero.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Community_1 from "./assets/Images/Community_1.png";
import Community_2 from "./assets/Images/Community_2.png";

export default function App() {
  return (
    <div className="font-sans display">
      <Header />
      <main>
        <Hero />
        <Features />
        <AddNew />
        <Testimonials />
        {/* Community Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Your <span className="text-purple-600">Hobby</span>, Your{" "}
                <span className="text-blue-500">Community...</span>
              </h2>

              {/* 👉 Button stays at the right edge of this heading row */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-purple-100 transition"
                title="Go to top (Ctrl+Home)"
              >
                <span className="text-xl text-black ">↑</span>
              </button>
            </div>

            <button className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg text-lg hover:bg-purple-700 transition-colors">
              Get started
            </button>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={Community_1}
                alt="Community_1"
                className="w-full h-auto"
              />
              <img
                src={Community_2}
                alt="Community_2"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
