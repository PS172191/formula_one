"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Round = () => {
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
    fetch(`https://ergast.com/api/f1/${selectedSeason}.json`) // Fetch data for the selected season (or current year)
      .then((response) => response.json())
      .then((data) => {
        setData(data.MRData.RaceTable.Races);
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
          {season === "Current" ? currentYear : season} Formula 1 Season
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

      {/* Render race data */}
      {data &&
        data.map((race, index) => {
          const country = race.Circuit.Location.country;

          return (
            <div
              key={index}
              className="bg-secondary my-5 mx-5 p-p10 text-white text-xs rounded-tr-lg font-raleway"
            >
              <div className="flex flex-row justify-between font-bold">
                <div className="flex flex-col pb-px10">
                  <label>Round: {race.round}</label>
                  <label className="py-1">{race.date}</label>
                </div>
                <div className="items-center">
                  <Image
                    src={`/images/flags/${country}.png`}
                    alt={`Country flag for ${country}`}
                    width={100}
                    height={100}
                    className="rounded-md h-6 w-10"
                  />
                </div>
              </div>
              <hr className="text-white my-1"></hr>
              <div className="flex flex-col">
                <label className="font-bold">{race.Circuit.circuitName}</label>
                <label className="py-1">{race.raceName}</label>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Round;
