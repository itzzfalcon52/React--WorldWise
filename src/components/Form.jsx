// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

//import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const { createCity, isLoading } = useCities();

  const navigate = useNavigate();

  const [formLat, formLng] = useUrlPosition();
  const [geoisLoading, setgeoIsLoading] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [geoError, setGeoError] = useState("");

  useEffect(
    function () {
      if (!formLat && !formLng) return;
      async function fetchcity() {
        try {
          setgeoIsLoading(true);
          setGeoError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${formLat}&longitude=${formLng}`
          );
          const data = await res.json();
          if (!data.countryCode)
            throw new Error("please click on a valid city or locality😔");
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeoError(err.message);
        } finally {
          setgeoIsLoading(false);
        }
      }
      fetchcity();
    },
    [formLat, formLng]
  );

  async function handleSubmit(e) {
    //we make this async as we want to navigate after the create city which is async is done
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      date,
      notes,
      emoji,
      position: { lat: formLat, lng: formLng },
    };
    //console.log(newCity);
    await createCity(newCity);
    navigate("/app/cities");
  }

  //const navigate = useNavigate();

  if (geoError) return <Message message={geoError} />;

  if (geoisLoading) return <Spinner />;

  if (!formLat && !formLng)
    return <Message message={"start by clicking anywhere on the map!!😁"} />;

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>

        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />

        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateformat="dd/MM/yyyy"
        ></DatePicker>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton> &larr; Back</BackButton>
      </div>
    </form>
  );
}

export default Form;
