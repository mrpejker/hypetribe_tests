import React from "react";
import Image from "next/image";
import Link from "next/link";

const campaigns = [
  {
    id: "referral",
    title: "Make it Shine Campaign",
    description: "Join SMM activation for Shine's new beauty products",
    image: "/assets/1.png",
    link: "/campaign1", // Replace with your actual path
  },
  {
    id: "nft-giveaway",
    title: "Majorca with In&Balance",
    description:
      "Create a yoga&meditation content to promote our summer retreats",
    image: "/assets/2.png",
    link: "pages/campaign1.tsx", // Replace with your actual path
  },
  {
    id: "membership",
    title: "New membership tiers for Guineve",
    description: "Support our loyalty program and invite new customers to join",
    image: "/assets/3.png",
    link: "/pages/campaign1.tsx", // Replace with your actual path
  },
  {
    id: "customized",
    title: "Web3 London Hackathon",
    description:
      "Invite diverse members to participate in a Web3 development event",
    image: "/assets/4.png",
    link: "/pages/campaign1.tsx", // Replace with your actual path
  },
  {
    id: "sbt",
    title: "Cross-marketing for UK Charity",
    description: "Work with a group of NGOs to amplify their prositive impact",
    image: "/assets/5.png",
    link: "/pages/campaign1.tsx", // Replace with your actual path
  },
  // ... add more campaign types here
];

interface CampaignProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CampaignCard = ({ title, description, image, link }: CampaignProps) => (
  <div
    className="campaign-card bg-white p-4 rounded-lg shadow-lg relative mx-auto"
    style={{ width: "90%" }}
  >
    <Image
      src={image}
      width={266}
      height={160}
      alt={title}
      layout="responsive"
    />
    <h3 className="mt-4 font-bold text-gray-800 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
    <div className="text-center mt-4">
      <Link href={link}>Learn more</Link>
    </div>
  </div>
);

const Page = () => (
  <>
    <Image
      src="/assets/intro.png"
      layout="responsive"
      width={1920}
      height={1080}
      quality={100}
      alt="Intro"
    />
    <div className="relative min-h-screen bg-blue-500 pt-[var(--header-height)]">
      <div className="container mx-auto px-4">
        <main className="pt-8 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">
            CHOOSE A CAMPAIGN
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                title={campaign.title}
                description={campaign.description}
                image={campaign.image}
                link={campaign.link}
              />
            ))}
          </div>
        </main>
      </div>
      <footer className="footer text-white">{/* Footer content here */}</footer>
    </div>
    <Image
      src="/assets/bright.png"
      layout="responsive"
      width={1920}
      height={1080}
      quality={100}
      alt="Intro"
    />
  </>
);

export default Page;
