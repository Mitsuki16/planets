import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import ParaContent from "./ParaContent";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PlanetsNav from "./PlanetsNav";

const PLANETS = {
  mercury: {
    name: "Mercury",
    overview: {
      content:
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    },
    structure: {
      content:
        "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      source:
        "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
    },
    geology: {
      content:
        "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      source:
        "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
    },
    rotation: "58.6 Days",
    revolution: "87.97 Days",
    radius: "2,439.7 KM",
    temperature: "430°c",
    images: {
      planet: "./assets/planet-mercury.svg",
      internal: "./assets/planet-mercury-internal.svg",
      geology: "./assets/geology-mercury.png",
    },
  },
  venus: {
    name: "Venus",
    overview: {
      content:
        "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      source: "https://en.wikipedia.org/wiki/Venus",
    },
    structure: {
      content:
        "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      source: "https://en.wikipedia.org/wiki/Venus#Internal_structure",
    },
    geology: {
      content:
        "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      source: "https://en.wikipedia.org/wiki/Venus#Surface_geology",
    },
    rotation: "243 Days",
    revolution: "224.7 Days",
    radius: "6,051.8 KM",
    temperature: "471°c",
    images: {
      planet: "./assets/planet-venus.svg",
      internal: "./assets/planet-venus-internal.svg",
      geology: "./assets/geology-venus.png",
    },
  },
  earth: {
    name: "Earth",
    overview: {
      content:
        "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      source: "https://en.wikipedia.org/wiki/Earth",
    },
    structure: {
      content:
        "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      source: "https://en.wikipedia.org/wiki/Earth#Internal_structure",
    },
    geology: {
      content:
        "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
      source: "https://en.wikipedia.org/wiki/Earth#Surface",
    },
    rotation: "0.99 Days",
    revolution: "365.26 Days",
    radius: "6,371 KM",
    temperature: "16°c",
    images: {
      planet: "./assets/planet-earth.svg",
      internal: "./assets/planet-earth-internal.svg",
      geology: "./assets/geology-earth.png",
    },
  },
  mars: {
    name: "Mars",
    overview: {
      content:
        'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet."',
      source: "https://en.wikipedia.org/wiki/Mars",
    },
    structure: {
      content:
        "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      source: "https://en.wikipedia.org/wiki/Mars#Internal_structure",
    },
    geology: {
      content:
        "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      source: "https://en.wikipedia.org/wiki/Mars#Surface_geology",
    },
    rotation: "1.03 Days",
    revolution: "1.88 Years",
    radius: "3,389.5 KM",
    temperature: "-28°c",
    images: {
      planet: "./assets/planet-mars.svg",
      internal: "./assets/planet-mars-internal.svg",
      geology: "./assets/geology-mars.png",
    },
  },
  jupiter: {
    name: "Jupiter",
    overview: {
      content:
        "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
      source: "https://en.wikipedia.org/wiki/Jupiter",
    },
    structure: {
      content:
        "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      source: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure",
    },
    geology: {
      content:
        "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      source:
        "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices",
    },
    rotation: "9.93 Hours",
    revolution: "11.86 Years",
    radius: "69,911 KM",
    temperature: "-108°c",
    images: {
      planet: "./assets/planet-jupiter.svg",
      internal: "./assets/planet-jupiter-internal.svg",
      geology: "./assets/geology-jupiter.png",
    },
  },
  saturn: {
    name: "Saturn",
    overview: {
      content:
        "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
      source: "https://en.wikipedia.org/wiki/Saturn",
    },
    structure: {
      content:
        "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
      source: "https://en.wikipedia.org/wiki/Saturn#Internal_structure",
    },
    geology: {
      content:
        "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      source: "https://en.wikipedia.org/wiki/Saturn#Atmosphere",
    },
    rotation: "10.8 Hours",
    revolution: "29.46 Years",
    radius: "58,232 KM",
    temperature: "-138°c",
    images: {
      planet: "./assets/planet-saturn.svg",
      internal: "./assets/planet-saturn-internal.svg",
      geology: "./assets/geology-saturn.png",
    },
  },
  uranus: {
    name: "Uranus",
    overview: {
      content:
        "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      source: "https://en.wikipedia.org/wiki/Uranus",
    },
    structure: {
      content:
        "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      source: "https://en.wikipedia.org/wiki/Uranus#Internal_structure",
    },
    geology: {
      content:
        "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      source: "https://en.wikipedia.org/wiki/Uranus#Atmosphere",
    },
    rotation: "17.2 Hours",
    revolution: "84 Years",
    radius: "25,362 KM",
    temperature: "-195°c",
    images: {
      planet: "./assets/planet-uranus.svg",
      internal: "./assets/planet-uranus-internal.svg",
      geology: "./assets/geology-uranus.png",
    },
  },
  neptune: {
    name: "Neptune",
    overview: {
      content:
        "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
      source: "https://en.wikipedia.org/wiki/Neptune",
    },
    structure: {
      content:
        "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
      source: "https://en.wikipedia.org/wiki/Neptune#Internal_structure",
    },
    geology: {
      content:
        "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      source: "https://en.wikipedia.org/wiki/Neptune#Atmosphere",
    },
    rotation: "16.08 Hours",
    revolution: "164.79 Years",
    radius: "24,622 KM",
    temperature: "-201°c",
    images: {
      planet: "./assets/planet-neptune.svg",
      internal: "./assets/planet-neptune-internal.svg",
      geology: "./assets/geology-neptune.png",
    },
  },
};

function PlanetDetails() {
  const planetName = useParams();
  const [planets] = useState(PLANETS)
  const [paraTitle, setParaTitle] = useState("overview");
  
  let planet = {};
  for (let i in planets) {
    if (i === planetName["planetName"]) {
      planet = planets[i];
    }
  }

  let imagePath = "";
  if (paraTitle === "overview") {
    imagePath = planet.images.planet;
  } else if (paraTitle === "structure") {
    imagePath = planet.images.internal;
  } else if (paraTitle === "geology") {
    imagePath = planet.images.geology;
  }

  return (
    <div className="bg-[#090726]">
      <div className=" font-['League Spartan'] 
        text-white h-[100vh] ">
        <div className="px-10 flex justify-between items-center 
        border-b-[1px] border-gray-500 ">
          <div className=" h-[25pt] my-5  gap-3 flex">
            <Link to="/" className=" text-3xl font-['Antonio'] uppercase">Planets Facts</Link>
            <motion.img initial={{opacity: 0, scale: 0}} animate={{scale:1.2,opacity: 1, rotate: 360}} transition={{duration: 2}} src="\assets\star-icon.svg" />
          </div>
          <div className=" ">
            <div className="  ">
              <PlanetsNav planetName={planetName['planetName']} />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center  flex-col">
          <div
            className=" flex md:flex-row items-center
       justify-center flex-col   p-10 gap-5 "
          >
            <div className="   w-[30%] ">
              <AnimatePresence mode="wait">
                <motion.img
                  initial={{
                    x: "calc(40vw - 50%)",
                    opacity: 0,
                    scale: 0,
                    rotate: 0,
                  }}
                  key={imagePath}
                  animate={{
                    x: "calc(8vw - 20%)",
                    rotate: 360,
                    opacity: 1,
                    scale: 1.2,
                  }}
                  transition={{ duration: 1.4 }}
                  exit={{
                    x: "calc(1vw - 90%)",
                    rotate: 0,
                    opacity: 0,
                    scale: 0,
                    transition: { duration: 1 },
                  }}
                  className=" w-40 md:w-[60%]"
                  src={imagePath}
                />
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
            <motion.div
              initial={{
                x: "50%",
                opacity: 0,
                transition:{delay: 0} }}
                 key={planet.name}
              animate={{ x: "0%", opacity: 1, }}
              transition={{ duration: 1, delay: 0.2 }}
              exit={{ x: "50%",
              opacity: 0  }}
              className=" md:w-[60%] lg:w-[40%] xl:w-[25%] w-[22pc] h-[60%] "
            >
              <h1 className=" font-['Antonio']  text-[50px] uppercase">{planet.name}</h1>
              <ParaContent title={paraTitle} d={planet} />
              <div className="pt-8 w-[70%] flex-col text-[16px] gap-4 flex">
                <div
                  className={paraTitle==="overview"?"cursor-pointer border-2 p-2 bg-indigo-600":"cursor-pointer border-2 p-2 "}
                  onClick={() => setParaTitle("overview")}
                >
                  <span className=" pr-10 px-5 text-gray-400">01</span>
                  <button className="uppercase">overview</button>
                </div>
                <div
                  className={paraTitle==="structure"?"cursor-pointer border-2 p-2 bg-indigo-600":"cursor-pointer border-2 p-2 "}
                  onClick={() => setParaTitle("structure")}
                >
                  <span className=" pr-10 px-5 text-gray-400">02</span>
                  <button className=" uppercase">structure</button>
                </div>
                <div
                  className={paraTitle==="geology"?"cursor-pointer border-2 p-2 bg-indigo-600":"cursor-pointer border-2 p-2 "}
                  onClick={() => setParaTitle("geology")}
                >
                  <span className=" pr-10 px-5 text-gray-400">03</span>
                  <button className=" uppercase">geology</button>
                </div>
              </div>
            </motion.div></AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
          <motion.div key={planet.radius}
            className=" flex justify-center pt-20 "
            initial={{
              y: "50%",
              opacity: 0,
              transition:{delay: 0} }}
            animate={{ y: "10%", opacity: 1,  }}
            transition={{ duration: 1, delay: 0.2}}
            exit={{ y: "50%", opacity: 0 }}
          >
            <div
              className=" flex gap-16 
              [&>div_p]:uppercase
              [&>div_h2]:uppercase [&>div_h2]:text-gray-400 
              [&>div_p]:text-[30px] 
              [&>div]:border-2   [&>div]:border-gray-600
              [&>div]:w-[14pc]
              [&>div]:px-5 
              [&>div]:py-3 
              [&>div_p]:font-['Antonio']
              "
            >
              <div className=" flex flex-col gap-5">
                <h2>Rotation time</h2>
                <p>{planet.rotation}</p>
              </div>
              <div className=" flex flex-col gap-5">
                <h2>Revolution time</h2>
                <p>{planet.revolution}</p>
              </div>
              <div className=" flex flex-col gap-5">
                <h2>Radius</h2>
                <p>{planet.radius}</p>
              </div>
              <div className=" flex flex-col gap-5">
                <h2>Average Temp.</h2>
                <p>{planet.temperature}</p>
              </div>
            </div>
          </motion.div></AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default PlanetDetails;
