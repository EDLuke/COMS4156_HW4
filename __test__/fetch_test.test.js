import React from 'react';
import { ToyProject } from '../App';
import App from '../App'

describe("App", function() {

	beforeEach(function() {
		
		global.fetch = jest.fn().mockImplementation(() => {
			var p = new Promise((resolve, reject) => {
				resolve({
						Id: '123', 
						json: function() { 
							return {Id: '123'}
					        }
					});
				});

		        return p;
		   	 });

	});


	it("fetches successfully", async function() {
	  	const response = await fetch('https://randomuser.me/api/?results=5');
	  	console.log(response);
	  	expect(response.Id).toBe('123'); 
	});

});
