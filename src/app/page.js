import VideoTime from "../components/VideoTime";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ad, sit
            expedita corporis incidunt debitis, nihil harum enim nemo dolore
            quasi rem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ad, sit
            expedita corporis incidunt debitis, nihil harum enim nemo dolore
            quasi rem?
          </p>
        </div>
      </section>
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={"Don't Hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+8801851007645">
            +880 1851 007 645
          </a>
        </div>
      </section>
      
      <VideoTime />
    </>
  );
}
