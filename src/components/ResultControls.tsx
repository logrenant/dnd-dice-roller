import React from "react";
import DiceInterface from "../interfaces/dice";

interface ResultControlsProps {
    selectedDice: keyof DiceInterface | null;
    diceCount: number;
    randomNumber: number;
    diceResults: number[];
    totalModifier: number;
}


const ResultControls: React.FC<ResultControlsProps> = ({
                                                           selectedDice,
                                                           diceCount,
                                                           randomNumber,
                                                           diceResults,
                                                           totalModifier,
                                                       }) => {
    return (
        <div className="flex gap-4 overflow-x-auto w-[calc(100vh-480px)] [&::-webkit-scrollbar]:hidden">
            <div className="text-xl font-semibold px-4 py-2 w-min bg-neutral-950 rounded">
                <div className="flex gap-2 text-lg w-max">
                    <span className="text-red-600 ">Rolling:</span>
                    <span className="text-white">Gorlock the Destroyer</span>
                </div>
                <div className="flex justify-between">
                    <span className="px-2 text-amber-500">{diceCount}{selectedDice} <span
                        className="text-xl">+</span> {totalModifier} </span>
                    <span className="text-white">-</span>
                    <div className="text-emerald-400">
                        {randomNumber}
                    </div>
                </div>
            </div>
            <div className="text-xl font-semibold px-4 py-2 w-min bg-neutral-950 rounded">
                <div className="flex gap-2 text-lg w-max">
                    <span className="text-red-600 ">Rolling:</span>
                    <span className="text-white">Gorlock the Destroyer</span>
                </div>
                <div className="flex justify-between">
                    <span className="px-2 text-amber-500">{diceCount}{selectedDice} <span
                        className="text-xl">+</span> {totalModifier} </span>
                    <span className="text-white">-</span>
                    <div className="text-emerald-400">
                        {randomNumber}
                    </div>
                </div>
            </div><div className="text-xl font-semibold px-4 py-2 w-min bg-neutral-950 rounded">
            <div className="flex gap-2 text-lg w-max">
                <span className="text-red-600 ">Rolling:</span>
                <span className="text-white">Gorlock the Destroyer</span>
            </div>
            <div className="flex justify-between">
                    <span className="px-2 text-amber-500">{diceCount}{selectedDice} <span
                        className="text-xl">+</span> {totalModifier} </span>
                <span className="text-white">-</span>
                <div className="text-emerald-400">
                    {randomNumber}
                </div>
            </div>
        </div>
        </div>
    );
};

export default ResultControls;
