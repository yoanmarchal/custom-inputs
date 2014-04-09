$.fn.customInput = function(inputType) {
	var container = $(this),
		labels = container.find('label'),
		inputs = container.find(inputSelector),
		inputWrappers = container.find('li'),

		triggerSelector = '.'+inputType,
		triggerHTML = '<i class="'+inputType+'"></i>',
		inputSelector = 'input[type="'+inputType+'"]';
	
	//Hide inputs and add custom HTML
	inputs.hide();
	inputWrappers.prepend(triggerHTML);

	//Change icon state based on input type
	function check(trigger) {
		var neighbors =  null;

		switch (inputType) {
			case 'radio':
				neighbors = container.find('.checked');

				neighbors.removeClass('checked');
				trigger.addClass('checked');
			break;

			case 'checkbox':
				trigger.toggleClass('checked');
			break;
		}
	}
	
	//Tick default inputs
	inputs.each(function(){
		var input = $(this),
			trigger = input.siblings(triggerSelector);
		
		if(input.is(':checked')) {
			trigger.addClass('checked');
		}
	});

	//Activate input by clicking icon
	$(triggerSelector).on('click', function(){
		var trigger = $(this),
			input = $(this).siblings(inputSelector);

		input.click();

		check(trigger);
	});

	//Check icon on label click
	labels.on('click', function(){
		var trigger = $(this).siblings(triggerSelector);
		
		check(trigger);
	});
};
