import { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Prayer() {
  const [prayer, setPrayer] = useState(null);
  const [date, setDate] = useState("");
  const [city, setCity] = useState("Lahore");
  const [country, setCountry] = useState("Pakistan");

  const cities = [
    { name: "Lahore", country: "Pakistan" },
    { name: "Karachi", country: "Pakistan" },
    { name: "Islamabad", country: "Pakistan" },
    { name: "Rawalpindi", country: "Pakistan" },
    { name: "Multan", country: "Pakistan" },
    { name: "Peshawar", country: "Pakistan" },
    { name: "Quetta", country: "Pakistan" },
    { name: "London", country: "United Kingdom" },
    { name: "Dubai", country: "United Arab Emirates" },
    { name: "Riyadh", country: "Saudi Arabia" }
  ];

  const fetchPrayerData = () => {
    Axios.get(
      `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`
    ).then((res) => {
      setPrayer(res.data.data.timings);
      setDate(res.data.data.date.readable);
    });
  };

  useEffect(() => {
    fetchPrayerData();
  }, [city, country]);

  return (
    <>
      <Navbar />

      <section className="products-section fade-in">
        <h2>Daily Prayer Timings</h2>

        <p style={{ marginBottom: "20px", color: "#555" }}>
          Select a city from the dropdown and click refresh to load prayer timings.
        </p>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div>
              <label style={{ fontWeight: "500" }}>Choose City:</label>
              <select
                value={`${city}|${country}`}
                onChange={(e) => {
                  const [selCity, selCountry] = e.target.value.split("|");
                  setCity(selCity);
                  setCountry(selCountry);
                }}
                style={{
                  padding: "8px",
                  borderRadius: "8px",
                  marginLeft: "10px",
                  border: "1px solid #ccc",
                }}
              >
                {cities.map((c) => (
                  <option key={c.name} value={`${c.name}|${c.country}`}>
                    {c.name}, {c.country}
                  </option>
                ))}
              </select>
            </div>

            <button className="explore-btn" onClick={fetchPrayerData}>
              Refresh
            </button>
          </div>

          {prayer && (
            <>
              <h4 style={{ textAlign: "center", margin: "10px 0", color: "#333" }}>
                📍 {city}, {country} — {date}
              </h4>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "center"
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#c8ff00" }}>
                    <th>Fajr</th>
                    <th>Dhuhr</th>
                    <th>Asr</th>
                    <th>Maghrib</th>
                    <th>Isha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{prayer.Fajr}</td>
                    <td>{prayer.Dhuhr}</td>
                    <td>{prayer.Asr}</td>
                    <td>{prayer.Maghrib}</td>
                    <td>{prayer.Isha}</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Prayer;
