# solar-system

## Future solar system in Javascript (Vanilla), in the browser, for educational and planet gazing purposes.

Planets will orbit around Sun, and moons will orbit around their planets.

Not all moons will be displayed, only the 2 or 3 biggest of each planets.

Information about the space object will be displayed when hovering/clicking on it.

### Data Units (in JSON file) :

- distSun : Distance from Sun

  - Unit : AU -> Astronomical Unit. 1 AU = Distance from Earth to Sun

- distEarth : Distance from Earth

  - Unit : AU

- sizeKm : Equatorial diameter

  - Unit : Km

- surfTemp : Surface temperature

  - Unit : C°

- mass : Mass

  - Unit : Earths (E)
  - Example : Earth = 1 E, Mars = 0.11 E

- rotation : Object rotation

  - Unit : Earth Day (d)
  - Example : Earth = 1d, Mars = 1.02d

- gravity : Surface gravity

  - Unit : Earth Gravity (g)
  - Example : Earth = 1g, Mars = 0.37g

- type : Type of planet

  - Example : Earth = "rock", Jupiter = "gas"
  - Note : Moons are all rock type (not big enough to gather gas)

- revAroundSun = Revolution duration around sun

  - Unit : Earth Day (d)
  - Example : Earth = 365d (1 Earth Year), Mercury = 88d
