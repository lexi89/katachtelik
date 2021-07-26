$(document).ready(function () {
  $(".right").click(function () {
    $(".carousel").slick("slickNext");
  });

  $(".left").click(function () {
    $(".carousel").slick("slickPrev");
  });

  var subhead = document.getElementById("subheading");

  var typewriter = new Typewriter(subhead, {
    loop: true,
    delay: 50,
    deleteSpeed: 0,
  });

  typewriter
    .typeString("Hi, I'm Kat")
    .pauseFor(300)
    .typeString("<br>I'm a copywriter, a storyteller and")
    .pauseFor(500)
    .typeString("<br>Nope")
    .pauseFor(500)
    .deleteChars(39)
    .pauseFor(500)
    .typeString("I help brands sound human.")
    .pauseFor(1000)
    .deleteChars(26)
    .typeString("Waaaasuuuuup")
    .pauseFor(1000)
    .deleteChars(23)
    .typeString("Copywriting is:")
    .pauseFor(500)
    .typeString("<br>Personality.")
    .pauseFor(1000)
    .typeString(" Persuasion.")
    .pauseFor(1000)
    .typeString(" Profit")
    .pauseFor(500)
    .typeString("eroles.")
    .pauseFor(1000)
    .deleteAll(0)
    .typeString(
      "If you want to be remembered as bold, funny and relatable, while"
    )
    .pauseFor(1000)
    .deleteAll(0)
    .changeDelay(150)
    .typeString("Blah blah blah")
    .pauseFor(500)
    .changeDelay(50)
    .typeString("<br>Just scroll down to see my referrals & portfolio")
    .pauseFor(500)
    .deleteAll(0)
    .typeString("Why is writing for yourself so damn hard?!")
    .pauseFor(500)
    .deleteAll(0)
    .typeString("At least it's not snowing.")
    .pauseFor(1500)
    .deleteAll(0)
    // .pauseFor(2500)
    // .typeString('<strong>altered!</strong>')
    // .pauseFor(2500)
    .start();
});
