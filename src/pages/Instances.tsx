import Link from "next/link";
import "/app/globals.css";
import ThemeSwitcher from "./ThemeSwitcher";

const services = [
  {
    title: "Sudo-Flix",
    description:
      "A cutesy app for watching your favorite movies and shows. Totally free and open source, forever!",
    link: "https://flix.gitro.xyz",
    img: "/sudo-flix.png",
    cloudflare: "/cross.png",
  },
  {
    title: "Animunet",
    description:
      "A website where you can watch anime, made using next.js and animetize-api.",
    link: "https://ani.gitro.xyz",
    img: "/animunet.png",
    vercel: "/vercel.jpeg",
  },
  {
    title: "Enjoytown",
    description:
      "A website where you can watch drama, anime, movies and read manga for free.",
    link: "https://enjoytown.gitro.xyz",
    img: "/enjoytown.png",
    vercel: "/vercel.jpeg",
  },
  {
    title: "AnonymousOverflow",
    description: "View StackOverflow in privacy and without the clutter.",
    link: "https://anonymousoverflow.gitro.xyz",
    img: "/anonymousoverflow.webp",
    cloudflare: "/cross.png",
  },
  {
    title: "ProxyTok",
    description: "Open source alternative frontend for TikTok made using PHP.",
    link: "https://proxytok.gitro.xyz",
    img: "/proxytok.png",
    cloudflare: "/cross.png",
  },
  {
    title: "Rimgo",
    description: "An alternative frontend for Imgur.",
    link: "https://rimgo.gitro.xyz",
    img: "/rimgo.png",
    cloudflare: "/cross.png",
  },
  {
    title: "Quetre",
    description:
      "Quetre is an alternative front-end to Quora. It enables you to see answers without ads, trackers, and other such bloat.",
    link: "https://quetre.gitro.xyz",
    img: "/quetre.png",
    cloudflare: "/cross.png",
  },
  {
    title: "Dumb",
    description: "Private alternative front-end for Genius.",
    link: "https://dumb.gitro.xyz",
    img: "/dumb.png",
    cloudflare: "/cross.png",
  },
  {
    title: "Mozhi",
    description:
      "Mozhi (spelt moḻi) is an alternative-frontend for many translation engines.",
    link: "https://mozhi.gitro.xyz",
    img: "/mozhi.png",
    cloudflare: "/cross.png",
  },
  {
    title: "Wikiless",
    description:
      "A free open source alternative Wikipedia front-end focused on privacy.",
    link: "https://wikiless.gitro.xyz",
    img: "/wikiless.png",
    cloudflare: "/cross.png",
  },
  {
    title: "Priviblur",
    description:
      "A privacy-focused alternative frontend to Tumblr with a touch of modern design.",
    link: "https://priviblur.gitro.xyz",
    img: "/tumblr.png",
    cloudflare: "/cross.png",
  },
  {
    title: "NextChat",
    description:
      "A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS).",
    link: "https://chatgpt.gitro.xyz",
    img: "/next_chat.png",
    donors: "Donators only",
    vercel: "/vercel.jpeg",
  },
  {
    title: "Joplin",
    description:
      "The privacy-focused note taking app with sync capabilities for Windows, macOS, Linux, Android and iOS. ",
    link: "https://joplin.gitro.xyz",
    img: "/joplin.png",
    donors: "Donators only",
    cloudflare: "/cross.png",
  },
  {
    title: "Wallos",
    description: "Wallos: Open-Source Personal Subscription Tracker.",
    link: "https://wallos.gitro.xyz",
    img: "/wallos.png",
    donors: "Donators only",
    cloudflare: "/cross.png",
  },
  {
    title: "Linkding",
    description:
      "Self-hosted bookmark manager that is designed be to be minimal, fast, and easy to set up using Docker.",
    link: "https://linkding.gitro.xyz",
    img: "/linkding.png",
    donors: "Donators only",
    cloudflare: "/cross.png",
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
                  <p className="text-red-500">{service.donors}</p>

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

        <div className="overflow-x-auto flex justify-center">
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Mantaining all the projects up and running costs!
              </h2>
              <p>
                If you want access to one of the services marked as Donators
                Only, with a small monthly fee you can get access to the desired
                service and forget all about self-hosting while supporting me
                and help keep the the server up! Check on Ko-Fi or BuyMeACoffee
                below! (Ko-Fi offers Paypal)
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            href="https://buymeacoffee.com/gitro/membership"
            target="_blank"
          >
            <img className="w-44 h-auto p-2" src="/bmc.png" alt="BMC" />
          </Link>
          <Link href="https://ko-fi.com/gitro/tiers" target="_blank">
            <img className="w-40 h-auto p-2" src="/kofi.webp" alt="Kofi" />
          </Link>
        </div>

        <div className="overflow-x-auto flex justify-center">
          <table className="table max-w-4xl w-full border border-gray-300">
            <thead>
              <tr>
                <th></th>
                <th>Donators Only</th>
                <th>Uses Cloudflare</th>
                <th>Uses Vercel</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service.title || index} className="hover">
                  <th>{service.title}</th>
                  <td className="pl-12">
                    {service.donors === "Donators only" ? (
                      <img src="/green_checkbox.png" alt="Checkbox" />
                    ) : null}
                  </td>
                  <td className="pl-12">
                    {service.cloudflare === "/cross.png" ? (
                      <img src="/cross.png" alt="Checkbox" />
                    ) : null}
                  </td>
                  <td className="pl-12">
                    {service.vercel === "/vercel.jpeg" ? (
                      <img src="/vercel.jpeg" alt="Checkbox" />
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Instances;
