'use client'

import Header from "@/components/Header";
import { m, motion } from 'framer-motion'
import Logo from "@/components/Logo";
import { Button, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import CareerTimeline from "@/components/CareerTimeline";

export default function Home() {
  const text = 'Hello, I am Ali, a Fullstack Web Developer.'.split(' ')

  return (
    <>
      <Header />
      <main>
        <section className="p-24">
          <div className="container">
            <div className="grid grid-cols-2 gap-5 items-center">
              <div className="grid-span-1">
                <h1 className="text-6xl font-bold">
                  {text.map((item, idx) => (
                    <motion.span 
                      whileHover={{
                        scale: 1.1,
                        textShadow: '-1px 7px 13px rgba(255,255,255,0.88)',
                        transition: {
                          type: 'just',
                        }
                      }}
                      initial={{
                        opacity: 0
                      }}
                      animate={{
                        opacity: 1
                      }}
                      transition={{
                        duration: 5,
                        delay: idx / 10,
                        repeat: Infinity
                      }}
                      key={idx}
                    >
                      {item} {' '}
                    </motion.span>
                  ))}
                </h1>
              </div>
              <div className="grid-span-1">
                <Logo />
              </div>
            </div>
            <div className="text-center">
              <p className="w-1/2 mx-auto text-lg mt-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <Button className="mt-20" color="primary" variant="flat" size="lg">Download CV</Button>
            </div>
          </div>
        </section>
        <section className="p-24">
          <div className="container">
            <SectionTitle>Projects Overview</SectionTitle>
            <div className="grid grid-cols-3 gap-5 mt-20">
              <div className="col-span-1">
                <Logo></Logo>
              </div>
              <div className="col-span-1">
                <Logo></Logo>
              </div>
              <div className="col-span-1">
                <Logo></Logo>
              </div>
            </div>
            <div className="text-center mt-20">
              <Button color="primary" variant="flat">Show more</Button>
            </div>
          </div>
        </section>
        <section className="p-24">
          <div className="container">
            <SectionTitle>Career Summary</SectionTitle>
            <ScrollShadow className="w-1/2 h-[600px] mx-auto mt-20" hideScrollBar>
              <div className="grid grid-cols-1 gap-5">
                <div className="col-span-1">
                  <CareerTimeline 
                    company={'Media Notifikasi Indonesia'}
                    techStacks={[
                      'HTML & CSS',
                      'PHP',
                      'Javascript',
                      'Python',
                      'MySQL'
                    ]}
                    summary={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio delectus eaque expedita ut dolore cupiditate at officia aut nostrum? Quas recusandae atque veniam assumenda, quasi ipsum. Nulla ipsam est reiciendis perferendis nisi cumque esse aliquid at, molestias, itaque velit recusandae, harum architecto repudiandae sit illo? Culpa fugit obcaecati quas beatae unde! Reprehenderit natus temporibus quas dolores odit numquam tempore quaerat. Tempore non quae veniam totam ipsum aut est mollitia fuga delectus, cupiditate eum esse atque dolores, dicta sed. Vel, voluptates, voluptatibus eaque aut ex alias iste facilis quasi, nam iure adipisci vitae modi ipsa et molestias quaerat vero nobis pariatur?'}
                    workingDate={'June 2020 - August 2022'}
                    position={'Fullstack Web Developer'}
                  />
                </div>
                <div className="col-span-1">
                  <CareerTimeline 
                    company={'Capio Teknologi Indonesia'}
                    techStacks={[
                      'HTML & CSS',
                      'PHP',
                      'Javascript',
                      'Python',
                      'MySQL'
                    ]}
                    summary={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio delectus eaque expedita ut dolore cupiditate at officia aut nostrum? Quas recusandae atque veniam assumenda, quasi ipsum. Nulla ipsam est reiciendis perferendis nisi cumque esse aliquid at, molestias, itaque velit recusandae, harum architecto repudiandae sit illo? Culpa fugit obcaecati quas beatae unde! Reprehenderit natus temporibus quas dolores odit numquam tempore quaerat. Tempore non quae veniam totam ipsum aut est mollitia fuga delectus, cupiditate eum esse atque dolores, dicta sed. Vel, voluptates, voluptatibus eaque aut ex alias iste facilis quasi, nam iure adipisci vitae modi ipsa et molestias quaerat vero nobis pariatur?'}
                    workingDate={'June 2020 - August 2022'}
                    position={'Fullstack Web Developer'}
                  />
                </div>
                <div className="col-span-1">
                  <CareerTimeline 
                    company={'Established Jakarta'}
                    techStacks={[
                      'HTML & CSS',
                      'PHP',
                      'Javascript',
                      'Python',
                      'MySQL'
                    ]}
                    summary={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio delectus eaque expedita ut dolore cupiditate at officia aut nostrum? Quas recusandae atque veniam assumenda, quasi ipsum. Nulla ipsam est reiciendis perferendis nisi cumque esse aliquid at, molestias, itaque velit recusandae, harum architecto repudiandae sit illo? Culpa fugit obcaecati quas beatae unde! Reprehenderit natus temporibus quas dolores odit numquam tempore quaerat. Tempore non quae veniam totam ipsum aut est mollitia fuga delectus, cupiditate eum esse atque dolores, dicta sed. Vel, voluptates, voluptatibus eaque aut ex alias iste facilis quasi, nam iure adipisci vitae modi ipsa et molestias quaerat vero nobis pariatur?'}
                    workingDate={'June 2020 - August 2022'}
                    position={'Fullstack Web Developer'}
                  />
                </div>
              </div>
            </ScrollShadow>
          </div>
        </section>
      </main>
    </>
  );
}
