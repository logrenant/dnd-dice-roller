import React from 'react';
import DiceInterface from "../interfaces/dice";

interface DiceControlsProps {
    diceValues: DiceInterface;
    handleDiceButtonClick: (diceType: keyof DiceInterface) => void;
    handleRollButtonClick: () => void;
    handleClearButtonClick: () => void;
    selectedDice: keyof DiceInterface | null;
    diceCount: number;
    randomNumber: number;
    diceResults: number[];
    totalModifier: number;
}

const DiceControls: React.FC<DiceControlsProps> = ({ diceValues,handleDiceButtonClick, handleRollButtonClick, handleClearButtonClick, selectedDice, diceCount, randomNumber, diceResults, totalModifier, }) => {
    return (
        <div>
            <div className="flex justify-center mt-4">
                {Object.keys(diceValues).map((diceType) => (
                    <button
                        key={diceType}
                        className={`m-2 ${selectedDice === diceType ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => handleDiceButtonClick(diceType as keyof DiceInterface)}
                    >
                        {diceType}
                    </button>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button className="m-2 bg-green-500 text-white" onClick={handleRollButtonClick}>
                    ROLL
                </button>
                <button className="m-2 bg-red-500 text-white" onClick={handleClearButtonClick}>
                    Clear
                </button>
            </div>
            <div className="text-2xl font-bold mt-4">
                Seçilen Zar Türü:
                {selectedDice && (
                    <span className="px-2">{diceCount} {selectedDice} </span>
                )}
            </div>
            <div>
                Modifiers: <span className="px-2"> {totalModifier} </span>
            </div>
            {
                randomNumber !== null && (
                    <div className="text-2xl font-bold mt-4">
                        Toplam Sonuç: {randomNumber} (Zarlar: {diceResults.join(', ')} + {totalModifier})
                    </div>
                )
            }
        </div>
    );
};

export default DiceControls;
