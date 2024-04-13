
document.addEventListener('DOMContentLoaded', function() {
let turnoActual = 1;
const turnos = [];

const generarTurnoBtn = document.getElementById('generarTurno');
const cancelarTurnoBtn = document.getElementById('cancelarTurno');
const numeroTurnoElement = document.getElementById('numeroTurno');
const turnosTableBody = document.getElementById('turnosBody');

generarTurnoBtn.addEventListener('click', function() {
 const nuevoTurno = { numero: turnoActual, estado: 'Generado' };
 turnos.push(nuevoTurno);
 numeroTurnoElement.textContent = turnoActual;
 turnoActual++;
 actualizarTabla();
});

cancelarTurnoBtn.addEventListener('click', function() {
 
 turnos.length = 0;
 numeroTurnoElement.textContent = '0';
 actualizarTabla();
});

function actualizarTabla() {
 turnosTableBody.innerHTML = '';
 turnos.forEach(turno => {
   const row = document.createElement('tr');
   const numeroCell = document.createElement('td');
   const estadoCell = document.createElement('td');
   const accionesCell = document.createElement('td');
   const mostrarBtn = document.createElement('button');
   const cancelarBtn = document.createElement('button');

   numeroCell.textContent = turno.numero;
   estadoCell.textContent = turno.estado;

   mostrarBtn.textContent = 'Mostrar';
   mostrarBtn.addEventListener('click', function() {
     row.style.backgroundColor = 'green';
   });

   cancelarBtn.textContent = 'Cancelar';
   cancelarBtn.addEventListener('click', function() {
     row.style.backgroundColor = 'red';
   });

   accionesCell.appendChild(mostrarBtn);
   accionesCell.appendChild(cancelarBtn);

   row.appendChild(numeroCell);
   row.appendChild(estadoCell);
   row.appendChild(accionesCell);

   turnosTableBody.appendChild(row);
 });
}
});

