class Scroller{
	constructor(){
		this.FRICTION = .08;
		this.VELOCITY = 0;
		this.TOP = 0;
		this.OLDTOP = 0;
		this.X = 0;
		
		this.updateView();
		this.listen();
	}
	
	listen(){
		$(window).on('scroll', (e)=>{
			this.scrolled();
		});
	}
	
	updateView(){
		window.requestAnimationFrame(this.updateView.bind(this));

		this.VELOCITY -= this.VELOCITY * this.FRICTION;	
		this.transform();
	}
	
	scrolled(){
		this.OLDTOP = this.TOP;
		this.TOP = window.scrollY;
		this.VELOCITY += this.OLDTOP - this.TOP;
	}
	
	transform(){
		this.X += this.VELOCITY
	
		$('[data-vel]').each((i, el)=>{
			var VEL = $(el).data('vel');
			var VEL2 = -((this.X * VEL) / 20).toFixed(2);
						
			$(el).css({
				'transform': 'translate3d(0px, ' + VEL2 + 'px, 0px) rotate(' + VEL2 / 20 + 'deg)',
				'-ms-transform': 'translate3d(0px, ' + VEL2 + 'px, 0px) rotate(' + VEL2 / 20 + 'deg)'
			});
		});
	}
}

new Scroller();