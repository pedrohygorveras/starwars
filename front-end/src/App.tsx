import React, { useEffect, useState } from "react";
import { getData } from "./services/starwars";

// import { Container } from './styles';

import logo from "./assets/logo-uds.svg";

const App: React.FC = () => {
  const [starwars, setStarwars] = useState<any[] | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getData();

      setStarwars(data);
    };

    load();
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-5 md:min-h-screen bg-[#202020] py-6 flex items-center justify-center md:items-start">
        <img src={logo} className="h-8" />
      </div>
      <div className="col-span-12 md:col-span-7 p-6">
        {starwars ? (
          <div>
            <table className="table-auto w-full border">
              <thead>
                <tr>
                  <th className="border py-2 text-center px-2 max-w-8">Foto</th>
                  <th className="border py-2 text-left px-2">Nome</th>
                  <th className="border py-2 text-center px-2 max-w-10">
                    Wiki
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
              {starwars.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td className="border py-2 text-left px-2 max-w-8">
                      <img
                        src={item.image}
                        alt="picture"
                        className="h-10 w-10 object-cover mx-auto rounded-full"
                      />
                    </td>
                    <td className="border py-2 text-left px-2">{item.name}</td>
                    <td className="border py-2 text-center px-2 max-w-10">
                      <a
                        href={item.wiki}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Saiba mais
                      </a>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : (
          <div className="text-center p-6">
            <p>Buscando dados...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
