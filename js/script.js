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
