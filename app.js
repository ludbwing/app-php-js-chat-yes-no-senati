//LUDWING ALDAIR MAMANI YUCRA//
const apiURL = "http://localhost/app-php-js-chat-yes-no-senati/api.php";

async function getData(){
    console.log('ingreso a get data');
    try {
        const respuesta = await fetch(`${apiURL}?id=164&nombre=ludwing&apellido=mamani`,{
            method: "GET"
        });
        const data = await respuesta.json();
        console.log('data');
        console.log(data);

    } catch (error) {
        console.log("Error al momento de hacer la peticion GET: ", error )
    }
}

let botonGet = document.querySelector('#getdata');
botonGet.addEventListener('click',function(){
    getData();
})