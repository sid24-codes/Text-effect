
const textElement = document.getElementById("text");

function typeWriter(text, speed = 100, delay = 1500){
    
    let i = 0;
    textElement.innerHTML = ""; // clear before restart
    
    function type(){
        if(i < text.length){
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
        else{
            
            setTimeout(()=>{
                typeWriter(text, speed, delay);
            }, delay);
        }
    }
    
    type();
}

window.onload = () =>{
    typeWriter("HTML, CSS, JAVASCRIPT, PYTHON, JAVA, C++");
};
