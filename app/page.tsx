// import {whatWeDo} from '@/data/info'
import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import Logo from "./Logo";

export default function Home() {
  const whatWeDo = [
    {
      name: "Newsletter",
      svg: "/newsletter.svg",
      color: "bg-fuchsia-600",
    },
    {
      name: "Podcast",
      svg: "/podcast.svg",
      color: "bg-yellow-300",
    },
    {
      name: "Opportunities",
      svg: "/opportunities.svg",
      color: "bg-yellow-500",
    },
  ];

  return (
    <main className='bg-[url("/gridImage.jpg")] flex flex-col justify-center items-center gap lg:gap-14 gap-8  min-h-screen bg-center bg-cover px-2 py-10'>
      <div className="h-20 w-20 ">
        <Logo />
      </div>
      <div>
        <h1 className="lg:text-4xl text-2xl font-extrabold text-center tracking-wide">
          African Artists Network
        </h1>

        <p className="text-neutral-400  font-semibold text-center">
          Coming Soon
        </p>
      </div>

      <WaitlistForm />

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:gap-5 gap-3 place-items-center ">
        {whatWeDo.map(m => (
          <div
            key={m.name}
            className={` ${m.color} max-w-96 lg:h-44  px-5 py-5  border-2 border-black flex-col justify-start items-start lg:gap-9 gap-3 inline-flex w-full`}
          >
            <figure className="relative lg:h-10 lg:w-10 h-6 w-6 ">
              <Image
                src={m.svg}
                fill
                style={{ backgroundPosition: "center" }}
                alt="icon"
              />
            </figure>

            <p className="text-black lg:text-4xl text-xl font-semibold tracking-wider">
              {m.name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
