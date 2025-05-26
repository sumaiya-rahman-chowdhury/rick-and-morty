import Banner from "@/components/Banner";
import MeetTheCast from "@/components/meet-cast/MeetTheCast";
import Episode from "@/components/shared/Episode";
import Location from "@/components/shared/Location";

export default function Home() {
  return (
  <main>
    <Banner/>
    <MeetTheCast/>
    <Episode/>
    <Location/>
  </main>
  );
}
