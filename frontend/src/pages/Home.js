import '../styles.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">📊 Excel Analytics Platform</h1>
      <p className="home-subtitle">Upload Excel, Analyze Data & Generate Beautiful Charts</p>
      <div className="home-buttons">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
}
