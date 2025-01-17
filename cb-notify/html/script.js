let notifyID = 0;



window.addEventListener('message', (event) => {
    let data = event.data;
    if (data.notifyType === "ios"){
        $(".android").css("display", "none")
        $(".ios").css("display", "flex")
        var sound = new Audio('./music/ios.mp3');
        sound.volume = 0.8;
        sound.play()
        if (data.status == "success") {
            var notifyName = 'notify_' + notifyID;
            var newNotification = `
                <div id="ios_notify" class="${notifyName}">
                    <img class="iossuccesbg" src="./img/iossuccessbg.svg" alt="" />
                    <img class="iossucces" src="./img/iossuccess1.svg" alt="" />
                    <div class="succestext">Success</div>
                    <div class="succesdesc">
                        ${data.message}
                    </div>
                    <div class="succestime">Now</div>
                </div>
            `;
            $(".ios").append(newNotification);

            setTimeout(function() {
                $('#ios_notify').animate({
                    right: '-100%'
                }, 500, function() {
                    $('#ios_notify').remove();
                });
            }, data.time);

            notifyID++;

            return;
        }
    
        if (data.status == "danger") {
            var notifyName = 'notify_' + notifyID;
            var newNotification = `
                <div id="ios_notify" class="${notifyName}">
                    <img class="iossuccesbg" src="./img/iossuccessbg.svg" alt="" />
                    <img class="iosdanger" src="./img/iosdanger.svg" alt="" />
                    <div class="succestext">Danger</div>
                    <div class="succesdesc">
                        ${data.message}
                    </div>
                    <div class="succestime">Now</div>
                </div>
            `;
            $(".ios").append(newNotification);
            
            setTimeout(function() {
                $('#ios_notify').animate({
                    right: '-100%'
                }, 500, function() {
                    $('#ios_notify').remove();
                });
            }, data.time);

            notifyID++;

            return;
        }
    
        if (data.status == "warning") {
            var notifyName = 'notify_' + notifyID;
            var newNotification = `
                <div id="ios_notify" class="${notifyName}">
                    <img class="iossuccesbg" src="./img/iossuccessbg.svg" alt="" />
                    <img class="ioswarning" src="./img/ioswarning.svg" alt="" />
                    <div class="succestext">Warning</div>
                    <div class="succesdesc">
                        ${data.message}
                    </div>
                    <div class="succestime">Now</div>
                </div>
            `;
            $(".ios").append(newNotification);
            
            setTimeout(function() {
                $('#ios_notify').animate({
                    right: '-100%'
                }, 500, function() {
                    $('#ios_notify').remove();
                });
            }, data.time);

            notifyID++;

            return;
        }
    
        if (data.status == "info") {
            var notifyName = 'notify_' + notifyID;
            var newNotification = `
                <div id="ios_notify" class="${notifyName}">
                    <img class="iossuccesbg" src="./img/iossuccessbg.svg" alt="" />
                    <img class="iosinfo" src="./img/iosinfo.svg" alt="" />
                    <div class="succestext">Info</div>
                    <div class="succesdesc">
                        ${data.message}
                    </div>
                    <div class="succestime">Now</div>
                </div>
            `;
            $(".ios").append(newNotification);
            
            setTimeout(function() {
                $('#ios_notify').animate({
                    right: '-100%'
                }, 500, function() {
                    $('#ios_notify').remove();
                });
            }, data.time);

            notifyID++;

            return;
        }
    }else if(data.notifyType === "android"){
        $(".ios").css("display", "none")
        $(".android").css("display", "flex")
        var sound = new Audio('./music/android.mp3');
        sound.volume = 0.8;
        sound.play()
        if (data.status == "success") {
            var notifyName = 'notify_' + notifyID;
            var newNotification = `
                <div id="android_notify" class="${notifyName}">
                    <img class="asuccesbackground" src="./img/androidbg.svg" alt="" />
                    <img class="asuccesimg" src="./img/asuccesimg.svg" alt="" />
                    <div class="asuccestext">Success</div>
                    <div class="asuccesmsg">Hi!</div>
                    <div class="asucessdesc">
                    ${data.message}
                    </div>
                    <div class="asuccestime">Now</div>
                </div>    
            `;
            $(".android").append(newNotification);
            
            setTimeout(function() {
                $('#android_notify').animate({
                    right: '-100%'
                }, 500, function() {
                    $('#android_notify').remove();
                });
            }, data.time);

            notifyID++;

            return;
        }
    
        if (data.status == "danger") {
            var notifyName = 'notify_' + notifyID;
            var newNotification = `
                <div id="android_notify" class="${notifyName}">
                    <img class="asuccesbackground" src="./img/androidbg.svg" alt="" />
                    <img class="asuccesimg" src="./img/adangerimg.svg" alt="" />
                    <div class="adangertext">Danger</div>
                    <div class="asuccesmsg">Hi!</div>
                    <div class="asucessdesc">
                    ${data.message}
                    </div>
                    <div class="asuccestime">Now</div>
                </div>    
            `;
            $(".android").append(newNotification);
            
            setTimeout(function() {
                $('#android_notify').animate({
                    right: '-100%'
                }, 500, function() {
                    $('#android_notify').remove();
                });
            }, data.time);

            notifyID++;

            return;
        }
    
        if (data.status == "warning") {
            var notifyName = 'notify_' + notifyID;
            var newNotification = `
                <div id="android_notify" class="${notifyName}">
                    <img class="asuccesbackground" src="./img/androidbg.svg" alt="" />
                    <img class="asuccesimg" src="./img/awarningimg.svg" alt="" />
                    <div class="awarningtext">Warning</div>
                    <div class="asuccesmsg">Hi!</div>
                    <div class="asucessdesc">
                    ${data.message}
                    </div>
                    <div class="asuccestime">Now</div>
                </div>    
            `;
            $(".android").append(newNotification);
            
            setTimeout(function() {
                $('#android_notify').animate({
                    right: '-100%'
                }, 500, function() {
                    $('#android_notify').remove();
                });
            }, data.time);

            notifyID++;

            return;
        }
    
        if (data.status == "info") {
            var notifyName = 'notify_' + notifyID;
            var newNotification = `
                <div id="android_notify" class="${notifyName}">
                    <img class="asuccesbackground" src="./img/androidbg.svg" alt="" />
                    <img class="asuccesimg" src="./img/ainfoimg.svg" alt="" />
                    <div class="ainfotext">Info</div>
                    <div class="asuccesmsg">Hi!</div>
                    <div class="asucessdesc">
                    ${data.message}
                    </div>
                    <div class="asuccestime">Now</div>
                </div>    
            `;
            $(".android").append(newNotification);
            
            setTimeout(function() {
                $('#android_notify').animate({
                    right: '-100%'
                }, 500, function() {
                    $('#android_notify').remove();
                });
            }, data.time);

            notifyID++;

            return;
        }
    }else if(data.action === "openUI"){
        if(data.state){
            return $(".notifyselect").css("display", "block")
        }else{
            return $(".notifyselect").css("display", "none")
        }
    }

    return console.log("Notification: Error the specified notification type doesnt exists! (" + data.status + ")")
});

$(document).on("click", "#androidButton", function () {
    $(".ios").css("display", "none")
    $(".android").css("display", "flex")
    $.post("https://cb-notify/notifyType", JSON.stringify({type: "android"}))
});

$(document).on("click", "#iosButton", function () {
    $(".android").css("display", "none")
    $(".ios").css("display", "flex")
    $.post("https://cb-notify/notifyType", JSON.stringify({type: "ios"}))
});

window.addEventListener("keyup", e => {
    if (e.key === "Escape" || e.key === "Backspace") {
        $.post("https://cb-notify/closeUI", JSON.stringify({}))
    }
})
