export const data = {
  experiences: [
    {
      start_yr: 2021,
      start_mo: 8,
      leave_yr: 2023,
      leave_mo: 8,
      lasting: "2 years",
      company: "Baidu",
      website: "https://ir.baidu.com/",
      title: "Software Engineer \u00B7 Search Tech Platform R&D Dept",
      desc: "Baidu App Backend Developer \u00B7 Golang",
      city: "Beijing \u00B7 China",
      current: false,
    },
  ],
  educations: [
    {
      start_yr: 2023,
      start_mo: 8,
      leave_yr: 2024,
      leave_mo: 7,
      lasting: "Recently",
      company: "Nanyang Technological University",
      website: "https://www.ntu.edu.sg/index",
      title: "Master of Science \u00B7 Artificial Intelligence",
      desc: "School of Computer Science and Engineering",
      city: "Singapore",
      current: "Present",
    },
    {
      start_yr: 2017,
      start_mo: 8,
      leave_yr: 2021,
      leave_mo: 6,
      lasting: "Grade: 88%",
      company: "Harbin Institute of Technology",
      website: "http://en.hitsz.edu.cn/",
      title: "Bachelor of Engineering \u00B7 Communication Engineering",
      desc: "School of Electronics and Information Engineering",
      city: "Shenzhen \u00B7 China",
      current: false,
    },
  ],
  projects: [
    {
      message: "2021, Outstanding Graduation Project of Harbin Institute of Technology",
      heading: "Melody embedding <span class=\"text-muted\">borrowed from word2vec and doc2vec</span>",
      content: "Based on <a class=\"link-secondary text-decoration-none\" href=\"https://www.jstage.jst.go.jp/article/ipsjjip/27/0/27_278/_pdf\" target=\"_blank\">Tatsunori Hirai's melody2vec,</a> I implemented song2vec, which can map not only melody fragments but also whole songs to vectors.",
      btn_url: "https://github.com/muhac/melody-embedding",
      btn_txt: "Open source on GitHub",
      img_url: "/assets/img/melodic-figures.png",
      img_alt: "Melody Segmentation",
      img_woh: 3988 / 2441,
    },
    {
      message: "2020, Chinese Computer Software Copyright Certificate",
      heading: "Fast neural style transfer <span class=\"text-muted\">for image processing</span>",
      content: "<a class=\"link-secondary text-decoration-none\" href=\"https://arxiv.org/abs/1603.08155\" target=\"_blank\">Johnson et al.'s fast style transfer</a> is a method for merging the content of one image with the style of another. Built and deployed as a web application.",
      btn_url: "https://github.com/muhac/fast-neural-style-transfer",
      btn_txt: "Open source on GitHub",
      img_url: "/assets/img/fast-neural-style-transfer.png",
      img_alt: "Fast Neural Style Transfer",
      img_woh: 675 / 445,
    },
  ],
  skills: [
    [{
      "name": "Bash",
      "logo": "/assets/logo/bash.svg",
    }, {
      "name": "Python",
      "logo": "/assets/logo/python.svg",
    }, {
      "name": "Go",
      "logo": "/assets/logo/go.svg",
    }, {
      "name": "JavaScript",
      "logo": "/assets/logo/javascript.svg",
    }, {
      "name": "HTML",
      "logo": "/assets/logo/html5.svg",
    }, {
      "name": "CSS",
      "logo": "/assets/logo/css3.svg",
    }, {
      "name": "Haskell",
      "logo": "/assets/logo/haskell.svg",
    }],
    [{
      "name": "Vue.js",
      "logo": "/assets/logo/vuejs.svg",
    }, {
      "name": "Bootstrap",
      "logo": "/assets/logo/bootstrap.svg",
    }, {
      "name": "Nginx",
      "logo": "/assets/logo/nginx.svg",
    }, {
      "name": "Django",
      "logo": "/assets/logo/django.svg",
    }, {
      "name": "Flask",
      "logo": "/assets/logo/flask.svg",
    }, {
      "name": "Gin",
      "logo": "/assets/logo/gin.svg",
    }, {
      "name": "PyTorch",
      "logo": "/assets/logo/pytorch.svg",
    }],
    [{
      "name": "Linux",
      "logo": "/assets/logo/linux.svg",
    }, {
      "name": "Proxmox VE",
      "logo": "/assets/logo/proxmox.svg",
    }, {
      "name": "AWS",
      "logo": "/assets/logo/aws.svg",
    }, {
      "name": "Docker",
      "logo": "/assets/logo/docker.svg",
    }, {
      "name": "MySQL",
      "logo": "/assets/logo/mysql.svg",
    }, {
      "name": "Redis",
      "logo": "/assets/logo/redis.svg",
    }, {
      "name": "Git",
      "logo": "/assets/logo/git.svg",
    }],
  ],
  skills_scroll_frames: [2500, 3000, 3500], //  typical 60 fps
}

const translations = {
  "Recently": {
    "zh-CN": "最近",
  },
  "Present": {
    "zh-CN": "至今",
  },

  "Baidu": {
    "zh-CN": "百度",
  },
  "Software Engineer \u00B7 Search Tech Platform R&D Dept": {
    "zh-CN": "软件工程师 \u00B7 搜索技术平台研发部 \u00B7 MEG",
  },
  "Baidu App Backend Developer \u00B7 Golang": {
    "zh-CN": "手机百度后端研发 \u00B7 主力语言 Go",
  },
  "Beijing \u00B7 China": {
    "zh-CN": "中国 \u00B7 北京",
  },
  "2 years": {
    "zh-CN": "2\u2009年",
  },
  "https://ir.baidu.com/": {
    "zh-CN": "https://home.baidu.com/",
  },

  "Nanyang Technological University": {
    "zh-CN": "南洋理工大学",
  },
  "School of Computer Science and Engineering": {
    "zh-CN": "计算机科学与工程学院",
  },
  "Master of Science \u00B7 Artificial Intelligence": {
    "zh-CN": "理学硕士 \u00B7 人工智能专业",
  },
  "Singapore": {
    "zh-CN": "新加坡",
  },
  "https://www.ntu.edu.sg/index": {
    "zh-CN": "https://www.ntu.edu.sg/main/cn",
  },

  "Harbin Institute of Technology": {
    "zh-CN": "哈尔滨工业大学",
  },
  "School of Electronics and Information Engineering": {
    "zh-CN": "电子与信息工程学院",
  },
  "Bachelor of Engineering \u00B7 Communication Engineering": {
    "zh-CN": "工学学士 \u00B7 通信工程专业",
  },
  "Shenzhen \u00B7 China": {
    "zh-CN": "中国 \u00B7 深圳",
  },
  "Grade: 88%": {
    "zh-CN": "GPA: 88\u2009/\u2009100",
  },
  "http://en.hitsz.edu.cn/": {
    "zh-CN": "https://www.hitsz.edu.cn/index.html",
  },
}

export function getTranslation(lang) {
  let translatedData = JSON.parse(JSON.stringify(data));

  translatedData.experiences.forEach(translateExperiences(lang));
  translatedData.educations.forEach(translateExperiences(lang));
  translatedData.projects.forEach(translateProject(lang));

  return translatedData;
}

function translateExperiences(lang) {
  return (item) => {
    item.website = translate(lang, item.website);
    item.company = translate(lang, item.company);
    item.title = translate(lang, item.title);
    item.desc = translate(lang, item.desc);
    item.city = translate(lang, item.city);
    item.lasting = translate(lang, item.lasting);
    if (item.current) {
      item.current = translate(lang, item.current);
      item.elapsed = calcElapsed(lang, item.start_yr, item.start_mo);
    }
  };
}

function translateProject(lang) {
  return (item) => {
    item.message = translate(lang, item.message);
    item.heading = translate(lang, item.heading);
    item.content = translate(lang, item.content);
    item.btn_txt = translate(lang, item.btn_txt);
    item.img_alt = translate(lang, item.img_alt);
  };
}

function translate(lang, text) {
  if (translations[text] && translations[text][lang]) {
    text = translations[text][lang];
  }
  return text;
}

function calcElapsed(lang, year, month) {
  const d = new Date();
  let yr = d.getFullYear();
  let mo = d.getMonth() + 1;
  let da = d.getDate();

  let m = 12 * (yr - year) + (mo - month);
  if (da > 15) {
    // m += 1;
  }

  let years = parseInt(m / 12);
  let months = m % 12;

  let english = "";
  let chinese = "";

  if (years > 0) {
    english += years + " year";
    chinese += years + "\u2009年";
    if (years > 1) {
      english += "s";
    }
    if (months > 0) {
      english += " ";
      chinese += "\u2009";
    }
  }

  if (months > 0) {
    english += months + " month";
    chinese += months + "\u2009个月";
    if (months > 1) {
      english += "s";
    }
  }

  if (years <= 0 && months <= 0) {
    english = "Recently";
    chinese = "最近";
  }

  switch (lang) {
    case "zh-CN":
      return chinese;
    default:
      return english;
  }
}
