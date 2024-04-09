document.write('<p>Estadisticas centro medico ñuñoa</p>');

let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

let traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

let dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí

function agregar() {
    traumatologia.push(
        { hora: '09:00', especialista: 'Rene Poblete', paciente: 'Ana Gellona', rut: '13123329-7', prevision: 'Isapre' },
        { hora: '09:30', especialista: 'Maria Solar ', paciente: 'Ramiro Andrade', rut: '12221451-k', prevision: 'Fonasa' },
        { hora: '10:00', especialista: 'Raul Loyola', paciente: 'Carmen Isla', rut: '10112348-3', prevision: 'Isapre' },
        { hora: '10:30', especialista: 'Antonio Larenas', paciente: 'Pablo Loayza', rut: '13453234-1', prevision: 'Isapre' },
        { hora: '12:00', especialista: 'Matias Aravena', paciente: 'Susana Poblete', rut: '14345656-6', prevision: 'Fonasa' },
    );
}

// Eliminar el primer elemento
radiologia.shift();

// Eliminar el último elemento
radiologia.pop();

//PREGUNTA 3
dental.forEach((consulta) => {

    document.write(`<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`)
});

//pregunta 4

document.write('<h2 class=" center"> Lista de Pacientes</h2>');

// Función para obtener los nombres de los pacientes de un arreglo de consultas médicas

const union = radiologia.concat(traumatologia, dental);

union.forEach((consulta) => {
    document.write(`<p>${consulta.paciente}</p>`)
});

//preunta 5

document.write('<h3 class=" center"> Requerimineto 5</h3>');

// Filtrar pacientes de Dental con previsión ISAPRE
let pacientesISAPRE = dental.filter((consulta) => {
    return consulta.prevision === `ÌSAPRE`

});

consulta.pacientesDeIsapre.forEach((consultas) => {
    document.write(`<p>${consulta.paciente} - ${consulta.prevision} </p>`)
})


console.log(pacientesDeIsapre)



// Imprimir cada paciente en un párrafo separado
for (let i = 0; i < pacientesISAPRE.length; i++) {
    let paciente = pacientesISAPRE[i];
    let infoPaciente = `${paciente.paciente} - ${paciente.rut} - ${paciente.prevision}`;
    document.write(`<p>${infoPaciente}</p>`);
}

//preunta 6

document.write('<h2>Listado de Pacientes de Traumatología con Previsión FONASA:</h2>');

// Filtrar pacientes de Dental con previsión ISAPRE
let pacientesFonasa = traumatologia.filter((consulta) => {
    return consulta.prevision === `Fonasa`

});

consulta.pacientesDeFonasa.forEach((consultas) => {
    document.write(`<p>${consulta.paciente} - ${consulta.prevision} </p>`)
})













//Agregar código para el desafio 2 aquí

document.write('<p>Horas agregadas correctamente a Traumatología.</p>');
document.write('<p>Primer y último elemento eliminado correctamente del arreglo de Radiología.</p>');
document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención:
    ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención:
    ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención:
    ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);





