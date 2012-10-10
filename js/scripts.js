jQuery(function($){
	var getComments = function(){
		$('.video-container').youtubeLiveFeed('getComments',function(comments){
			$('.video_comments').empty();
			$.each(comments,function(i,comment){
				var date = new Date(comment.published);
				$('.video_comments').append(
					$('<li/>',{'class':'user'}).append(
						$('<span/>',{'class':'time'}).text('['+('0' + date.getDate()).slice(-2)+'/'+('0' + (date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()+' '+('0' + (date.getHours()+1)).slice(-2)+':'+('0' + (date.getMinutes()+1)).slice(-2)+']')
					).append(
						$('<a/>',{'class':'nick','href':comment.url}).text(comment.user)
					).append(
						$('<label>',{'class':'comment'}).text(comment.comment)
					)
				)
			});
			$('.video_comments li:last').addClass('last');
		})
	};
	$('.video-container').youtubeLiveFeed({
		'uid':'v7swrw3iKZazMWKItxiUsw',
		'onComplete':function(data){
			$('.video-container').append($('<div/>',{'id':'player'}));
			swfobject.embedSWF('//www.youtube.com/v/'+data.videoId,"player", "100%", "500", "8", null, null, {}, {});
			if(data.isLive){
				$('.alert').alert().show();
				setInterval(getComments,5000);				
			}else getComments();
		}
	});
})