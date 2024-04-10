import {data, getTranslation} from "./data.js";

const update = "December 8, 2023";

const app = new Vue({
  el: "#app",
  data: {
    loading: true,
    lang: "en-US",
    name: "Li, Muhan".replace(/, M/, "m"),
    mail: "\u0040msn\u002Ecom",
    city: "Singapore",
    time: "09:41",
    utcD: "UTC+8",
    tz: "Asia/Singapore",
    update: update,
    year: new Date().getFullYear(),
    skills: data.skills,
    scroll: data.skills_scroll_frames,
    projects: [],
    contents: [],
  },

  created() {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("lang")) {
      this.lang = urlParams.get("lang");
    }

    fillContents(this);

    this.utcD = getUtcOffset(this.tz);
    this.time = getLocalTime(this.tz);
  },

  mounted() {
    this.scroll.forEach((_, index) => {
      this.initiateScrollForRow(index);
    });

    setInterval(() => {
      this.time = getLocalTime(this.tz);
    }, 1000);

    this.loading = false;
  },

  methods: {
    switch_lang(event) {
      if (this.lang === "en-US") {
        this.lang = "zh-CN";
      } else {
        this.lang = "en-US";
      }
      console.log(this.lang);
      fillContents(this);
    },

    initiateScrollForRow(index) {
      let delta = 0;
      const step = () => {
        if (this.scroll[index] > 0) {
          let display = this.$refs.scrollDisplay[index];
          let displayWidth = display.getBoundingClientRect().width;

          let content = this.$refs.scrollContent[index];
          let contentWidth = content.getBoundingClientRect().width / 2;

          delta = (delta + displayWidth / this.scroll[index]) % contentWidth;

          let x = index % 2 ? delta : contentWidth - delta;
          display.style.transform = `translateX(${-x}px)`;
        }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    },

    pauseScroll(index) {
      this.scroll[index] = -Math.abs(this.scroll[index]);
    },

    resumeScroll(index) {
      this.scroll[index] = Math.abs(this.scroll[index]);
    }
  },
});

function fillContents(that) {
  const translated = getTranslation(that.lang);
  that.projects = translated.projects;
  that.contents = [{
    cn: "工作经历",
    en: "Experience",
    data: translated.experiences,
  }, {
    cn: "教育背景",
    en: "Education",
    data: translated.educations,
  }];
}

function getLocalTime(timeZone) {
  const now = new Date();
  const formattedTime = now.toLocaleString('en-US', {
    timeZone: timeZone,
    hour12: false,
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  let [hour, minute, second] = formattedTime.split(':');
  if (hour === '24') {
    hour = '00';
  }

  return `${hour}:${minute}`;
}

function getUtcOffset(timeZone) {
  const now = new Date();
  const utcDate = new Date(now.toLocaleString('en-US', {timeZone: 'UTC'}));
  const tzDate = new Date(now.toLocaleString('en-US', {timeZone: timeZone}));

  let offset = (tzDate - utcDate) / (3600 * 1000);

  // Handle daylight saving time
  const isDaylightSaving = tzDate.getTimezoneOffset() < utcDate.getTimezoneOffset();
  if (isDaylightSaving) {
    offset += 1;
  }

  const hours = Math.floor(Math.abs(offset));
  const minutes = Math.floor((Math.abs(offset) * 60) % 60);
  const sign = offset >= 0 ? '+' : '-';

  return `UTC\u2009${sign}\u200A${hours.toString()}`;
  // return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
