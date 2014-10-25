
require.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'jquery-1.11.1.min',
		snap: 'snap.svg-min',
		underscore: 'underscore-min',
		handlebars: 'handlebars-v2.0.0'
	}
});

define( function( require ) {
	var gaco = require( 'data/context' ),
		ScenesManager = require( 'scullge/scenes/manager' ),
		IntroScene = require( 'scenes/intro' ),
		MainMenuScene = require( 'scenes/mainMenu' ),
		GameScene = require( 'scenes/game' ),
		GameWonScene = require( 'scenes/gameWon' ),
		GameLostScene = require( 'scenes/gameLost' ),
		ScoresScene = require( 'scenes/scores' ),
		OptionsScene = require( 'scenes/options' )
	;

	var introScene = new IntroScene();

	gaco.scenesManager = new ScenesManager();
	gaco.scenesManager.add( introScene );
	gaco.scenesManager.add( new MainMenuScene() );
	gaco.scenesManager.add( new GameScene() );
	gaco.scenesManager.add( new GameWonScene() );
	gaco.scenesManager.add( new GameLostScene() );
	gaco.scenesManager.add( new ScoresScene() );
	gaco.scenesManager.add( new OptionsScene() );

	document.addEventListener( 'deviceready', function() { gaco.scenesManager.switchTo( introScene ); }, false );
});

