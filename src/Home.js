import "./Home.css";
import treadmills from "./treadmills.jpeg";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Tricky-Treadmill App</h1>
      <img
        src={treadmills}
        alt="treadmills"
        style={{
         display: 'block',
          width: "50%",
          height: "auto",
          marginTop: '20px',
          maxWidth: "400px",
          borderRadius: "10%",
        }}
      />
    </div>
  );
}


