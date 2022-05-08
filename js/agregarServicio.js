const servicios = JSON.parse(localStorage.getItem("servicios")) || [];

const form = document.getElementById('servicios-form');
window.onload = () => {
    form.onsubmit = (e) => {
        e.preventDefault();

        const instalaciones = document.getElementById('instalaciones');
        const metros = document.getElementById('metros');
        const luz = document.getElementById('luz');
        const termografia = document.getElementById('termografia');


        const instalacionesVal = instalaciones.checked;
        const metrosVal = metros.checked;
        const luzVal = luz.checked;
        const termografiaVal = termografia.checked;

        const serviciosValue = JSON.stringify(servicios);
        localStorage.setItem('servicios', serviciosValue);

        servicios.push(instalacionesVal, metrosVal, luzVal, termografiaVal);

        console.log(servicios);
        servicios.length = 0;
        /* function validarCheckbox() {
             const instalacionesVal = instalaciones.checked;
             if (instalacionesVal === true) {
                 alert('Instalaciones confirmadas')
             }
     
             const metrosVal = metros.checked;
             if (metrosVal === true) {
                 alert('Metros confirmadas')
             }
     }*/
    }
}




