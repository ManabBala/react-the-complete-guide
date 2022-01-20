import ExpenseItem from "components/ExpenseItem";
import Navbar from "components/Navbar";
function App() {
  return (
    <div className="font-Poppins">
      <header>
        <Navbar />
        <ExpenseItem />
      </header>
    </div>
  );
}

export default App;
