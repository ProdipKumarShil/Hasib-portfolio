import MenuBar from "../Menu/MenuBar"

const Navbar = () => {
  return (
    <div className="bg-[#1B1B1B]">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <MenuBar />
          <a className="btn btn-ghost text-xl text-[#9C9C9C]">daisyUI</a>
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
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar