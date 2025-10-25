var alumnos = [
  {
    nombre: "Carlos Manuel",
    carrera: "LCC",
    semestre: 5,
  },
  {
    nombre: "Cesar Oziel",
    carrera: "LMAD",
    semestre: 3,
  },
  {
    nombre: "Regina",
    carrera: "LSTI",
    semestre: 8,
  },
  {
    nombre: "Diego Leonardo",
    carrera: "LF",
    semestre: 2,
  },
  {
    nombre: "Andrea Carolina",
    carrera: "LM",
    semestre: 7,
  },
  {
    nombre: "Mayela Mayté",
    carrera: "LA",
    semestre: 4,
  },
  {
    nombre: "Eder Abraham",
    carrera: "LCC",
    semestre: 9,
  },
  {
    nombre: "Diego Alonso",
    carrera: "LMAD",
    semestre: 1,
  },
  {
    nombre: "Naomi Michelle",
    carrera: "LSTI",
    semestre: 6,
  },
  {
    nombre: "Eder Abisai",
    carrera: "LF",
    semestre: 3,
  },
  {
    nombre: "Regina",
    carrera: "LM",
    semestre: 5,
  }, // Dariela
  {
    nombre: "Carlos",
    carrera: "LA",
    semestre: 2,
  }, // Manuel
  {
    nombre: "Carlos",
    carrera: "LCC",
    semestre: 8,
  }, // Alejandro
];

const list = document.querySelector(".student-list");
const inputNombre = document.querySelector(".new-student");
const inputCarrera = document.querySelector('.new-student-career');
const inputSemestre = document.querySelector('.new-student-semester');
const button = document.querySelector(".add-student");


function renderList(){
    
    list.innerHTML = "";
    alumnos.forEach((alumno) => {
        const newLi = document.createElement("li");
	newLi.innerHTML = `
            ${alumno.nombre} (${alumno.carrera}) - Semestre: <strong>${alumno.semestre}</strong>
        `;
	list.appendChild(newLi)
    })
}

renderList();

button.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const carrera = inputCarrera.value.trim().toUpperCase(); 
    const semestre = parseInt(inputSemestre.value.trim()) || 0; 
    
    if (nombre !== "" && semestre >= 1 && semestre <= 9) {
        
        const nuevoAlumno = {
            nombre: nombre,
            carrera: carrera,
            semestre: semestre
        };
        
        alumnos.push(nuevoAlumno); 
        renderList();             
        
        inputNombre.value = "";
        inputCarrera.value = "";
        inputSemestre.value = "";
    } else {
        alert("Por favor, ingresa un nombre y un semestre válido (1-9).");
    }
});

renderList();
