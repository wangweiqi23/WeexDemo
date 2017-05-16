package com.eastmoney.live.ui;

import android.content.Context;

/**
 * ContextUtil，为Android程序提供全局Context对象，要在Application.onCreate中初始化。
 */
public class ContextUtil {
    private static Context context;

    public static void init(Context appContext) {
        context = appContext.getApplicationContext();
    }

    public static Context getContext() {
        return context;
    }
}
