package com.eastmoney.live.ui;

import android.content.Context;
import android.os.Build;
import android.support.annotation.StringRes;
import android.widget.Toast;



/**
 * Toast工具类
 * <p/>
 * Created by fengshzh on 4/21/16.
 */
public class ToastUtil {
    private static Context mContext;
    private static boolean sUseSystemToast = true;

    public static void init(Context context) {
        mContext = context;
        sUseSystemToast = useSystemToast();
    }

    public static void show(String content) {
    }

    public static void show(String content, int flag) {
    }

    public static void show(@StringRes int strResId) {
    }

    public static void showSlide(String content) {
    }

    public static void showSlide(@StringRes int strResId) {
    }

    public static void showNetworkError() {
    }

    // 是否应该使用系统默认Toast
    private static boolean useSystemToast() {
        return /*CheckPhoneSystemUtil.isMIUI() ||*/ Build.VERSION.SDK_INT >= 25;
    }

    public static void showSysToast(String content) {
        Toast.makeText(mContext, content, Toast.LENGTH_SHORT).show();
    }


}
