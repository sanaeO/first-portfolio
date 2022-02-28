$(document).ready(function () {

    // Every Time I scroll the window it add a down class to navbar
    $(window).scroll(function () {
        if (this.scrollY > 10) {
            $(".navbar").addClass("down");
        } else {
            $(".navbar").removeClass("down");
        }
    }
    )
    // Function 2
    $(".menu-btn").click(function () {

        $(".menu").toggleClass("active");
        $(".menu-btn  .svg-inline--fa.fa-times").toggleClass("active");
        $(".menu-btn  .svg-inline--fa.fa-bars").toggleClass("active");
    }
    )
}
)