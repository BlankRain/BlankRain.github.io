/**转换单位算法
**/
var ChangeMoney=function(x){
  var money={'亿':100000000,'千万':10000000,'百万':1000000,'万':10000,'千':1000,'百':100};
  for(var i in money){
      var y=Math.round(x / money[i]);
      if(y!=0){
        var v2=(x / money[i]).toFixed(2);
        v0=(x / money[i]).toFixed(0)
        var v=Number(v2)==Number(v0)?v0:v2;
        return v+''+i;
      }
  }
}
