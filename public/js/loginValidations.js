let form=qs("#login");

let ojito=qs("#ojo");
let pass=qs("#password"); 
const regexEmail=  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

let spanNombre=qs("#name");
let spanemail=qs("#correo");
let spanpassword=qs("#contraseña");
let input=qs("#email");

form.addEventListener("submit",function(e){

    e.preventDefault();
    let errors={};


    /*validaciones del name*/

    if (form.name.value.length == 0) {
        errors.name='El campo del nombre no debe estar vacio'
        spanNombre.style.fontStyle ='italic';
        qs("#name").innerText=errors.name;
    }else if(form.name.value.length <2){
        errors.name='El campo del Nombre debe  tener como minimo 2 caracteres'
        qs("#name").innerText=errors.name;
    }else{
        delete errors.name
    }


        /*campo email*/
    if(form.email.value.length == 0){  
        errors.email='El campo del email no debe estar vacio';
        spanemail.style.fontStyle ='italic';
        qs("#correo").innerText=errors.email;
    }else if(!regexEmail.test(form.email.value)){
        errors.email='tiene que ser un email valido'
        qs("#correo").innerText=errors.email;
    }



    /*validaciones del password*/
    if (form.password.value.length == 0){
        errors.password='El campo del password no debe estar vacio'
        spanpassword.style.fontStyle ='italic';
        qs("#contraseña").innerText=errors.password;
    }else if(form.password.value.length <8){
        errors.password='El campo del password contener 8 caracteres y un numero';
        qs("#contraseña").innerText=errors.password;
    }
});
   /*funcion del ojo de la contraseña*/
   ojo.addEventListener("click",function(e){
    if(pass.type == 'password'){
        ojo.classList.remove('fa-eye-slash');
        ojo.classList.add('fa-eye');
        pass.type = 'text';
    }else{
        ojo.classList.remove('fa-eye');
        ojo.classList.add('fa-eye-slash');  
        pass.type = 'password';
    }
});
