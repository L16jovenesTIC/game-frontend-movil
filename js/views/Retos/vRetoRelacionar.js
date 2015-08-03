define(['backbone', 'text!tmpl/retoRelacionar.html'], function(Backbone, template){

	var ng = Backbone.View.extend({
	className:'retoRelacionar col-xs-12',
		events:{
			'click button:eq(0)': 'enviarRespuesta',
			'click .glyphicon-ok': 'relacionar',
		},
		relacionar:function(e){
			e.preventDefault()
			var $item = $(e.target).parent()
			$item.addClass('active')
			$item.data('id')
			this.$('#modal-retoRelacionar').modal('hide')
		},
		enviarRespuesta:function(e){
			e.preventDefault()
			console.log('envia la respuesta de la seleccion')
		},
		initialize:function(){
			//this.template = template
		}, 
		template: function(data){
			return _.template(template)(data)
		},
		render:function(){
			//this.$el.html(this.template)
			this.$el.html(this.template(this.model.toJSON()))
			//this.$('.areaJuego').html(p.render().el)
			return this
		}
	})

	return ng
})