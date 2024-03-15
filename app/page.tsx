import React from "react";
import Image from "next/image";
import Link from "next/link";

const campaigns = [
  {
    id: "referral",
    title: "Gamified SMM Campaign",
    description: "Set up an SMM journey with game & prize of your choice",
    image: "/assets/i1.png",
    link: "/campaign1", // Replace with your actual path
  },
  {
    id: "nft-giveaway",
    title: "NFT giveaway campaign",
    description: "Create a unique NFT collection to reward your commuinty",
    image: "/assets/i2.png",
    link: "pages/campaign1.tsx", // Replace with your actual path
  },
  {
    id: "membership",
    title: "Membership badges",
    description: "Start building your loyalty program with membership cards",
    image: "/assets/i3.png",
    link: "/pages/campaign1.tsx", // Replace with your actual path
  },
  {
    id: "customized",
    title: "Customized campaign",
    description: "Create a fully custom marketing campaign: define your rules",
    image: "/assets/i4.png",
    link: "/pages/campaign1.tsx", // Replace with your actual path
  },
  {
    id: "sbt",
    title: "Referral SBT Campaign",
    description:
      "Work with ambassadors and influencers to amplify your campaigns",
    image: "/assets/i5.png",
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
  <div className="relative min-h-screen bg-blue-500">
    <Image
      src="/assets/lnd-bg2.png"
      layout="fill"
      objectFit="cover"
      quality={100}
      alt="Background"
    />
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4 text-white">
        {/* Navigation and other header content here */}
      </header>

      <main className="pt-8 pb-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">
          CHOOSE CAMPAIGN TYPE
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

      <footer className="footer text-white">{/* Footer content here */}</footer>
    </div>
  </div>
);

export default Page;
