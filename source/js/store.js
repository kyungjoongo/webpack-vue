// All the logic

export default {

	state: function() {
		return {
			title: "My App",
			items: [{
				label: 'Doors',
				value: false
			}, {
				label: 'Climate',
				value: false
			}, {
				label: 'Beep & Flash',
				value: false
			}]
		}
	},

	computed: {
		count: function() {
			var c = 0;
			for(var i in this.items){
				if(this.items[i].value){
					c++;
				}
			}
			return c;
		}
	},

	methods: {
		toggle: function(item) {
			item.value = !item.value;
		}
	}
}
