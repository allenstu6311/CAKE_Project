$(function(){
	$(".pic-left-large").mouseover(function(){
		$(this).css({
			transform:"scale(1.2,1.2)",
			// overflow:"hidden",
			transition:".5s"
		}).mouseout(function(){
			$(this).css({
				transform:"scale(1,1)",
				// overflow:"hidden",
				transition:".5s"
			})
		})
	})
})

$(".little-line-1").mouseover(function(){
	$(this).css({
		transform:"scale(1.2,1.2)",
		transition:".5s"
	}).mouseout(function(){
		$(this).css({
			transform:"scale(1,1)",
			transition:".5s"
		})
	})
})
$(".little-line-2").mouseover(function(){
	$(this).css({
		transform:"scale(1.2,1.2)",
		transition:".5s"
	}).mouseout(function(){
		$(this).css({
			transform:"scale(1,1)",
			transition:".5s"
		})
	})
})

$(".pic-right-little-1").mouseover(function(){
	$(this).css({
		transform:"scale(1.2,1.2)",
		transition:".5s"
	}).mouseout(function(){
		$(this).css({
			transform:"scale(1,1)",
			transition:".5s"
		})
	})
})
$(".pic-right-little-2").mouseover(function(){
	$(this).css({
		transform:"scale(1.2,1.2)",
		transition:".5s"
	}).mouseout(function(){
		$(this).css({
			transform:"scale(1,1)",
			transition:".5s"
		})
	})
})

$(".pic-right-large").mouseover(function(){
	$(this).css({
		transform:"scale(1.2,1.2)",
		// overflow:"hidden",
		transition:".5s"
	}).mouseout(function(){
		$(this).css({
			transform:"scale(1,1)",
			// overflow:"hidden",
			transition:".5s"
		})
	})
})

// ====================================
$(function(){
	$(window).resize(function(){
		let winWidth = $(this).width()
		console.log(winWidth)
	})
    let a=0

			
		$(".open").click(function(){
			
		a++
			
			$(".open p").css({
				transform: "rotateY(180deg)",
			})
			
			if(a%2==0){
		
				$(this).css({
			    transform: "rotateY(0deg)",
				transition:"1s",
				
				})
				$(".open p").css({
				transform: "rotateY(0deg)",
			})
			
			}else{
				$(this).css({
			    transform: "rotateY(-180deg)",
				transition:"1s",
				zIndex:"6"
				})
		
			}
		})

// ==============================================
		let b=0
		$(".book-one .next span").click(function(){
			b++;
			
			if(b%2==0){
		
				$(".book-one").css({
				transform: "rotateY(0deg)",
				transition:"1s",
				zIndex:"3"
				})
				$(".book-pic").css({
					transform: "rotateY(0deg)",
				})
				$(".book-one h3").css({
					transform: "rotateY(0deg)",
					
				})
				$(".book-one p").css({
					transform: "rotateY(0deg)",
					
				})
				$(".book-one .book-btn").css({
					transform: "rotateY(0deg)",
				})
				$(".book-one .next").css({
					transform: "rotateY(-180deg)",
				
					width:"1000px"
				})
			
			}else{
				$(".book-one").css({
				transform: "rotateY(-180deg)",
				transition:"1s",
				zIndex:"5"
				})
				$(".book-pic").css({
					transform: "rotateY(-180deg)",
				})
				$(".book-one h3").css({
					transform: "rotateY(-180deg)",
					
				})
				$(".book-one p").css({
					transform: "rotateY(-180deg)",
					
				})
				$(".book-one .book-btn").css({
					transform: "rotateY(-180deg)",
				})
				$(".book-one .next").css({
					transform: "rotateY(-180deg)",
					display:"flex",
					justifyContent:"flex-start",
					

				})
				
			}
		})

		let c=0;
		$(".book-two .next span").click(function(){

			c++;
			if(c%2==0){
		
				$(".book-two").css({
				transform: "rotateY(0deg)",
				transition:"1s",
				zIndex:"4"
				
				})
				$(".book-pic").css({
					transform: "rotateY(0deg)",
				})
				$(".book-two h3").css({
					transform: "rotateY(0deg)",
					
				})
				$(".book-two p").css({
					transform: "rotateY(0deg)",
					
				})
				$(".book-two .book-btn").css({
					transform: "rotateY(0deg)",
				})
				$(".book-two .next").css({
					transform: "rotateY(0deg)",
					display:"flex",
					justifyContent:"flex-end",
				})
			
			}else{
				$(".book-two").css({
				transform: "rotateY(-180deg)",
				transition:"1s",
				zIndex:"4",
				
				})
				$(".book-pic").css({
					transform: "rotateY(-180deg)",
				})
				$(".book-two h3").css({
					transform: "rotateY(-180deg)",
					
				})
				$(".book-two p").css({
					transform: "rotateY(-180deg)",
					
				})
				$(".book-two .book-btn").css({
					transform: "rotateY(-180deg)",
				})
				$(".book-two .next").css({
					transform: "rotateY(-180deg)",
					display:"flex",
					justifyContent:"flex-start",
					
				})
			}
		})


		let d=0;

		$(".book-three .next").click(function(){
			d++
			console.log(d)
			if(d%2==0){
				$(".wid").css({
					transform: "rotateY(0deg)",
					display:"flex",
					justifyContent:"flex-end",
					fontSze:"60px"
				
				})
		
			$(".book-three").css({
			transform: "rotateY(0deg)",
			transition:"1s",
			zIndex:"5"
			
			})
			$(".book-pic").css({
					transform: "rotateY(0deg)",
				})
			$(".book-three h3").css({
				transform: "rotateY(0deg)",
						
			})
			$(".book-three p").css({
				transform: "rotateY(0deg)",
				
			})
			$(".book-three .book-btn").css({
					transform: "rotateY(0deg)",
				})

			

		}else{
			$(".book-three").css({
			transform: "rotateY(-180deg)",
			transition:"1s",
			zIndex:"3"
			
			})
			$(".wid").css({
				transform: "rotateY(0deg)",
				display:"flex",
				justifyContent:"flex-start",
				fontSze:"60px"
			})
			$(".book-pic").css({
					transform: "rotateY(-180deg)",
				})
			$(".book-three h3").css({
					transform: "rotateY(-180deg)",
					
				})
				$(".book-three p").css({
					transform: "rotateY(-180deg)",
					
				})
				$(".book-three .book-btn").css({
					transform: "rotateY(-180deg)",
				})
				$(".book-three .next").css({
					transform: "rotateY(-180deg)",

				})
		}
		})

	})


// ===================================文章
let messageList = document.getElementById("message-list");
let text = document.getElementById("text")
let messageBtn = document.getElementById("message-btn")

function post(){

    messageBtn.addEventListener("click",function(){
      
        
        messageList.innerHTML = messageList.innerHTML+`    <div id="message-list">
       
        <div id="list-post">
        <div id="message-list-pic">
        <img src="https://picsum.photos/40/40/?random=10">
    </div>
            <p>${text.value}</p>
    </div>        
    </div> `
    text.value="";

	})
   }

	post();

$(function(){
    let textmax = 70;
    $("#font-math").html(`<span style=color:red>字數上限${textmax}</span>`)
    $("#text").keyup(function(){
        let textlength = $(this).val().length;
        $("#font-math").html(`<span style=color:red>字數上限${textmax-textlength}</span>`)

    })
   
})
