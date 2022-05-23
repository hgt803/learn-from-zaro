// 事件代理

var showAndHideMoreBtn = document.getElementById('show-and-hide-more')

// 默认是收起的 
var listState = false

// 分类列表外层包裹
var listWarpEle = document.getElementById('list-warp')

showAndHideMoreBtn.addEventListener('click', function (e) {
    // 切换显示隐藏列表状态
    listState = !listState

    // console.log('e: ', e);

    // 切换状态 控制箭头动画
    showAndHideMoreBtn.classList.toggle('is-show');
    showAndHideMoreBtn.classList.toggle('is-hide');

    var childNodes = showAndHideMoreBtn.childNodes;

    for(var i = 0; i<childNodes.length;i++){

        if(listState){
            // 列表展开

            // 更改文字
            if(childNodes[i].className == 'more') childNodes[i].style.display='none'
            if(childNodes[i].className == 'hide') childNodes[i].style.display='block'

            // 控制列表动画
            listWarpEle.classList.remove('list-warp-hide')
            listWarpEle.classList.add('list-warp-show')
        }else{
            // 列表收起

            // 更改文字
            if(childNodes[i].className == 'hide') childNodes[i].style.display='none'
            if(childNodes[i].className == 'more') childNodes[i].style.display='block'
            
            // 控制列表动画
            listWarpEle.classList.remove('list-warp-show')
            listWarpEle.classList.add('list-warp-hide')
        }
    }

    


})