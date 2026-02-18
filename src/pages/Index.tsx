import NavBar from "../components/NavBar";
import MatrixRain from "../components/ui/MatrixRain";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden scanlines">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Main Content */}
      <div className="relative z-10">
        <NavBar />
      </div>
    </div>
  );
};

export default Index;
