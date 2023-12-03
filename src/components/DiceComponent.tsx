import React, { useState } from 'react';
import DiceControls from './DiceControls';
import ModifierControls from './ModifierControls';
import DiceInterface from "../interfaces/dice";
import ModifiersInterface from "../interfaces/modifiers";

function DiceComponent() {
    const [randomNumber, setRandomNumber] = useState<number>(0);
    const [diceResults, setDiceResults] = useState<number[]>([]);
    const [selectedDice, setSelectedDice] = useState<keyof DiceInterface | null>(null);
    const [diceCount, setDiceCount] = useState<number>(0);
    const [totalModifier, setTotalModifier] = useState<number>(0);

    const diceValues: DiceInterface = {
        d20: 20,
        d12: 12,
        d10: 10,
        d8: 8,
        d6: 6,
        d4: 4,
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
        if (isNaN(parsedSides) || parsedSides <= 0) {
            throw new Error('Yüzlü zarın sayısı pozitif bir tam sayı olmalıdır.');
        }
        return Math.floor(Math.random() * parsedSides) + 1;
    };

    const rollCustomDice = (sides: number, count: number): void => {
        const results = Array.from({ length: count }, () => rollDie(sides));
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
        <div className="text-center mt-8">
            <h1 className="text-3xl font-bold">Zar Uygulaması</h1>
            <DiceControls
                diceValues={diceValues}
                handleDiceButtonClick={handleDiceButtonClick}
                handleRollButtonClick={handleRollButtonClick}
                handleClearButtonClick={handleClearButtonClick}
                selectedDice={selectedDice}
                diceCount={diceCount}
                randomNumber={randomNumber}
                diceResults={diceResults}
                totalModifier={totalModifier}
            />
            <ModifierControls
                decreaseValues={decreaseValues}
                increaseValues={increaseValues}
                handleModifierButtonClick={handleModifierButtonClick}
            />
        </div>
    );
}

export default DiceComponent;
