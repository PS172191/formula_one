"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Team = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [season, setSeason] = useState("Current"); // Default to "Current" season

  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  // Function to handle season change
  const SeasonChange = (event) => {
    setSeason(event.target.value); // Update the season value based on the user's selection
  };

  useEffect(() => {
    const selectedSeason = season === "Current" ? currentYear : season;

    setLoading(true); // Set loading to true when season changes
    fetch(
      `https://ergast.com/api/f1/${selectedSeason}/constructorStandings.json`
    ) // Fetch data for the selected season (or current year)
      .then((response) => response.json())
      .then((data) => {
        setData(
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        ); // Correct data path
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [season, currentYear]); // Re-run useEffect when season or current year changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      {/* Dynamic season label */}
      <div className="mx-5 my-5 border-2 border-b-0 border-l-0 border-t-black border-r-black rounded-tr-lg flex items-center">
        {/* Show actual year instead of 'Current' */}
        <label className="font-bruno text-2xl">
          {season === "Current" ? currentYear : season} Formula 1 Teams
        </label>
      </div>

      {/* Season selection dropdown */}
      <div className="font-raleway my-5">
        <label htmlFor="season-select" className="ml-5 text-base">
          Select Season:{" "}
        </label>
        <select
          id="season-select"
          value={season}
          onChange={SeasonChange}
          className="p-1 border border-primary bg-primary text-white rounded-md"
        >
          <option value="2024" className="bg-primary">
            2024
          </option>
          <option value="2023" className="bg-primary">
            2023
          </option>
          <option value="2022" className="bg-primary">
            2022
          </option>
          <option value="2021" className="bg-primary">
            2021
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Render team data */}
        {data &&
          data.map((team, index) => {
            const name = team.Constructor.name;
            return (
              <div
                key={index}
                className="bg-secondary mb-5 mx-5 px-p10 py-p10 text-white rounded-tr-lg font-raleway"
              >
                <div className="flex flex-row justify-between items-center font-bold">
                  <h1 className="text-2xl">{team.position}</h1>
                  <label className="text-base py-1">{team.points} points</label>
                </div>
                <hr className="text-white my-2"></hr>
                <div className="flex flex-row justify-between">
                  <label className="text-lg font-bold">{name}</label>
                  <Image
                    priority={true}
                    src={`/images/teams/${name}.png`}
                    alt={`Team picture for ${name}`}
                    width={100}
                    height={100}
                    className="w-auto h-7"
                  />
                </div>
                <hr className="text-white my-2"></hr>
                <div>
                  <Image
                    priority={true}
                    src={`/images/cars/${name}.svg`}
                    alt={`Car picture for ${name}`}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Team;
