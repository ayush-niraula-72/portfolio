
const Footer = () => {
  return (
<>

<footer className="block">
      {/* Container */}
      <div className="py-8 md:py-10 mx-auto w-full max-w-7xl px-5 md:px-5">
        {/* Component */}
        <div className="flex-col flex items-center">
        
         
          <div className="mb-2 mt-2 border-b border-white w-48"></div>
         
          <p className="text-xs  text-white">
          <p>
      Made with ❤️ using <span className="text-green-400">React</span> and <span className="text-blue-400">Tailwind CSS</span>.
    </p>
    <p>
      © {new Date().getFullYear()}. All rights reserved. Built by <a href="https://yourwebsite.com" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">Ayush Niraula</a>.
    </p>

          </p>
        </div>
      </div>
    </footer>
</>  )
}

export default Footer