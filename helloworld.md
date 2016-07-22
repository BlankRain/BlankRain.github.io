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

战技创作者:二狗子. 

特点：强势弹窗,阻塞线程.
```
alert("hello world!!")

```
###其他姿势的 狗吠功
```
alert`helloworld`
```
特点:木有括号哦~

###增强型的狗吠功
```
while(true){alert`hello world`}
```
害人害己,慎用~

##技三: 红生术

战技创作者:狗好看
```
;; clj 
 (defmacro hello [what] (print "hello" what))
 
  (hello world) ;;; hello worldnil
```
战技特点: 如果用函数,world是未定义的符号~ 但是使用宏,就不会出现问题.  (hello world) 无引号~

用宏生了新的符号,取其音,装个文艺逼,红生术~

##技四: 龙爪功

龙字辈的都是三叔创的~
```
let hello = (who) => `hello, ${who}`
hello  `world` // hello,world
```
特点: 有种js版的scala的感觉~ 

撕~ 盖~ 拉~ 龙爪功三式~

