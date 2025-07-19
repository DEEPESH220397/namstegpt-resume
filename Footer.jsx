const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} NamsteGPT – All Rights Reserved.  
          <span className="block sm:inline ml-1">/ सभी अधिकार सुरक्षित</span>
        </p>

        <div className="space-x-4">
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:underline">
            📞 WhatsApp / व्हाट्सएप
          </a>
          <a href="https://github.com/namstegpt" target="_blank" rel="noopener noreferrer" className="hover:underline">
            💻 GitHub / गिटहब
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
