function check ( )
{
    var valid  = Boolean(false);
    if ( document.contact_form.fname.value == "" ){
        alert ( "Будь ласка заповніть поле 'ІМ'Я КОРИСТУВАЧА:'." );
        document.getElementById("fname").style.border = "4px solid red";
        valid = true;
        }
    if ( document.contact_form.lname.value == "" ){
        alert ( "Будь ласка заповніть поле 'ПРІЗВИЩЕ:'." );            
        document.getElementById("lname").style.border = "4px solid red";
        valid = true;
        }
    if ( ( document.contact_form.sex[0].checked == false ) && ( document.contact_form.sex[1].checked == false ) ){
        alert ( "Будь ласка, оберіть Вашу стать" );
        document.getElementById("sexInput").style.backgroundColor = "#ff0000";
        valid = true;
        }
    if ( document.contact_form.tel.value == 0 || document.contact_form.tel.value == 380 ){
        alert ( "Будь ласка, вкажіть Ваш номер телефону" );    
        document.getElementById("tel").style.border = "4px solid red";
        valid = true;
        }
    if ( document.contact_form.age.value == null && document.contact_form.age.value <= 0 )
        {
        alert ( "Будь ласка, вкажіть Ваш вік." );
        document.getElementById("age").style.border = "4px solid red";
        valid = true;
        }

    if ( document.contact_form.password.selectedIndex == null )
        {
        alert ( "Будь ласка, вкажіть Ваш пароль" );
        document.getElementById("password").style.border = "4px solid red";
        valid = true;
        }
    if ( document.contact_form.password_again.selectedIndex == null )
        {
        alert ( "Будь ласка, вкажіть повторіть ваш пароль" );
        document.getElementById("password_again").style.border = "4px solid red";
        valid = true;
        }
            //copleted
    if ( document.contact_form.fname.value != "" ){
        document.getElementById("fname").style.border = "none";        
        } 
    if( document.contact_form.lname.value != "" ){
        document.getElementById("lname").style.border = "none";         
        }
    if ( ( document.contact_form.sex[0].checked == true ) || ( document.contact_form.sex[1].checked == true ) ){
        document.getElementById("sexInput").style.backgroundColor = "lightblue";            
            }
    if ( document.contact_form.tel.value != 0 && document.contact_form.tel.value != 380 ){
        document.getElementById("tel").style.border = "none";                
        }
    if ( document.contact_form.age.value != null && document.contact_form.age.value <= 0)
        {
        document.getElementById("age").style.border = "none";       
        }
    if ( document.contact_form.password.selectedIndex != null && document.contact_form.password.value != "" )
        {
        document.getElementById("password").style.border = "none";    
        }
    if ( document.contact_form.password_again.selectedIndex != null && document.contact_form.password_again.value != "" )
    {
        document.getElementById("password_again").style.border = "none"; 
           
    }
    if (valid == true){
        return alert("Ви не пройшли реєстрацію!");  
    }
    else {
        document.body.style.backgroundColor = "#2ebe6a";
        return alert("Ви успішно пройшли реєстрацію");  
    }
}

