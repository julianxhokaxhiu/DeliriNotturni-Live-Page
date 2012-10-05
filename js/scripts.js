jQuery(function($){
	var getComments = function(){
		$('.video').youtubeLiveFeed('getComments',function(comments){
			$('.youtube_comments').empty();
			$.each(comments,function(i,comment){
				var date = new Date(comment.published);
				$('.youtube_comments').append(
					$('<li/>',{'class':'user'}).append(
						$('<span/>',{'class':'time'}).text('['+('0' + date.getDate()).slice(-2)+'/'+('0' + (date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()+' '+('0' + (date.getHours()+1)).slice(-2)+':'+('0' + (date.getMinutes()+1)).slice(-2)+']')
					).append(
						$('<a/>',{'class':'nick','href':comment.url}).text(comment.user)
					).append(
						$('<span/>',{'class':'separator'}).text('>>')
					).append(
						$('<label>',{'class':'comment'}).text(comment.comment)
					)
				)
			})	
		})
	};
	$('.tabs').tabs();
	$('.video').youtubeLiveFeed({
		'uid':'v7swrw3iKZazMWKItxiUsw',
		'onComplete':function(data){
			$('.video').append($('<div/>',{'id':'player'}));
			swfobject.embedSWF('//www.youtube.com/v/'+data.videoId,"player", "100%", "100%", "8", null, null, {}, {});
			if(data.isLive){
				$('.bottom').append($('<span/>',{'class':'live'}).text('Live'));
				setInterval(getComments,5000);				
			}else getComments();
		}
	});
})