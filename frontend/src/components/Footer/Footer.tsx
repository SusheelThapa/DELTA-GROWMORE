const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <div className="text-4xl font-bold mb-6">
            <div>Need advice for</div>
            <div>your next HARVEST!</div>
          </div>
          <div className="md:px-6">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="border-b-2 mb-3 py-2 px-4 mx-5 focus:border-green-500 bg-transparent text-white"
            />
            <input
              type="text"
              placeholder="Enter Your Phone"
              className="border-b-2 mb-6 py-2 px-4 focus:border-green-500 bg-transparent text-white"
            />
            <div className="flex-col mb-6">
              <input
                type="email"
                placeholder="example@gmail.com.np"
                className="border-b-2 mb-3 py-2 px-4 mx-5 focus:outline-none focus:border-green-500 bg-transparent text-white"
              />
              <input
                type="text"
                placeholder="Tell us about yourself"
                className="border-b-2 py-2 px-4 focus:outline-none focus:border-green-500 bg-transparent text-white"
              />
            </div>
            <button className="w-40 bg-green-600 text-white rounded-lg text-lg px-4 py-2 hover:bg-green-700">
              Send Message
            </button>
          </div>
        </div>

        <div className="md:w-1/2 grid place-content-center md:gap-8">
          <div className="mb-4 md:mb-0">
            <p className="text-6xl font-bold mb-6">Follow Us</p>
            <div className="flex space-x-4">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>
          2023 @ All rights reserved | growmore@gmail.com | GROWMORE_digital
        </p>
      </div>
    </div>
  );
};

export default Footer;
