import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { CreateNFT } from "@/components/CreateNFT";

export function Campaign() {
  return (
    <div className="grid md:grid-cols-2 gap-10" style={{ marginTop: "150px" }}>
      <div className="flex flex-col gap-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Summer Fashion Vibes</h1>
          <p className="text-sm font-medium text-gray-500">Posted 2 days ago</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Task</h2>
            <p className="text-sm">
              Create a video showing off your favorite summer fashion picks from
              our collection. Be creative and have fun with it!
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Price</h2>
            <p className="text-sm">$100 per post</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Platform</h2>
            <p className="text-sm">Instagram, TikTok</p>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <Button size="lg" variant="outline">
            Message Brand
          </Button>
          <Button size="lg">Join Campaign</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="border border-gray-200 rounded-lg">
          <img
            alt="Image"
            className="rounded-t-lg"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width={500}
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm">
              <span className="font-medium">Style:</span>
              Casual, Fun, Trendy{"\n"}
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm">
              <span className="font-medium">Hashtags:</span>
              #SummerFashion #FashionFun #TrendyVibes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
