import React from 'react';
import ModifiersInterface from "../interfaces/modifiers";

interface ModifierControlsProps {
    decreaseValues: ModifiersInterface;
    increaseValues: ModifiersInterface;
    handleModifierButtonClick: (modifierValue: number) => void;
}

const ModifierControls: React.FC<ModifierControlsProps> = ({
                                                               decreaseValues,
                                                               increaseValues,
                                                               handleModifierButtonClick,

                                                           }) => {
    return (
        <div className="flex flex-col w-full justify-end items-start text-white mt-4">
            <div className="text-xl">
                Modifiers
            </div>
                <div className="flex flex-col items-start">
                    <div>
                        {Object.keys(decreaseValues).map((decreaseValueKey) => {
                            const decreaseValue = parseInt(decreaseValueKey, 10);
                            return (
                                <button
                                    key={decreaseValueKey}
                                    className="m-1 bg-neutral-950 px-2 py-1 rounded"
                                    onClick={() => handleModifierButtonClick(decreaseValue)}
                                >
                                    {decreaseValue}
                                </button>
                            );
                        })}
                    </div>
                    <div>
                        {Object.keys(increaseValues).map((increaseValueKey) => {
                            const increaseValue = parseInt(increaseValueKey, 10);
                            return (
                                <button
                                    key={increaseValueKey}
                                    className="m-1 bg-neutral-950 px-2 py-1 rounded"
                                    onClick={() => handleModifierButtonClick(increaseValue)}
                                >
                                    +{increaseValue}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
    );
};

export default ModifierControls;

