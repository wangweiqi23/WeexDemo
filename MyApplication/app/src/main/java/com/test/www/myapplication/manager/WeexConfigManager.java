package com.test.www.myapplication.manager;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.test.www.myapplication.adapter.FrescoImageAdapter;
import com.test.www.myapplication.adapter.PlayDebugAdapter;
import com.test.www.myapplication.adapter.WXOkHttpAdapter;
import com.test.www.myapplication.component.WXNewSlider;
import com.test.www.myapplication.component.view.WXSwipeRefreshView;
import com.test.www.myapplication.module.impl.WXEventModule;

/**
 * weex 管理类
 * Created by alexwangweiqi on 16/11/28.
 */
public class WeexConfigManager {


    public static void initSdk(boolean debug, Application context) {
        InitConfig weexConfig = new InitConfig.Builder()
                .setHttpAdapter(new WXOkHttpAdapter())
                .setImgAdapter(new FrescoImageAdapter())
                .setDebugAdapter(new PlayDebugAdapter())
                .build();
        WXSDKEngine.initialize(debug, context, weexConfig);
        try {
            WXSDKEngine.registerModule("event", WXEventModule.class);
//            WXSDKEngine.registerModule("payModule", WXPayModule.class);
//            WXSDKEngine.registerModule("utilModule", WXUtilModule.class);
//            WXSDKEngine.registerComponent("image", FrescoImageComponent.class);
//            WXSDKEngine.registerComponent("clickview", ClickView.class);
            WXSDKEngine.registerComponent("slider", WXNewSlider.class);
//            WXSDKEngine.registerComponent("loadingbutton", WXLoadingButton.class);
//            WXSDKEngine.registerComponent("progresswheel", WXProgressWheel.class);
            WXSDKEngine.registerComponent("swiperefresh", WXSwipeRefreshView.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }

}
