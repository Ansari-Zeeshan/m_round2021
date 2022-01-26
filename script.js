const spandiv =  document.querySelector('.img-div .span-div');
const imgdiv =  document.querySelector('.img-div');
const arrow_up=document.querySelector('.arrow-icon');
let c=0;

function appear()
{
	   for(let i=0; i<12; i++)
	   {  
	   	 let spandiv = document.createElement('div');
	   	 spandiv.setAttribute('class','span-div');
		 spandiv.style.top= 3*i +'%';
	   	 imgdiv.appendChild(spandiv);
		   	for(let j=0; j<9; j++)
		   	{
               let spanchild = document.createElement('div');
			   spanchild.setAttribute('class', 'span-child')
			   spandiv.appendChild(spanchild);
		   	}
       }
}
appear();

$(document).ready(function()
        {
            $('.owl-carousel').owlCarousel(
                {
                    autoplay:true,
                    autoplayHoverPause: true,
                    items:2,
                    nav:true,
                    margin : 30,
                    autoplayHoverPause:false,
                    loop:true,
                    responsive:
                    {
                        0:
                        {
                            items:1,
                            dots:false
                        },
                        485:
                        {
                            items:2,
                            dots:false
                        },
                        728:
                        {
                            items:3,
                            dots:false
                        },
                        960:
                        {
                            items:2,
                            dots:true
                        },
                        1200:
                        {
                            items:2,
                            dots:true
                        },
                    }
                });
        })

window.onscroll=function(event)
{
    if(this.pageYOffset>1000)
    {
      arrow_up.classList.add('active');
    }
    else
    {
       arrow_up.classList.remove('active');
    }
}