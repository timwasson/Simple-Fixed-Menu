$(document).ready(function() {	
	
	if (menupos === "top") {
		var menuheight = stickyel.height();	
	} else {
		var menuheight = 0;
	}
	var stickyTop = stickyel.offset().top;
	
	$(window).scroll(function(){
		var windowTop = $(window).scrollTop(); 
		
		if (stickyTop < windowTop) {
			$(stickyel).addClass("fixed");
		}
		else {
			$(stickyel).removeClass("fixed");
		}
		$(sections).each(function(){
			$this = $(this);
			
			offsetadjust = $this.offset().top - menuheight;
		
			if(offsetadjust < windowTop && windowTop < offsetadjust + $this.height()) {
				$("a[href=#"+$this.attr("id")+"]").addClass("active");
				$this.addClass("highlight");
			} else {
				$("a[href=#"+$this.attr("id")+"]").removeClass("active");
				$this.removeClass("highlight");
			}
		});
	});
	
	// Just a very basic smooth scroll to the selected section. 
	$(stickyel).find("a").on("click",function(e) {
		e.preventDefault();
		var scrollda = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(scrollda).offset().top + 1 }, 1000);
	});
});