// 1. Definición de Variables
const alertaId: number = 101;
const mensaje: string = "Riesgo de helada en la zona norte.";
const nivel: "bajo" | "medio" | "alto" = "alto";
const activa: boolean = true;
const fechaCreacion: Date = new Date();

// 2. Definición de la Interface
interface Alerta {
  id: number;
  mensaje: string;
  nivel: "bajo" | "medio" | "alto";
  activa: boolean;
  fecha: Date;
}

// 3. Definición de Objetos
const alerta1: Alerta = {
  id: 1,
  mensaje: "Lluvias intensas detectadas",
  nivel: "alto",
  activa: true,
  fecha: new Date("2025-04-30T08:00:00"),
};

const alerta2: Alerta = {
  id: 2,
  mensaje: "Humedad baja registrada",
  nivel: "medio",
  activa: true,
  fecha: new Date("2025-04-30T09:00:00"),
};

// 4. Arreglos y Arreglos de Objetos
const listaAlertas: Alerta[] = [alerta1, alerta2];

// 5. Funciones
function crearAlerta(
  id: number,
  mensaje: string,
  nivel: "bajo" | "medio" | "alto"
): Alerta {
  return {
    id,
    mensaje,
    nivel,
    activa: true,
    fecha: new Date(),
  };
}

function mostrarAlerta(alerta: Alerta): void {
  console.log(
    `[${alerta.fecha.toISOString()}] (${alerta.nivel.toUpperCase()}) ${
      alerta.mensaje
    }`
  );
}

// 6. Spread y Rest
// Clonamos la lista original y agregamos una nueva alerta con spread
const nuevaAlerta = crearAlerta(3, "Temperatura elevada", "medio");
const listaActualizada = [...listaAlertas, nuevaAlerta];

// Usamos Rest para aceptar múltiples mensajes y mostrar cada uno
function registrarMensajes(...mensajes: string[]): void {
  mensajes.forEach((msg, index) => {
    console.log(`Mensaje ${index + 1}: ${msg}`);
  });
}

// 7. Callback
function procesarAlertas(
  alertas: Alerta[],
  callback: (a: Alerta) => void
): void {
  alertas.forEach(callback);
}

// 8. Promise (simulación de operación lenta)
function guardarAlerta(alerta: Alerta): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Alerta "${alerta.mensaje}" guardada exitosamente`);
    }, 2000); // 2 segundos
  });
}

// 9. ✅ Async/Await
async function guardarYNotificar(alerta: Alerta) {
  const resultado = await guardarAlerta(alerta);
  console.log("Resultado:", resultado);
}

// 🧪 Probar todo
console.log("➡ Lista actualizada de alertas:");
procesarAlertas(listaActualizada, mostrarAlerta);

console.log("\n➡ Registrando múltiples mensajes:");
registrarMensajes("Granizo detectado", "Fuego cercano", "Sequía persistente");

console.log("\n➡ Guardando alerta con Promise + async/await:");
guardarYNotificar(nuevaAlerta);
