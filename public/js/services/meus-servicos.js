angular.module('meusServicos', ['ngResource'])
	.factory('recursoFoto', function($resource) {

		return $resource('/v1/fotos/:fotoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeFotos", function(recursoFoto, $q) {
		var service = {};
		service.cadastrar = function(foto) {
			return $q(function(resolve, reject) {

				if(foto._id) {
					recursoFoto.update({fotoId: foto._id}, foto, function() {
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
						});
					});

				} else {
					recursoFoto.save(foto, function() {
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						alert('Não Resolveu');
						reject({
							mensagem: 'Não foi possível incluir a foto ' + foto.titulo
						});
					});
				}
			});
		};
		return service;
    })
	.factory('recursoProf', function($resource) {

		return $resource('/v1/profs/:profId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeProfs", function(recursoProf, $q) {
		var service = {};
		service.cadastrar = function(prof) {
			return $q(function(resolve, reject) {

				if(prof._id) {
					recursoProf.update({profId: prof._id}, prof, function() {
						resolve({
							mensagem: 'Prof ' + prof.titulo + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a prof ' + prof.titulo
						});
					});

				} else {
					recursoProf.save(prof, function() {
						resolve({
							mensagem: 'prof ' + prof.titulo + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						alert('Não Resolveu');
						reject({
							mensagem: 'Não foi possível incluir a prof ' + prof.titulo
						});
					});
				}
			});
		};
		return service;
    });