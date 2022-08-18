function confirm() {




    // $(document).ready(function () {
    //     $(".confirm").toggle(
    //         function () {
    //             $(".formContent").css({
    //                 "display": "none"
    //             });
    //         },
    //         function () {
    //             $(".formContent").css({
    //                 "display": "block"
    //             });
    //         });
    // });

    // $(document).ready(function () {
    //     $(".confirm").toggle(
    //         function () {
    //             $(".afterConfirm").css({
    //                 "display": "block"
    //             });
    //         },
    //         function () {
    //             $(".afterConfirm").css({
    //                 "display": "none"
    //             });
    //         });
    // });




    document.getElementById('card-holder-number').oninput = () => {
        document.getElementById("card-holder-number").style.textTransform = "upperCase";

    }
    let name = document.getElementById("card-holder-name").value;
    let error1 = document.getElementById("error1")
    if (name == null || name == "") {
        // Changing content and color of content
        error1.textContent = "Name must not be empty!"
        document.getElementById("card-holder-name").style.border = "1px solid hsl(0, 100%, 66%)";
    } else {
        document.getElementById("first").innerHTML = name;
        error1.textContent = ""
        document.getElementById("card-holder-name").style.border = "1px solid green";
    }
    let number = document.getElementById("card-holder-number").value;

    if (number == null || number == "") {
        // alert("Please enter Card Number Can’t be blank or empty !!!");
        error.textContent = "Number must not be empty!"
        document.getElementById("card-holder-number").style.border = "1px solid hsl(0, 100%, 66%)"
        return false;
    } else if (document.getElementById("card-holder-number").value.length < 16) {
        let error = document.getElementById("error")
        if (isNaN(document.getElementById("card-holder-number").value) || document.getElementById("card-holder-number").value.length < 16) {

            // Changing content and color of content
            error.textContent = "Wrong format, Not Allowed!"

            document.getElementById("card-holder-number").style.border = "1px solid hsl(0, 100%, 66%)";
        } else {
            error.textContent = ""
        }
    } else if (document.getElementById("card-holder-number").value.length == 16) {
        document.getElementById("card-holder-number").style.border = "1px solid green";
        let error = document.getElementById("error")
        if (isNaN(document.getElementById("card-holder-number").value)) {

            // Changing content and color of content
            error.textContent = "Wrong format, Not Allowed!"

            document.getElementById("card-holder-number").style.border = "1px solid hsl(0, 100%, 66%)";
        } else {
            error.textContent = ""
            let joy = number.match(/.{1,4}/g);
            // console.log(joy.join(' '));
            document.getElementById("card-number").innerHTML = joy.join(' ');
            document.getElementById("card-number").style.letterSpacing = "5px";
        }
    }
    let month = document.getElementById("month").value;
    let monthYearSpan = document.getElementById("monthYearSpan")
    if (month == null || month == "") {
        // Changing content and color of content
        monthYearSpan.textContent = "Can't be blank"
        document.getElementById("month").style.border = "1px solid hsl(0, 100%, 66%)";
    } else if (document.getElementById("month").value.length == 2) {
        // document.getElementById("first").innerHTML = name;
        document.getElementById("monthPara").innerText = month;
        monthYearSpan.textContent = ""
        document.getElementById("month").style.border = "1px solid green";
    }
    let year = document.getElementById("year").value;
    if (year == null || year == "") {
        // Changing content and color of content
        monthYearSpan.textContent = "Can't be blank"
        document.getElementById("year").style.border = "1px solid hsl(0, 100%, 66%)";
    } else {
        // document.getElementById("first").innerHTML = name;
        document.getElementById("yearPara").innerText = year;
        monthYearSpan.textContent = ""
        document.getElementById("year").style.border = "1px solid green";
    }
    let cvc = document.getElementById("cvc").value;
    if (cvc == null || cvc == "") {
        // Changing content and color of content
        cvcSpan.textContent = "Can't be blank"
        document.getElementById("cvc").style.border = "1px solid hsl(0, 100%, 66%)";
    } else {
        // document.getElementById("first").innerHTML = name;
        document.getElementById("cvcPara").innerText = cvc;
        cvcSpan.textContent = ""
        document.getElementById("cvc").style.border = "1px solid green";
    }

    // if (confirm) {
    //     document.querySelector('.formContent').style.display = "none";;
    //     document.querySelector('.afterConfirm').style.display = "block";
    // }

}

// function contentShow() {
//     if (contentShow) {
//         document.querySelector('.formContent').style.display = "block";;
//         document.querySelector('.afterConfirm').style.display = "none";
//     }
// }