import { Link } from "react-router-dom";
import { TEvent } from "../data";
import { RouteName, generateRoutePath } from "../app/routes";

type TypeProps = {
  title: string;
  list: TEvent[];
};

export const Matches = ({ title, list }: TypeProps) => {
  const goTo = (id: string) =>
    `${generateRoutePath({
      name: RouteName.EventDetails,
      params: { id },
    })}`;

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="md:min-w-[500px] min-w-96 flex flex-col  bg-slate-700 p-5 border-black mb-6 rounded-lg">
          <div className="text-5xl font-bold mb-6 text-white rounded  ">
            {title}
          </div>
          {list.map((event) => (
            <div className="text-2xl mb-6 text-white" key={event.id}>
              <Link to={goTo(event.id)}>
                {event.homeTeam} - {event.guestTeam}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
