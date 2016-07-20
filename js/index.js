var options=[
			{img_title:"D",link_adress:"javascript:void(0);",imgSrc:"images/1.jpg"},
			{img_title:"J",link_adress:"javascript:void(0);",imgSrc:"images/2.jpg"},
			{img_title:"L",link_adress:"javascript:void(0);",imgSrc:"images/3.jpg"},
			{img_title:"箫",link_adress:"javascript:void(0);",imgSrc:"images/4.jpg"},
			{img_title:"氏",link_adress:"javascript:void(0);",imgSrc:"images/5.jpg"},
			{img_title:"前",link_adress:"javascript:void(0);",imgSrc:"images/6.jpg"},
			{img_title:"端",link_adress:"javascript:void(0);",imgSrc:"images/7.jpg"},
			{img_title:"狂",link_adress:"javascript:void(0);",imgSrc:"images/8.jpg"},
			{img_title:"热",link_adress:"javascript:void(0);",imgSrc:"images/5.jpg"},
			{img_title:"爱",link_adress:"javascript:void(0);",imgSrc:"images/3.jpg"},
			{img_title:"好",link_adress:"javascript:void(0);",imgSrc:"images/7.jpg"},
			{img_title:"者",link_adress:"javascript:void(0);",imgSrc:"images/5.jpg"},
		];

var album= document.querySelector(".album");


options.forEach(function(value,index){
	var liDom=document.createElement("li");
	liDom.innerHTML=['<div class="image_title">',
					'<a href='+value["link_adress"]+'>'+value["img_title"]+'</a>',
					'</div>',
					'<a href='+value["link_adress"]+'>',
						'<img src='+value["imgSrc"]+' />',
					'</a>'].join(" ");

	album.appendChild(liDom);
})