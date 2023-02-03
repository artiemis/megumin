import { randomStyle } from "./funcs";

export type DanbooruImage = {
  id: string;
  large_file_url: string;
  tag_string: string;
  image_height: number;
  image_width: number;
  style?: {
    rotate: string;
    left: string;
  };
}

export const fetchMeguminImages = async (count: number) => {
  const params = new URLSearchParams({
    "post[tags]": `rating:g megumin random:30`,
    limit: count.toString(),
  });
  const url = "https://danbooru.donmai.us/posts.json?" + params.toString();
  const res = await fetch(url);
  const data: DanbooruImage[] = await res.json();

  let images = data.filter((value) => {
    return (
      typeof value.id !== "undefined" &&
      RegExp(/(jpg|png|gif)$/).test(value.large_file_url)
    );
  });
  images = images.map((item) => {
    return {
      ...item,
      style: randomStyle()
    }
  })
  return images;
};
