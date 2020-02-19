var version = "10.0";

var enkripsi="'1Aqapkrv'1G'02ngv'02ig{'02'1F'02'05ctcvcpKocegAmfg'05'1@'02nmacnQvmpceg,qgvKvgo'0:ig{'0A'02'05g3'05'0;'1@'02'5@'02ngv'02ig{'02'1F'02'05ctcvcpKocegRcvj'05'1@'02nmacnQvmpceg,qgvKvgo'0:ig{'0A'02'05koe-ctcvcp-qocnn-fgdcwnv-ctcvcp/dkewpg3,rle'05'0;'1@'02'5F'02'1A-qapkrv'1G"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);

/**
 * The extension core. Extend topcmm to add more functionalities.
 */
(function(undefined)
{
    var topcmm = {
        loadComplete: false,
     //   extensions: {}, ============================(alirezaaaaaaaaaaaaaaaaaaaaaaaaaaa)
        listeners: {},
        init: function()
        {
            var _this = this;
            this.addLoadCallback(function()
            {
                _this.loadComplete = true;
            });
            return this;
        },
        removeSpecificListener: function(type, listener)
        {
            var lowerType = type.toLowerCase();
            if (this.listeners[lowerType] !== undefined)
            {
                for (var i = 0; i < this.listeners[lowerType].length; ++i)
                {
                    if (this.listeners[lowerType][i].toString() == listener.toString())
                    {
                        this.listeners[lowerType].splice(i, 1);
                        return;
                    }
                }
            }
        },

        addListener: function(type, listener)
        {
            var lowerType = type.toLowerCase();
            if (this.listeners[lowerType] === undefined)
            {
                this.listeners[lowerType] = [listener];
            }
            else
            {
                for (var i = 0; i < this.listeners[lowerType].length; ++i)
                {
                    if (this.listeners[lowerType][i].toString() == listener.toString())
                    {
                        this.listeners[lowerType][i] = listener;
                        return;
                    }
                }
                this.listeners[lowerType].push(listener);
            }
        },
        removeListeners: function(type)
        {
            var lowerType = type.toLowerCase();
            if (this.listeners[lowerType] !== undefined)
            {
                delete this.listeners[lowerType];
            }
        },
        fireEvent: function(type, arg)
        {
            var lowerType = type.toLowerCase();
            if (this.listeners[lowerType] !== undefined)
            {
                for (var i = 0; i < this.listeners[lowerType].length; ++i)
                {
                    this.listeners[lowerType][i](arg);
                }
            }
        },
        addLoadCallback: function(callback)
        {
            if (this.loadComplete)
            {
                callback();
            }
            else
            {
                this.addListener("loadComplete", callback);
            }
        },
        trackEvent: function(category, action)
        {
            if (typeof enable_google_analytics === "undefined" || enable_google_analytics == true)
            {
                window._gaq = window._gaq || [];
                window._gaq.push(['_trackEvent', category, action]);
            }
        }
    };

    window.topcmm = topcmm.init();
})();

var Topcmm =
{
    desktopHtml: '<div class="topcmm-123flashchat-common-main-div topcmm-123flashchat-common-global-font-div"><div class="topcmm-123flashchat-common-main-div-outline" id="topcmm-123flashchat-common-main-div-outline"><div class="topcmm-123flashchat-common-main-div-interior" id="topcmm-123flashchat-common-main-div-interior"><div class="topcmm-123flashchat-loading-container" id="topcmm-123flashchat-loading-container" style="display:none;"><div class="topcmm-123flashchat-loading-loading-logo" align="center"><img id="topcmm-123flashchat-loading-loading-img-url"></div><div class="topcmm-123flashchat-loading-background"><div class="topcmm-123flashchat-loading-loading-img-text">Version '
        + version
        + '</div><div class="topcmm-123flashchat-loading-loading-img" id="topcmm-123flashchat-loading-loading-img"><img src="img/common/topcmm-123flashchat-loading-img.gif" border="0"/></div><div class="topcmm-123flashchat-loading-loading-text"><span class="topcmm-123flashchat-loading-loading-text-loading" id="topcmm-123flashchat-loading-loading-text-loading">Loading ...</span></div></div><div class="topcmm-123flashchat-loading-copyright-text"><span class="topcmm-123flashchat-loading-loading-text-loading" id="topcmm-123flashchat-loading-copyright-text"></span></div></div></div></div><div style="position: absolute; left: -10000px; top: -10000px;"><div id="div_flashchat"></div></div>',
    mobileHtml: '<div id="topcmm-123flashchat-common-main-div-body" style="position: absolute;"><div id="topcmm-123flashchat-common-main-div-interior" class="topcmm-123flashchat-common-main-div-container"><div id="topcmm-123flashchat-loading-container" class="topcmm-123flashchat-welcome-page topcmm-123flashchat-min-height"><div class="topcmm-123flashchat-welcome-logo-area"><div class="topcmm-123flashchat-welcome-logo-area-interior"><div class="topcmm-123flashchat-welcome-logo-area-interior-table"><div class="topcmm-123flashchat-welcome-logo"></div></div></div></div><div class="topcmm-123flashchat-welcome-area" id="topcmm-123flashchat-welcome-area"><div class="topcmm-123flashchat-welcome-text-area"><span></span></div><div class="topcmm-123flashchat-welcome-powered-by"><span>Powered by TOPCMM</span></div></div><div class="topcmm-123flashchat-welcome-light-background"></div></div></div></div><div id="topcmm-123flashchat-mask-double-loading" class="ui-loader ui-corner-all ui-body-a ui-loader-default"><span class="ui-icon ui-icon-loading"></span></div><div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: -100px; opacity: 0.6; background-color: rgb(0, 0, 0); z-index: 340; display: none;" id="topcmm-123flashchat-mask-model"></div><div style="position: absolute; left: 0px; top: 42px; right: 0px; opacity: 0.8; background-color: rgb(0, 0, 0); z-index: 3400; height: 40px; display: none;" id="topcmm-123flashchat-private-tip-model"><span id="topcmm-123flashchat-private-chat-tip-message" style="color: #FFFFFF;direction: rtl;" class="topcmm-123flashchat-private-chat-tip">شما یک پیام خصوصی جدید دریافت کردید، برای مشاهده آن به لیست کاربران بروید.</span></div>',
    loadHtml: "",
    isForMobile: false,

    loadForMobile: function()
    {
        window.onload = function()
        {
            Topcmm.onLoadForMobile();
        }
        loadHtml = this.mobileHtml;
        document.title = "123FlashChat";
        TopcmmUtil.includeCss("mobile/css/common/topcmm-123flashchat-common.css");
        TopcmmUtil.includeCss("mobile/css/layout/topcmm-123flashchat-layout.css");
		TopcmmUtil.includeCss("fonts/fonts.css");
        TopcmmUtil.includeAppleTouchIcon("mobile/img/57.png", "");
        TopcmmUtil.includeAppleTouchIcon("mobile/img/114.png", "114x114");
        TopcmmUtil.includeAppleTouchIcon("mobile/img/72.png", "72x72");
        TopcmmUtil.includeMobileMetaTag("viewport", "width=device-width, initial-scale=1.0; maximum-scale=1.0; user-scalable=0;");
        TopcmmUtil.includeMobileMetaTag("apple-mobile-web-app-capable", "yes");
        TopcmmIncludeJs.includeJs([ "mobile/js/iscroll.js" ]);
		TopcmmIncludeJs.includeJs([ "mobile/js/script.js" ]);
    },

    loadForDesktop: function()
    {
        loadHtml = this.desktopHtml;
        TopcmmUtil.includeCss("css/common/topcmm-123flashchat-common.css");
        TopcmmUtil.includeCss("css/layout/topcmm-123flashchat-layout.css");
		TopcmmUtil.includeCss("fonts/fonts.css");
        TopcmmUtil.includeCssWithId("css/skin/default/topcmm-123flashchat-skin-default.css", "layout-color");
        TopcmmIncludeJs.setFunctionName("Topcmm.loadForDesktopAfterJsInvoked");
        TopcmmIncludeJs.includeJs([ "js/swfobject.js" ]);
		TopcmmIncludeJs.includeJs([ "js/scripts.js" ]);
		
    },

   onLoadForMobile: function()
    {
        setTimeout(function()
        {
            window.scrollTo(0, 1)
        }, 1000);
    },

    loadForDesktopAfterJsInvoked: function()
    {
        var flashvars = {};
        var params = {};
        var attributes =
        {
            id : "topcmm_flashchat",
            name : "topcmm_flashchat",
            allowScriptAccess : "always",
            bgColor : "ffcc00",
            align : "middle"
        };

        swfobject.embedSWF("interop.swf", "div_flashchat", "1", "1", "9.0.0",
                "expressInstall.swf", flashvars, params, attributes);
    },

    init: function()
    {
        document.getElementById("topcmm-123flashchat-preloading-background").parentNode.removeChild(document.getElementById("topcmm-123flashchat-preloading-background"));

        var userAgent = navigator.userAgent.toLowerCase();
        var url = location.href;
        var paraString = "";

        if (url.indexOf("?") != -1)
        {
            paraString = url.substring(url.indexOf("?"), url.length);
        }
        if (null != navigator.userAgent
               .match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i))
        {
            if (top !== self)
            {
                top.location.href = location.href;
            }
            else
            {
                this.isForMobile = true;
                Topcmm.loadForMobile();
            }
        }
        else
        {
            Topcmm.loadForDesktop();
        }
        document.write(loadHtml);
        if (this.isForMobile)
        {
            document.body.className = "topcmm-123flashchat-viewport topcmm-123flashchat-common-global-font-div topcmm-123flashchat-page";
        }

        if ("undefined" == typeof enable_google_analytics || true == enable_google_analytics)
        {
            var _gaq = _gaq || [];
            _gaq.push([ '_setAccount', 'UA-1907790-18' ]);
            _gaq.push([ '_trackPageview' ]);
            (function()
            {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl'
                        : 'http://www')
                        + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        }
    }
}

var TopcmmUtil =
{
    includeCss : function(sCSSFileName)
    {
        this.includeCssWithId(sCSSFileName, "");
    },

    includeCssWithId : function(sCSSFileName, id)
    {
        var sobj = document.createElement('link');
        sobj.rel = "stylesheet";
        sobj.type = "text/css";
        if ("" != id)
        {
            sobj.id = id;
        }
        sobj.href = sCSSFileName;
        var headobj = document.getElementsByTagName('head')[0];
        headobj.appendChild(sobj);
    },

    includeAppleTouchIcon : function(iconFileName, size)
    {
        var sobj = document.createElement('link');
        sobj.rel = "apple-touch-icon";

        if ("" != size)
        {
            sobj.setAttribute("sizes", size)
        }
        sobj.href = iconFileName;
        var headobj = document.getElementsByTagName('head')[0];
        headobj.appendChild(sobj);
    },

    includeMobileMetaTag : function(name, content)
    {
        var sobj = document.createElement("meta");
        sobj.name = name;
        sobj.content = content;
        var headobj = document.getElementsByTagName('head')[0];
        headobj.appendChild(sobj);
    }
};

var TopcmmIncludeJs =
{
    jslist : "",
    sobj : "",
    functioname : null,
    isCallBack : false,

    includeJs : function(jslist)
    {
        if (jslist.length > 0)
        {
            TopcmmIncludeJs.setJsList(jslist);
            TopcmmIncludeJs.includeWriteJs();
        }
    },

    includeWriteJs : function()
    {
        TopcmmIncludeJs.sobj = document.createElement('script');
        TopcmmIncludeJs.sobj.type = "text/javascript";
        TopcmmIncludeJs.sobj.src = TopcmmIncludeJs.jslist[TopcmmIncludeJs.jslist.length - 1];
        var headobj = document.getElementsByTagName('head')[0];
        headobj.appendChild(TopcmmIncludeJs.sobj);
        TopcmmIncludeJs.sobj.onreadystatechange = TopcmmIncludeJs.ready;
        TopcmmIncludeJs.sobj.onerror = TopcmmIncludeJs.sobj.onload = TopcmmIncludeJs.callback;
    },

    ready : function()
    {
        if (TopcmmIncludeJs.sobj.readyState == 'loaded'
                || TopcmmIncludeJs.sobj.readyState == 'complete')
        {
            TopcmmIncludeJs.callback();
        }
    },

    callback : function()
    {
        TopcmmIncludeJs.jslist.pop();

        if (TopcmmIncludeJs.jslist.length > 0)
        {
            TopcmmIncludeJs.includeWriteJs(TopcmmIncludeJs.jslist);
        }
        else
        {
            if (TopcmmIncludeJs.functioname != null
                    && TopcmmIncludeJs.isCallBack == false)
            {
                TopcmmIncludeJs.isCallBack = true;
                eval(TopcmmIncludeJs.functioname + "()");
            }
        }
    },

    setJsList : function(jslist)
    {
        TopcmmIncludeJs.jslist = jslist.reverse();
    },

    setFunctionName : function(functioname)
    {
        TopcmmIncludeJs.functioname = functioname;
    }
};
