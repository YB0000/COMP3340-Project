var app = new Vue({
	el: '#app',
	data: {
		leftListIndex: 2, // left block
		displayModeShow: 0, // display mode
		displayMode: 0, // mode: 0-Day 1-Night 3-Colorblind
		displayColors: [{
				bodyColor: '#D6D1C3',
				classItem: '#D6D1C3',
				textarea: '#D6D1C3',
				textareaColor: '#000000',
				addTextColor: '#242324',
				inputBgColor: '#D6D1C3',
				inputColor: 'black',
				inputUnderBorder: '1px solid gray',
				buttonColor: '#393b3e',
			},
			{
				bodyColor: '#868B78',
				classItem: '#B3B1B5',
				textarea: '#bcbdc1',
				textareaColor: '#DBD6E0',
				addTextColor: '#ffffff',
				inputBgColor: '#868B78',
				inputColor: 'white',
				inputUnderBorder: '1px solid white',
				buttonColor: '#393b3f',
			},
			{
				bodyColor: '#f3ebe1',
				classItem: '#ffffff',
				textarea: '#e1e1e1',
				textareaColor: '#000000',
				addTextColor: '#000000',
				inputBgColor: '#f3ebe1',
				inputColor: '#000000',
				inputUnderBorder: '1px solid gray',
				buttonColor: '#000000',
			}
		],
		isLogin: true,
		userName: 'Admin',
		classList: tempClass,
		classEditId: 0,
		classEditInfo: {
			id: 0,
			title: null,
			image: './img/addImg.webp',
			price: null,
			contant: null,
			assessmen: [],
			authen: false,
		}
	},
	methods: {
		bodyLeftListClick: function(index) {
			this.leftListIndex = index;
			this.classEditId = 0;

			this.classEditInfo = {
				id: 0,
				title: null,
				image: './img/addImg.webp',
				price: null,
				contant: null,
				assessmen: [],
				authen: false,
			}

		},
		classEdit: function(e) {
			this.leftListIndex = 1;
			this.classEditId = e.target.dataset.id;

			this.classEditInfo = this.classList[e.target.dataset.id];
		},
		bodyMyClassEditBack: function() {
			this.classEditId = 0;
		},
		saveClass: function() {
			this.leftListIndex = 0;
			this.classEditId = 0;
			this.classEditInfo = {
				id: 0,
				title: null,
				image: './img/addImg.webp',
				price: null,
				contant: null,
				assessmen: [],
				authen: false,
			}
		},
		displayModeClick: function(e) {
			this.displayMode = e;
			this.displayModeBtn();
		},
		displayModeBtn: function() {
			this.displayModeShow == 0 ? this.displayModeShow = 1 : this.displayModeShow = 0;
		},
		LoginBtn: function() {
			this.isLogin = !this.isLogin
		},
	}
})
