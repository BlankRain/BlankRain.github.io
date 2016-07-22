#"Hello World"七十二绝技

##技一: 龙吼功

原文出自三叔龙吼功~ [http://www.moye.me/2016/07/17/fp_terms_in_javascript/]
```
let compose = (f, g) => a => f(g(a))
 
let toUpperCase = x => x.toUpperCase()
let exclaim = x => x + '!'
let shout = compose(exclaim, toUpperCase);
 
shout("hello world") // HELLO WORLD!

```
###增强型龙吼功
```
let scream=compose(exclaim,shout);
scream("hello world") //HELLO WORLD!!
```

##技二: 狗吠功

技艺创作者:二狗子. 

特点：强势弹窗,阻塞线程.
```
alert("hello world!!")

```
其他姿势的 狗吠功
```
alert`helloworld`
```
特点:木有括号哦~
