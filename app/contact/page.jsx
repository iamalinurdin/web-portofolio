import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="p-6 md:p-24">
          <div className="md:container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="col-span-1">
                <SectionTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore molestias quisquam magnam illo repellat assumenda repudiandae labore impedit amet. Perspiciatis quia totam incidunt voluptatum fuga vitae, nostrum eum, ipsa laudantium necessitatibus repellat quo voluptatibus, ipsam nemo nulla tempore officiis aliquid aperiam aliquam cumque. Dolore, voluptatibus culpa. Delectus nobis neque exercitationem recusandae. Illum libero quos similique doloremque sit itaque. Quis officiis, libero dolor iusto odit illum nam cumque adipisci quia eos a doloremque? Quibusdam, repudiandae nihil velit ratione eveniet in, natus dolores id et, est eius corporis odit vero at! Corrupti consequatur nihil tenetur ad expedita ea nesciunt voluptates odio!">Contact</SectionTitle>
                <ul className="mt-10 flex justify-between">
                  <li>
                    <Link href="https://www.instagram.com/iamalinurdin.porto" className="flex gap-2">
                      <FontAwesomeIcon icon={faInstagram} width={24} height={24} />
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/iamalinurdin" className="flex gap-2">
                      <FontAwesomeIcon icon={faLinkedin} width={24} height={24} />
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.github.com/iamalinurdin" className="flex gap-2">
                      <FontAwesomeIcon icon={faGithub} width={24} height={24} />
                      Github
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-1 gap-5">
                  <div className="col-span-1">
                    <Input type="email" variant="bordered" label="Email" />
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="col-span-1">
                        <Input type="email" variant="bordered" label="Email" />
                      </div>
                      <div className="col-span-1">
                        <Input type="email" variant="bordered" label="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <Textarea
                      label="Description"
                      placeholder="Enter your description"
                      variant="bordered"
                    />
                  </div>
                  <div className="col-span-1">
                    <Button className="w-full" color="primary" variant="flat" size="lg">Submit</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}