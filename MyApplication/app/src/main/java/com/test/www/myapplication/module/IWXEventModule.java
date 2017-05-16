package com.test.www.myapplication.module;

import com.taobao.weex.bridge.JSCallback;

/**
 * Created by alexwangweiqi on 16/11/15.
 */
public interface IWXEventModule {

    /**
     * 打开具体页面
     * 规则如下:
     * 1、使用emlive: 打开本地页面
     * 2、使用file:XXX 加载本地页面
     * @param url
     */
    void openSpecifiedPage(String url);

    void openSpecifiedPage(String url, JSCallback callback);

}
