const FeatureCard = ({ icon, title, description, buttonText, color }) => {
    const colorClasses = {
        purple: {
            text: 'text-purple-700',
            border: 'border-purple-300',
            hoverBg: 'hover:bg-purple-700',
            hoverButtonText: 'group-hover:bg-purple-700'
        },
        green: {
            text: 'text-green-600',
            border: 'border-green-300',
            hoverBg: 'hover:bg-green-600',
            hoverButtonText: 'group-hover:bg-green-600'
        },
        red: {
            text: 'text-red-500',
            border: 'border-red-300',
            hoverBg: 'hover:bg-red-500',
            hoverButtonText: 'group-hover:bg-red-500'
        },
        blue: {
            text: 'text-blue-500',
            border: 'border-blue-300',
            hoverBg: 'hover:bg-blue-500',
            hoverButtonBg: 'group-hover:bg-blue-500'
        },
    };
    const classes = colorClasses[color] || colorClasses.purple;

    return (
         <div className={`group bg-gray-50 p-6 rounded-lg border-2 ${classes.border} ${classes.hoverBg} hover:shadow-lg transition-colors duration-300`}>
            <div className="flex items-center mb-4">
                <div className={`mr-4 ${classes.text} group-hover:text-white transition-colors duration-300`}>{icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">{title}</h3>
            </div>
            <p className="text-gray-600 mb-6 group-hover:text-white transition-colors duration-300">{description}</p>
            <button className={`font-semibold py-2 px-4 rounded-lg border-2 ${classes.border} ${classes.text} group-hover:text-white ${classes.hoverButtonBg} group-hover:border-white transition-colors duration-300`}>
                {buttonText}
            </button>
        </div>
    );
}

export default FeatureCard