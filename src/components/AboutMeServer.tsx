/*import AboutMeClient from "./AboutMeClient";

type GitHubUser = {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
};

async function fetchGitHubUser(): Promise<GitHubUser> {
  const apiUrl = process.env.NEXT_PUBLIC_GITHUB_API_URL;
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!apiUrl || !username) {
    throw new Error("Las variables de entorno para GitHub no están configuradas");
  }

  //const res = await fetch("https://api.github.com/users/BryanGT");
  const res = await fetch(`${apiUrl}/${username}`);

  if (!res.ok) {
    throw new Error("Error al obtener el perfil de GitHub");
  }
  return res.json();
}

export default async function AboutMeServer() {
  const user = await fetchGitHubUser();

  return <AboutMeClient user={user} />;
}*/

import AboutMeClient from "./AboutMeClient";

type GitHubUser = {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
};

async function fetchGitHubUser(): Promise<GitHubUser> {
  const apiUrl = process.env.NEXT_PUBLIC_GITHUB_API_URL;
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!apiUrl || !username) {
    throw new Error("Las variables de entorno para GitHub no están configuradas");
  }

  const res = await fetch(`${apiUrl}/${username}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener el perfil de GitHub");
  }

  return res.json();
}

export default async function AboutMeServer() {
  try {
    const user = await fetchGitHubUser();
    return <AboutMeClient user={user} />;
  } catch (error) {
    console.error(error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">
          Error al cargar el perfil
        </h1>
        <p className="text-gray-700">Por favor, verifica las variables de entorno o intenta más tarde.</p>
      </div>
    );
  }
}
