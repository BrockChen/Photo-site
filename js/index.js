listObj = {


	loadimages: function(){
		var imgs = [
			"templatemo_portfolio01.jpg",
			"templatemo_portfolio02.jpg",
			"templatemo_portfolio03.jpg",
			"templatemo_portfolio04.jpg",
			"templatemo_portfolio05.jpg",
			"templatemo_portfolio06.jpg",
			"templatemo_portfolio07.jpg",
			"templatemo_portfolio08.jpg",
			"templatemo_portfolio09.jpg",
			"templatemo_portfolio10.jpg",
			"templatemo_portfolio11.jpg"
		];

		var html = "";
		for(var i=0;i<imgs.length;i++){
			var imgeurl = "img/" + imgs[i];
			html += template("image_node", {imgurl: imgeurl}); 
		}

		document.getElementById('list1').innerHTML += html;

	}

};
