const $ = function (sel) {
    let nodeList = document.querySelectorAll(sel);
  
    const text = function (content) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].textContent = content;
      }
    }
  
    const toggleClass = function (className) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.toggle(className);
      }
    }
  
    const on = function (action, cb) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener(action, cb);
      }
    }
  
    const val = function (content) {
        if(content === undefined){
          return nodeList[0].value; 
        } else {
          nodeList[0].value = content;
        }     
    }

    const html = function (content) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = content;
          }    
    }
    //part2
    const append = function(content) {
      for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML += content;
      }
    }
    //part5
    const empty = function () {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = '';      
    }
  }

    const show = function () {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[0].style.display = 'block';
    }      
  }

    const hide = function () {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.display = 'none';    
  }
}
  
    const publicAPI = {
      nodeList: nodeList,
      text: text,
      toggleClass: toggleClass,
      on: on,
      val: val,
      html: html,
      append: append,
      empty: empty,
      show: show,
      hide: hide
    }
  
    return publicAPI;
  
  
  
  }