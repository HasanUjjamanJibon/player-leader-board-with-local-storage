import React from "react";
import { useEffect, useState } from "react";
import PlayersTable from "../PlayersTable/PlayersTable";

const LeaderBoard = ({ leaderBoard }) => {
  const [playerBoard, setPlayerBorad] = useState(leaderBoard);

  useEffect(() => {
    const PlayerBoardsList = JSON.parse(localStorage.getItem("players"));
    setPlayerBorad(PlayerBoardsList);
  }, [leaderBoard]);

  return (
    <div className="sticky top-10 col-span-1">
      <h2 className="font-bold bg-teal-200 text-center py-4 px-2">
        Players List :
      </h2>
      <PlayersTable playerBoard={playerBoard}></PlayersTable>
    </div>
  );
};

export default LeaderBoard;
