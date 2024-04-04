import Header from "@/components/Header";
import ProjectItem from "@/components/ProjectItem";

export default function Page() {
  return (
    <>
      <Header />
      <section className="p-24">
        <div className="container">
          <div className="grid grid-cols-3 gap-5">
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