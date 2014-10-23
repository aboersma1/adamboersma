	

	var siteApp = angular.module('siteApp', []);

	siteApp.controller('siteController', function() {
		this.navLinks = [
			{
				'linkName': 'Who am I?',
				'linkPath': 'about'
			},
			{
				'linkName': 'What do I do?',
				'linkPath': 'skills'
			},
		];
		this.navLinksWithSub = [
			{
				'linkName': 'Previous Work',
				'linkPath': 'work',
				'subLinks': [
					{
						'linkName': 'ITS Communications',
						'linkPath': 'work#ITSComm'
					},
					{
						'linkName': 'ITS Partners',
						'linkPath': 'work#ITSPart'
					},
					{
						'break': 'break'
					},
					{
						'linkName': 'The Stow Company',
						'linkPath': 'work#Stow'
					},
					{
						'break': 'break'
					},
					{
						'linkName': 'Markit On Demand',
						'linkPath': 'work#MOD'
					}
				]
			}
		];
	});


$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = 10;
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset) {
          $(".navbar-default").css('background-color', 'white');
       } else {
          $('.navbar-default').css('background-color', 'rgba(255,255,255,0.85)');
       }
   });
});