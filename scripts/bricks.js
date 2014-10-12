define( [ 'jquery' ], function( $ ) {

	var bricksConfig = [
		{background:'#ed5564','text-shadow' :'0px -2px 0px #da4652', 'border-bottom' :'solid 3px #da4652'},
		{background:'#48cfae','text-shadow' :'0px -2px 0px #36bc9b', 'border-bottom' :'solid 3px #36bc9b'},
		{background:'#4fc0e8','text-shadow' :'0px -2px 0px #3baeda', 'border-bottom' :'solid 3px #3baeda'},
		{background:'#ffce51','text-shadow' :'0px -2px 0px #f7ba47', 'border-bottom' :'solid 3px #f7ba47'},
		{background:'#ac92ed','text-shadow' :'0px -2px 0px #967bdc', 'border-bottom' :'solid 3px #967bdc'},
		{background:'#a0d469','text-shadow' :'0px -2px 0px #8cc051', 'border-bottom' :'solid 3px #8cc051'},
		{background:'#5d9cec','text-shadow' :'0px -2px 0px #4c89d9', 'border-bottom' :'solid 3px #4c89d9'},
		{background:'#fb6e52','text-shadow' :'0px -2px 0px #e9573e', 'border-bottom' :'solid 3px #e9573e'},
		{background:'#ec87bf','text-shadow' :'0px -2px 0px #d272af', 'border-bottom' :'solid 3px #d272af'},
	];

	function Brick()
	{
		this.counted = false;
		this.index = null;
	}

	Brick.prototype.setIndex = function( index )
	{
		this.index = index;
	};

	Brick.prototype.getIndex = function()
	{
		return this.index;
	};

	Brick.prototype.setValue = function( value )
	{
		this.value = value;
	};

	Brick.prototype.getValue = function()
	{
		return this.value;
	};

	Brick.prototype.setGridLocation = function( x, y )
	{
		this.x = x;
		this.y = y;
	};

	Brick.prototype.toHtmlNode = function()
	{
		var htmlNode = document.createElement( 'div' );
		htmlNode.id = 'brick_' + this.index;
		htmlNode.className = 'brick';
		htmlNode.innerText = this.value;
		$( htmlNode ).css( bricksConfig[ this.value + 1 ] );

		htmlNode.style.position = 'absolute';
		htmlNode.style.left = this.x * 35 + 'px';
		htmlNode.style.top = this.y * 35 + 'px';
		return htmlNode;
	};

	Brick.prototype.remove = function()
	{
		$( '#brick_' + this.index ).fadeOut();
	};

	return Brick;
});
