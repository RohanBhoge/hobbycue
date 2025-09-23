const AddNew = () => (
  <section className="bg-purple-50 py-12 md:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Parent hover target */}
      <div className="group bg-white p-6 rounded-lg border-2 border-purple-300 transition-all hover:bg-purple-700 hover:shadow-lg">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-purple-700 transition-colors group-hover:text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-black transition-colors group-hover:text-white">
            Add your own
          </h3>
        </div>

        <p className="text-gray-600 mb-6 transition-colors group-hover:text-white">
          Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
        </p>

        <button
          className="font-semibold py-2 px-4 rounded-lg border-2 border-purple-700 text-purple-700 transition-colors group-hover:text-white group-hover:border-white"
        >
          Add new
        </button>
      </div>
    </div>
  </section>
);

export default AddNew;  