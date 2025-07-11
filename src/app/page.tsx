import { Main } from "src/page/main/Main";

export const metadata = {
  title: "Dmytro Pelyp Portfolio",
  description:
    "Portfolio and projects of Dmytro Pelyp, a fullstack JavaScript developer specializing in modern web apps.",
  keywords: [
    "Dmytro",
    "Pelyp",
    "Dima",
    "Дмитро",
    "Пелип",
    "Діма",
    "Fullstack",
    "JavaScript",
    "JS",
    "Developer",
    "Web Developer"
  ],
  authors: [{ name: "Dmytro Pelyp" }],
  creator: "Dmytro Pelyp",
  openGraph: {
    title: "Dmytro Pelyp – Fullstack JS Developer",
    description: "Explore the portfolio of Dmytro Pelyp, fullstack JavaScript developer.",
    url: "https://dmytro-pelyp.com",
    siteName: "Dmytro Pelyp Fullstack JS Developer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/dmytro_face.png",
        width: 618,
        height: 784,
        alt: "Dmytro Pelyp – Fullstack Developer"
      }
    ]
  }
};

export default function Home() {
  return <Main />;
}
