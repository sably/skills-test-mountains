"use client";

import Image from "next/image";

const MainBanner = () => {
  return (
    <div
      className="main-banner w-full aspect-[2/1]"
      // style={{ height: elementhH }}
    >
      <Image
        src="/images/main-banner.jpg"
        alt="mountains"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full"
      />
    </div>
  );
};

export default MainBanner;
