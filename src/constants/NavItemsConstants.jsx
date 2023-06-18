import { ImageContainer } from "../assets/img/IMG";

export const companyDetails = [
  {
    icon: ImageContainer.redTriangle,
    titel: "مشکلات با اولویت بالا",
    number: "2",
    progressColor: "#F35242",
  },
  {
    icon: ImageContainer.yellowSquare,
    titel: "مشکلات با الویت متوسط",
    number: "5",
    progressColor: "#FFCE47",
  },
  {
    icon: ImageContainer.circleGray,
    titel: "مشکلات با الویت کم",
    number: "9",
    progressColor: "#7D7D7D",
  },
  {
    icon: ImageContainer.greeTriangle,
    titel: "مشکلات حل شده و درست",
    number: "2",
    progressColor: "#10CCAE",
  },
];

export const companyDetails2 = [
  { img: ImageContainer.whiteLockIco, title: "امن" },
  { img: ImageContainer.whiteSourceIcoIco, title: "64 منبع" },
  { img: ImageContainer.whiteScalesOfJusticeIco, title: "38.72 کیلوبایت" },
  { img: ImageContainer.whiteSpeedIco, title: "1.67 ثانیه" },
];

export const speedInformation = [
  {
    img: ImageContainer.yellowSquare,
    title: "Time to Interactive",
    time: "3.4 ثانیه",
  },
  {
    img: ImageContainer.redTriangle,
    title: "First Contentful Paint",
    time: "12 میلی ثانیه",
  },
  {
    img: ImageContainer.greeTriangle,
    title: "Total Blocking Time",
    time: "3.4 ثانیه",
  },
  { img: ImageContainer.redTriangle, title: "Speed Index", time: "3.4 ثانیه" },
  {
    img: ImageContainer.yellowSquare,
    title: "Cumulative Layout Shift",
    time: "3.4 ثانیه",
  },
  {
    img: ImageContainer.redTriangle,
    title: "Largest Contentful Paint",
    time: "3.4 ثانیه",
  },
];
export const miniChartSetting1 = {
  datasets: [
    {
      label: "# of Votes",
      data: [5, 95],
      cutout: 55,
      backgroundColor: ["rgba(255, 255, 255, 0.2)", "#10CCAE"],
      borderWidth: 0,
      borderRadius: 5,
    },
  ],
};
export const miniChartSetting2 = {
  datasets: [
    {
      label: "# of Votes",
      data: [10, 90],
      cutout: 55,
      backgroundColor: ["rgba(255, 255, 255, 0.2)", "#10CCAE"],
      borderWidth: 0,
      borderRadius: 5,
    },
  ],
};
export const miniChartSetting3 = {
  datasets: [
    {
      label: "# of Votes",
      data: [33, 67],
      cutout: 55,
      backgroundColor: ["rgba(255, 255, 255, 0.2)", "#FFCE47"],
      borderWidth: 0,
      borderRadius: 5,
    },
  ],
};
export const miniChartSetting4 = {
  datasets: [
    {
      label: "# of Votes",
      data: [77, 23],
      cutout: 55,
      backgroundColor: ["rgba(255, 255, 255, 0.2)", "#F35242"],
      borderWidth: 0,
      borderRadius: 5,
    },
  ],
};
export const textCenter1 = {
  id: "textCenter1",
  beforeDatasetsDraw(chart) {
    const { ctx } = chart;

    ctx.save();
    ctx.font = "bolder 36px sans-serif";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      miniChartSetting1.datasets[0].data[1],
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};
export const textCenter2 = {
  id: "textCenter2",
  beforeDatasetsDraw(chart) {
    const { ctx } = chart;

    ctx.save();
    ctx.font = "bolder 36px sans-serif";
    ctx.fillStyle = "#10CCAE";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      miniChartSetting2.datasets[0].data[1],
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};
export const textCenter3 = {
  id: "textCenter3",
  beforeDatasetsDraw(chart) {
    const { ctx } = chart;

    ctx.save();
    ctx.font = "bolder 36px sans-serif";
    ctx.fillStyle = "#10CCAE";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      miniChartSetting3.datasets[0].data[1],
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};
export const textCenter4 = {
  id: "textCenter4",
  beforeDatasetsDraw(chart) {
    const { ctx } = chart;

    ctx.save();
    ctx.font = "bolder 36px sans-serif";
    ctx.fillStyle = "#10CCAE";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      miniChartSetting4.datasets[0].data[1],
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

export const chartsData = [
  {
    data: miniChartSetting1,
    titel: "سئو",
    backgroundColor: "rgba(16, 204, 174, 0.2)",
    text: textCenter1,
  },
  {
    data: miniChartSetting2,
    titel: "معیار های مهم",
    backgroundColor: "rgba(16, 204, 174, 0.2)",
    text: textCenter2,
  },
  {
    data: miniChartSetting3,
    titel: "دسترسی پذیری",
    backgroundColor: "rgba(255, 206, 71, 0.2)",
    text: textCenter3,
  },
  {
    data: miniChartSetting4,
    titel: "عملکرد اجرایی",
    backgroundColor: "rgba(243, 82, 66, 0.2)",
    test: textCenter4,
  },
];

export const technicalAnalysis = {
  title_tag: {
    label: "عنوان سایت (Title Tag)",
    value: "خرید کفش | ابران کفش",
    length: 50,
    score: 50,
    description:
      "تگ عنوان عنصر HTML است که عنوان صفحه وب را مشخص می کند. تگ عنوان در بالای مرورگر شما، در نتایج جستجو و همچنین در نوار نشانک ها نمایش داده می شود.",
  },
  meta_description: {
    label: "توضیحات سایت (Meta Description)",
    value:
      "چکاپ تولز یک سایت جامع برای آنالیز سئو و سرعت سایت شما می باشد که با بیش از 60 ابزار مختلف سایت شما را بررسی میکند و نیاز اصلی هر وبمستر می باشد.",
    length: 225,
    score: 80,
    description:
      "توضیحات متا یک تگ HTML است که خلاصه ای کوتاه و دقیق از صفحه وب ارائه می دهد. توضیحات متا توسط موتورهای جستجو برای شناسایی موضوع صفحه وب و ارائه نتایج جستجوی مرتبط استفاده می شود.",
  },
  headings: {
    lable: "عناوین (Headings)",
    value: {
      tip: "فقط یک تگ h1 باید در صفحه وب وجود داشته باشد.",
      h1: [
        "سگمنتو؛ ابزار سئو باهوش و چابک",
        "مانگو؛ آموزش سئو و مارکتینگ پلتفرمِ گوگل",
        "مایندست؛ توسعه فردی با خلق ذهنیت و نگرش",
        "چیکورو؛ مدرسه آنلاین و همیشه همراه تو",
        "رسپانسیو؛ سایت ساز و فروشگاه ساز فارسی",
        "تگ\u200cلاین؛ لینک و پروفایل برای شبکه\u200cهای اجتماعی",
      ],
      h2: [
        "سگمنتو؛ ابزار سئو باهوش و چابک",
        "مانگو؛ آموزش سئو و مارکتینگ پلتفرمِ گوگل",
        "مایندست؛ توسعه فردی با خلق ذهنیت و نگرش",
        "چیکورو؛ مدرسه آنلاین و همیشه همراه تو",
        "رسپانسیو؛ سایت ساز و فروشگاه ساز فارسی",
        "تگ\u200cلاین؛ لینک و پروفایل برای شبکه\u200cهای اجتماعی",
      ],
      h3: [
        "سگمنتو؛ ابزار سئو باهوش و چابک",
        "مانگو؛ آموزش سئو و مارکتینگ پلتفرمِ گوگل",
        "مایندست؛ توسعه فردی با خلق ذهنیت و نگرش",
        "چیکورو؛ مدرسه آنلاین و همیشه همراه تو",
        "رسپانسیو؛ سایت ساز و فروشگاه ساز فارسی",
        "تگ\u200cلاین؛ لینک و پروفایل برای شبکه\u200cهای اجتماعی",
      ],
      h4: [
        "سگمنتو؛ ابزار سئو باهوش و چابک",
        "مانگو؛ آموزش سئو و مارکتینگ پلتفرمِ گوگل",
        "مایندست؛ توسعه فردی با خلق ذهنیت و نگرش",
        "چیکورو؛ مدرسه آنلاین و همیشه همراه تو",
        "رسپانسیو؛ سایت ساز و فروشگاه ساز فارسی",
        "تگ\u200cلاین؛ لینک و پروفایل برای شبکه\u200cهای اجتماعی",
      ],
    },
    score: 12,
    description:
      "تگ h نشان دهنده سرفصل های صفحه وب است. تگ h1 مهمترین تگ h است و موضوع اصلی صفحه را توصیف می کند، در حالی که بقیه تگ ها موضوعات فرعی صفحه وب را توصیف می کنند.",
  },
  content_keywords: {
    label: "کلمات کلیدی هدف",
    tip: "محتوا دارای کلمات کلیدی مرتبط است.",
    value: ["سئو", "آموزش سئو", "سگمنتو", "آموزش سئو در مشهد"],
    score: 90,
    description:
      "محتوای صفحه وب باید حاوی کلمات کلیدی مرتبط باشد که در عنوان صفحه وب نیز یافت می شود.",
  },
};
