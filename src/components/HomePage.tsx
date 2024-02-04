import { events } from "../data";
import { Matches } from "./Matches";

const HomePage = () => {
  const liveEvents = events.filter((event) => event.isLive);

  const futureEvents = events.filter((event) => !event.isLive);

  return (
    <>
      <Matches list={liveEvents} title="Live matches" />
      <Matches list={futureEvents} title="Future matches" />
    </>
  );
};

export default HomePage;
