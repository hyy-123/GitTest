/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车(v-on.enter)
  2. 查询数据(axios接口，v-model)
  3. 渲染数据(v-for数组，that)
*/
var app = new Vue({
    el:"#app",
    data:{
        city:'武汉',//查询的城市信息，接着用v-model拿到输入的内容,发送到服务器
        weatherList:[]//v-for渲染数据，要绑定一份数据，

    },
    methods:{
        searchweather:function(){
            //console.log(this.city);
            //调用接口
            //保存this
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)//等于的值不固定
            .then(function(response){
                console.log(response.data.data.forecast);
                that.weatherList = response.data.data.forecast;
            })
            .catch(function(err){
                console.log(err);
            })
        },
        // 点击查询：1.点击城市（v-on自定义参数）
        // 2.查询数据（this.方法（））3.渲染数据
        //4.自定义参数可以让代码的复用性更高
        //5.methods中定义的方法内部，可以通过this关键字点出其他的方法
        changeCity:function(city){//形参必须写
            this.city=city;
            this.searchweather();
        }
    }
})