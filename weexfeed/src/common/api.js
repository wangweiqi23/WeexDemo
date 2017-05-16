/**
 * Created by weiqi on 16/6/8.
＊ 网络接口
 */


// var stream = require('@weex-module/stream');//说是0.15已经支持,但是我没生效

var stream
__weex_define__('@weex-temp/api', function (__weex_require__) {
    stream = __weex_require__('@weex-module/stream')
});

var endPointCdn = {
        baseUrlOfficial: 'https://sns..com',
        baseUrlTest: 'https://qas..com:8101',
        baseCdnUrlOfficial: 'http://cdn..com',
        baseCdnUrlTest: 'http://51jinyi.top'
    };

var apiURL = {
    feedBack: '/LVBPages/api/ApiSuggest/Suggest?reqtype=Server',
    mostHotLive: '/Home/Channel/GetMostHotLive',
    bannerList: '/Home/Channel/GetBannerList',
    getHomePageOperation: '/Home/Channel/GetHomePageOperation'
};

exports.postFeedback = function (env, body, callback) {
    postData(getEndPoint(env, endPointCdn.baseUrlOfficial, endPointCdn.baseUrlTest) + apiURL.feedBack, body, callback);
};
exports.getMostHotLive = function (env, flag, callback) {
    getData(getEndPoint(env, endPointCdn.baseCdnUrlOfficial, endPointCdn.baseCdnUrlTest) + apiURL.mostHotLive + flag, callback);
};
exports.getBannerList = function (env, callback) {
    getData(getEndPoint(env, endPointCdn.baseCdnUrlOfficial, endPointCdn.baseCdnUrlTest) + apiURL.bannerList, callback);
};
exports.getHomePageOperation = function (env, callback) {
    getData(getEndPoint(env, endPointCdn.baseCdnUrlOfficial, endPointCdn.baseCdnUrlTest)+ apiURL.getHomePageOperation, callback);
};
exports.postPayPageInfo = function (env, body, callback) {
    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.payPageInfo, body, callback);
};
exports.postCreateOrderInfoAli = function (env, body, callback) {
    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.createOrderInfoAli, body, callback);
};
exports.postCreateOrderInfoWechat = function (env, body, callback) {
    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest)+ apiURL.createOrderInfoWechat, body, callback);
};
exports.postPayCallBackAli = function (env, body, callback) {
    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.payCallBackAli, body, callback);
};
exports.postPayCallBackWechat = function (env, body, callback) {
    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.payCallBackWechat, body, callback);
};

function getData(url, callback) {
    console.log("https get url="+url);
    stream.fetch({
        method: 'GET',
        type:'json',
        url: url
    }, function (ret) {
        // var retdata = JSON.parse(ret);
        callback(ret.data);
    });
}
function postData(url, body, callback) {
    console.log("https post url="+url+" body="+body);
    stream.fetch({
        method: 'POST',
        url: url,
        type:'json',
        body: body
    }, function (ret) {
        //var retdata = JSON.stringify(ret.data);
        callback(ret.data);
    });
}

function getEndPoint(env, officialUrl, testUrl) {
    env = new String(env);
    if('official' == env){
        return officialUrl;
    }else{
        return testUrl;
    }
}

exports.getBaseUrl = function (bundleUrl, isnav) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFeed.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        var host = 'localhost:8888';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if (typeof window === 'object') {
            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
        } else {
            nativeBase = 'http://' + host + '/dist/';
        }
    }

    return nativeBase;
};