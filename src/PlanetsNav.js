import React from "react";
import { Link } from "react-router-dom";

function PlanetsNav({ planetName }) {
  let classes = " leading-[5.25rem] text-sm text-gray-400 hover:text-gray-200 hover:border-t-[3.5px] hover:border-cyan-400 duration-200";
  let styled_classes = "  leading-[5.25rem] text-sm border-t-[3.5px] border-cyan-400 ";
  let planets_list = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  let planets = planets_list.map((planet) => {
    return (
      <Link key={planet}
        to={"/" + planet.toLowerCase()}
        className={
          planetName === planet.toLowerCase() ? styled_classes : classes
        }
      >
        {planet.toUpperCase()}
      </Link>
    );
  });
  return <div className=" flex gap-10 ">{planets}</div>;
}

export default PlanetsNav;
