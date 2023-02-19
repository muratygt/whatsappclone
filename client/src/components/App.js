import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";

function App() {
  const [id, setId] = useLocalStorage('key')
  return (
    <>
    {id}
      <Login onIdSubmit={setId}/>
    </>
  );
}

export default App;
