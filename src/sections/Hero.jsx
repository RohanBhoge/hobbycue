import AuthForm from "../components/AuthForm.jsx";
import HeroImage from "../assets/HeroImage.png";

const Hero = () => (
    <section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 italic mb-4">Explore your <span className="text-blue-500">hobby</span> or <span className="text-purple-600">passion</span></h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
                    </p>
                     <div className="hidden lg:block max-w-lg mx-auto lg:mx-0">
                        <img src={HeroImage} alt="Hobbyists Illustration" className="w-full h-auto" />
                    </div>
                </div>
                <div className="w-full max-w-md mx-auto">
                    <AuthForm />
                </div>
                 <div className="lg:hidden mt-8">
                    <img src={HeroImage} alt="Hobbyists Illustration" className="w-full h-auto" />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;