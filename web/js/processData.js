/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function checkInfoBeforeCreateAccount() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPWD = document.getElementById("userPWD").value;
    var userPhone = document.getElementById("userPhone").value;
    var userAddress = document.getElementById("userAddress").value;
    if (userName == "" || userEmail == "" || userPWD == "" || userPhone == "" || userAddress == "")
        alert("Vui lòng nhập đầy đủ thông tin để đăng ký tài khoản...");
    else {
        var xmlhttp = new XMLHttpRequest(); //dung de gui DL den webserver
        //mo kết nối đến Webserver voi yeu cau chay registerAccount.jsp
        xmlhttp.open("get", "jsp/registerAccount.jsp?userName=" + userName + "&userEmail=" + userEmail + "&userPWD=" + userPWD + "&userPhone=" + userPhone +
                "&userAddress=" + userAddress, false);
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

function validateLoginForm() {
    var userEmail = document.getElementById("userEmailLogin").value;
    var userPWD = document.getElementById("userPWDLogin").value;
    if (userEmail == "" || userPWD == "") {
        alert("Hãy nhập đầy đủ thông tin để đăng nhập....");
        return false;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("get", "jsp/loginAccount.jsp?id=" + userEmail + "&pwd=" + userPWD, false);
        xmlhttp.send();
        var notification = xmlhttp.responseText.trim();
        if (notification == "OK") {
            sessionStorage.username = userEmail;
            //xmlhttp.open("get","index.html",false);
            //xmlhttp.send();
            //document.write(xmlhttp.responseText);
            window.location.href = "index.html";
        } else {
            alert("Tài khoản này không tồn tại :3. Vui lòng kiểm tra lại thông tin đăng nhập");
        }

    }
}

function logout() {
    sessionStorage.username = "undefined";
    sessionStorage.cartCapacity = "0";
    window.location.href = "index.html";
}

function loadHotProducts() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadProduct.jsp?type=hot", false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        document.getElementById("hot").innerHTML = "Impossible";
        return;
    }
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listHotProducts = "";
    for (var i = 0; i < listProductsJSON.length; i++) {
        switch (i % 4) {
            case 0:
                listHotProducts += "<li>" +
                        "<div class=\"row\">" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"offer\">- %20</div>" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
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
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
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
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
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
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</li>";
                break;
        }
    }
    document.getElementById("hot").innerHTML = listHotProducts;
}

function loadNewProducts() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadProduct.jsp?type=new", false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        document.getElementById("hot").innerHTML = "Impossible";
        return;
    }
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listHotProducts = "";
    for (var i = 0; i < listProductsJSON.length; i++) {
        switch (i % 4) {
            case 0:
                listHotProducts += "<li>" +
                        "<div class=\"row\">" +
                        "<div class=\"col-md-3 col-sm-6\">" +
                        "<div class=\"products\">" +
                        "<div class=\"thumbnail\"><a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\"></a></div>" +
                        "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                        "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
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
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
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
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
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
                        "<div class=\"button_group\"><button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">THÊM VÀO GIỎ</button><button class=\"button compare\" type=\"button\"><i class=\"fa fa-exchange\"></i></button><button class=\"button wishlist\" type=\"button\"><i class=\"fa fa-heart-o\"></i></button></div>" +
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

function loadSameCategoryProducts()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadSameCategoryProduct.jsp?type=" + sessionStorage.category + "&exception=" + sessionStorage.currentProductID, false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        alert("NNNONNONOON");
        return;
    }
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listSameProducts = "<h4 class=\"title\"> Sản phẩm " +
                                    "<strong> cùng loại </strong>" +
                           "</h4>";
    for (var i = 0; i < listProductsJSON.length; i++) 
    {
        listSameProducts += "<div class=\"special-item\">" +
                                    "<div class=\"product-image\">" + 
                                        "<a href=\"#\">" + 
                                            "<img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"\">" +
                                        "</a>" + 
                                    "</div>" + 
                                    "<div class=\"product-info\">" +
                                        "<p>" + listProductsJSON[i].TenSP + "</p>" +
                                        "<h5 class=\"price\">" + listProductsJSON[i].GiaSP + "</h5>" +
                                    "</div>" + 
                                "</div>";
        /*listHotProducts += "<div class=\"col-md-4 col-sm-6\">" +
                "<div class=\"products\">" +
                "<div class=\"thumbnail\">" +
                "<a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\">" +
                "</a>" +
                "</div>" +
                "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                "<div class=\"button_group\">" +
                "<button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">Thêm vào giỏ</button>" +
                "<button class=\"button compare\" type=\"button\">" +
                "<i class=\"fa fa-exchange\"></i>" +
                "</button>" +
                "<button class=\"button wishlist\" type=\"button\">" +
                "<i class=\"fa fa-heart-o\"></i>" +
                "</button>" +
                "</div>" +
                "</div>" +
                "</div>"*/
    }
    //alert(listHotProducts);
    document.getElementById("sameCategoryProducts").innerHTML = listSameProducts;
}
function loadSpecificProducts() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadProduct.jsp?type=" + sessionStorage.category, false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        alert("NNNONNONOON");
        return;
    }
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listHotProducts = "";
    for (var i = 0; i < listProductsJSON.length; i++) {
        listHotProducts += "<div class=\"col-md-4 col-sm-6\">" +
                "<div class=\"products\">" +
                "<div class=\"thumbnail\">" +
                "<a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\">" +
                "</a>" +
                "</div>" +
                "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                "<div class=\"button_group\">" +
                "<button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">Thêm vào giỏ</button>" +
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

function loadSpecificProductsWithCondition()
{
    var xmlhttp = new XMLHttpRequest();
    var groundValue = document.getElementById("groundNum").value;
    var floorValue = document.getElementById("floorNum").value;
    
    xmlhttp.open("get", "jsp/loadProduct.jsp?type=" + sessionStorage.category, false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        alert("NNNONNONOON");
        return;
    }
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listHotProducts = "";
    for (var i = 0; i < listProductsJSON.length; i++) {
        listHotProducts += "<div class=\"col-md-4 col-sm-6\">" +
                "<div class=\"products\">" +
                "<div class=\"thumbnail\">" +
                "<a id=\"" + listProductsJSON[i].MaSP + "\" href=\"details.html\" onclick=\"setCurrentProductID(this)\"><img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"Product Name\">" +
                "</a>" +
                "</div>" +
                "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                "<h4 class=\"price\">" + listProductsJSON[i].GiaSP + "</h4>" +
                "<div class=\"button_group\">" +
                "<button class=\"button add-cart\" type=\"button\" onclick=\"addProductToCart('" + listProductsJSON[i].MaSP + "')\">Thêm vào giỏ</button>" +
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

function setCurrentProductID(element) {
    var id = element.id;
    //alert(id);
    sessionStorage.currentProductID = id;
    //var str = xmlhttp.responseText.trim();
}

function addProductToCart(productID, defaultNum = true) {
    //alert("addPTC");
    var num = (defaultNum ? 1 : document.getElementById("productNumber").value);
    //alert(productID + " : " + document.getElementById("productNumber").value);
    sessionStorage.currentProductID = productID;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/addToCart.jsp?id=" + sessionStorage.currentProductID + "&num=" + num, false);
    xmlhttp.send();
    alert(xmlhttp.responseText.trim());
    document.getElementById("previewCartCapacity").innerHTML = xmlhttp.responseText.trim();
    sessionStorage.cartCapacity = xmlhttp.responseText.trim();
}

function getCurrentProductInfo() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadCurrentProductInfo.jsp?id=" + sessionStorage.currentProductID, false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        document.getElementById("hot").innerHTML = "Impossible";
        return;
    }
    var productInfoJSON = JSON.parse(xmlhttp.responseText);
    document.getElementById("currentProductName").innerHTML = productInfoJSON[0].TenSP;
    document.getElementById("currentProductPublisher").innerHTML = productInfoJSON[0].NSX;
    document.getElementById("currentProductType").innerHTML = productInfoJSON[0].DinhDangSP;
    document.getElementById("currentProductDescription").innerHTML = productInfoJSON[0].MoTaSP;
    document.getElementById("currentProductPrice").innerHTML = productInfoJSON[0].GiaSP;
    document.getElementById("addProductButton").setAttribute("onclick", "addProductToCart('" + sessionStorage.currentProductID + "', false)");
    var imgSRC = document.getElementById("zoom_03");
    imgSRC.setAttribute("src", productInfoJSON[0].imgSRC);
}


function loadCart() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadCart.jsp?type=cart", false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        alert("Giỏ hàng trống");
        sessionStorage.cartCapacity = "0";
        return;
    }
    //alert(xmlhttp.responseText);
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listProducts = "";
    for (var i = 0; i < listProductsJSON.length - 1; i++) {
        listProducts += "<tr>" +
                "<td>" +
                "<img src=\"" + listProductsJSON[i].imgSRC + "\" alt=\"\">" +
                "</td>" +
                "<td>" +
                "<div class=\"shop-details\">" +
                "<div class=\"productname\">" + listProductsJSON[i].TenSP + "</div>" +
                "<p>" +
                "<img alt=\"\" src=\"" + "images/star.png" + "\">" +
                "<a class=\"review_num\" href=\"#\">(15)</a>" +
                "</p>" +
                "<p>" +
                "Định dạng :" +
                "<strong class=\"pcode\">" + listProductsJSON[i].DinhDangSP + "</strong>" +
                "</p>" +
                "</div>" +
                "<p>" +
                "Mã code :" +
                "<strong class=\"pcode\">120120</strong>" +
                "</p>" +
                "</td>" +
                "<td>" +
                "<h5>" + listProductsJSON[i].GiaSP + "</h5>" +
                "</td>" +
                "<td>" +
                "<input type=\"number\" style=\"width: 5em;\" id=\"productNumberCart\" value=\"" + listProductsJSON[i].SoLuongSP + "\">" +
                "</td>" +
                "<td>" +
                "<h5>" +
                "<strong class=\"red\"> 48.000 VNĐ </strong>" +
                "</h5>" +
                "</td>" +
                "<td>" +
                "<a href=\"cart.html\"  onclick=\"removeProductFromCart('" + listProductsJSON[i].MaSP + "')\">" +
                "<img src=\"images/remove.png\" alt=\"\">" +
                "</a>" +
                "</td>" +
                "</tr>";
    }
    document.getElementById("cartTableBody").innerHTML = listProducts;
    document.getElementById("priceOfAll").innerHTML = listProductsJSON[listProductsJSON.length - 1].DonGia;
}

function removeProductFromCart(productID) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/removeFromCart.jsp?id=" + productID, false);
    xmlhttp.send();
    sessionStorage.cartCapacity = xmlhttp.responseText.trim();
}
function removeAllProductsFromCart()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/removeFromCart.jsp?id=all", false);
    xmlhttp.send();
    sessionStorage.cartCapacity = xmlhttp.responseText.trim();
}
function previewCart() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/previewCart.jsp?type=cart", false);
    xmlhttp.send();
    if (xmlhttp.responseText.trim() == "empty") {
        return;
    }
    //alert(xmlhttp.responseText);
    var listProductsJSON = JSON.parse(xmlhttp.responseText);
    var listProducts = "";
    for (var i = 0; i < listProductsJSON.length - 1; i++) {
        listProducts += "<li>" +
                "<div class=\"cart-item\">" +
                "<div class=\"image\"><img src=\"images/logo1.jpg\" alt=\"\"></div>" +
                "<div class=\"item-description\">" +
                "<p class=\"name\">" + listProductsJSON[i].TenSP + "</p>" +
                "<p>Định dạng: <span class=\"light-red\">" + listProductsJSON[i].DinhDangSP + "</span><br>Số lượng: <span class=\"light-red\">" + listProductsJSON[i].SoLuongSP + "</span></p>" +
                "</div>" +
                "<div class=\"right\"" +
                "<p class=\"price\">" + listProductsJSON[i].GiaSP + "</p>" +
                "</div>" +
                "</div>" +
                "</li>";
    }
    listProducts += "<li><span class=\"total\">Tổng <strong id=\"previewCartPrice\">0 VND</strong></span><button class=\"checkout\" onClick=\"location.href = 'cart.html'\">MUA NGAY</button></li>";
    document.getElementById("previewCart").innerHTML = listProducts;
    document.getElementById("previewCartPrice").innerHTML = listProductsJSON[listProductsJSON.length - 1].DonGia;
}
function getCurrentUserInfo()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "jsp/loadCurrentUserInfo.jsp?userEmail=" + sessionStorage.username, false);
    xmlhttp.send();
    //alert(xmlhttp.responseText);
    var userInfoJSON = JSON.parse(xmlhttp.responseText);
    document.getElementById("userName").value = userInfoJSON[0].HoTenKH;
    document.getElementById("userEmail").value = userInfoJSON[0].EmailKH;
    document.getElementById("userPWD").value = "123456789";
    document.getElementById("userPhone").value = userInfoJSON[0].SodtKH;
    document.getElementById("userAddress").value = userInfoJSON[0].DiaChiKH;
    document.getElementById("userOption").setAttribute("onclick", "sendYourOrder()");
}
function sendYourOrder()
{
    if (!sessionStorage.cartCapacity || sessionStorage.cartCapacity == "0")
        alert(":3 Giỏ hàng trống, không thể thực hiện đặt hàng");
    else
    {
        var xmlhttp = new XMLHttpRequest();
        alert(sessionStorage.username);
        xmlhttp.open("get", "jsp/sendYourOrder.jsp?customerEmail=" + sessionStorage.username, false);
        xmlhttp.send();
        //alert(xmlhttp.responseText.trim());
        var notification = xmlhttp.responseText.trim();
        if (notification == "OK")
        {
            alert("Đặt hàng thành công, bạn có thể kiểm tra đơn hàng tại trang thông tin cá nhân :3");
            sessionStorage.cartCapacity = "0";
            window.location.href = "index.html";
        } else
        {
            alert("Đặt hàng thất bại :|");
        }
    }
}