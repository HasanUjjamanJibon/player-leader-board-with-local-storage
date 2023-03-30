import React from "react";

const PlayersTable = ({ playerBoard }) => {
  console.log(playerBoard);

  let serialNo = 1;
  return (
    <div>
      <table className="w-full text-center border-2 border-b-0 ">
        <tr className="border-2 border-b-0">
          <th className="font-bold px-3">Sl.</th>
          <th className="px-2 text-center">Img</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {playerBoard?.map((pd) => (
          <tr className="border-2 ">
            <td className="font-bold px-3 ">{serialNo++}</td>
            <td className="text-center">
              <img className="h-10 w-10 inline-block" src={pd.picture} alt="" />
            </td>
            <td>{pd.name}</td>
            <td>${pd.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PlayersTable;
