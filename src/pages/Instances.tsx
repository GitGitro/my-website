import Link from "next/link";
import "/app/globals.css";
import ThemeSwitcher from "./ThemeSwitcher";
import Head from 'next/head'

const services = [
  {
    title: "Sudo-Flix",
    description:
      "A cutesy app for watching your favorite movies and shows. Totally free and open source, forever!",
    link: "https://flix.gitro.xyz",
    img: "/sudo-flix.png",
  },
  {
    title: "Animunet",
    description:
      "A website where you can watch anime, made using next.js and animetize-api.",
    link: "https://ani.gitro.xyz",
    img: "/animunet.png",
  },
  {
    title: "Enjoytown",
    description:
      "A website where you can watch drama, anime, movies and read manga for free.",
    link: "https://enjoytown.gitro.xyz",
    img: "/enjoytown.png",
  },
  {
    title: "AnonymousOverflow",
    description: "View StackOverflow in privacy and without the clutter.",
    link: "https://anonymousoverflow.gitro.xyz",
    img: "/anonymousoverflow.webp",
  },
  {
    title: "ProxyTok",
    description: "Open source alternative frontend for TikTok made using PHP.",
    link: "https://proxytok.gitro.xyz",
    img: "/proxytok.png",
  },
  {
    title: "Rimgo",
    description: "An alternative frontend for Imgur.",
    link: "https://rimgo.gitro.xyz",
    img: "/rimgo.png",
  },
  {
    title: "Quetre",
    description:
      "Quetre is an alternative front-end to Quora. It enables you to see answers without ads, trackers, and other such bloat.",
    link: "https://quetre.gitro.xyz",
    img: "/quetre.png",
  },
  {
    title: "Dumb",
    description: "Private alternative front-end for Genius.",
    link: "https://dumb.gitro.xyz",
    img: "/dumb.png",
  },
  {
    title: "Mozhi",
    description:
      "Mozhi (spelt moḻi) is an alternative-frontend for many translation engines.",
    link: "https://mozhi.gitro.xyz",
    img: "/mozhi.png",
  },
  {
    title: "Wikiless",
    description:
      "A free open source alternative Wikipedia front-end focused on privacy.",
    link: "https://wikiless.gitro.xyz",
    img: "/wikiless.png",
  },
  {
    title: "Priviblur",
    description:
      "A privacy-focused alternative frontend to Tumblr with a touch of modern design.",
    link: "https://priviblur.gitro.xyz",
    img: "/tumblr.png",
  },
  {
    title: "VERT",
    description:
      "VERT is a file conversion utility that uses WebAssembly to convert files on your device instead of a cloud.",
    link: "https://vert.gitro.xyz",
    img: "/vert.png",
  },
  {
    title: "IT-Tools",
    description:
      "Collection of handy online tools for developers, with great UX.",
    link: "https://it-tools.gitro.xyz",
    img: "/it_tools.png",
  },
  {
    title: "Painterest",
    description:
      "Privacy-respecting, anonymous, NoJS-supporting Pinterest frontend.",
    link: "https://painterest.gitro.xyz",
    img: "/painterest.png",
  },
  {
    title: "Redlib",
    description:
      "An alternative private front-end to Reddit, with its origins in Libreddit.",
    link: "https://redlib.gitro.xyz",
    img: "/redlib.png",
  },
];

const Instances = () => {
  return (
    <div className="text-center p-4">
      <div className="text-center p-4">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {services.map((service, index) => (
            <div key={service.title || index} className="indicator">
              <div className="card w-80 bg-base-100 shadow-xl ">
                <figure>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-t-lg size-24 p-4"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title text-center ">{service.title}</h2>
                  <p className="text-left">{service.description}</p>

                  <div className="card-actions object-right">
                    <Link href={service.link}>
                      <button className="btn btn-primary">Visit</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="flex justify-center">
        <ThemeSwitcher />
      </div>
      <div>
      <Head>
        <title>Instances</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      </div>
    </div>
  );
};

export default Instances;
