import FeatureCard from "../components/FeatureCard.jsx";
import people from "../assets/Icons/People.svg";
import Location from "../assets/Icons/Location.svg";
import Product from "../assets/Icons/Product.svg";
import Program from "../assets/Icons/Program.svg";

const Features = () => {
    const featuresData = [
        {
            icon: <img src={people} alt="people" />,
            title: "People",
            description: "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
            buttonText: "Connect",
            color: "purple"
        },
        {
            icon: <img src={Location} alt="location" />,
            title: "Place",
            description: "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
            buttonText: "Meet up",
            color: "green"
        },
        {
            icon: <img src={Product} alt="product" />,
            title: "Product",
            description: "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
            buttonText: "Get it",
            color: "red"
        },
        {
            icon: <img src={Program} alt="program" />,
            title: "Program",
            description: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
            buttonText: "Attend",
            color: "blue"
        }
    ];

    
    return (
        <section className="py-12 md:py-20 bg-amber-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuresData.map(feature => <FeatureCard key={feature.title} {...feature} />)}
                </div>
            </div>
        </section>
    );
};

export default Features