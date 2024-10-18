"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Driver = () => {
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
    fetch(`https://ergast.com/api/f1/${selectedSeason}/driverStandings.json`) // Fetch data for the selected season (or current year)
      .then((response) => response.json())
      .then((data) => {
        setData(data.MRData.StandingsTable.StandingsLists[0].DriverStandings); // Correct data path
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [season, currentYear]); // Re-run useEffect when season or current year changes

  // Helper function to get the appropriate flag based on nationality
  const getFlagImage = (nationality) => {
    switch (nationality) {
      case "Dutch":
        return "/images/flags/netherlands.png";
      case "British":
        return "/images/flags/uk.png";
      case "German":
        return "/images/flags/germany.png";
      case "Spanish":
        return "/images/flags/spain.png";
      case "Monegasque":
        return "/images/flags/monaco.png";
      case "Australian":
        return "/images/flags/australia.png";
      case "Mexican":
        return "/images/flags/mexico.png";
      case "Canadian":
        return "/images/flags/canada.png";
      case "Finnish":
        return "/images/flags/finland.png";
      case "French":
        return "/images/flags/france.png";
      case "Japanese":
        return "/images/flags/japan.png";
      case "Thai":
        return "/images/flags/thailand.png";
      case "Danish":
        return "/images/flags/denmark.png";
      case "Chinese":
        return "/images/flags/china.png";
      case "American":
        return "/images/flags/usa.png";
      case "Argentinian ":
        return "/images/flags/argentina.png";
      default:
        return `/images/flags/${nationality}.png`;
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      {/* Dynamic season label */}
      <div className="mx-5 my-5 border-2 border-b-0 border-l-0 border-t-black border-r-black rounded-tr-lg flex items-center">
        {/* Show actual year instead of 'Current' */}
        <label className="font-bruno text-2xl">
          {season === "Current" ? currentYear : season} Formula 1 Drivers
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

      {/* Render driver data */}
      {data &&
        data.map((driver, index) => {
          const nationality = driver.Driver.nationality;
          const team = driver.Constructors[0].name;
          const givenName = driver.Driver.givenName; // First name
          const familyName = driver.Driver.familyName; // Last name

          return (
            <div
              key={index}
              className="bg-secondary mb-5 mx-5 px-p10 py-p10 text-white rounded-tr-lg font-raleway"
            >
              <div className="flex flex-row justify-between items-center font-bold">
                <h1 className="text-2xl">{driver.position}</h1>
                <label className="text-base py-1">{driver.points} points</label>
              </div>
              <hr className="text-white my-2"></hr>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <label>{givenName}</label>
                  <label className="font-bold">{familyName}</label>
                </div>
                <Image
                  src={getFlagImage(nationality)}
                  alt={`Country flag for ${nationality}`}
                  width={100}
                  height={100}
                  className="rounded-md h-6 w-10"
                />
              </div>
              <hr className="text-white my-2"></hr>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-around">
                  <label>{team}</label>
                  <Image
                    src={`/images/teams/${team}.png`}
                    alt={`Team logo for ${team}`}
                    width={100}
                    height={100}
                    className="h-auto w-20"
                  />
                </div>
                <Image
                  priority={true}
                  src={`/images/drivers/${givenName}_${familyName}.png`}
                  alt={`Driver picture for ${givenName} ${familyName}`}
                  width={100}
                  height={100}
                  className="w-auto h-36"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Driver;
