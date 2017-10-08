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
        alert("Error");
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

