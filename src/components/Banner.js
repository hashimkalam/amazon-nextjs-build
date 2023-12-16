import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            src="https://links.papareact.com/gi1"
            width={100}
            height={40}
            objectFit="contain"
            layout="responsive"
            alt=""
          />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/6ff"
            width={100}
            height={40}
            objectFit="contain"
            layout="responsive"
            alt=""
          />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/7ma"
            width={100}
            height={40}
            objectFit="contain"
            layout="responsive"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
