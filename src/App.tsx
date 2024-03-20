import "./App.css";

function App() {
  const noAdBlock = document.getElementById("muBPdeUDjZwG");
  console.log(noAdBlock);
  return (
    <>
      <h1>Detecting adblock</h1>
      <div className="center">
        {noAdBlock ? <h3>AdBlock is disabled</h3> : <h3>AdBlock is enabled</h3>}
      </div>
    </>
  );
}

export default App;
