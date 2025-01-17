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
