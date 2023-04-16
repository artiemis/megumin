import jumpIn from "../assets/jump-in.ogg";
import stayFree from "../assets/stay-free.ogg";
import chiisanaBoukensha from "../assets/chiisana-boukensha.ogg";

export const songs = [jumpIn, stayFree, chiisanaBoukensha];

export const preloadAudio = (url: string) => {
  new Audio().src = url;
};

export const randomRange = (min: number, max: number) => {
  return (Math.random() * (max - min) + min).toFixed(1);
};

export const randomStyle = () => {
  return {
    rotate: `${randomRange(-5, 5)}deg`,
    left: `${randomRange(-15, 15)}vw`,
  };
};

export const printExplosion = () => {
  console.log(
    "%cDarker than black, darker than darkness, combine with my intense crimson. Time to wake up, descend to these borders and appear as an intangible distortion. Dance, dance, dance! May a destructive force flood my torrent of power, a destructive force like no other! Send all creation to its source! Come out of your abyss! Humanity knows no other more powerful offensive technique! It is the ultimate magical attack!",
    "color: #ef8400; font-size: 16px;"
  );
  console.log("%cEx-PLOSION~!!", "color: #e8006d; font-size: 48px; font-weight: 700;");
};
