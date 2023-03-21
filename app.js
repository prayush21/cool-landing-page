const gallery = document.getElementById("gallery");

window.onmousemove = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  console.log("mX mY", mouseX, mouseY);
  console.log(
    "gow window.innerWidth heu goh",
    gallery.offsetWidth,
    window.innerWidth,
    window.innerHeight,
    gallery.offsetHeight
  );
  const xDec = mouseX / window.innerWidth;
  const yDec = mouseY / window.innerHeight;

  const maxX = gallery.offsetWidth - window.innerWidth + 100;
  const maxY = gallery.offsetHeight - window.innerHeight + 100;

  const panX = maxX * xDec * -1;
  const panY = maxY * yDec * -1;

  console.log("panX panY", panX, panY);

  //   gallery.style.transform = `translate(${panX}px, ${panY}px)`;
  //   gallery.style.backgroundColor = "green";

  gallery.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 4000,
      fill: "forwards",
      easing: "ease",
    }
  );
};
