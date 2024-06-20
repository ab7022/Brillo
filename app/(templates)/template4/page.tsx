import {
  GithubButton,
  ResumeButton,
} from "@/components/AllTemplates/template4/components/common/Buttons";
import Image from "next/image";
import avatar from "./me.avif";

export default function Home() {
  return (
    <>
      <div className="py-4 md:p-0 h-screen">
        <header className="mt-0 pt-2 md:pt-6 md:flex md:flex-col md:items-center">
          <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white md:text-center font-bold leading-tight mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Frontend
            </span>{" "}
            engineer,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              hobbyist
            </span>{" "}
            guitarist and a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-slate-600">
              space
            </span>{" "}
            lover.
          </h1>
          <h2 className="md:max-w-2xl text-slate-600 dark:text-slate-300 mt-4 md:mt-6 text-lg md:text-xl">
            Welcome to my portfolio. Feel free to browse my website, and drop
            your suggestions on my{" "}
            <a
              className="text-sky-500"
              target="_blank"
              href="https://github.com/FrozenHearth/portfolio/discussions"
            >
              Github repo
            </a>
            . Thank you for visiting!
          </h2>
          <div className="block mt-8 md:mt-0 md:flex gap-3">
            <ResumeButton />
            <GithubButton />
          </div>
        </header>
      </div>
      <>
        <div className="max-w-2xl lg:max-w-full pt-6 h-screen">
          <div className="grid grid-cols-1 gap-y-8 md:gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="max-w-xs px-2.5 md:pl-20 md:max-w-none md:ml-auto">
              <Image
                className='"aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800'
                src={avatar}
                alt="Vishwanath B."
                priority
                width={400}
              />
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                {`Hey, I'm Vishwanath. I live in Bangalore, the Silicon Valley of India. 👋`}
              </h1>
              <p className=" text-slate-600 dark:text-slate-300 mt-8 text-lg md:text-xl">
                After completing my final year project in undergrad, I
                discovered my passion for web dev, especially frontend. Since
                then, I have been on a continuous learning journey.
                <br />
                <br />
                I'm obsessed with crafting pixel-perfect UIs, proficient in
                HTML, CSS, Javascript/Typescript, and have worked with Angular,
                React, and Vue in my career. Additionally, I have dabbled with
                Node.js, GraphQL, and MongoDB for a short period of time.
                <br />
                <br />
                From the last few months, I've started contributing to Open
                Source, and you can always find me in a React/Javascript or a
                FOSS meetup.
              </p>
            </div>
          </div>
        </div>

        <hr className="h-px my-8 border-0 bg-gray-700"></hr>

        <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
          Technologies I know:
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
          HTML, CSS/SASS, Javascript/Typescript, React, Redux, Vue 2, Vuex,
          Next.js, Tailwind.
        </p>

        <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
          Technologies I am currently learning:
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
          Vue 3, Kafka, AWS, Docker, Redis
        </p>
      </>
      <>
        <div className="mt-4 md:mt-10">
          <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white font-bold leading-tight md:mt-4">
            I write mainly about frontend on my blog.
          </h1>
          <h2 className="text-slate-600 dark:text-slate-300 max-w-2xl text-lg md:text-xl my-0 mt-4 md:mt-8">
            Always up for a convo about web dev and tech in general. Feel free
            to connect with me on{" "}
            <a
              href="https://linkedin.com/in/vishwanath-bhetanabhotla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline"
            >
              Linkedin.
            </a>
          </h2>
        </div>
        {/* <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6 mt-8">
          {allPosts
            .sort(
              (a, b) =>
                new Date(b.publishedAtFormatted).valueOf() -
                new Date(a.publishedAtFormatted).valueOf()
            )
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="hover:cursor-pointer group hover:rounded-lg my-4 overflow-hidden flex flex-col"
              >
                <div className="h-[500px] relative rounded-lg border-transparent border-2 group-hover:border-sky-500 p-1 overflow-hidden">
                  <Image
                    src={post.imageSrc as string}
                    alt={post.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="mt-3 sm:mt-6 p-1">
                  <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg sm:text-xl my-2">
                    {post.publishedAtFormatted}
                    <span className="mx-3"> — </span>
                    <ViewCounter trackView={false} slug={post.slug} />
                  </span>
                  <header className="text-slate-900 dark:text-white font-semibold leading-tight text-2xl sm:text-3xl mt-4">
                    {post.title}
                  </header>
                </div>
              </Link>
            ))}
        </div> */}
      </>
    </>
  );
}
