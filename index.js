$(function() {
    var $name = $('#name'),
        $phone = $('#phone'),
        $psw = $('#psw'),
        $button = $('#button'),
        $names = $('#names'),
        $phones = $('#phones'),
        $tests = $('#tests'),
        $psws = $('#psws'),
        $num = $('#num'),
        $nums = $('#nums');
    var isname = false,
        ispsw = false,
        isphone = false,
        isnum = false;
    var count=60;
    $name.focus(()=>{
        $names.html('最长14个英文或7个汉字')
    });
    $psw.focus(()=>{
        $psws.html('长度为8~14个字符,不能有中文和空格')
    });

    $name.blur(function(){
        if(!$name.val()){
            $names.html("姓名不能为空")
        }
        else if($name.val().length > 14){
            $names.html('用户名长度不能超过14个字符');
        }else if(!(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test($name.val()) && !/^[0-9]*$/.test($name.val()))){
            $names.html('用户名只支持中英文，数字，下划线且不能为纯数字')
        }else{
            $names.html('');
            isname=true;
        }
    });
    $psw.blur(function(){   
        if(!$psw.val()){
            $psws.html("密码不能为空")  
        }
        else if($psw.val().length < 8 || $psw.val().length > 14){
            $psws.html('密码格式不符合要求')
        }
        else{
            $psws.html('');
            ispsw=true;
        }
    });

    $phone.blur(()=>{
        if(!$phone.val()){
            $phones.html("手机号码不能为空")  
        }
        else if(!(/^1[3456789]\d{9}$/.test($phone.val()))){
            $phones.html('手机号格式不正确');
        }else{
            $phones.html('');
            isphone = true;
        }
    });

    $num.click(()=>{
        if(!$phone.val()){
            $phones.html("手机号码不能为空")  
        }else{
            $num.addClass('disable').attr({'disabled':'disabled'});
        var time = setInterval(()=>{
            $num.html(count--);
        },1000);
        setTimeout(()=>{
            $num.removeClass('disable').removeAttr('disabled');
            clearInterval(time);
            $num.html('获取验证码');
            count = 60;
        },60000);
        }
        
    });
    $tests.blur(()=>{
        if(!$tests.val()){
            $nums.html('请输入验证码')
            isnum = false;
        }else{
            $nums.html('');
            isnum = true;
        }
    });

    $button.click(()=>{
        if(! (isname && ispsw && isphone && isnum)){
            alert('注册失败')
        }else{
            alert('注册成功')
        }
        
    });

    
})