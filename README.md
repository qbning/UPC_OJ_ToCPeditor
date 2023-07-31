# UPC_OJ_ToCPeditor
--
## 可以把学校OJ的测试样例一键导入到CP editor里  
  在使用了Competitive Companion和CP editor后发现不支持本校的OJ，遂写了一个
  
在油猴里添加脚本即可，用的时候需要给权限

## 目前存在的问题
- 导入CP editor后默认文件名为URL后几位，而非问题题目
- 如果改题目在样例区域里又分了几个样例，这种的仍然会导入到一个测试点中
- --
A simple Tampermonkey script is used to transfer sample data from the school OJ to the CP editor, modeled after the [Competitive Companion](https://github.com/jmerle/competitive-companion)  
---
## You can add it to your Tampermonkey script.Then allow the GM_xmlhttpRequest permission.  

---
## Issues that are currently unresolved include:
- The saved name of the code file for problems passed to CP editor is at the end of the URL link instead of the problem title name.
- For a set of sample data that contains multiple sets of data nested within it, it is currently only passed to CP editor as a set of test data.
--
