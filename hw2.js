 /*
    Program name: hw2.js
    Author: Sana Baloch
    Date created: 2025-02-05
    Date last edited: 2025-03-09
    Version: 1.8
    Description: A patient form for a hospital (MIS 3371 homework #2)
*/
 
/* dyanmic date code below */
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

/* first name validation below */
function validateFname()
{
    firstname = document.getElementById("fname").value;

    let regex = /^[a-zA-Z'-]+$/;
    if (!regex.test(firstname))
    {
        document.getElementById("fname-error").innerHTML = "Please use only letters, apostrophes, and dashes";
        return false;
    }
    else if (firstname.length < 2)
    {
        document.getElementById("fname-error").innerHTML = "First name must be more than 1 character";
        return false;
    }
    else
    {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

/* middle int validation below */
function validateMidint()
{
    let mini = document.getElementById("midint").value;
    const namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern))
    {
        document.getElementById("midint-error").innerHTML = "Middle initial must be a single uppercase letter";
        return false;
    }
    else
    {
        document.getElementById("midint-error").innerHTML = "";
        return true;
    }
}

/*last name validation below */
function validateLname()
{
    lastname = document.getElementById("lname").value;

    let regex = /[a-zA-Z3-5'-]+$/;
    if (!regex.test(lastname))
    {
        document.getElementById("lname-error").innerHTML = "Last name can only have letters, apostrophes, and dashes";
        return false;
    }
    else if (lastname.length < 2)
    {
        document.getElementById("lname-error").innerHTML = "Last name must be more than 1 character long";
        return false;
    }
    else
    {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

/* dob validation below */
function validateDob()
{
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) 
    {
        document.getElementById("dob-error").innerHTML = "Date can't be in the future";
        dob.value = "";
        return false;
    } 
    else if (date < new Date(maxDate)) 
    {
        document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } 
    else 
    {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

/* ssn validation below */
function validateSsn() 
{
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn))
    {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
        return false;
    }
    else 
    {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

/* address validation below */
function validateAddress1()
{
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2)
    {
        document.getElementById("address1-error").innerHTML = "Address must be more than 2 characters";
        return false;
    }
    else
    {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

/* city validation */
function validateCity()
{
     city = document.getElementById("city").value.trim();

     if (!city)
     {
         document.getElementById("city-error").innerHTML = "City can't be blank";
         return false;
     }
     else
     {
         document.getElementById("city-error").innerHTML = "";
         return true;
     }
}

/* zipcode validation below */
function validateZipcode()
{
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip)
    {
        document.getElementById("zipcode-error").innerHTML = "Zipcode can't be blank";
        return false;
    }

    /* format as ZIP+4 if length is greater than 5 */
    if (zip.length > 5)
    {
        zip = zip.slice(0,5) + "-" + zip.slice(5,9);
    }
    else 
    {
        zip = zip.slice(0,5);
    }

    zipInput.value = zip;
    document.getElementById("zipcode-error").innerHTML = "";
    return true;
}

/* email validation below */
function validateEmail()
{
    var email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email)
    {
        document.getElementById("email-error").innerHTML = "Email can't be blank";
        return false;
    }
    
    if (!emailR.test(email))
    {
        document.getElementById("email-error").innerHTML = "Please enter a valid email";
        return false;
    }
    else 
    {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

/* phone number validation below */
function validatePhone()
{
    const phone = document.getElementById("phone").value;
    const phoneR = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;

    if (!phone)
    {
        document.getElementById("phone-error").innerHTML = "Phone number can't be blank";
        return false;
    }

    if (!phoneR.test(phone))
    {
        document.getElementById("phone-error").innerHTML = "Please enter a valid phone number";
        return false;
    }
    else 
    {
        document.getElementById("phone-error").innerHTML = "";
        return true;
    }
}

/*user ID validation below */
function validateUserid()
{
    userid = document.getElementById("userid").value.toLowerCase();
    document.getElementById("userid").value = userid;

    if (userid.length == 0)
    {
        document.getElementById("userid-error").innerHTML = "User ID can't be blank";
        return false;
    }

    if (!isNaN(userid.charAt(0)))
    {
        document.getElementById("userid-error").innerHTML = "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(userid))
    {
        document.getElementById("userid-error").innerHTML = "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    }
    else if (userid.length < 5)
    {
        document.getElementById("userid-error").innerHTML = "User ID must be at least 5 characters";
        return false;
    }
    else if (userid.length > 30)
    {
        document.getElementById("userid-error").innerHTML = "User ID can't exceed 30 characters";
        return false;
    }
    else
    {
        document.getElementById("userid-error").innerHTML = "";
        return true;
    }
}

/* password validation below */
function validatePassword()
{
    var pword = document.getElementById("password").value;
    console.log(pword);

    if (!pword.match(/[a-z]/)) 
    {
        document.getElementById("password-error").innerHTML = "Enter at least one lowercase letter";
        return false;
    }
    else if (!pword.match(/[A-Z]/)) 
    {
        document.getElementById("password-error").innerHTML = "Enter at least one uppercase letter";
        return false;
    }
    else if (!pword.match(/[0-9]/)) 
    {
        document.getElementById("password-error").innerHTML = "Enter at least one number";
        return false;
    }
    else if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) 
    {
        document.getElementById("password-error").innerHTML = "Enter at least one special character";
        return false;
    }
    else if (pword.includes(userid)) 
    {
        document.getElementById("password-error").innerHTML = "Password can't contain user ID";
        return false;
    }
    else if (pword.length < 8)
    {
        document.getElementById("password-error").innerHTML = "Password must be at least 8 characters long";
        return false;
    }
    else
    {
        document.getElementById("password-error").innerHTML = "";
        return true;
    }
}

/* confirm password validation below */
function validatePassword2()
{
    password1 = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;

    if (password1 !== password2) 
    {
        document.getElementById("password2-error").innerHTML = "Passwords don't match";
        return false;
    } 
    else 
    {
        document.getElementById("password2-error").innerHTML = "Passwords match";
        return true;
    }
}

/* review button code */
function reviewInput()
{
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class = 'output'><th colspan = '3'> Review Your Information:</th>";

    for (let i = 0; i < formcontent.length; i++)
    {
        if (formcontent.elements[i].value !== "") 
        {
            switch (formcontent.elements[i].type) 
            {
                case "checkbox":
                    if (formcontent.elements[i].checked) 
                    {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) 
                    {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

/* remove review data */
function removeReview()
{
    document.getElementById("showInput").innerHTML = "";
}

/* alert box */
function showAlert()
{
    var alertBox = document.getElementByID("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function()
    {
          alertBox.style.display = "none";
    }
}

/* validate everything */
function validateEverything()
{
     let valid = true;

     if (!validateFname()) 
     {
           valid = false;
     }
     if (!validateMidint()) 
     {
           valid = false;
     }
     if (!validateLname())
     {
           valid = false;
     }
     if (!validateDob())
     {
           valid = false;
     }
     if (!validateSsn())
     {
           valid = false;
     }
     if (!validateAddress1())
     {
           valid = false;
     }
     if (!validateZipcode())
     {
           valid = false;
     }
     if (!validateEmail())
     {
           valid = false;
     }
     if (!validatePhone())
     {
           valid = false;
     }
     if (!validateFname())
     {
           valid = false;
     }
     if (!validateUserid())
     {
           valid = false;
     }
     if (!validatePassword())
     {
           valid = false;
     }
     if (!validatePassword2())
     {
           valid = false;
     }

     if (valid = true)
     {
            document.getElementById("submit").disabled = false;
     }
     else
     {
            showAlert();
     }
}
