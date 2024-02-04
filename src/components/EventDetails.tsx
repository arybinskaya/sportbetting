import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../data";

const EventDetails = () => {
  const { id } = useParams();
  const selectedMatch = events.find((event) => id === event.id);

  if (!selectedMatch) {
    return <div>Match not found</div>;
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <div className="text-5xl font-bold mb-6">
            {selectedMatch.homeTeam} - {selectedMatch.guestTeam}
          </div>
          <div className="text-2xl mb-6">
            <div className="mb-3">
              <input type="radio" name="coefficient" />
              <label>
                {selectedMatch.coefficients.homeWin} - на победу хозяев
              </label>
            </div>
            <div className="mb-3">
              <input type="radio" name="coefficient" />
              <label>
                {selectedMatch.coefficients.guestWin} - на победу гостей
              </label>
            </div>
            <div className="mb-3">
              <input type="radio" name="coefficient" />
              <label>{selectedMatch.coefficients.draw} - на ничью</label>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="text-2xl font-bold bg-amber-300 text-black w-60 h-12"
              disabled
            >
              Сделать ставку
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
