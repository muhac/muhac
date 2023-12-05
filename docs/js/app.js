var app = new Vue({
  el: "#head",
  data: {
    title: "Muhan Li \u2005\u2502\u2005 About me",
  },
});

var content = new Vue({
  el: "#content",
  data: {
    loading: true,
    en: true,
    zh: false,
    info: {
      name: "Li,Muhan".replace(/,M/, "m"),
      mail: "\u0040msn\u002ecom",
      city: "Singapore",
      tz: "UTC+8",
      update: "August 18, 2023",
    },
    edu: {
      hitsz: {
        start: {
          yr: 2017,
          mo: 8,
        },
        leave: {
          yr: 2021,
          mo: 6,
        },
        name: {
          en: "Harbin Institute of Technology",
          zh: "哈尔滨工业大学",
        },
        url: {
          en: "http://en.hitsz.edu.cn/",
          zh: "https://www.hitsz.edu.cn/index.html",
        },
        grade: {
          en: "Grade: 88%",
          zh: "GPA: 88\u2009/\u2009100",
        },
        major: {
          en: "Bachelor of Engineering · Communication Engineering",
          zh: "工学学士 · 通信工程专业",
        },
        school: {
          en: "School of Electronics and Information Engineering",
          zh: "电子与信息工程学院",
        },
        city: {
          en: "Shenzhen · China",
          zh: "中国 · 深圳",
        },
      },
      ntu: {
        start: {
          yr: 2023,
          mo: 8,
        },
        leave: {
          yr: 2024,
          mo: 7,
        },
        name: {
          en: "Nanyang Technological University",
          zh: "南洋理工大学",
        },
        url: {
          en: "https://www.ntu.edu.sg/index",
          zh: "https://www.ntu.edu.sg/main/cn",
        },
        grade: {
          en: "TBA",
          zh: "TBA",
        },
        major: {
          en: "Master of Science · Artificial Intelligence",
          zh: "理学硕士 · 人工智能专业",
        },
        school: {
          en: "School of Computer Science and Engineering",
          zh: "计算机科学与工程学院",
        },
        city: {
          en: "Singapore",
          zh: "新加坡",
        },
      },
    },
    exp: {
      baidu: {
        start: {
          yr: 2021,
          mo: 8,
        },
        leave: {
          yr: 2023,
          mo: 8,
        },
        lasting: {
          en: "2 years",
          zh: "2 年",
        },
        name: {
          en: "Baidu",
          zh: "百度",
        },
        url: {
          en: "https://ir.baidu.com/",
          zh: "https://home.baidu.com/",
        },
        position: {
          en: "Software Engineer · Search Tech Platform R&D Dept",
          zh: "软件工程师 · 搜索技术平台研发部 · MEG",
        },
        skills: {
          en: "Baidu App Backend Developer · Golang",
          zh: "手机百度后端研发 · 主力语言 Go",
        },
        city: {
          en: "Beijing · China",
          zh: "中国 · 北京",
        },
      },
    },
    current: {
      start: {
        yr: 2023,
        mo: 8,
      },
      leave: {
        yr: 2024,
        mo: 7,
      },
      present: {
        en: "Present",
        zh: "至今",
      },
      lasting: {
        en: "Recently",
        zh: "最近",
      },
    },
  },

  created() {
    let urlParams = new URLSearchParams(window.location.search);
    let ok = urlParams.has("lang");
    let zh = ok && urlParams.get("lang").startsWith("zh");
    this.en = !zh;
    this.zh = zh;

    const d = new Date();
    let yr = d.getFullYear();
    let mo = d.getMonth() + 1;
    let da = d.getDate();

    this.current.leave.yr = yr;
    this.current.leave.mo = mo;

    let start = this.current.start;
    let m = 12 * (yr - start.yr) + (mo - start.mo);
    if (da > 15) {
      // m += 1;
    }

    let years = parseInt(m / 12);
    let months = m % 12;

    let english = "";
    let chinese = "";

    if (years > 0) {
      english += years + " year";
      chinese += years + " 年";
      if (years > 1) {
        english += "s";
      }
      if (months > 0) {
        english += " ";
        chinese += " ";
      }
    }

    if (months > 0) {
      english += months + " month";
      chinese += months + " 个月";
      if (months > 1) {
        english += "s";
      }
    }

    if (years > 0 || months > 0) {
      this.current.lasting.en = english;
      this.current.lasting.zh = chinese;
    }
  },

  mounted() {
    that = this;
    setTimeout(function () {
      that.loading = false;
    }, 100);
  },

  methods: {
    lang_en(event) {
      this.en = true;
      this.zh = false;
    },
    lang_zh(event) {
      this.en = false;
      this.zh = true;
    },
  },
});
