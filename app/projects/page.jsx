import Header from "@/components/Header";
import ProjectItem from "@/components/ProjectItem";
import SectionTitle from "@/components/SectionTitle";

export default function Page() {
  return (
    <>
      <Header />
      <section className="p-6 md:p-24">
        <div className="md:container">
          <SectionTitle text="Here all my projects I've done">Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="col-span-1">
              <ProjectItem 
                name={'Best Franchise'}
                link={'#'}
                image={'https://dummyimage.com/300/09f/fff.png'}
              />
            </div>
            <div className="col-span-1">
              <ProjectItem 
                name={'Best Franchise'}
                link={'#'}
                image={'https://dummyimage.com/300/09f/fff.png'}
              />
            </div>
            <div className="col-span-1">
              <ProjectItem 
                name={'Best Franchise'}
                link={'#'}
                image={'https://dummyimage.com/300/09f/fff.png'}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}