let estudiantes;
(async()=>{
    const response = await fetch('http://127.0.0.1:5500/estudiantes.json');
    const data = await response.json();
    estudiantes = data;
})()

function seleccionarEstudiante() 
{
    let estudianteId = document.getElementById('cbxestudiante').value;      
    const estudianteEncontrado = estudiantes.find( estudiante => estudiante.codigo === estudianteId);
    console.log(estudianteEncontrado);
    document.getElementById('lblSeleccionado').innerText = 
  
    `
    \n 

    Datos del Estudiante: \n 

    Nombre: ${estudianteEncontrado.nombre}
    Apellido: ${estudianteEncontrado.Apellido}
    Semestre: ${estudianteEncontrado.semestre}
    Paralelo: ${estudianteEncontrado.paralelo}
    Dirección: ${estudianteEncontrado.direccion}
    Teléfono: ${estudianteEncontrado.Telefono}
    Correo: ${estudianteEncontrado.Correo}.`;
}




