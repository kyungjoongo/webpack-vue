 const prompt = require('prompt')
 const { renderTemplateFile } = require('template-file')
 const fs = require('fs-extra');

 var schema = {
 	properties: {
 		name: {
 			description: 'App Name',
 			type: 'string',
 			pattern: /^\S*$/,
 			message: 'No spaces allowed',
 			required: true
 		},
 		id: {
 			description: 'App ID (e.g com.example.prototype)',
 			type: 'string',
 			message: 'Name must be only letters, spaces, or dashes',
 			required: true
 		},
 		description: {
 			description: 'Description',
 			type: 'string',
 			required: false
 		},
 		author: {
 			description: "Author's email",
 			type: 'string',
 			required: true,
 		},
 		company: {
 			description: 'Company Name',
 			type: 'string',
 			required: true,
 		},
 		href: {
 			description: 'Website URL',
 			type: 'string',
 			required: true,
 		},
 	}
 };

prompt.message = '';
prompt.start();

prompt.get(schema, function(err, result) {
	renderTemplateFile(__dirname+'/configTemplate.xml', result)
		.then(renderedString => {
			fs.writeFile("./config.xml", renderedString, function(err){
			    if(err) {
			        return console.log(err);
			    }else{
			    	fs.copy(__dirname+'/hooks/', './hooks/')
						.then(() => console.log('success!'))
						.catch(err => console.error(err))
			    }
			})
		})

});
