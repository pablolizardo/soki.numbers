
define( [ 'jquery', 'scullge/scenes/base', 'text!templates/scenes/options.html', 'data/context' ], function( $, BaseScene, tplHtml, gaco ) {

	function OptionsScene()
	{
		BaseScene.call( this );

		this.setId( 'options' );
	}

	OptionsScene.prototype = new BaseScene();
	OptionsScene.prototype.constructor = OptionsScene;

	OptionsScene.prototype.switchFrom = function( prevScene )
	{
		var $canvas = $( document.getElementById( 'canvas' ) );
		$canvas.empty().append( tplHtml );
		
		$canvas.on( 'click', '.setting', function() {
			$( this ).toggleClass( 'setting-on setting-off' );
		});
		$canvas.on( 'click', '#backButton', function() {
			gaco.scenesManager.switchTo( 'mainMenu' );
		});
	};

	return OptionsScene;
});
