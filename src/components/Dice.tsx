import React, {useState} from 'react';
import DiceInterface from "../interfaces/index";

function Dice() {
    const [randomNumber, setRandomNumber] = useState<number>(0);
    const [diceResults, setDiceResults] = useState<number[]>([]);
    const [selectedDice, setSelectedDice] = useState<keyof DiceInterface | null>(null);
    const [diceCount, setDiceCount] = useState<number>(0);

    const diceValues: DiceInterface = {
        d20: 20,
        d12: 12,
        d10: 10,
        d8: 8,
        d6: 6,
        d4: 4,
    };

    const rollDie = (sides: number) => {
        const parsedSides = parseInt(sides.toString(), 10);
        if (isNaN(parsedSides) || parsedSides <= 0) {
            throw new Error('Yüzlü zarın sayısı pozitif bir tam sayı olmalıdır.');
        }
        return Math.floor(Math.random() * parsedSides) + 1;
    };

    const rollCustomDice = (sides: number, count: number) => {
        const results = Array.from({length: count}, () => rollDie(sides));
        const totalResult = results.reduce((sum, result) => sum + result, 0);
        setDiceResults(results);
        setRandomNumber(totalResult);
    };

    const handleDiceButtonClick = (diceType: keyof DiceInterface) => {
        if (selectedDice === diceType) {
            setDiceCount((prevCount) => prevCount + 1);
        } else {
            setSelectedDice(diceType);
            setDiceCount(1);
        }
    };

    const handleRollButtonClick = () => {
        if (selectedDice) {
            rollCustomDice(diceValues[selectedDice], diceCount);
        }
    };

    const handleClearButtonClick = () => {
        setSelectedDice(null);
        setDiceCount(0);
        setDiceResults([]);
        setRandomNumber(0);
    }

    return (
        <div className="text-center mt-8">
            <h1 className="text-3xl font-bold">Zar Uygulaması</h1>
            <div className="flex justify-center mt-4">
                {Object.keys(diceValues).map((diceType) => (
                    <button
                        key={diceType}
                        className="m-2"
                        onClick={() => handleDiceButtonClick(diceType as keyof DiceInterface)}
                    >
                        {diceType}
                    </button>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button className="m-2" onClick={handleRollButtonClick}>
                    ROLL
                </button>
                <button className="m-2" onClick={handleClearButtonClick}>
                    Clear
                </button>
            </div>
            <div className="text-2xl font-bold mt-4">
                Seçilen Zar Türü:
                {selectedDice && (
                    <span className="px-2">{diceCount}{selectedDice} </span>
                )}
            </div>
            {randomNumber !== null && (
                <div className="text-2xl font-bold mt-4">
                    Toplam Sonuç: {randomNumber} (Zarlar: {diceResults.join(', ')})
                </div>
            )}
        </div>
    );
}

export default Dice;
