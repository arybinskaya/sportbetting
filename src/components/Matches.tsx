import { Link } from "react-router-dom";

import { TEvent } from "../data";

type TypeProps = {
  title: string;
  list: TEvent[];
};

export const Matches = ({ title, list }: TypeProps) => {
  // const goTo = (id: string) =>
  //   `${generateRoutePath({ name: RouteName.EventDetails })}/${id}`;

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <div className="text-5xl font-bold mb-6">{title}</div>
          {list.map((event) => (
            <div className="text-2xl mb-6" key={event.id}>
              <Link to={"/"}>
                {event.homeTeam} - {event.guestTeam}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
