package com.test.www.myapplication.module.impl;

import android.content.Intent;
import android.text.TextUtils;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.test.www.myapplication.WeexConstants;
import com.test.www.myapplication.module.IWXEventModule;
import com.test.www.myapplication.view.PageActivity;

import java.util.HashMap;
import java.util.Map;


/**
 * 交互接口类
 */
public class WXEventModule extends WXModule implements IWXEventModule {

    private static final String TAG = WXEventModule.class.getSimpleName();
    private static final String WEEX_CATEGORY = "com.eastmoney.android.intent.category.WEEXFEED";

    boolean isPhotoCrop;

    @JSMethod(uiThread = true)
    public void openSpecifiedPage(String url) {
//        LogUtil.d(TAG, "openSpecifiedPage url:" + url);
        openSpecifiedPage(url, null);
    }

    @JSMethod(uiThread = true)
    public void openSpecifiedPage(String url, JSCallback callback) {
//        LogUtil.d(TAG, "openSpecifiedPage callback url:" + url);
        int returnCode = WeexConstants.VALUE.FAILURE;
        if (!TextUtils.isEmpty(url)) {
            mWXSDKInstance.getContext().startActivity(new Intent(mWXSDKInstance.getContext(),
                    PageActivity.class));
        }
        callJsBack(callback, returnCode);
    }


    private void callJsBack(JSCallback callback, int code) {
        if (callback != null) {
            Map<String, Object> resp = new HashMap<String, Object>();
            resp.put(WeexConstants.KEY.CODE, code);
            callback.invoke(resp);
        }
    }

}
