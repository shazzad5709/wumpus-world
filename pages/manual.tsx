import React from 'react';

const ManualCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white rounded-lg shadow-xl p-6 mx-auto my-8 w-4/5">
      <h5 className="text-2xl font-bold text-gray-900 mb-4">Wumpus-World Game Manual</h5>
      <div className="text-gray-700">
        <p>
          The neighborhood of a node consists of the four squares north, south, east, west of the given square.
          In a square, the agent gets a vector of percepts, with components:
        </p>
        <ul className="list-inside list-disc pl-4">
          <li>Stench</li>
          <li>Breeze</li>
          <li>Glitter</li>
          <li>Bump</li>
          <li>Scream</li>
        </ul>

        <p>
          <b>For example [Stench, None, Glitter, None, None]</b>
        </p>

        <h3 className="font-bold mt-4">Rules:</h3>
        <ul className="list-inside list-disc pl-4">
          <li>Stench is perceived at a square iff the wumpus is at this square or in its neighborhood.</li>
          <li>Breeze is perceived at a square iff a pit is in the neighborhood of this square.</li>
          <li>Glitter is perceived at a square iff gold is in this square.</li>
          <li>Bump is perceived at a square iff the agent goes Forward into a wall.</li>
          <li>Scream is perceived at a square iff the wumpus is killed anywhere in the cave.</li>
        </ul>

        <h3 className="font-bold mt-4">An agent can do the following actions (one at a time):</h3>
        <ul className="list-inside list-disc pl-4">
          <li>Turn(Right), Turn(Left), Forward, Shoot, Grab, Release, Climb</li>
          <li>The agent can go Forward in the direction it is currently facing, or Turn Right, or Turn Left. Going Forward into a wall will generate a Bump percept.</li>
          <li>The agent has a single arrow that it can Shoot. It will go straight in the direction faced by the agent until it hits (and kills) the wumpus or hits (and is absorbed by) a wall.</li>
          <li>The agent can Grab a portable object at the current square or it can Release an object that it is holding.</li>
          <li>The agent can Climb out of the cave if at the Start square.</li>
          <li>The Start square is (1,1) and initially, the agent is facing east. The agent dies if it is in the same square as the wumpus.</li>
          <li>The objective of the game is to kill the wumpus, to pick up the gold, and to climb out with it.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default ManualCard;
