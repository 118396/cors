myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest() //声明一个XMLHttpRequest 对象
    request.open('get','http://localhost:8002/xxx') //配置 request
    request.send()//发送
    request.onreadystatechange = ()=>{// 状态改变
        if(request.readyState === 4){
            console.log('请求响应都完毕了')
            if(request.status >= 200 && request.status < 300){
                console.log('说明请求成功')
                console.log(typeof request.responseText)
                console.log( request.responseText)
                let string = request.responseText
                //把符合 JSON 语法的字符串
                //转换成 JS 对应的值
                let object = window.JSON.parse(string)
                //JSON.parse 是浏览器提供的
                //json3.js  
                console.log(typeof object)
                console.log(object)
                console.log('object.note')
                console.log(object.note)

                }else if(request.status >= 400){
                console.log('说明请求失败')
            }
        }
    }
    
})