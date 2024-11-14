document.addEventListener('pjax:complete', function () {

  // 刷新评论区
  loadComments();

  // 切换到 about 页面, 需要刷新 Calendly 组件
  if (window.location.pathname === '/about/') {
    if (typeof Calendly === 'undefined') {
      // 首次进入页面, 加载 Calendly
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Calendly 已经加载，初始化小部件
      Calendly.initInlineWidget({
        url: 'https://calendly.com/limuhan/hi?primary_color=212529',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }

});
