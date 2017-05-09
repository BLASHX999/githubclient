//entender ajax
//xhttp request
//fetch()
//arrow function

/*var promesa = fetch('http://api.github.com/users/blashx999');
promesa.then(x=> console.log(x))
		.catch(x=> console.error(x));
*/
/*
$.ajax({
	type: 'GET'
});
*/
/*
$.get();
$.post();
$.load();
*/



$('input').keyup(function(e) {
	
	var nombre = $(this).val();
	if(nombre && e.keyCode === 13){
		//$(this).val('');
		//save(nombre);
		//guardar informacion en el localStorage
		var promesa = $.get('http://api.github.com/users/'+nombre);
		var link = 'http://api.github.com/users/'+nombre;
        promesa.done(x=>console.log(location.href=link))
		.fail(x=>console.log(error));
	}

});

