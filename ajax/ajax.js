            /* 
                method
                url
                data
                success  数据下载成功以后执行的函数
                error    数据下载失败以后执行的函数
             */
        
            // querystring函数将用户传入的对象通过函数拼接成查询字符串
            function querystring(obj){
                var str = "";
                // for in 直接对对象进行遍历，attr是键，拼接时要将这个键对应值
                for(var attr in obj){
                    str += attr + "=" + obj[attr] + "&"
                }
                return str.substring(0, str.length - 1);       
                //字符串提取，把最后的&去掉
            }

            function $ajax({method="get",url,data,success,error}){
                //1.创建ajax对象
                var xhr = null;
                try{
                    xhr = new XMLHttpRequest();
                }catch(error){
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                // 判断如果数据存在
                if(data){
                    data = querystring(data);
                    // 此时data变为查询字符串格式
                }
                if(method == "get"&& data){
                    url += "?" + data;
                }

                xhr.open(method,url,true);

                if(method == "get"){
                    xhr.send();
                }else{
                    // 必须在send方法之前，去设置请求的格式
                    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
                    xhr.send(data);
                }

                // 4.等待数据响应
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            // 如何处理数据不确定，使用回调函数,将一段代码当成参数，传到某个函数中，在合适的地方调用
                            
                            if(success){
                                success(xhr.responseText);
                            }
                        }else{
                            if(error){
                                error("ERROR:" + xhr.status);
                            }                      
                        }
                    }
                }
            }
        
        