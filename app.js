'use strict';
function addHandlerListener () {
	$('#js-shopping-list-form').submit( function (event) {
	event.preventDefault();
	var addItem = $('#shopping-list-entry').val();
	updateState (state, addItem);
	renderAdd (addItem);
	console.log (addItem);
	});
}

var state = {
	items: []
};

function updateState ( state , addItem) {
	state.items.push(addItem);
}

function renderAdd (item) {
	var renderHTML = '<li> <span class=\"shopping-item\">' + item + '</span>\
        <div class=\"shopping-item-controls\">\
          <button class=\"shopping-item-toggle\">\
            <span class=\"button-label\">check</span>\
          </button>\
          <button class=\"shopping-item-delete\">\
            <span class=\"button-label\">delete</span>\
          </button>\
        </div>\
      	</li>';
      console.log(renderHTML);
      $(renderHTML).appendTo( $('.shopping-list') );
}

function checkHandlerListener () {
	$('.shopping-item-toggle').click(function (event) {
		event.preventDefault();
		console.log(event , this +'check function');
		console.log($(event.target).closest( 'li' ).find( '.shopping-item'));
		$(this).closest( 'li' ).find( '.shopping-item').toggleClass( 'shopping-item__checked');
	});

}

function deleteItemListener () {
	$('.shopping-item-delete').click(function (event) {
		event.preventDefault();
		console.log(this + 'delete');
		$(this).closest( 'li').remove( 'li');
	});
}





$(function () {
	addHandlerListener();
	checkHandlerListener();
	deleteItemListener();
});