//获得slider插件对象
mui('.mui-slider').slider({
  interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
});

mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	bounce: true,
	scrollY: true,
	startX: 0, //初始化时滚动至x
 	startY: 0, //初始化时滚动至y
});