define(['backbone', 'text!tmpl/miGrupo.html'], function(Backbone, template){

	var ng = Backbone.View.extend({
		className:'miGrupo row',
		events:{
			'click section button': 'boton',
			'click .btn-miGrupoSalir': 'salir'
		},
		boton: function(e) {
			e.preventDefault()
		},
		salir: function(e) {
			e.preventDefault()
			Base.app.navigate('#homegame', {trigger:true})

			
		},
		initialize:function(){
			// Model: mClan
			this.listenTo(this.model, 'change:lst_jug', this.render)
		},
		template:function(data){
			return _.template(template)(data)
		},
		render:function(){
			var html = this.template({ jugadores: this.model.get('lst_jug') })
			this.$el.html(html)
			return this
		}
	})

	return ng
})