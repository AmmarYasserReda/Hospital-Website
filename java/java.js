function validateForm() {
    const x = document.forms["form_1"]["F_name"].value;
    const y = document.forms["form_1"]["L_name"].value;
    const z = document.forms["form_1"]["email"].value;
    const xx = document.forms["form_1"]["psw"].value;
    const yy = document.forms["form_1"]["psw-repeat"].value;
    const zz = document.forms["form_1"]["mobil"].value;
    const xxx = document.forms["form_1"]["birthday"].value;
    if (y === "" || x === "" || z === "" || xx === "" || yy ==="" || zz === "" || xxx === ""){
        if (x === "") {
            document.getElementById('first_name').style.boxShadow="0 0 5px rgba(225, 0, 0, 1)"
        }
        if (y === ""){
            document.getElementById('last_name').style.boxShadow="0 0 5px rgba(225, 0, 0, 1)"
        }
        if (z === ""){
            document.getElementById('email').style.boxShadow="0 0 5px rgba(225, 0, 0, 1)"
        }
        if (xx === ""){
            document.getElementById('psw').style.boxShadow="0 0 5px rgba(225, 0, 0, 1)"
        }
        if (yy === ""){
            document.getElementById('psw-repeat').style.boxShadow="0 0 5px rgba(225, 0, 0, 1)"
        }
        if (zz === ""){
            document.getElementById('mobil').style.boxShadow="0 0 5px rgba(225, 0, 0, 1)"
        }
        if (xxx === ""){
            document.getElementById('birthday').style.boxShadow="0 0 5px rgba(225, 0, 0, 1)"
        }
        if( xx !== yy){
            alert("the second password is not the same");
        }
        return false;
    }
}

function onclick_signup(id){
    document.getElementById(id).style.boxShadow = " 0 0 5px rgba(225,225,225,1)"
}

function validate_login() {
    const yyy = document.forms["form_2"]["email2"].value;
    const zzz = document.forms["form_2"]["psw2"].value;
    if (yyy === "" || zzz === ""){
        if (yyy === "") {
            document.getElementById('email2').style.boxShadow="0 0 5px rgba(225, 0, 0, 1)"
        }
        if (zzz === "") {
            document.getElementById('psw2').style.boxShadow="0 0 5px rgba(225, 0, 0, 1)"
        }
        return false;
    }
}
