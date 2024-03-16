import React from "react";

export default function Campaign1() {
  return (
    <div className="container mx-auto p-4 grid gap-8 lg:grid-cols-2">
      <div>
        <div className="flex items-center space-x-4">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-bold">Summer Style</h1>
            <p className="text-sm text-gray-500">Posted by</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              alt="User avatar"
              className="rounded-full"
              src="/placeholder.svg"
              style={{ width: "40px", height: "40px" }}
            />
            <div className="space-y-1 text-sm">
              <p className="font-semibold">SunnyClothes</p>
              <p className="text-xs text-gray-500">@sunnyclothes</p>
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-4">
          <p className="text-sm">
            <span className="font-medium">Task:</span> Show off your summer
            style with our latest collection. 😎
          </p>
          <p className="text-sm">
            <span className="font-medium">Price:</span> $100
          </p>
          <p className="text-sm">
            <span className="font-medium">Platform:</span> Instagram
          </p>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join Campaign
        </button>
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((brief) => (
          <div key={brief} className="border rounded-lg p-6 shadow">
            <h3 className="font-semibold">Brand Brief</h3>
            <p className="mt-4 text-sm">
              Task: Show off your summer style with our latest collection. 😎
            </p>
            <p className="text-sm">Price: $100</p>
            <p className="text-sm">Platform: Instagram</p>
          </div>
        ))}
      </div>
    </div>
  );
}
