import MenuBar from "../Menu/MenuBar"

const Navbar = () => {
  return (
    <div className="bg-[#1B1B1B]">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <MenuBar />
          <a className="btn btn-ghost text-xl text-[#9C9C9C]">Hasib</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#9C9C9C] font-ibm text-[14px]">
            <li><a>Case Studies</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Recent work</a></li>
            <li><a>Get In Touch</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a target="_blank" href="https://drive.google.com/file/d/1qEyZ9ffRYU0TRwRZvddxIXHDpVlD4JpO/view?usp=sharing" className=" inline-flex items-center justify-center rounded-[4px] bg-secondary py-3 px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#3f8e0059] transition-transform duration-200 ease-in-out hover:scale-[1.02]">Resume <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar