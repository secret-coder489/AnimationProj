import React, { useState } from "react";
import { motion } from "framer-motion";
import CatSprite from "./CatSprite";
import MoveSteps from "./animations/MoveSteps";
import TurnDegrees from "./animations/TurnDegrees";
import GoToPosition from "./animations/GoToPosition";
import RepeatAnimation from "./animations/RepeatAnimation";

export default function PreviewArea() {
  const [animations, setAnimations] = useState([]);
  const [sprites, setSprites] = useState([{ id: 1, animations: [] }]);

  const addSprite = () => {
    setSprites([...sprites, { id: sprites.length + 1, animations: [] }]);
  };

  const handlePlay = () => {
    // Define different animations to be applied to sprites
    const animationsToApply = [
      { type: 'move', args: [20] },
      { type: 'turn', args: [30] },
      { type: 'goto', args: [100, 100] },
      { type: 'repeat', args: [5] }
    ];

    // Apply animations to each sprite
    setSprites(sprites.map((sprite, index) => ({
      ...sprite,
      animations: animationsToApply // You can customize which animations apply to which sprite
    })));
  };

  const handleAnimationSelect = (type, ...args) => {
    const newAnimation = { type, args };
    setAnimations([newAnimation]);
    setSprites(sprites.map(sprite => ({
      ...sprite,
      animations: [newAnimation]
    })));
  };

  return (
    <div className="flex-1 h-full overflow-y-auto p-4 bg-gray-50">
      <button onClick={addSprite} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add Sprite
      </button>
      <button onClick={handlePlay} className="mb-4 px-4 py-2 bg-green-500 text-white rounded">
        Play
      </button>
      <div className="mb-4">
        {/* Animation selection controls */}
        <MoveSteps steps={10} onClick={() => handleAnimationSelect('move', 10)} />
        <GoToPosition x={100} y={100} onClick={() => handleAnimationSelect('goto', 100, 100)} />
        <TurnDegrees degrees={15} onClick={() => handleAnimationSelect('turn', 15)} />
        <RepeatAnimation times={10} onClick={() => handleAnimationSelect('repeat', 10)} />
      </div>
      <div className="flex flex-wrap gap-4">
        {sprites.map((sprite) => (
          <CatSprite key={sprite.id} id={sprite.id} animations={sprite.animations} />
        ))}
      </div>
    </div>
  );
}
