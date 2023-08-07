// ==UserScript==
// @name         UPC_tools
// @namespace    http://example.com/
// @version      1
// @description  把题目样例传递到CP editor和小熊猫devC++里
// @match        *://icpc.upc.edu.cn/problem.php*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // 添加样式规则
    GM_addStyle(`
    .my-button {
      position: fixed;
      top: 10px;
      right: 10px;
      display: inline-block;
      padding: 5px 10px;
      background-color: #007bff;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
  `);


    // 创建按钮并添加到页面中
    const button = document.createElement('button');
    button.className = 'my-button';
    button.textContent = 'To CP editor';
    document.body.appendChild(button);

    // 添加点击事件监听器
    button.addEventListener('click', function() {
        // 获取问题数据
        const problemTitle = document.querySelector('.panel-heading >title').textContent.trim();
        const timeLimit = parseFloat(document.querySelector('[fd="time_limit"]').textContent.trim());
        const memoryLimitElement = Array.from(document.querySelectorAll('.panel-heading span')).find(el => el.textContent.includes('内存限制'));
        const memoryLimitText = memoryLimitElement.nextSibling.textContent;
        const memoryLimit = memoryLimitText.match(/\d+/)[0];
        const sampleInputsElement = document.querySelector('#sampleinput');
        const inputExample = sampleInputsElement.textContent.trim();
        const sampleOutputElement = document.querySelector('#sampleoutput');
        const outputExample = sampleOutputElement.textContent.trim();

        const data = {
            name: problemTitle,
            group: "upc-icpc",
            url: window.location.href,
            interactive: false,
            memoryLimit: parseInt(memoryLimit),
            timeLimit: parseInt(timeLimit*1000),
            tests: [
                {
                    input: inputExample,
                    output: outputExample
                }
            ],
            testType: 'single',
            input: {
                type: 'stdin'
            },
            output: {
                type: 'stdout'
            },
            languages: {
                java: {
                    mainClass: 'Main',
                    taskClass: 'GCastleDefense'
                }
            },
            batch: {
                id: '123e67c8-03c6-44a4-a3f9-5918533f9fb2',
                size: 1
            }
        };
        // 复制到剪贴板
        //navigator.clipboard.writeText(JSON.stringify(data, null, 4));
        // 发送到服务器
        const url = 'http://localhost:10045/';
        GM_xmlhttpRequest({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            onload: function(response) {
                console.log('JSON data sent successfully to ' + url);
            },
            onerror: function(response) {
                console.error('Failed to send JSON data:', response.status);
            }
        });
    });
})();
