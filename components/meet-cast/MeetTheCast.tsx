import SectionTitle from "../Section-Title";
import SwiperSlider from "../Swiper";
import ViewAllButton from "../ViewAllButton";

async function MeetTheCast() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();

  return (
    <div className="px-10">
      <div className="flex justify-between items-center mb-4">
        <SectionTitle title={`Meet The Casts`} />
        <ViewAllButton />
      </div>
      <SwiperSlider characters={data.results} />
    </div>
  );
}

export default MeetTheCast;
