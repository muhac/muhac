/* global NexT, CONFIG */

NexT.motion = {};

NexT.motion.integrator = {
  queue: [],
  init() {
    this.queue = [];
    return this;
  },
  add(fn) {
    const sequence = fn();
    this.queue.push(sequence);
    return this;
  },
  bootstrap() {
    if (!CONFIG.motion.async) this.queue = [this.queue.flat()];
    this.queue.forEach(sequence => {
      const timeline = window.anime.timeline({
        duration: 40,
        easing  : 'linear'
      });
      sequence.forEach(item => {
        if (item.deltaT) timeline.add(item, item.deltaT);
        else timeline.add(item);
      });
    });
  }
};

NexT.motion.middleWares = {
  header() {
    const sequence = [];

    function getMistLineSettings(targets) {
      sequence.push({
        targets,
        scaleX  : [0, 1],
        duration: 100,
        deltaT  : '-=40'
      });
    }

    function pushToSequence(targets, sequenceQueue = false) {
      sequence.push({
        targets,
        opacity: 1,
        top    : 0,
        deltaT : sequenceQueue ? '-=40' : '-=0'
      });
    }

    pushToSequence('.column');
    CONFIG.scheme === 'Mist' && getMistLineSettings('.logo-line');
    CONFIG.scheme === 'Muse' && pushToSequence('.custom-logo-image');
    pushToSequence('.site-title');
    pushToSequence('.site-brand-container .toggle', true);
    pushToSequence('.site-subtitle');
    (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini') && pushToSequence('.custom-logo-image');

    const menuItemTransition = CONFIG.motion.transition.menu_item;
    if (menuItemTransition) {
      document.querySelectorAll('.menu-item').forEach(targets => {
        sequence.push({
          targets,
          complete: () => targets.classList.add('animated', menuItemTransition),
          deltaT  : '-=40'
        });
      });
    }

    return sequence;
  },

  subMenu() {
    const subMenuItem = document.querySelectorAll('.sub-menu .menu-item');
    if (subMenuItem.length > 0) {
      subMenuItem.forEach(element => {
        element.classList.add('animated');
      });
    }
    return [];
  },

  postList() {
    const sequence = [];
    const { post_block, post_header, post_body, coll_header } = CONFIG.motion.transition;

    function animate(animation, elements) {
      if (!animation) return;
      elements.forEach(targets => {
        sequence.push({
          targets,
          complete: () => targets.classList.add('animated', animation),
          deltaT  : '-=20'
        });
      });
    }

    document.querySelectorAll('.post-block').forEach(targets => {
      sequence.push({
        targets,
        complete: () => targets.classList.add('animated', post_block),
        deltaT  : '-=20'
      });
      animate(coll_header, targets.querySelectorAll('.collection-header'));
      animate(post_header, targets.querySelectorAll('.post-header'));
      animate(post_body, targets.querySelectorAll('.post-body'));
    });

    animate(post_block, document.querySelectorAll('.pagination, .comments'));

    return sequence;
  },

  sidebar() {
    const sequence = [];
    const sidebar = document.querySelectorAll('.sidebar-inner');
    const sidebarTransition = CONFIG.motion.transition.sidebar;
    // Only for desktop of Pisces | Gemini.
    if (sidebarTransition && (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini') && window.innerWidth >= 992) {
      sidebar.forEach(targets => {
        sequence.push({
          targets,
          complete: () => targets.classList.add('animated', sidebarTransition),
          deltaT  : '-=20'
        });
      });
    }
    return sequence;
  },

  footer() {
    return [{
      targets: document.querySelector('.footer'),
      opacity: 1
    }];
  }
};
