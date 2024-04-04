import SectionTitle from "@/components/SectionTitle";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section className="p-6 md:p-24">
        <div className="md:container">
          <SectionTitle text="This page describe our project about stack and functionality">Mizan Amanah Management Asset</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="col-span-1">
              <div className="relative w-full md:w-1/2 md:mx-auto h-[200px]">
                <Image src={'https://dummyimage.com/300/09f/fff.png'} fill className="absolute rounded-xl" />
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur corrupti illum ea sed dolore, a atque, inventore officia aliquam ad voluptates, exercitationem assumenda quibusdam iste illo pariatur perspiciatis natus ullam reprehenderit! Voluptate nulla perspiciatis assumenda saepe nisi repudiandae minima vel dolores corrupti, alias blanditiis voluptatum provident, eveniet nihil iste neque dignissimos a maiores maxime. Aspernatur exercitationem suscipit corrupti temporibus, unde id maiores excepturi. Libero minima deserunt ipsum provident, voluptatem, facere nobis labore voluptates nemo exercitationem cumque ab illo reprehenderit pariatur perspiciatis iusto quibusdam vel a? Veniam voluptatum tempora excepturi deserunt blanditiis fugiat molestias, dignissimos atque, sint animi, mollitia laudantium autem.</p>
              <Divider className="my-5 md:hidden block" />
              <p className="font-semibold">Tech Stack</p>
              <ul className="list-disc ml-10">
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>PHP & Laravel</li>
                <li>ChartJS</li>
                <li>MySQL</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}