let encabezados = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let celdas = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];

let margin = encabezados.length*3
let ancho = encabezados.length*90
document.getElementById('tabla1').style.width = margin + ancho+"px";

const container = document.querySelector(".tabla1");
  for (const encabezado of encabezados) {
    const div = document.createElement("div");
    div.classList.add("headers1");
    div.innerHTML = `
    ${encabezado}
    `;
    container.appendChild(div);
  }
const container2 = document.querySelector(".tabla1");
  for (const celda of celdas) {
    const div = document.createElement("div");
    div.classList.add("celdas1");
    div.innerHTML = `
    ${celda}
    `;
    container2.appendChild(div);
  }
