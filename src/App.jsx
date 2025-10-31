import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleMultiply = () => {
    // Validar que ambos campos estén completos
    if (firstNumber === "" || secondNumber === "") {
      setResult("error");
      return;
    }

    // Calcular resultado
    const multiplication = Number(firstNumber) * Number(secondNumber);
    setResult(multiplication);

    console.log("Primer número:", firstNumber);
    console.log("Segundo número:", secondNumber);
    console.log("Resultado:", multiplication);
  };

  return (
    <div className="container w-50 mx-auto mt-5 text-center">
      <h1 className="fw-semibold mb-4">
        Ingresar dos números para multiplicar
      </h1>

      {/* Campo número 1 */}
      <div className="mb-3 text-start">
        <label htmlFor="primerNum" className="form-label fw-semibold">
          Número 1
        </label>
        <input
          type="number"
          id="primerNum"
          className="form-control"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
      </div>

      {/* Campo número 2 */}
      <div className="mb-3 text-start">
        <label htmlFor="segundoNum" className="form-label fw-semibold">
          Número 2
        </label>
        <input
          type="number"
          id="segundoNum"
          className="form-control"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>

      {/* Botón */}
      <button className="btn btn-success mb-3" onClick={handleMultiply}>
        Multiplicar
      </button>

      {/* Resultado o mensaje de error */}
      {result !== null && result !== "error" ? (
        <p>El resultado es: {result}</p>
      ) : result === "error" ? (
        <p className="text-danger fw-semibold">
          Por favor complete todos los campos
        </p>
      ) : null}
    </div>
  );
}

export default App;
