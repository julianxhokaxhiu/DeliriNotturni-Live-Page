/*
	jQuery Youtube Live Feed
	
	This plugin will let you embed your youtube live feed, and will read
	metadata infos like comments, live status, etc.
	
	Author: Julian Xhokaxhiu
	Date: 05/010/2012
	Changelog:
		- 0.1:  initial relase version.
*/
var YoutubeLiveFeed;
(function ($) {
	YoutubeLiveFeed = function(options){
		var placeholder = $(this);
		var settings = $(this).data('youtubelivefeedsettings');
		// If settings are not declared, we set the default value for them
		if(!settings){
			settings = {
				'uid':'',
				'onComplete':function(data){}
			}
		};
		// Private methods - can only be called from within this object
		var IntFunc = {
			'getComments':function(callback){
				if(!callback)callback=function(){};
				$.getJSON('//gdata.youtube.com/feeds/api/videos/' + settings._vid + '/comments',{'v':'2','alt':'json'},function(r){
					var comments = [];
					$.each(r.feed.entry,function(i,v){
						comments.push({
							'user':v.author[0].name['$t'],
							'url':v.author[0].uri['$t'].replace('/gdata.youtube.com/feeds/api/users','/www.youtube.com/user'),
							'title':v.title['$t'],
							'comment':v.content['$t'],
							'published':v.published['$t'],
							'updated':v.updated['$t']
						})
					});
					callback(comments);
				})
			}
		};
		
		if(typeof(options)=='string'){
			if(IntFunc[options])IntFunc[options].apply(null,Array.prototype.slice.call(arguments,1));
		}else if(options){
			settings = $.extend(settings,options||{});
			$(this).data('youtubelivefeedsettings',settings);
			
			// Do this only if the input is not already binded
			if(!placeholder.data('embed')){
				$.getJSON('//gdata.youtube.com/feeds/api/users/' + settings.uid + '/live/events',{'v':'2','alt':'json'},function(data){
					var isLive = false;
					$.each(data.feed.entry,function(i,v){
						if(v['yt$status']['$t'] == 'active'){
							data=v;
							isLive=true
						}
					});
					if(isLive){
						settings._vid = /(\/)(\w+)(\?)/g.exec(data.content.src)[2];
						settings.onComplete({
							'videoId':settings._vid,
							'isLive':isLive
						});
						placeholder.data('embed',true);
					}else{
						$.getJSON('//gdata.youtube.com/feeds/api/users/' + settings.uid + '/uploads',{'v':'2','alt':'json','max-results':'1'},function(data){
							settings._vid = data.feed.entry[0].id['$t'].match(/\w+$/g)[0];
							settings.onComplete({
								'videoId':settings._vid,
								'isLive':isLive
							});
							placeholder.data('embed',true);
						});
					}
				})
			}
		}
	};
	$.fn.extend({
		youtubeLiveFeed:function(){
			var args = arguments;
			this.each(function(){YoutubeLiveFeed.apply(this,args)});
		}
	});
})(jQuery);