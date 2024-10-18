"use client";

const InfoTab = () => {
  return (
    <div className="bg-primary font-raleway font-bold text-base text-black w-96 rounded-tr-lg rounded-br-lg mt-5 p-5">
      <h1>
        Welcome to my F1 Information app!
        <br />
        <br />
      </h1>
      <p>
        This is a personal project that i have made for school. The purpose of
        this app was to practice my skills in React and Next.js.
        <br />
        <br />
        I decided to combine one of my biggest passions with my study to keep it
        fun but most importantly very learnful! On this app you can navigate to
        different pages showing information about Formula 1 such as the season
        schedules, the drivers, the teams etc.
        <br />
        <br />
        This app is still in development and i will keep updating it with new
        features and information. It makes use of the Ergast API for now. But i
        am planning on building my own for the app.
      </p>
    </div>
  );
};

export default InfoTab;
