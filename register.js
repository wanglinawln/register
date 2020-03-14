$(function(){
    //get dom ele
    var $user=$('#user'),
        $tel=$('#tel'),
        $pwd=$('#pwd'),
        $code=$('#code'),
        $btnCode=$('#btnCode'),
        $register=$('#register'),
        $tip=$('.new-password-tip'),
        $list=$('.pwd-checklist');
    //calc button click event
    $register.click(function(){
        //validate if error return
        validate('#user');
        validate('#pwd');
        validate('#tel');
        validate('#code');
        if(validate('#user')&&validate('#tel')&&validate('#pwd')&&validate('#code')){
            alert("注册成功！");
        } 
        
    });
    $btnCode.click(function(){
        //validate if error return
        if(!validate('#user')||!validate('#tel')||!validate('#pwd')){
            $('#code-validation-message').html("请求超时,请稍后再试");
        }
        else{
            var timer;
            var num=60;
            $btnCode.attr("disabled","disabled");
            $btnCode.css("cursor","not-allowed");
            $('#code-validation-message').html("");
            timer =setInterval(function() {
                num--;
                if(num===0){
                    clearInterval(timer);
                    $btnCode.val("获取验证码");
                    $btnCode.removeAttr("disabled");
                    $btnCode.css("cursor","pointer");

                }
                else{
                    $btnCode.val(num+"s");
                }
            }, 1000);
        }
            
    });
    
    $user.focusout(function(){
        if(!validate('#user')){
            $user.select();
        }
    });
    $pwd.focusout(function(){
        if(!validate('#pwd')){
            $pwd.select();
        }
    });
    $tel.focusout(function(){
        if(!validate('#tel')){
            $tel.select();
        }
    });
    $code.focusout(function(){
        if(!validate('#code')){
            $code.select();
        }
    });

    $tip.mouseover(function(){
        $list.css("display","block");
    })
    $tip.mouseout(function(){
        $list.css("display","none");
    })

    function validate(filed){
        var $data=$(filed),
            $msg=$(filed+'-validation-message');
        switch(filed){
            case '#code':
                if(validate('#user')&&validate('#tel')&&validate('#pwd')&&$data.val()){
                    $msg.html("");
                    return true;
                }
                $msg.html("请求超时,请稍后再试");
                return false;
            case "#user":
                if(!(/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/.test($data.val()))){
                    $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
                    $data.select();
                    return false;
                }
                $msg.html('');
                return true;
            case "#pwd":
                if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($data.val()))){
                    $msg.html('密码设置不符合要求');
                    $data.select();
                    return false;
                }
                $msg.html('');
                return true;
            case "#tel":
                if(!(/^1[3456789]\d{9}$/.test($data.val()))){
                    $msg.html('手机号码格式不正确');
                    $data.select();
                    return false;
                }
                $msg.html('');
                return true;
            default:
                break;
        }
        
    }
    
});