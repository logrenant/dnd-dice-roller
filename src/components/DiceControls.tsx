import React from 'react';
import DiceInterface from "../interfaces/dice";

interface DiceControlsProps {
    diceValues: DiceInterface;
    handleDiceButtonClick: (diceType: keyof DiceInterface) => void;
    handleRollButtonClick: () => void;
    selectedDice: keyof DiceInterface | null;
    diceCount: number;
    randomNumber: number;
    diceResults: number[];
    totalModifier: number;
}


const DiceControls: React.FC<DiceControlsProps> = ({
                                                       diceValues,
                                                       handleDiceButtonClick,
                                                       handleRollButtonClick,
                                                       selectedDice,
                                                       diceCount,
                                                       randomNumber,
                                                       diceResults,
                                                       totalModifier,
                                                   }) => {
    return (
        <div className="w-full">
            <div>
                <div className="flex flex-col justify-center items-start mt-4">
                    <div className="text-white text-xl">
                        Dices
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="w-[300px] flex flex-wrap items-start">
                            {Object.keys(diceValues).map((diceType) => (
                                <button
                                    key={diceType}
                                    className={`m-1 ${selectedDice === diceType ? 'text-emerald-400 p-1 rounded bg-neutral-950' : 'text-emerald-400 p-1 rounded bg-neutral-950'}`}
                                    onClick={() => handleDiceButtonClick(diceType as keyof DiceInterface)}
                                >
                                    1{diceType}
                                </button>
                            ))}
                        </div>
                        <button className="bg-neutral-950 w-full rounded text-amber-500"
                                onClick={handleRollButtonClick}>
                            ROLL
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiceControls;
