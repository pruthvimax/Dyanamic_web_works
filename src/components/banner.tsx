import React, { useEffect } from "react";
import { close, bulb } from "../assets";

type BannerProps = {
  hide: boolean;
  setHide: (hide: boolean) => void;
};

const BANNER_KEY = "hide-banner";

const Banner = ({ hide, setHide }: BannerProps) => {
  useEffect(() => {
    const hideBanner = localStorage.getItem(BANNER_KEY);

    if (hideBanner) return;

    const bannerTimer = setTimeout(() => {
      setHide(false);
    }, 5000);

    return () => clearTimeout(bannerTimer);
  }, [setHide]);

  const handleBannerClose = () => {
    setHide(true);
    localStorage.setItem(BANNER_KEY, "1");
  };

  return (
    <div
      className={`${
        hide ? "hidden" : "flex"
      } fixed top-0 left-0 w-full h-16 z-50 items-center justify-between px-6 bg-primary shadow-md`}
    >
      {/* Left Side */}
      <div className="flex items-center text-white text-sm">
        <img
          src={bulb}
          alt="bulb"
          height={16}
          width={16}
          className="mr-2"
        />
        <span>Welcome to Our Portfolio</span>
      </div>

      {/* Right Side (Close Button) */}
      <button
        onClick={handleBannerClose}
        type="button"
        className="text-gray-300 hover:text-white p-1 rounded-md"
      >
        <img src={close} alt="close" height={14} width={14} />
      </button>
    </div>
  );
};

export default Banner;