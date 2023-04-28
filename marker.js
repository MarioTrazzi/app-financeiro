import { Wrapper } from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
    return <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY} version="beta" libraries={["marker"]}>
        <MyMap />
    </Wrapper>;
}

const mapOptions = {
    mapId: import.meta.env.NEXT_PUBLIC_MAP_ID,
    center: { lat: 43.66293, lng: -79.39314 },
    zoom: 10,
    disableDefaultUI: true,
   };

 function MyMap() {
  const [map, setMap] = useState();
  const ref = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  return (
      <>
      <div ref={ref} if="map" />
      {map && <Weather map={map} />}
      </>
 );
}

const weatherData = {
    A: {
      name: "Toronto",
      postion: { lat: 43.66293, lng: -79.39314},
      climate: "Raining",
      temp: 20,
      fiveDay: [15, 18, 12, 22, 20],
    },
    B: {
      name: "Toronto",
      postion: { lat: 43.66293, lng: -79.39314},
      climate: "Raining",
      temp: 20,
      fiveDay: [15, 18, 12, 22, 20],
    },
    C: {
      name: "Toronto",
      postion: { lat: 43.66293, lng: -79.39314},
      climate: "Raining",
      temp: 20,
      fiveDay: [15, 18, 12, 22, 20],
    },
  }

  function Weather({map}) {
    const [data, setData] = useState(weatherData);

    return (
    <>
        {Object.entries(data).map(([key, weather]) => (
      <Marker key={key} map={map} position={weather.position}>
        <div>
            <h2>{weather.climate}</h2>
        </div>
      </Marker>
    ))}
    </>
    );
  }

  function Marker({map, children}) {
    const markerRef = useRef();
    const rootRef = useRef();

    useEffect(() => {
        if (!rootRef.current) {
            const container = document.createElement("div");
            rootRef.current = createRoot(container);

            markerRef.current = new google.maps.marker.AdvancedMarkerView({
                position,
                content: container
            });
        }        
    }, []);
  }
