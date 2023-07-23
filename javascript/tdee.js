let calculateBtn = document.getElementById("calculate-btn")

$(".food-card").hide()

calculateBtn.addEventListener("click", function () {
    // $(".tdee-food-title").hide()
    $(".tdee-food-container").hide()
    let tdeeEnd = document.getElementById("tdee-calculate-end")
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let activity = document.getElementById("activity").value;

    
    if (!gender) {
        alert("請填入性別");
        return
    }

    if (!activity) {
        alert("請填入活動頻率");
        return
    }

    if (!height) {
        alert("請填入身高");
        return
    }

    if (!weight) {
        alert("請填入體重");
        return
    }

    if (!age) {
        alert("請填入年齡");
        return
    }

    if (gender == "man") {

        let menBmi = ((13.7 * weight) + (5.0 * height) - (6.8 * age) + 66).toFixed(2)
        if (0 == activity) {
            tdeeEnd.value = menBmi * 1.2

        } else if ("1" == activity) {
            tdeeEnd.value = menBmi * 1.375
        } else if ("2" == activity) {
            tdeeEnd.value = menBmi * 1.55
        } else if ("3" == activity) {
            tdeeEnd.value = menBmi * 1.725
        }
        else if ("4" == activity) {
            tdeeEnd.value = menBmi * 1.9
        }

    } else {
        let womenBmi = tdeeEnd.value = ((9.6 * weight) + (1.8 * height) - (4.7 * age) + 655).toFixed(2)

        if ("0" == activity) {
            tdeeEnd.value = womenBmi * 1.2

        } else if ("1" == activity) {
            tdeeEnd.value = womenBmi * 1.375
        } else if ("2" == activity) {
            tdeeEnd.value = womenBmi * 1.55
        } else if ("3" == activity) {
            tdeeEnd.value = womenBmi * 1.725
        }
        else if ("4" == activity) {
            tdeeEnd.value = womenBmi * 1.9
        }
    }

    let level;
    if (tdeeEnd.value < 1700) {
        level = 1
        $(".food-card").hide()
        $(".level1").show()
        $(".tdee-food-title-pic").hide()
        $(".tdee-food-title").text("這些蛋糕熱量都很低，放心吃吧~").css({
            fontSize: "30px",
            fontWeight: "900"
        })
    } else if (tdeeEnd.value > 1701 && tdeeEnd.value < 2000) {
        $(".food-card").hide()
        level = 2
        $(".level1").show()
        $(".level2").show()
        $(".tdee-food-title-pic").hide()
        $(".tdee-food-title").text("吃完回去稍微運動一下就沒事了~").css({
            fontSize: "30px",
            fontWeight: "900"
        })

    } else if (tdeeEnd.value > 2001 && tdeeEnd.value < 2400) {
        $(".food-card").hide()
        $(".level1").show()
        $(".level2").show()
        $(".level3").show()
        $(".tdee-food-title-pic").hide()
        $(".tdee-food-title").text("可以選兩個吃沒問題的~").css({
            fontSize: "30px",
            fontWeight: "900"
        })
        level = 3

    } else if (tdeeEnd.value > 2401) {
        $(".food-card").hide()
        $(".level1").show()
        $(".level2").show()
        $(".level3").show()
        $(".level4").show()
        $(".tdee-food-title-pic").hide()
        $(".tdee-food-title").text("你不太需要擔心熱量的問題喔~").css({
            fontSize: "30px",
            fontWeight: "900"
        })
        level = 4

    } else {
        $(".food-card").show()
        $(".tdee-food-title-pic").hide()
        $(".tdee-food-title").text("隨你吃~").css({
            fontSize: "30px",
            fontWeight: "900"
        })
    }

    setTimeout(() => {
        $(".tdee-food-container").show()
    }, 100)
})
//====================================

let clear = document.getElementById("clear")

clear.addEventListener("click", function () {
    let tdeeEnd = document.getElementById("tdee-calculate-end")
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let gender = document.getElementById("gender");
    let age = document.getElementById("age");
    let activity = document.getElementById("activity");

    tdeeEnd.value = ""
    height.value = ""
    weight.value = ""
    gender.value = "chose"
    age.value = ""
    activity.value = ""
    $(".food-card").hide()

    $(".tdee-food-title").show().text("計算TDEE找出適合你的蛋糕吧").css({
        fontSize: "30px",
        fontWeight: "900"
    })
    $(".tdee-food-title-pic").show()
    console.log($(".tdee-food-title-pic"))

})

// ==========================================
$(".tdee-topic p").hide()

$("li").click(function () {

    $(this).next().slideToggle()

    if ($(this).find('strong').text() == '+') {

        $(this).children().text("–").animate({
            rotate: "360deg"

        }, 500)

    } else {
        $(".tdee-topic li").children().text("+").animate({
            rotate: "0deg"

        }, 500)
    }



})





