import Banner from "./components/Banner/Banner"
import CaseStudies from "./components/CaseStudies/CaseStudies"
import GetInTouch from "./components/GetInTouch/GetInTouch"
import Navbar from "./components/Navbar/Navbar"
import RecentWork from "./components/RecentWork/RecentWork"
import Testimonial from "./components/Testimonial/Testimonial"
import WorkedWith from "./components/WorkedWith/WorkedWith"


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <WorkedWith />
      <CaseStudies />
      <Testimonial />
      <RecentWork />
      <GetInTouch />
      {/* <a class="mt-8 inline-flex items-center justify-center rounded-xl bg-secondary py-3 px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#3f8e0059] transition-transform duration-200 ease-in-out hover:scale-[1.02]"
        href="#">
        Sign up for free
      </a> */}
    </div>
  )
}

export default App