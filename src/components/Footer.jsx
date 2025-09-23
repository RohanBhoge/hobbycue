import Facebook from "../assets/SocialMediaIcons/Facebook.svg";
import Twitter from "../assets/SocialMediaIcons/Twitter.svg";
import Pinterest from "../assets/SocialMediaIcons/Pinterest.svg";
import Instagram from "../assets/SocialMediaIcons/Instagram.svg";
import Google from "../assets/SocialMediaIcons/Google+.svg";
import Youtube from "../assets/SocialMediaIcons/Youtube.svg";
import Telegram from "../assets/SocialMediaIcons/Telegram.svg";
import Message from "../assets/SocialMediaIcons/Message.svg";

const Footer = () => {
    
    const footerLinks = {
        "Hobbycue": ["About Us", "Our Services", "Work with Us", "FAQ", "Contact Us"],
        "How Do I": ["Sign Up", "Add a Listing", "Claim Listing", "Post a Query", "Add a Blog Post", "Other Queries"],
        "Quick Links": ["Listings", "Blog Posts", "Shop / Store", "Community"],
    };

    return (
        <footer className="bg-gray-50 py-12 text-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-bold text-lg mb-4 text-black">{title}</h4>
                            <ul>
                                {links.map(link => <li key={link} className="focus:text-[black]"><a className="block mb-2 text-[black] hover:text-[black] focus:text-[black] active:text-[black] visited:text-[black]">{link}</a></li>)}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Social Media</h4>
                        <div className="flex space-x-4 mb-6">
                            {/* Placeholder for social icons */}
                            <img src={Facebook} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Instagram} alt="" />
                            <img src={Pinterest} alt="" />
                            <img src={Google} alt="" />
                            <img src={Youtube} alt="" />
                            <img src={Telegram} alt="" />
                            <img src={Message} alt="" />
                        </div>
                        <h4 className="font-bold text-lg mb-4">Invite Friends</h4>
                        <div className="flex">
                            <input type="email" placeholder="Email ID" className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg font-semibold hover:bg-purple-700">Invite</button>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-500 border-t pt-8">
                    © Purple Cues Private Limited
                </div>
            </div>
        </footer>
    );
};

export default Footer