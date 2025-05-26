import WatchNowButton from "./WatchNowButton";
import RickBanner from "./banner/RickBanner";
import MortyBanner from "./banner/MortyBanner";

export default function Banner() {
  return (
    <section className="font-tt relative text-white overflow-hidden py-10">
      <div className="absolute inset-0 bg-hero bg-no-repeat bg-center bg-cover opacity-10 z-0" />
      <div className=" md:w-[700px] m-auto my-10">
        <RickBanner />
        <MortyBanner />
        <div
          className="flex justify-center items-start md:items-center gap-10 w-full md:w-[400px] 
         mx-auto flex-col md:flex-row px-10 md:px-0 lg:px-0"
        >
          <WatchNowButton />
          <p
            className="text-[#198896] text-[10px] w-full md:w-[50%] lg:md:w-[50%] order-1 
          "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            assumenda dolores obcaecati libero quasi iusto ullam eveniet
            nesciunt accusantium. Suscipit.
          </p>
        </div>
      </div>
    </section>
  );
}
