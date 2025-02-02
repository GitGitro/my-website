import ThemeSwitcher from "@/src/pages/ThemeSwitcher";
import "/app/globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center p-4 h-screen">
      <div className="mb-10">
        <img
          src="https://avatars.githubusercontent.com/u/108683123"
          alt="Gitro"
          className="rounded-full w-36 h-36 mx-auto"
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
          <pre
            data-prefix=">"
            className="text-success flex items-left justify-left"
          >
            <code>
              And I also host some privacy respecting projects! Check
              <Link href="/Instances" className="mx-2 text-blue-500">
                here
              </Link>
            </code>
          </pre>
        </div>
      </div>

      <div className="overflow-x-auto flex justify-center">
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Mantaining all the projects up and running costs!
              </h2>
              <p>
                If you appreciate the services and want to drop a coin to support me
                and help keep the the server up, check on BuyMeACoffee 
                below, or the crypto addresses. Every donation is appreciated!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            href="https://buymeacoffee.com/gitro"
            target="_blank"
          >
            <img className="w-44 h-39 p-2" src="/bmc.png" alt="BMC" />
          </Link>
          <Link
            href="/Crypto"
          >
            <img className="w-44 h-39 p-2" src="/monero.png" alt="sdjsaudfasgfasu" />
          </Link>
        </div>

      <div className="flex justify-center items-center space-x-4 p-4 ">
        <h1 className="text-3xl font-bold">Find me here</h1>
      </div>

      <div className="flex justify-center items-center space-x-4 p-4">
        <a
          href="https://github.com/GitGitro"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle btn-outline"
        >
          <img src="/github.png" alt="GitHub" className="h-10 w-10" />
        </a>
        <a
          href="https://t.me/GitGitro"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle btn-outline"
        >
          <img src="/telegram.png" alt="Telegram" className="h-10 w-10" />
        </a>
        <a
          href="https://www.discord.com/user/_gitro"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle btn-outline"
        >
          <img src="/discord.png" alt="Discord" className="h-10 w-10" />
        </a>
        <a
          href="https://matrix.to/#/@gitrowastaken:matrix.org"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle btn-outline"
        >
          <img src="/matrix.png" alt="Matrix" className="h-10 w-10" />
        </a>
        <a
          href="mailto:contact@gitro.xyz"
          rel="noopener noreferrer"
          className="btn btn-circle btn-outline"
        >
          <img src="/mail.png" alt="Mail" className="h-10 w-10" />
        </a>
      </div>
      <div className="flex justify-center">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
