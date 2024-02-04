import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Coefficient, events } from "../data";
import { ChoiceButton } from "./ChoiceButton";
import { useToast } from "../shared";
import { RouteName, useGotoRoute } from "../app/routes";

const EventDetails = () => {
  const { id } = useParams();
  const addToast = useToast();
  const onExit = useGotoRoute(RouteName.HomePage);

  const [selectedChoice, setSelectedChoice] = useState<Coefficient | null>(
    null
  );

  const { coefficients, homeTeam, guestTeam, date } =
    events.find((event) => id === event.id) ?? {};

  const doBet = () => {
    onExit();
    addToast.success(
      `Tnx. ${homeTeam} - ${guestTeam}: ${selectedChoice?.label}(x${selectedChoice?.value})`
    );
  };

  if (!coefficients) {
    return <div>Match not found</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center md:p-0 p-5">
        <div className="flex flex-col">
          <div className="text-5xl font-bold mb-6 text-white">
            {homeTeam} - {guestTeam}
          </div>
          <div className="text-3xl font-bold mb-6 text-white">
            {date?.toLocaleDateString()}
          </div>
          <div className="text-2xl mb-12 flex items-center gap-2">
            <ChoiceButton
              label={"Win 1"}
              data={coefficients.home}
              onSelect={setSelectedChoice}
              isSelected={selectedChoice?.label === coefficients?.home.label}
            />
            <ChoiceButton
              label={"X"}
              data={coefficients.draw}
              onSelect={setSelectedChoice}
              isSelected={selectedChoice?.label === coefficients?.draw.label}
            />
            <ChoiceButton
              label={"Win 2"}
              data={coefficients.guest}
              onSelect={setSelectedChoice}
              isSelected={selectedChoice?.label === coefficients?.guest.label}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className={`text-2xl font-bold  p-3 rounded-md ${
                selectedChoice ? "bg-green-600" : "bg-slate-400"
              }`}
              onClick={doBet}
              disabled={!selectedChoice}
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
