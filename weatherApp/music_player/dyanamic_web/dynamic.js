// document.querySelector("#center")
// .addEventListener("mousemove",function(dets){
//     console.log(dets.clientX,dets.clientY)
// });
//https://unsplash.com/photos/a-person-walking-down-an-alley-way-at-night-pOxapjdib0Q
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
       // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
};

document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {
        let div=document.createElement("div");
        div.classList.add('imagediv');
        //way to set the position from left side of the screen
        div.style.left=dets.clientX +'px';
        // way to set the position from the rigth side of the screen;
        div.style.top=dets.clientY +'px';
        let img = document.createElement("img");
        img.setAttribute("src","https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        div.appendChild(img);
    gsap.to(img,{
        y:"0",
        //bring down the image up to the y axis
        ease:Power1,
        duration:.6
    });
    gsap.to(img,{
        y:"100",
        //bring the image  fully down to y axis
        delay:.6,
    ease:Power2,
    });
        document.body.appendChild(div);
        setTimeout(function(){
            div.remove();
        },2000);
    }, 500));
