//裝置判斷
var userDevice = 'P';
function checkDevice() {
    var mobiles = new Array
    (
        // 不包含ipad
        "midp", "j2me", "avant", "docomo", "novarra", "palmos", "palmsource",
        "240x320", "opwv", "chtml", "pda", "windows ce", "mmp/",
        "blackberry", "mib/", "symbian", "wireless", "nokia", "hand", 
        "phone", "cdm", "up.b", "audio", "sie-", "sec-", "samsung", "htc",
        "mot-", "mitsu", "sagem", "sony", "alcatel", "lg", "eric", "vx",
        "NEC", "philips", "mmm", "xx", "panasonic", "sharp", "wap", "sch",
        "rover", "pocket", "benq", "java", "pt", "pg", "vox", "amoi",
        "bird", "compal", "kg", "voda", "sany", "kdd", "dbt", "sendo",
        "sgh", "gradi", "jb", "dddi", "moto", "iphone", "android",
        "incognito", "webmate", "dream", "cupcake", "webos",
        "s8000", "bada", "googlebot-mobile", "linux"


        // 含ipad
        /*
        "midp", "j2me", "avant", "docomo", "novarra", "palmos", "palmsource",
        "240x320", "opwv", "chtml", "pda", "windows ce", "mmp/",
        "blackberry", "mib/", "symbian", "wireless", "nokia", "hand", "mobi",
        "phone", "cdm", "up.b", "audio", "sie-", "sec-", "samsung", "htc",
        "mot-", "mitsu", "sagem", "sony", "alcatel", "lg", "eric", "vx",
        "NEC", "philips", "mmm", "xx", "panasonic", "sharp", "wap", "sch",
        "rover", "pocket", "benq", "java", "pt", "pg", "vox", "amoi",
        "bird", "compal", "kg", "voda", "sany", "kdd", "dbt", "sendo",
        "sgh", "gradi", "jb", "dddi", "moto", "iphone", "android",
        "ipod", "incognito", "webmate", "dream", "cupcake", "webos",
        "s8000", "bada", "googlebot-mobile", "ipad", "linux"
        */
    )

    var userAgent = navigator.userAgent;

    for (var i = 0; i < mobiles.length; i++) {
        if (userAgent.toLowerCase().indexOf(mobiles[i]) > 0) {
            userDevice = 'M';
            break;
        }
    }

  
}

checkDevice();