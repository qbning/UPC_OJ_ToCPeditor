# UPC_OJ_ToCPeditor
A simple Tampermonkey script is used to transfer sample data from the school OJ to the CP editor, modeled after the [Competitive Companion](https://github.com/jmerle/competitive-companion)  
---
## You can add it to your Tampermonkey script.Then allow the GM_xmlhttpRequest permission.  

---
## Issues that are currently unresolved include:
- The saved name of the code file for problems passed to CP editor is at the end of the URL link instead of the problem title name.
- For a set of sample data that contains multiple sets of data nested within it, it is currently only passed to CP editor as a set of test data.
