const Footer = () => {
  return (
    <footer className="bg-white text-[#1c2956] py-8 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            NextTech
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Innovating the future, today.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Contact Us
          </h2>
          <p className="text-gray-700">📞 +92 234 567</p>
          <p className="text-gray-700">📧 help@NextTechtech.com</p>
        </div>

     
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NextTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
