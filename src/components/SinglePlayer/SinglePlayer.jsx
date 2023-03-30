import React from "react";

const SinglePlayer = ({ player, handleSelectPlayer, handleUnSelectPlayer }) => {
  const { about, id, job, name, picture, price } = player;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all">
      <figure>
        <img src={picture} className="h-52 w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {name}</h2>
        <p>{about}</p>
        <p className="font-bold">Job : {job}</p>
        <p className="font-bold text-xl">Price : ${price}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-sm text-md w-full"
            onClick={(e) => handleSelectPlayer(id, picture, name, price)}
          >
            Select Players
          </button>
          <button
            className="btn btn-primary btn-sm text-md w-full"
            onClick={(e) => handleUnSelectPlayer(id)}
          >
            UnSelect Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
