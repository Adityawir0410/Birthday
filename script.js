var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  small: 12,
  medium: 14
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "16 Apr 2024",
      textAlign: "right",
      y: 20,
      x: -30,
      delay: 500,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Hallo makhluk paling cantik di dunia",
      y: 20,
      x: posX,
      duration: 4000
    },
    {
      text: "selamat bertambah umur yaa",
      id: "sphinx",
      x: posX,
      delay: 1000,
      duration: 4500
    },
    {
      text: "hari ini waktunya untuk semua kamu dirayakan <3",
      id: "end",
      color: "#3f51b5",
      delay: 1000,
      x: posX,
      duration: 4500
    }
  ],
  {
    strokeWidth: 1,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Engga lupa juga bahwa banyak harapan sama doa yang selalu diharapkan buat yunda",
      y:40,
      x: posX,
      duration: 4000
    },
    {
      text: "terutama buat kebahagiaan setiap hidupnya",
      y: 20,
      x: posX,
      duration: 3500
    }
  ],
  {
    strokeWidth: 1,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Last but not least",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "Happy Birthday Yundaa",
      y: 20,
      x: posX,
      duration: 3500
    },
    {
      text: "Selamat ultah untuk kesekian dari aku yang ngagumin kamu setiap detiknya",
      y: 10,
      color: "#3f51b5",
      id: "link",
      x: posX,
      duration: 3500
    },
    {
      text: "Adityawir",
      textAlign: "right",
      y: 20,
      x: -30,
      delay: 500,
      duration: 1500,
      fontSize: fontSize.small
    },
  ],
  {
    strokeWidth: 1,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2].ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 1;
        if (i == "link") {
          var group = o.container;
          var rect = vara[2].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
});
