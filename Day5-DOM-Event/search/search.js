// 事件代理

var tabbar = document.getElementById('tabbar')

tabbar.addEventListener('click', function (e) {
    console.log('e: ', e);

    var li = e.target.nodeName == "LI" ? e.target : e.target.parentNode

    var brotherNode = li.parentNode.childNodes;

    // for (var i = 0; i < brotherNode.length; i++) {
    //     if (brotherNode[i].nodeName == "LI") {
    //         brotherNode[i].classList.remove('tabbar-item-active')
    //     }
    // }
    var temp;
    for (temp of brotherNode) {
        console.log('temp: ', temp);
        if (temp.nodeName == "LI") {
            temp.classList.remove('tabbar-item-active')
        }
    }

    li.classList.add('tabbar-item-active');


    


})