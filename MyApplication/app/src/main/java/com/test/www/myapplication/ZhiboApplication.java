package com.test.www.myapplication;

import android.app.Application;
import android.content.Context;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.backends.okhttp3.OkHttpImagePipelineConfigFactory;
import com.facebook.imagepipeline.core.ImagePipelineConfig;
import com.facebook.imagepipeline.listener.RequestListener;
import com.facebook.imagepipeline.listener.RequestLoggingListener;
import com.test.www.myapplication.network.HttpConnector;

import java.util.HashSet;
import java.util.Set;


/**
 * Application
 * Created by fengshzh on 4/22/16.
 */
public class ZhiboApplication extends Application {

    private static final String TAG = ZhiboApplication.class.getSimpleName();

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
    }

    @Override
    public void onCreate() {
        super.onCreate();


        boolean debug = BuildConfig.DEBUG;

        ContextUtil.init(this.getApplicationContext());
        HttpConnector.initNetworkConnector(this, debug);

        Set<RequestListener> requestListeners = new HashSet<>();
        requestListeners.add(new RequestLoggingListener());
        ImagePipelineConfig config =
                OkHttpImagePipelineConfigFactory.newBuilder(this, HttpConnector.getHttpClient())
                        .setDownsampleEnabled(true)
                        .setRequestListeners(requestListeners)
                        .build();
        Fresco.initialize(this, config);

//        WeexConfigManager.initSdk(debug, this);
    }

}
