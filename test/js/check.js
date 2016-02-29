// JavaScript Document
//重要 
$("input").attr('data-role','none');  
$("select").attr('data-role','none'); 
	
		
	$(".close").on("tap",function(){
  		window.location.href='login.html'
		});	
		

	$(".carmanage").on("tap",function(){
		window.location.href='carmanage.html'
		})
//筛选项
	$(".lis-title a").on("tap",function(){
		$(".lis-title a").removeClass("chose")
		$(this).addClass("chose")
		})

//底部
		$(".botton a").on("tap",function(){
		$(".botton a").removeClass("click")
		$(this).addClass("click")
		})


//--------------------------------
//前车照片
$(".limber-clear").hide()
$("#limber-show ").hide()
       $(function() {
                $('.limber-input').change(function() {
                    var file = this.files[0];
                    var r = new FileReader();
                    r.readAsDataURL(file);
                    $(r).load(function() {
                        $('#limber-fileList').html('<img src="' + this.result + '" alt="" />');
						 $("#limber-show").show();
			 			 $(".limber-input-wrp").hide();
			  			 $(".limber-clear").show();
                    })
                })
            })
//--------------------------------

//清除图片
$(".limber-clear").click(function(){
	$("#limber-fileList").empty();
	$("#limber-show").hide();
	$(".limber-input-wrp").show();
	$(".limber-clear").hide();
	})
	
	
//--------------------------------
//后车照片
$(".aftercar-clear").hide()
$("#aftercar-show ").hide()
       $(function() {
                $('.aftercar-input').change(function() {
                    var file = this.files[0];
                    var r = new FileReader();
                    r.readAsDataURL(file);
                    $(r).load(function() {
                        $('#aftercar-fileList').html('<img src="' + this.result + '" alt="" />');
						 $("#aftercar-show").show();
			 			 $(".aftercar-input-wrp").hide();
			  			 $(".aftercar-clear").show();
                    })
                })
            })
//--------------------------------

//清除图片
$(".aftercar-clear").click(function(){
	$("#aftercar-fileList").empty();
	$("#aftercar-show").hide();
	$(".aftercar-input-wrp").show();
	$(".aftercar-clear").hide();
	})