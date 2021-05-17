//console.log("Yes det fungerar");
//var videos = [];
var videos = ["v=dQw4w9WgXcQ","v=oHg5SJYRHA0","v=5YaY9BvxcCw","v=IO9XlQrEt2Y", "v=j5a0jTc9S10","v=6jkWr4Ocl0g","v=z_Sco7VPY9A","v=6p4cmomC2C4","v=k8u4xbcvvOA","v=JUMK-jQiyd0","v=ub82Xb1C8os","v=DLzxrzFCyOs"];





//console.log(req.response);






var change = true;
//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
//const youtube_id = urlParams.get('v');
window.setInterval(function(){
    //console.log(change)
    if(is_rick_roll() && videos){
        if(change){
            if (confirm("This could be a rick-roll. \nDo you wish to continue?")) {
                console.log("Have luck!");
            } else {
                window.location.href = 'https://www.youtube.com/';
                //if(history.length >= 2){
                    
                    //window.history.back(1);
                    //location.reload();
                //}else{
                    //window.close();
                //}
                
                
            }
            change = false;
        }  
    }else{
        change = true;
    }
}, 100);
function is_rick_roll(){
    for(i = 0; i < videos.length; i++){
        if(window.location.href.includes(videos[i])){
            //console.log("is");
            return true
        }
    }
    return false
    
}


    
//alert(youtube_id);