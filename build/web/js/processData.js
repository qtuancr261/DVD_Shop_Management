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
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            { // when completed we can move away
                //sessionStorage.username = userEmail;

                var messenge = xmlhttp.responseText.trim();
                if (messenge == "OK")
                {
                    alert(messenge);
                    sessionStorage.username = userEmail;
                    window.location = "index.html";
                } else
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

function validateLoginForm()
{
    var userEmail = document.forms["loginForm"]["userEmailLogin"].value;
    var userPWD = document.forms["loginForm"]["userPWDLogin"].value;
    if (userEmail == "" || userPWD == "")
    {
        alert("Nhap day du thong tin....");
        return false;
    } else
    {
        sessionStorage.username = userEmail;
        return true;
    }
}
function loadHotProducts()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadProduct.jsp?type=hot", false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        document.getElementById("hot").innerHTML = "Impossible";
        return;
    }
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listHotProducts = "";
    for (var i = 0; i < listProductsJSON.length; i++)
    {
        switch (i % 4)
        {
            case 0:
                listHotProducts += "<li>" +
                        "<div class=\"row\">" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"offer\">- %20</div>" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"location.href = 'cart.html'\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
                        "</div>" +
                        "</div>";
                break;
            case 1:
                listHotProducts += "" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"location.href = 'cart.html'\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
                        "</div>" +
                        "</div>";
                break;
            case 2:
                listHotProducts += "" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"offer\">Mới</div>" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"location.href = 'cart.html'\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
                        "</div>" +
                        "</div>";
                break;
            case 3:
                listHotProducts += "" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\""+ listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"location.href = 'cart.html'\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</li>";
                break;
        }
    }
    document.getElementById("hot").innerHTML = listHotProducts;
}

function loadNewProducts()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadProduct.jsp?type=new", false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        document.getElementById("hot").innerHTML = "Impossible";
        return;
    }
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listHotProducts = "";
    for (var i = 0; i < listProductsJSON.length; i++)
    {
        switch (i % 4)
        {
            case 0:
                listHotProducts += "<li>" +
                        "<div class=\"row\">" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"location.href = 'cart.html'\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
                        "</div>" +
                        "</div>";
                break;
            case 1:
                listHotProducts += "" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"location.href = 'cart.html'\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
                        "</div>" +
                        "</div>";
                break;
            case 2:
                listHotProducts += "" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"offer\">Mới</div>" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"location.href = 'cart.html'\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
                        "</div>" +
                        "</div>";
                break;
            case 3:
                listHotProducts += "" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"location.href = 'cart.html'\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</li>";
                break;
        }
    }
    document.getElementById("featured").innerHTML = listHotProducts;
}

function setCategory(name)
{
    sessionStorage.category = name;
    return true;
}

function loadSpecificProducts()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadProduct.jsp?type=" + sessionStorage.category, false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        alert("NNNONNONOON");
        return;
    }
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listHotProducts = "";
    for (var i = 0; i < listProductsJSON.length; i++)
    {
        listHotProducts += "<div class=\"col-md-4 col-sm-6\">" +
                "<div class=\"products\">" +
                "<div class=\"thumbnail\">" +
                "<a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\">" +
                "</a>" +
                "</div>" +
                "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                "<div class=\"button_group\">" +
                "<button class=\"button add-cart\" type=\"button\" onClick=\"location.href = 'cart.html'\">Thêm vào giỏ</button>" +
                "<button class=\"button compare\" type=\"button\">" +
                "<i class=\"fa fa-exchange\"></i>" +
                "</button>" +
                "<button class=\"button wishlist\" type=\"button\">" +
                "<i class=\"fa fa-heart-o\"></i>" +
                "</button>" +
                "</div>" +
                "</div>" +
                "</div>"
    }
    //alert(listHotProducts);
    document.getElementById("categoryProducts").innerHTML = listHotProducts;
}

function setCurrentProductID(element)
{
    var id = element.id;
    //alert(id);
    sessionStorage.currentProductID = id;
    //var str = xmlhttp.responseText.trim();
}

function getCurrentProductInfo()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadCurrentProductInfo.jsp?id=" + sessionStorage.currentProductID, false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") 
    {
        document.getElementById("hot").innerHTML = "Impossible";
        return;
    }
    var productInfoJSON = JSON.parse(xmlhttp.responseText);
    document.getElementById("currentProductName").innerHTML = productInfoJSON[0].TenSP;
    document.getElementById("currentProductPublisher").innerHTML = productInfoJSON[0].NSX;
    document.getElementById("currentProductType").innerHTML = productInfoJSON[0].DinhDangSP;
    document.getElementById("currentProductDescription").innerHTML = productInfoJSON[0].MoTaSP;
    document.getElementById("currentProductPrice").innerHTML = productInfoJSON[0].GiaSP;
    var imgSRC = document.getElementById("zoom_03");
    imgSRC.setAttribute("src",productInfoJSON[0].imgSRC);
}