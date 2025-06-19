import Home from "../components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edith Amondi | Portfolio",
  description: "Full-stack web developer with a focus on remote work",
  keywords: ["web development", "full-stack", "remote work", "portfolio"],
  authors: [{ name: "Edith Amondi", url: "https://edithamondi.com" }],
  openGraph: {
    title: "Edith Amondi| Portfolio",
    description: "Full-stack web developer with a focus on remote work",
    type: "website",
    siteName: "Edith Amondi | Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1545149127054475269/Y5LEA7cQ_400x400.jpg",
        // image hosted on random domain/vercelblob - storage container for information 
        width: 800,
        height: 600,
        alt: "Edith Amondi | Portfolio",
      },
    ],
  },
};

export default function HomePage() {

  return (
    <>
    <Home />
    </> 
  );
}