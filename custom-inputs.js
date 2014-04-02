$.fn.customInput = function(inputType) {
	var container = $(this),
		labels = container.find('label'),
		inputs = container.find(inputSelector),
		inputWrappers = container.find('li'),

		triggerSelector = '.'+inputType,
		triggerHTML = '<i class="'+inputType+'"></i>',
		inputSelector = 'input[type="'+inputType+'"]';
	
	// inputs.hide();
	inputWrappers.prepend(triggerHTML);

	//Entrées cochées par défaut
	inputs.each(function(){
		var input = $(this),
			trigger = input.siblings(triggerSelector);
		
		if(input.is(':checked')) {
			trigger.addClass('checked');
			console.log(input.attr('id'));
		}
	});	

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
		console.log(inputType);
	}

	$(triggerSelector).on('click', function(){
		var trigger = $(this),
			input = $(this).siblings(inputSelector);

		input.click();

		check(trigger);
	});

	labels.on('click', function(){
		var trigger = $(this).siblings(triggerSelector);
		
		check(trigger);
	});			
}