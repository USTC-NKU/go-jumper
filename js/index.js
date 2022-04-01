$(document).ready(()=>{
    console.log("Running...")
    if(window.location.hash===""){
        document.getElementsByClassName("loading-text")[0].innerHTML = "安全警告，侦测到异常折跃，正在返回折跃点<dot>...</dot>"
        setTimeout(()=>{
            window.location.href = "https://blog.starysky.top"
        },5000)
        return;
    }
    let reg = new RegExp(/#(.*)/g);
    let base64 = reg.exec(window.location.hash)
    let link = window.atob(base64[1])
    let referrer = document.referrer.split('/')[2];
    referrer = referrer===undefined?"":referrer.split('.')
    if(referrer[referrer.length-2]+'.'+referrer[referrer.length-1]!="blog.starysky.top" || document.referrer===""){
        swal.fire({
            title: "时空折跃提示",
            text: "旅行者，你即将离开小U的星系团，折跃即将开始，确定前往"+link+"吗？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "开启折跃",
            cancelButtonText: "取消折跃",
          }).then(function(isConfirm){
            console.log(isConfirm)
            if (isConfirm) {
                console.log('setTimeout')
                setTimeout(function(){
                    window.location.href = link
                },3000)
            }    
            else {
                window.opener=null;
                //window.open('','_self');
                window.close();
                /* 微信浏览器关闭 */ 
                WeixinJSBridge.call('closeWindow');
            }
        })
    }else{
        setTimeout(function(){
            window.location.href = link
        },3000)
    }
})
