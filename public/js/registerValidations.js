let form=qs("#registro");
let ojito=qs("#ojito");
let contraseña=qs("#password"); 
const regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let spanNombre=qs("#name");
let spanEmail=qs("#email");
let spanPassword=qs("#repassword");

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

    /*validaciones del email*/
    
    if (form.email.value.length == 0){
        errors.email='El campo de email no debe estar vacio'
        spanEmail.style.fontStyle ='italic';
        qs("#email").innerText=errors.email;
    }else if(!regexEmail.test(form.email.value)){
        errors.email='Debe ser un email valido';
        qs("#email").innerText=errors.email;
    }

     /*validaciones del password*/
     if (form.password.value.length == 0){
        errors.password='El campo del password no debe estar vacio'
        spanPassword.style.fontStyle ='italic';
        qs("#repassword").innerText=errors.password;
    }else if(form.password.value.length <8){
        errors.password='El campo del password contener 8 caracteres y un numero';
        qs("#repassword").innerText=errors.password;
    }


});

/*funcion del ojo de la contraseña*/
ojito.addEventListener("click",function(e){
    if(contraseña.type == 'password'){
        ojito.classList.remove('fa-eye-slash');
        ojito.classList.add('fa-eye');
        contraseña.type = 'text';
    }else{
        ojito.classList.remove('fa-eye');
        ojito.classList.add('fa-eye-slash');  
        contraseña.type = 'password';
    }
});