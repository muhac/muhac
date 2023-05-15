var app = new Vue({
  el: "#head",
  data: {
    title: "Muhan Li \u2005\u2502\u2005 Software Engineer",
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
      city: "Beijing",
      country: "China",
      tz: "UTC+8",
      update: "May 12, 2023",
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
          en: "Harbin Institute of Technology, Shenzhen",
          zh: "哈尔滨工业大学（深圳）",
        },
        grade: {
          en: "Grade: 88%",
          zh: "GPA: 88\u2009/\u2009100",
        },
        major: {
          en: "Bachelor of Engineering · Communication Engineering",
          zh: "工学学士 · 通信工程专业",
        },
        city: {
          en: "Shenzhen · Guangdong · China",
          zh: "中国 · 广东 · 深圳",
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
        name: {
          en: "Baidu",
          zh: "百度",
        },
        position: {
          en: "Software Engineer · Baidu App",
          zh: "软件工程师 · 移动生态事业群",
        },
        skills: {
          en: "Backend Developer · Golang",
          zh: "后端研发 · 主力语言 Go",
        },
        city: {
          en: "Beijing · China",
          zh: "中国 · 北京",
        },
      },
    },
    current: {
      start: {
        yr: 2021,
        mo: 8,
      },
      leave: {
        yr: 2023,
        mo: 8,
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
      m += 1;
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
