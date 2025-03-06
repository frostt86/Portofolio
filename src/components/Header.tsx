import pamitha from "../assets/pamitha.jpeg"
export default function Header() {
  return (
    <header className="min-h-[100svh] flex items-center justify-center relative overflow-hidden px-4 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-950/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_65%)]"></div>
      <div className="text-center space-y-6 sm:space-y-8 px-4 relative animate-fade-in max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-500/30 profile-image profile-glow">
            <img
              src={pamitha}
              alt="Pamitha Kularathne"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold gradient-text font-poppins leading-tight">
          Pamitha Kularathne
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-montserrat">
          Software Engineering Undergraduate
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 font-sourceCodePro px-4">
          Passionate about creating practical software solutions and innovative blockchain applications
        </p>
        <a
          href="#contact"
          className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full 
                   font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300
                   hover:scale-105 transform glow text-sm sm:text-base"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}