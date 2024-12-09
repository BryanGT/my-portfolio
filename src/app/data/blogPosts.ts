export type BlogPost = {
    slug: string;
    title: string;
    content: string;
    date: string;
  };
  
  export const blogPosts: BlogPost[] = [
    {
      slug: "primer-post",
      title: "Mi Primer Post",
      content: "Bienvenido a mi blog. Este es mi primer post. 🚀",
      date: "2024-12-09",
    },
    {
      slug: "segundo-post",
      title: "Mi Segundo Post",
      content: "Este es mi segundo post en el blog. ¡Espero que te guste!",
      date: "2024-12-10",
    },
  ];
  