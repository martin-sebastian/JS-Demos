// bind new event to my link tweet this
$('a.tweet').click(function(e){
 
  // tell my browser not to follow my tweet this link
  e.preventDefault();
 
  //  get the URL of the link
  var loc = $(this).attr('href');
 
  // get the title of the link
  var title  = escape($(this).attr('title'));
 
  // trigger a new browser window with the Twitter dialog, in the middle of the page
  window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
 
});