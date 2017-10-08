/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function checkInfoBeforeCreateAccount()
{
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPWD = document.getElementById("userPWD").value;
    var userPhone = document.getElementById("userPhone").value;
    var userAddress = document.getElementById("userAddress").value;
    if (userName == "" || userEmail == "" || userPWD == "" || userPhone == "" || userAddress == "")
        alert("Vui lòng nhập đầy đủ thông tin để đăng ký tài khoản...");
    else
    {
        var xmlhttp = new XMLHttpRequest(); //dung de gui DL den webserver
        //mo kết nối đến Webserver voi yeu cau chay registerAccount.jsp
        xmlhttp.open("get", "jsp/registerAccount.jsp?userName=" + userName + "&userEmail=" + userEmail + "&userPWD=" + userPWD + "&userPhone=" + userPhone
                + "&userAddress=" + userAddress, false);
        //gửi yêu cầu
        xmlhttp.send();
        //Nhận thông báo từ file JSP gửi về
        var rs = xmlhttp.responseText.trim();
        if (rs === "OK")
            alert("Đăng ký tài khoản thành công.");
        else
            alert("Email bạn nhập vào đã được sử dụng, vui lòng kiểm tra lại...");
    }
}

function checkInfoBeforeLogin()
{
    var userEmail = document.getElementById("userEmailLogin").value;
    var userPWD = document.getElementById("userPWDLogin").value;
    if (userEmail == "" || userPWD == "")
        alert("Bạn vui lòng nhập đầy đủ thông tin để đăng nhập");
    else
    {
        var xmlhttp = new XMLHttpRequest(); //dung de gui DL den webserver
        xmlhttp.onreadystatechange = function () { // listen for state changes
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && xmlhttp.responseText.trim() == "OK") 
            { // when completed we can move away
                window.location = "index.html";
            }
            else if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && xmlhttp.responseText.trim() == "ERORR")
            {
                alert("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin...");
            }
            
        }
        xmlhttp.open("get", "jsp/loginAccount.jsp?userEmailLogin=" + userEmail + "&userPWDLogin=" + userPWD, true);
        //gửi yêu cầu
        xmlhttp.send();
        //Nhận thông báo từ file JSP gửi về
        /*var rs = xmlhttp.responseText.trim();
        alert(rs);
        if (rs == "OK")
        {
            //xmlhttp.open("get", "index.html", false);
            //xmlhttp.send();
            //document.write(xmlhttp.responseText);

        } else
            alert("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin...");*/
    }
}

