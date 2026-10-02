document.addEventListener('pjax:complete', function () {

  // 刷新评论区
  loadComments();

  // 切换到 about 页面, 需要刷新 Calendly 组件
  if (window.location.pathname === '/about/') {
    // 加载 Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }

});

// Calendly iframe 高度调整
window.addEventListener(
  'message',
  function (e) {
    if (e.data.event && e.data.event.indexOf('calendly.') === 0) {
      console.log(e.data);

      if (e.data.event === "calendly.page_height") {
        let iframe = document.querySelector(".calendly-inline-widget");
        let newHeight = e.data.payload.height;
        iframe.style.height = newHeight;

        let widget = document.querySelector("#meet");
        let height = parseInt(newHeight, 10);
        widget.style.marginTop = height < 200 ? "88px" : "0px"; // loading
      }
    }
  }
);
