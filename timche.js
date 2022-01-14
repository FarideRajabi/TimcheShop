{
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };

  const TIME_LIMIT = 50000;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("timer").innerHTML = `
<div class="base-timer">
      <path
        id="base-timer-path-remaining"
      ></path>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
      timeLeft
  )}</span>
</div>
`;

  startTimer();

  function onTimesUp() {
    clearInterval(timerInterval);
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML = formatTime(
          timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function formatTime(time) {

    const hors = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    let seconds = ((time % 3600) % 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${hors}:${minutes}:${seconds}`;

  }

  function setRemainingPathColor(timeLeft) {
    const {alert, warning} = COLOR_CODES;
    if (timeLeft <= warning.threshold) {

      document
          .getElementById("base-timer-path-remaining")
          .classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
  }
}

function details1(){

  let ul =
      "<span class='detail'>" + "<ul><li>"+"موبایل"+"</li><li>"+"سامسونگ"+"</li><li>"+"هوآوی"+"</li><li>"+"اپل"+"</li><li>"+"شیائومی"+"</li><li>"+"آنر"+"</li><li>"+"نوکیا"+"</li></ul>" +
      "<ul><li>"+"لپتاپ"+"</li><li>"+"ایسوس"+"</li><li>"+"لنوو"+"</li><li>"+"ایسر"+"</li><li>"+"اچ پی"+"</li><li>"+"مایکروسافت"+"</li><li>"+"دل"+"</li></ul>" +
      "<ul><li>"+"تجهیزات ذخیره سازی اطلاعات"+"</li><li>"+"هارد دیسک اکسترنال"+"</li><li>"+"فلش مموری"+"</li><li>"+"کارت حافظه"+"</li></ul>" +
      "<ul><li>"+"کنسول بازی"+"</li><li>"+"XBox,PS5,PS4"+"</li><li>"+"بازی"+"</li><li>"+"تجهیزات مخصوص بازی"+"</li></ul>" +
      "<ul><li>"+"تلویزیون"+"</li><li>"+"سامسونگ"+"</li><li>"+"ایکس ویژن"+"</li><li>"+"ال جی"+"</li><li>"+"اسنوا"+"</li><li>"+"TCL"+"</li><li>"+"سونی"+"</li></ul>" +
      "<ul><li>"+"لوازم جانبی لپ تاپ"+"</li><li>"+"کیف ، کوله و کاور لپ تاپ"+"</li><li>"+"باتری لپ تاپ"+"</li><li>"+"شارژر مخصوصلپ تاپ"+"</li><li>"+"کابل صدا"+"</li></ul>" +
      "<ul><li>"+"ماشین های اداری"+"</li><li>"+"تلفن، بی سیم و سانترال"+"</li><li>"+"پرینتر"+"</li><li>"+"فکس"+"</li><li>"+"ویدیو پروژکتور"+"</li></ul>"+"</span>" ;

       document.getElementById("details1").innerHTML = ul;

}
function closeDetails1(){
  document.getElementById("details1").innerHTML = "کالای دیجیتال";
}


function details2(){
  let ul =
      "<span class='detail'>" + "<ul><li>"+"لوازم خانگی برقی"+"</li><li>"+"یخچال و فریزر"+"</li><li>"+"ماشین لباسشویی"+"</li><li>"+"ماشین ظرفشویی"+"</li><li>"+"جاروبرقی"+"</li><li>"+"اتوبخار و پرسی"+"</li><li>"+"فن هیتر و بخاری برقی"+"</li></ul>" +
      "<ul><li>"+"نوشیدنی ساز"+"</li><li>"+"اسپرسوساز"+"</li><li>"+"چای ساز"+"</li><li>"+"آبمیوه گیری"+"</li><li>"+"سماور برقی"+"</li><li>"+"کتری برقی"+"</li><li>"+"قهوه ساز"+"</li></ul>" +
      "<ul><li>"+"سرو و پذیرایی"+"</li><li>"+"سرویس غذاخوری"+"</li><li>"+"قاشق، چنگال و کارد"+"</li><li>"+"پارچ ، بطری ، لیوان و ماگ"+"</li><li>"+"ظزوف پذیرایی"+"</li></ul>" +
      "<ul><li>"+"دست شو و نظافت"+"</li><li>"+"دستمال کاغذی"+"</li><li>"+"مایع دستشویی"+"</li><li>"+"شوینده لباس"+"</li><li>"+"شوینده سطوح"+"</li></ul>" +
      "<ul><li>"+"تلویزیون"+"</li><li>"+"سامسونگ"+"</li><li>"+"ایکس ویژن"+"</li><li>"+"ال جی"+"</li><li>"+"اسنوا"+"</li><li>"+"TCL"+"</li><li>"+"سونی"+"</li></ul>" +
      "<ul><li>"+"دکوراتیو"+"</li><li>"+"دکوراسیون اداری"+"</li><li>"+"آینه"+"</li><li>"+"استیکر و پوستر"+"</li><li>"+"لوازم تزینی"+"</li></ul>" +
      "<ul><li>"+"خواب و حمام"+"</li><li>"+"حوله و وسایل حمام"+"</li><li>"+"سرویس خواب"+"</li><li>"+"بالش"+"</li><li>"+"پتو"+"</li></ul>"+"</span>" ;
  document.getElementById("details2").innerHTML=ul;

}

function closeDetails2(){
  document.getElementById("details2").innerHTML = "خانه و آشپزخانه";
}


function details3(){
  let ul =
      "<span class='detail'>" + "<ul><li>"+"ابزار برقی"+"</li><li>"+"کارواش"+"</li><li>"+"دریل"+"</li><li>"+"پیچ گوشتی برقی"+"</li><li>"+"فرز و سنگ رومیزی"+"</li><li>"+"دستگاه جوش"+"</li><li>"+"کمپرسور"+"</li></ul>" +
      "<ul><li>"+"ابزار دستی"+"</li><li>"+"مجموعه ابزار"+"</li><li>"+"پیچ گوشتی و فازمتر"+"</li><li>"+"نوار تفلون و چسب"+"</li><li>"+"جعبه و کیف ابزار"+"</li><li>"+"لوازم روانکاری"+"</li><li>"+"میخ، پیچ مهره"+"</li></ul>" +
      "<ul><li>"+"لوازم باغبانی"+"</li><li>"+"خاک ، کود و آفت کش"+"</li><li>"+"سمپاش"+"</li><li>"+"اره رنجیری"+"</li><li>"+"بذر و تخم گیاهان"+"</li><li>"+"گلدان"+"</li><li>"+"اره"+"</li></ul>" +
      "<ul><li>"+"لوازم مصرفی خودرو"+"</li><li>"+"روغن موتور"+"</li><li>"+"روغن گیربکس"+"</li><li>"+"ضدیخ و آب رادیاتور"+"</li><li>"+"روغن ترمز"+"</li><li>"+"لاستیک و تایر"+"</li></ul>" +
      "<ul><li>"+"لوازم جانبی خودرو"+"</li><li>"+"قفل پدال و قفل فرمان"+"</li><li>"+"روکش فرمان"+"</li><li>"+"لوازم تزینی خودرو"+"</li><li>"+"سیستم صوتی و تصویری"+"</li><li>"+"نظافت و نگهداری خودرو"+"</li><li>"+"تجهیزات نظم دهنده داخل خودرو"+"</li></ul>" +
      "<ul><li>"+"لوازم یدکی خودرو"+"</li><li>"+"لامپ خودرو"+"</li><li>"+"چراغ خودرو"+"</li><li>"+"لنت ترمز خودرو"+"</li><li>"+"لنت ترمز موتور سیکلت"+"</li></ul>" +
      "<ul><li>"+"ابزار غیر برقی"+"</li><li>"+"متر، تراز و انداره"+"</li><li>"+"تجهیزات ایمنی و کار"+"</li><li>"+"نردبان"+"</li></ul>"+
      "<ul><li>"+"موتور سیکلت"+"</li><li>"+"کلاه کاسکت موتور "+"</li>+</span>" ;
  document.getElementById("details3").innerHTML=ul;

}

function closeDetails3(){
  document.getElementById("details3").innerHTML = "خودرو،ابزار، باغبانی";
}



function details4(){
  let ul =
      "<span class='detail'>" + "<ul><li>"+"کتاب چاپی"+"</li><li>"+"شعر و ادبیات"+"</li><li>"+"اقتصاد و مدیریت"+"</li><li>"+"عمومی"+"</li><li>"+"هنر"+"</li><li>"+"روانشناسی"+"</li><li>"+"کسب و کار"+"</li><li>"+"رمان"+"</li><li>"+"فلسفه"+"</li><li>"+"علوم فنی و مهندسی"+"</li><li>"+"زبان"+"</li></ul>" +
      "<ul><li>"+"لوازم تحریر"+"</li><li>"+"کاغذ و دفتر"+"</li><li>"+"مداد و مداد رنگی"+"</li><li>"+"خودکار و روانویس"+"</li><li>"+"میزتحریر"+"</li><li>"+"چراغ مطالعه"+"</li><li>"+"تخته وایت برد"+"</li><li>"+"جامدادی"+"</li></ul>" +
      "<ul><li>"+"محتوای آموزشی"+"</li><li>"+"آموزش زبان"+"</li><li>"+"آموزش موسیقی"+"</li><li>"+"آموزش نرم افزار و کامپیوتر"+"</li></ul>" +
      "<ul><li>"+"آلات موسیقی"+"</li><li>"+"گیتار"+"</li><li>"+"پیانو"+"</li><li>"+"کیبورد و ارگ"+"</li><li>"+"سنتور"+"</li><li>"+"ویولن"+"</li><li>"+"فلوت"+"</li><li>"+"ساز های ایرانی"+"</li></ul>" +
      "<ul><li>"+"صنایع دستی"+"</li><li>"+"ترمه"+"</li><li>"+"جعبه هدیه"+"</li><li>"+"سفال ، سرامیک و چینی"+"</li></ul>" +
      "<ul><li>"+"نرم افزار"+"</li><li>"+"مجموعه نرم افزاری"+"</li><li>"+"آنتن ویروس"+"</li><li>"+"سیستم عامل"+"</li><li>"+"نرم افزار های حسابداری"+"</li></ul>"+"</span>" ;
  document.getElementById("details4").innerHTML=ul;

}

function closeDetails4(){
  document.getElementById("details4").innerHTML ="لوازم التحریر، کتاب و هنر";
}



function details5(){
  let ul =
      "<span class='detail'>" + "<ul><li>"+"لوازم آرایشی"+"</li><li>"+"آرایش صورت"+"</li><li>"+"آرایش چشم"+"</li><li>"+"آرایش ابرو"+"</li><li>"+"آرایش لب"+"</li><li>"+"آرایش مو"+"</li><li>"+"آرایش ناخن"+"</li><li>"+"ایزار آرایش "+"</li></ul>" +
      "<ul><li>"+"لوازم بهداشتی"+"</li><li>"+"کرم و مراقبت پوست"+"</li><li>"+"شامپو و تقویت کننده مو"+"</li><li>"+"بهداشت دهان و دندان"+"</li><li>"+"بهداشت و مراقبت بدن"+"</li><li>"+"لوازم اصلاح مو"+"</li><li>"+"بهداشت بانوان"+"</li></ul>" +
      "<ul><li>"+"لوازم شخصی برقی"+"</li><li>"+"ماشین اصلاح صورت"+"</li><li>"+"ماشین اصلاح سر"+"</li><li>"+"اتو مو"+"</li></ul>" +
      "<ul><li>"+"شست و شو نظافت "+"</li><li>"+"دستمال کاغذی"+"</li><li>"+"مایع دستشویی"+"</li><li>"+"شوینده ی لباس"+"</li><li>"+"شوینده سطوح"+"</li><li>"+"بند رخت"+"</li><li>"+"گیره لباس"+"</li></ul>" +
      "<ul><li>"+"ابزار سلامت"+"</li><li>"+"چسب ، پد الکلی و درمانی"+"</li><li>"+"ترازوی دیجیتالی"+"</li><li>"+"فشارسنج"+"</li><li>"+"تب سنج"+"</li></ul>" +
      "<ul><li>"+"عطر و ادکلن"+"</li><li>"+"عطر زنانه"+"</li><li>"+"عطر مردانه"+"</li><li>"+"عطر جیبی"+"</li><li>"+"اسپری"+"</li></ul>"+"</span>" ;
  document.getElementById("details5").innerHTML=ul;
}

function closeDetails5(){
  document.getElementById("details5").innerHTML = "آرایشی و سلامت";
}



function details6(){
  let ul =
      "<span class='detail'>" + "<ul><li>"+"خوار و بار"+"</li><li>"+"برنج"+"</li><li>"+"روغن"+"</li><li>"+"حبوبات"+"</li><li>"+"شکر"+"</li><li>"+"سس"+"</li><li>"+"زیتون"+"</li></ul>" +
      "<ul><li>"+"نوشیدنی ها"+"</li><li>"+"قهوه"+"</li><li>"+"شربت و آبمیوه"+"</li><li>"+"چای"+"</li><li>"+"آب و آب معدنی"+"</li><li>"+"نوشابه"+"</li><li>"+"نوشابه انرژی زا"+"</li><li>"+"دمنوش"+"</li></ul>" +
      "<ul><li>"+"آجیل و خشکبار"+"</li><li>"+"خرما"+"</li><li>"+"آجیل"+"</li><li>"+"خشکبار"+"</li></ul>" +
      "<ul><li>"+"کنسرو وغذای آماده"+"</li><li>"+"تن ماهی"+"</li><li>"+"غذای آماده و نودل"+"</li><li>"+"کنسرو و کمپوت"+"</li></ul>" +
      "<ul><li>"+"دسر و شیرینی پزی"+"</li><li>"+"غلات و پودر کیک"+"</li></ul>"+"</span>" ;
  document.getElementById("details6").innerHTML=ul;

}

function closeDetails6(){
  document.getElementById("details6").innerHTML = "خوار و بار";
}





function details7(){
  let ul =
      "<span class='detail'>" + "<ul><li>"+"اسباب بازی"+"</li><li>"+"بازی فکری"+"</li><li>"+"تفنگ و مبارزه"+"</li><li>"+"تاب و سرسره"+"</li><li>"+"عروسک"+"</li><li>"+"نقش آفرینی"+"</li><li>"+"بازی و لوگو"+"</li></ul>" +
      "<ul><li>"+"بهداشت بچه"+"</li><li>"+"پوشک"+"</li><li>"+"پودر بچه"+"</li><li>"+"شامپو"+"</li><li>"+"دستمال مرطوب"+"</li><li>"+"حوله"+"</li><li>"+"گوش پاک کن"+"</li><li>"+"وان حمام نوزاد"+"</li></ul>" +
      "<ul><li>"+"پوشاک و کفش نوزاد"+"</li><li>"+"لباس"+"</li><li>"+"کفش"+"</li><li>"+"جوراب"+"</li></ul>"+
      "<><li>"+"غذا خوری"+"</li><li>"+"شیشه شیر، سرلاک و داروخوری"+"</li><li>"+"ملزومات شیشه شیر"+"</li><li>"+"ظروف کودک"+"</li><li>"+"کاور شیردهی"+"</li><li>"+"قمقمه"+"</li><li>"+"قاشق و چنگال"+"</li></>" +"<ul><li>"+"لوازم جانبی لپ تاپ"+"</li><li>"+"کیف ، کوله و کاور لپ تاپ"+"</li><li>"+"باتری لپ تاپ"+"</li><li>"+"شارژر مخصوصلپ تاپ"+"</li><li>"+"کابل صدا"+"</li></ul>"+"</span>" ;
  document.getElementById("details7").innerHTML=ul;

}

function closeDetails7(){
  document.getElementById("details7").innerHTML = "اسباب بازی ، کودک و نوزاد";
}



function details8(){
  let ul =
      "<span class='detail'>" + "<ul><li>"+"ورزش های هوازی و بدنسازی"+"</li><li>"+"ایروبیک و تناسب اندام"+"</li><li>"+"دمبل"+"</li><li>"+"تردمیل"+"</li><li>"+"دوچرخه"+"</li><li>"+"بارفیکس"+"</li><li>"+"طناب"+"</li></ul>" +
      "<ul><li>"+"کوه نوردی و کمپینگ"+"</li><li>"+"چادر"+"</li><li>"+"چاقوی سفر و ابزار چندکاره"+"</li><li>"+"چراغ قوه"+"</li><li>"+"کیسه خواب"+"</li><li>"+"اجاق و ظرف سفری"+"</li><li>"+"تجهیزات جانبی کوه نوردی"+"</li></ul>" +
      "<ul><li>"+"تجهیزات سفر"+"</li><li>"+"کیف و کوله"+"</li><li>"+"ساک و چمدان"+"</li><li>"+"چتر"+"</li></ul>" +
      "<ul><li>"+"ورزش های سرعتی"+"</li><li>"+"اسکوتر برفی"+"</li><li>"+"اسکوتر"+"</li><li>"+"اسکیت"+"</li></ul>" +
      "<ul><li>"+"سایر وسایل ورزشی"+"</li><li>"+"ورزش های آبی"+"</li><li>"+"اورزش های رزمی"+"</li><li>"+"ورزش های فکری"+"</li><li>"+"ورزش های نشانه گیری"+"</li><li>"+"اسکی و تجهیزات"+"</li><li>"+"لوازم غواصی"+"</li></ul>"+"</span>" ;
  document.getElementById("details8").innerHTML=ul;

}

function closeDetails8() {
 document.getElementById("details8").innerHTML = "ورزش، سفر ، کمپینگ";
}




function details9(){
  let ul =
      "<span class='detail'>" + "<ul><li>"+"زیور آلات طلا زنانه"+"</li><li>"+"گردنبند"+"</li><li>"+"آویز طلا"+"</li><li>"+"پابند طلا"+"</li><li>"+"انگشتر طلا"+"</li><li>"+"گوشواره طلا"+"</li><li>"+"رنجیر طلا"+"</li></ul>" +
      "<ul><li>"+"اکسسوری مردانه"+"</li><li>"+"ست هدیه"+"</li><li>"+"دستکش"+"</li><li>"+"عینک آفتابی"+"</li><li>"+"کوله"+"</li><li>"+"کمربند و ساسبند "+"</li><li>"+"کیف مردانه"+"</li></ul>" +
      "<ul><li>"+"اکسسوری زنانه"+"</li><li>"+"کوله پوشتی"+"</li><li>"+"کیف"+"</li><li>"+"ست هدیه"+"</li></ul>" +
      "<ul><li>"+"لباس مردانه"+"</li><li>"+"تی شرت"+"</li><li>"+"پیراهن"+"</li><li>"+"لباس زیر"+"</li></ul>" +
      "<ul><li>"+"لباس زنانه"+"</li><li>"+"مانتو"+"</li><li>"+"بلوز و شومیز"+"</li><li>"+"تی شرت و یولوشرت"+"</li><li>"+"شلوار"+"</li><li>"+"پوشاک ورزشی"+"</li><li>"+"لباس زیر"+"</li></ul>" +
      "<ul><li>"+"ساعت"+"</li><li>"+"ساعت عقربه ای زنانه"+"</li><li>"+"ساعت عقربه ای مردانه"+"</li><li>"+"ساعت دیجیتال زنانه"+"</li><li>"+"ساعت دیجیتال مردانه"+"</li></ul>" +
      "<ul><li>"+"کفش"+"</li><li>"+"کفش روزمره"+"</li><li>"+"کفش ورزشی"+"</li><li>"+"کفش مجلسی"+"</li></ul>"+"</span>" ;
  document.getElementById("details9").innerHTML=ul;

}

function closeDetails9(){
  document.getElementById("details9").innerHTML = "طلا،مد و پوشاک";
}

var slider = document.getElementById("myRange");
var output = document.getElementById("value1");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}