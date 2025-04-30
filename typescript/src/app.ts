let nombre_variable: string = "hola mundo";
console.log(nombre_variable);

const student: Istudent = {
  id: 1,
  name: "Oscar",
  correo: "oscar@gmail.com",
  direccion: "casa",
};

//interfaces
interface Istudent {
  id: number;
  name: string;
  correo: string;
  direccion: string;
  calificacion?: number;
}

//arreglo con tres estudiantes
const estudiantes: Istudent[] = [
  {
    id: 11,
    name: "oscar",
    correo: "oscar@gmail.com",
    direccion: "casa",
  },

  {
    id: 22,
    name: "mario",
    correo: "mario@gmail.com",
    direccion: "casa",
    calificacion: 10,
  },
];

//para agregar un estudiante mas
estudiantes.push({
  id: 33,
  name: "pepe",
  correo: "pepe@gmail.com",
  direccion: "su casa",
});

//otra forma
estudiantes.push(student);

//como crear una funcion para agregar estudiantes al arreglo

function Agregar(estudiante: Istudent): void {
  estudiantes.push(estudiante);
}

const estudiante1: Istudent = { id: 44, name: "", correo: "", direccion: "" };
Agregar(estudiante1);

function Agregar2(param: Istudent, callback: (estudiante: Istudent) => void) {
  estudiantes.push(param);
  callback(param);
}

const estudiante2: Istudent = { id: 44, name: "", correo: "", direccion: "" };
Agregar2(estudiante2, (param: Istudent) => console.log);

function Agregar3(param: Istudent): Promise<Istudent> {
  return new Promise((resolve) => {
    estudiantes.push(param);
    resolve(param);
  });
}

function Agregar4(param: Istudent): Promise<Istudent> {
  return new Promise((resolve, reject) => {
    if (param.name === "") {
      reject("el nombre no puede estar vacio");
    } else {
      estudiantes.push(param);
      resolve(param);
    }
  });
}
