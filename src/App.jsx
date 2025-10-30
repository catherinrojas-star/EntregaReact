import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // ===== STATE =====
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false); // para animación

  // ===== EVENT HANDLER =====
  const handleMultiplicar = (e) => {
    e.preventDefault();
    // Reiniciar visibilidad para animación
    setVisible(false);

    // Validación — Conditional Rendering
    if (numero1 === "" || numero2 === "") {
      setError("Por favor complete todos los campos");
      setResultado(null);
      // mostrar mensaje con pequeño delay para animación
      setTimeout(() => setVisible(true), 50);
    } else {
      setError("");
      const multiplicacion = parseFloat(numero1) * parseFloat(numero2);
      setResultado(multiplicacion);
      setTimeout(() => setVisible(true), 50);
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-sm" style={{ width: "420px" }}>
        <h3 className="text-center mb-4">
          Ingresar dos números para multiplicar
        </h3>

        <form onSubmit={handleMultiplicar}>
          <div className="mb-3">
            <label htmlFor="numero1" className="form-label">
              Número 1
            </label>
            <input
              id="numero1"
              type="number"
              className="form-control"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
              placeholder="Ingrese el primer número"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="numero2" className="form-label">
              Número 2
            </label>
            <input
              id="numero2"
              type="number"
              className="form-control"
              value={numero2}
              onChange={(e) => setNumero2(e.target.value)}
              placeholder="Ingrese el segundo número"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            id="btnMultiplicar"
          >
            Multiplicar
          </button>
        </form>

        <div className={`fade ${visible ? "show" : ""}`}>
          {error && (
            <p className="text-danger text-center mt-3 fw-bold">{error}</p>
          )}
          {resultado !== null && !error && (
            <p className="text-success text-center mt-3 fw-bold">
              Resultado: {resultado}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
