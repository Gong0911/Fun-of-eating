/**
 * Created by lenvov on 2017/4/26.
 */


/*登陆部分*/
function showLoginBox(){
    layer.open({
        type:1,
        title:"登陆",
        area:["390px","290px"],
        content:$("#login_box")
    })
}
function login(){
    var username = $.trim($("#txtUseName").val());//获取用户名
    var pwd = $.trim($("#txtPwd").val());//获取密码
    if (username == "" || pwd == ""){
        layer.alert("用户名或者密码不能为空",{
            title:"提示",
            icon:5
        });
    }
    else {
       layer.alert("用户名不存在或者密码错误",{
           title:"提示",
           icon:5
       });
   }
}


/*发帖部分*/
function showPostBox(){
    layer.open({
        type:1,
        title:"发帖",
        area:["490px","380px"],
        content:$("#post_box")
    })
}

