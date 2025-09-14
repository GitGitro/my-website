import "/app/globals.css";
import Link from "next/link";
import { ThemeProvider } from 'next-themes'
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Script src="https://cloud.umami.is/script.js" data-website-id={process.env.TRACKING_ID}/>
      <div className="text-center p-4 h-screen">
        <div className="mb-10">
          <Image
            src="https://avatars.githubusercontent.com/u/108683123"
            alt="Gitro"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="flex items-center justify-center pb-6 ">
          <div className="mockup-code">
            <pre data-prefix="$" className="flex items-left justify-left">
              <code>FOSS and privacy enthusiast</code>
            </pre>
            <pre
              data-prefix=">"
              className="text-warning flex items-left justify-left"
            >
              <code>
                Mantainer at
                <a
                  href="https://github.com/Delta-Icons"
                  className="mx-2 text-blue-500"
                >
                  Delta
                </a>
                for the
                <a
                  href="https://github.com/Delta-Icons/android"
                  className="mx-2 text-blue-500"
                >
                  android
                </a>
                and
                <a
                  href="https://github.com/Delta-Icons/aegis"
                  className="mx-2 text-blue-500"
                >
                  Aegis
                </a>
                icon packs.
              </code>
            </pre>
          </div>
        </div>

        <div className="overflow-x-auto flex justify-center ">
            <div className="card w-96 shadow-xl bg-slate-500 text-white">
              <div className="card-body">
                <h2 className="card-title flex justify-center">
                  You here for a faster request?
                </h2>
                <p>
                If you are here from the Delta app for a faster request, head over to the BuyMeACoffee page 
                below, and I&apos;ll get to your request as soon as possible!
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Link
              href="https://buymeacoffee.com/gitro"
              target="_blank"
            >
              <Image 
                src="/bmc.png"
                width={200}
                height={200}
                className="p-2"  alt="BMC" />
            </Link>
          </div>

        <div className="flex justify-center items-center space-x-4 p-4  ">
          <h1 className="text-3xl font-bold">Find me here</h1>
        </div>

        <div className="flex justify-center items-center space-x-4 p-4">
          <a
            href="https://github.com/GitGitro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline"
          >
            <Image src="/github.png"
              width={50}
              height={50}
              alt="GitHub" />
          </a>
          <a
            href="https://t.me/GitGitro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline"
          >
            <Image src="/telegram.png"
              width={50}
              height={50}
              alt="Telegram" />
          </a>
          <a
            href="https://www.discord.com/user/_gitro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline"
          >
            <Image src="/discord.png"
              width={50}
              height={50}
              alt="Discord" />
          </a>
          <a
            href="https://matrix.to/#/@gitrowastaken:matrix.org"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline"
          >
            <Image src="/matrix.png"
              width={50}
              height={50}
              alt="Matrix" />
          </a>
          <a
            href="mailto:contact@gitro.xyz"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline"
          >
            <Image src="/mail.png"
              width={50}
              height={50}
              alt="Mail" />
          </a>
        </div>
      </div>
    </ThemeProvider>
  );
}
