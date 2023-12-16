import Image from "next/image";
import { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
//import Currency from "react-currency-formatter";

/*
const MAX_RATING = 4;
const MIN_RATING = 2;
*/
function Product({ id, title, price, description, category, image }) {
  /*const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );*/

  const [rating] = useState(4);

  /*const [hasPrime] = useState(Math.random() < 0.5);*/

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-5 text-xs italic text-gray-400 my-3">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        className="mx-auto my-2"
        loading="eager" // force image to load quickly
      />
      <h4 className="my-3 mt-auto">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      {/*
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      */}

      {/*
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-1 mb-3">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      */}

      <button className="button">Add to Basket</button>
    </div>
  );
}

export default Product;
