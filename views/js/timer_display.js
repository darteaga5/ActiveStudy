//http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
    //function to start the timer 
    var break_time = '';
    function startTimer(duration, display){
        var start = Date.now(),
                    diff,
                    hours, 
                    minutes,
                    seconds;
        
        //create the timer
        function timer() {
            diff = duration - ((Date.now() - start)/1000 | 0);

            minutes =((diff / 60) % 60) | 0;
            seconds = (diff % 60) | 0;
            
            if( diff > 3600){
               hours = (diff - (minutes * 60))/ 3600 | 0;
            }
            else{
                hours = 0;
            }
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = hours + ":" + minutes + ":" + seconds;

            if (diff <= 0) {
                start = Date.now() + 1000;
            }
        };
        timer();
        setInterval(timer, 1000);
    }   

    //function to implement the timer
    window.onload = function(){
        var timeWork = getURLParameter('workintid') * 60;
        display = document.querySelector('#time');
        
        
        localStorage.setItem('timer', getURLParameter('breakid'));

        startTimer(timeWork, display);
    };
    
    //set time to switch to other page
    setTimeout(function(){window.location.href='startbreak.html'},getURLParameter('workintid')*60000);

    //function to get parameters passed in
    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }
