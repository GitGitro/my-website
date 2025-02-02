import Head from "next/head";
import ThemeSwitcher from "./ThemeSwitcher";
import "/app/globals.css";

const Crypto = () => {
    return (
      <div className="text-center p-4">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
            <table className="table-lg">
                <thead>
                <tr>
                    <th></th>
                    <th>Type</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>🪙</th>
                    <td>Monero</td>
                    <td>89pV6iKr4BpDyRBqzUf2E8NhgKRiCp6h4YhvuYrb8uH1F7wbkyLi975EmmzXBzGFR6d6nTKa5s4tbd25TDHkMHqAGwjJHy2</td>
                </tr>
                <tr>
                    <th>🪙</th>
                    <td>Ethereum</td>
                    <td>0xb9dB9C1b7b302eb1201b58FD2247d4c88fa44C55</td>
                </tr>
                <tr>
                    <th>🪙</th>
                    <td>Cardano</td>
                    <td>addr1qxk87huujtzzazhgdmq90pecnlzdau4es807tp77d8xk2xf6srazzh4p74e0vftqj2ul0lh359e47jne5480e0xmz2wqwapa6s</td>
                </tr>
                <tr>
                    <th>🪙</th>
                    <td>Solana</td>
                    <td>9G8cuaJgRa7FozPynLTL2XxpqvDPaH41LanDuf7y4y8v</td>
                </tr>
                <tr>
                    <th>🪙</th>
                    <td>Litecoin</td>
                    <td>ltc1q3d55rtdmkrfmhg76dmka0829fvd9lnry45wca0</td>
                </tr>
                </tbody>
            </table>
        </div>
  
        
        <div className="flex justify-center">
          <ThemeSwitcher />
        </div>
        <div>
        <Head>
          <title>Donate with crypto</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
        </div>
      </div>
    );
  };
  
  export default Crypto;