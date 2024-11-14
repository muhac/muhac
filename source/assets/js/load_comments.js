// 加载评论组件
function loadComments() {
    const config = {
        src: 'https://giscus.app/client.js',
        'data-repo': 'muhac/muhac',
        'data-repo-id': 'R_kgDOJh6dcA',
        'data-category': 'Comments',
        'data-category-id': 'DIC_kwDOJh6dcM4CkP56',
        'data-mapping': 'pathname',
        'data-strict': '0',
        'data-reactions-enabled': '1',
        'data-emit-metadata': '0',
        'data-input-position': 'top',
        'data-theme': 'preferred_color_scheme',
        'data-lang': 'en',
        crossorigin: 'anonymous',
        async: true
    };

    const container = document.querySelector('.comments-container');
    if (!container) return;

    // 清空容器中的所有子元素
    container.innerHTML = '';
    // 创建新的评论区
    const utterances = document.createElement('script');
    Object.entries(config).forEach(([key, value]) => utterances.setAttribute(key, value));
    container.appendChild(utterances);
}

document.addEventListener('DOMContentLoaded', loadComments);
