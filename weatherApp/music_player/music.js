

let imgbox = document.querySelector("#imgBox");
let qrimage = document.querySelector("#qrImage");
let qrtext = document.querySelector("#qrText");

function generateQR(){
    qrimage.src =" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.ariaValueMax;
}

let btn1 = document.querySelector("#btn12");
 btn1.onclick=()=>{
     generateQR();

}