const box = document.getElementById("box");

function mouse(e) {
    const offsetx = e.ClientX - box.getBoundingClientRect().left
    const offsety = e.ClientY - box.getBoundingClientRect().top
    function mousemove(e) {
        box.style.left = `${e.clientX - offsetx}px`;
        box.style.top = `${e.clientY - offsety}px`;
    }
    function mousestop(e) {
        document.body.removeEventListener("mouseclick", mousemove)
        document.body.removeEventListener("mouseleave", mousestop)
    }

    document.body.addEventListener("mouseclick", mousemove)
    document.body.addEventListener("mouseleave", mousestop)

}