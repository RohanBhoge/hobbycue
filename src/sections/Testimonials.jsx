import ShubhaNagrajan from '../assets/Images/ShubhaNagarajan.png';
import Testimonial from '../assets/Icons/Testimonial.svg';
import AudioTrack from '../assets/Images/AudioTrack.svg';

const Testimonials = () => (
    <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-200">
                <div className="flex items-center mb-4 gap-5">
                    <img src={Testimonial} alt="testimonial" />
                    <h3 className="text-2xl font-bold text-black">Testimonials</h3>
                </div>
                <p className="text-gray-600 italic mb-6">"In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service..."</p>
                <div className="flex items-center justify-between gap-4">
                    <div className="">                        
                        <img src={AudioTrack} alt="audioTrack" className="" />
                    </div>
                    <div className="flex items-center flex-shrink-0">
                        <img src={ShubhaNagrajan } alt="Shubha Nagarajan" className="w-16 h-16 rounded-full object-cover mr-4" />
                        <div>
                            <p className="font-bold text-purple-800">Shubha Nagarajan</p>
                            <p className="text-blue-500">Classical Dancer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Testimonials