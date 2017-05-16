package com.test.www.myapplication;

/**
 * 常量配置
 * Created by alexwangweiqi on 16/11/14.
 */
public class WeexConstants {

    /**
     * js链接最大缓存时间
     */
    public static final int JS_MAX_STALE_YEAR = 60 * 60 * 24 * 365;

    public static final String ENDPOINT_SNS_CDN_OFFICIAL = "official";
    public static final String ENDPOINT_SNS_CDN_TEST = "test";
    public static String ENDPOINT_SNS_CDN = ENDPOINT_SNS_CDN_TEST;//weex为线上环境

    public static final String HTTPS = "https";
    public static final String HTTP = "http";
    public static final String FILE = "file";
    public static final String EMLIVE = "emlive";

    public static final String BUNDLE_URL = "bundleUrl";
    public static final String TITLE = "title";
    public static final String JS_FILE_PATH = "jsFilePath";
    public static final String CONTENT_HEIGHT = "contentHeight";
    public static final String ENDPOINT_CDN = "endPointCdn";
    public static final String PARAMS = "params";

    // 页面自定义 params keys
    public static final String UID = "uid";
    public static final String PID = "pid";


    //hot refresh
    public static final int HOT_REFRESH_CONNECT = 0x111;
    public static final int HOT_REFRESH_DISCONNECT = 0x112;
    public static final int HOT_REFRESH_REFRESH = 0x113;
    public static final int HOT_REFRESH_CONNECT_ERROR = 0x114;

    //weex js file download
    public static final String PATH_DOWNLOADER_WEEX_JS = "/api/GetWeex";

    public static class KEY {
        public static final String CODE = "code";
        public static final String RESULT = "result";
        public static final String DATA = "data";
        public static final String INDEX = "index";
    }

    public static class VALUE {
        public static final int FAILURE = 0x0;
        public static final int SUCCESS = 0x01;
        public static final int CANCEL = 0x02;
    }

    public static class KEY_PAY {
        public static final String IS_TEST = "is_test";
        public static final String COIN_NUMBER = "coin_number";
        public static final String CTOKEN = "ctoken";
        public static final String UTOKEN = "utoken";
        public static final String NETWORK = "network";
        public static final String VERSION = "version";
        public static final String DEVICE_ID = "device_id";
    }

    public static class KEY_PAY_RESULT {
        public static final String RESULT = "result";
        public static final String PAY_RESULT_STATUS = "payResultStatus";
        public static final String ORDR_NO = "ordr_no";

        public static final String CALL_BACK_CODE = "callBackCode";
    }

    // params keys
    public static final String PLAT = "plat";
    public static final String PRODUCT = "product";
    public static final String DEVICE_ID = "device_id";
    public static final String VERSION = "version";
    public static final String UTOKEN = "utoken";
    public static final String CTOKEN = "ctoken";
    public static final String NETWORK = "network";
    public static final String MODEL = "model";
    public static final String OS_VERSION = "osversion";
    public static final String IS_TEST = "is_test";
    public static final String END_POINT_CDN = "endPointCdn";
}
