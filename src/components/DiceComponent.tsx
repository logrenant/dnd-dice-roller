import React, {useState} from 'react';
import DiceControls from './DiceControls';
import ModifierControls from './ModifierControls';
import DiceInterface from "../interfaces/dice";
import ModifiersInterface from "../interfaces/modifiers";
import ResultControls from "./ResultControls";

function DiceComponent() {
    const [randomNumber, setRandomNumber] = useState<number>(0);
    const [diceResults, setDiceResults] = useState<number[]>([]);
    const [selectedDice, setSelectedDice] = useState<keyof DiceInterface | null>(null);
    const [diceCount, setDiceCount] = useState<number>(0);
    const [totalModifier, setTotalModifier] = useState<number>(0);

    const diceValues: DiceInterface = {
        d4: 4,
        d6: 6,
        d8: 8,
        d10: 10,
        d12: 12,
        d20: 20,
    };

    const decreaseValues: ModifiersInterface = {
        '-1': -1,
        '-3': -3,
        '-5': -5,
    };

    const increaseValues: ModifiersInterface = {
        '1': 1,
        '3': 3,
        '5': 5,
    };

    const rollDie = (sides: number): number => {
        const parsedSides = parseInt(sides.toString(), 10);
        return Math.floor(Math.random() * parsedSides) + 1;
    };

    const rollCustomDice = (sides: number, count: number): void => {
        const results = Array.from({length: count}, () => rollDie(sides));
        const totalResult = results.reduce((sum, result) => sum + result, 0);
        setDiceResults(results);
        setRandomNumber(totalResult + totalModifier);
    };

    const handleDiceButtonClick = (diceType: keyof DiceInterface): void => {
        if (selectedDice === diceType) {
            setDiceCount((prevCount) => prevCount + 1);
        } else {
            setSelectedDice(diceType);
            setDiceCount(1);
        }
    };

    const handleModifierButtonClick = (modifierValue: number): void => {
        setTotalModifier((prevTotal) => prevTotal + modifierValue);
    };

    const handleRollButtonClick = (): void => {
        if (selectedDice) {
            rollCustomDice(diceValues[selectedDice], diceCount);
        }
    };

    const handleClearButtonClick = (): void => {
        setSelectedDice(null);
        setDiceCount(0);
        setDiceResults([]);
        setRandomNumber(0);
        setTotalModifier(0);
    };

    return (
        <div className="flex flex-col items-start text-center m-8 p-4 bg-neutral-800 rounded-lg w-[520px]">
            <div className="flex w-full justify-between mb-2">
                <h1 className="text-3xl text-white">Dice Roller</h1>
                <button className="text-red-600" onClick={handleClearButtonClick}>
                    Clear
                </button>
            </div>
            <div className="w-full">
                <ResultControls
                    selectedDice={selectedDice}
                    diceCount={diceCount}
                    randomNumber={randomNumber}
                    diceResults={diceResults}
                    totalModifier={totalModifier}
                />
            </div>
            <div className="flex w-full">
                <ModifierControls
                    decreaseValues={decreaseValues}
                    increaseValues={increaseValues}
                    handleModifierButtonClick={handleModifierButtonClick}
                />
                <DiceControls
                    diceValues={diceValues}
                    handleDiceButtonClick={handleDiceButtonClick}
                    handleRollButtonClick={handleRollButtonClick}
                    selectedDice={selectedDice}
                    diceCount={diceCount}
                    randomNumber={randomNumber}
                    diceResults={diceResults}
                    totalModifier={totalModifier}
                />
            </div>
        </div>
    );
}

export default DiceComponent;
