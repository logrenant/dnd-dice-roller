import React from 'react';
import ModifiersInterface from "../interfaces/modifiers";

interface ModifierControlsProps {
    decreaseValues: ModifiersInterface;
    increaseValues: ModifiersInterface;
    handleModifierButtonClick: (modifierValue: number) => void;
}

const ModifierControls: React.FC<ModifierControlsProps> = ({decreaseValues, increaseValues, handleModifierButtonClick,}) => {
    return (
        <div className="flex flex-col gap-2 justify-center">
            <div className="flex justify-center">
                {Object.keys(decreaseValues).map((decreaseValueKey) => {
                    const decreaseValue = parseInt(decreaseValueKey, 10);
                    return (
                        <button
                            key={decreaseValueKey}
                            className="m-2"
                            onClick={() => handleModifierButtonClick(decreaseValue)}
                        >
                            {decreaseValue}
                        </button>
                    );
                })}
            </div>
            <div className="flex justify-center">
                {Object.keys(increaseValues).map((increaseValueKey) => {
                    const increaseValue = parseInt(increaseValueKey, 10);
                    return (
                        <button
                            key={increaseValueKey}
                            className="m-2"
                            onClick={() => handleModifierButtonClick(increaseValue)}
                        >
                            {increaseValue}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ModifierControls;

