/*
H5+帮助类
*/
let H5Plus = {
    screenOrientation: "portrait-primary", //屏幕屏幕方向
    //"portrait-primary" : 竖屏正方向
    //"landscape-primary”: 横屏正方向
    unlockOrientation: true, //是否启用屏幕旋转
    createWebview(url, gameId, title) {
        plus.screen.unlockOrientation(); // 启用旋转屏幕
        var webview = plus.webview.create(url, "appFrame", {
            hardwareAccelerated: true,
            titleNView: {
                backgroundColor: "#333333",
                titleColor: '#FFFFFF',
                titleText: title,
                progress: { color: "#00FF00" },
                titleSize: 25,
                buttons: [
                    {
                        type: "home",
                        float: "left",
                        onclick: function (event) {
                            plus.nativeUI.confirm("确认结束吗？", function (e) {
                                //alert("Close confirm: "+e.index);
                                if (e.index == 0) {
                                    webview.close("zoom-fade-in", 350);
                                    plus.screen.lockOrientation("portrait-primary"); //屏幕方向强制改变成竖屏正方向
                                }
                            },
                            {
                                "buttons":["确认","取消"],
                            }
                            );
                        }
                    },
                    {
                        text: "refresh",
                        float: "right",
                        fontSize: 14,
                        width: 60,
                        onclick: function (event) {
                            webview.reload();
                        }
                    },
                    // {
                    //     text: "转账",
                    //     float: "right",
                    //     fontSize: 14,
                    //     width: 40,
                    //     onclick: function (event) {
                    //         var wvTransfer = plus.webview.create("ptaccount/transfer?gameId=" + gameId + "&parentName=" + title + "&isWebView=true", "transferFrame");
                    //         wvTransfer.show("zoom-fade-out", 350);
                    //         plus.screen.lockOrientation("portrait-primary"); //屏幕方向强制改变成竖屏正方向
                    //     }
                    // }
                ]
            }
        });

        webview.show("zoom-fade-out", 350);
    },
    
    createView(url, title) {
        plus.screen.unlockOrientation(); // 启用旋转屏幕
        var webview = plus.webview.create(url, "appFrame", {
            hardwareAccelerated: true,
            titleNView: {
                backgroundColor: "#333333",
                titleColor: '#FFFFFF',
                titleText: title,
                progress: { color: "#00FF00" },
                titleSize: 25,
                buttons: [
                    {
                        type: "home",
                        float: "left",
                        onclick: function (event) {
                            plus.nativeUI.confirm("确认返回吗？", function (e) {
                                //alert("Close confirm: "+e.index);
                                if (e.index == 0) {
                                    webview.close("zoom-fade-in", 350);
                                    plus.screen.lockOrientation("portrait-primary"); //屏幕方向强制改变成竖屏正方向
                                }
                            },
                            {
                            "buttons":["确认","取消"],
                            }
                            );
                        }
                    },
                   
                ]
            }
        });

        webview.show("zoom-fade-out", 350);
    },
    autoHandel(url, gameId, title) {
        //app，新建webview方式游戏
        if (isApp) {
            //this.createWebview(url, gameId, title);
            window.location.href = url;
        } else {
            window.location.href = url;
        }
    },
    autoHandelAPP(url, title) {
        //app，新建webview方式
        if (isApp) {
            //this.createView(url, title);
            window.location.href = url;
        } else {
            window.location.href = url;
        }
    },

}

export default H5Plus