package com.eastmoney.live.ui;


import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Context;
import android.graphics.Point;
import android.os.Build;
import android.util.DisplayMetrics;
import android.view.Display;
import android.view.WindowManager;

/**
 * 设备屏幕工具类
 * <p/>
 */
public class DensityUtil {

    private static int[] deviceWidthHeight = new int[2];

    public static int[] getDeviceInfo(Context context) {
        if ((deviceWidthHeight[0] == 0) && (deviceWidthHeight[1] == 0)) {
            DisplayMetrics metrics = new DisplayMetrics();
            ((Activity) context).getWindowManager().getDefaultDisplay()
                    .getMetrics(metrics);

            deviceWidthHeight[0] = metrics.widthPixels;
            deviceWidthHeight[1] = metrics.heightPixels;
        }
        return deviceWidthHeight;
    }

    /**
     * 获取屏幕宽度的方法
     *
     * @param context
     * @return
     */
    public static int getScreenWith(Context context) {
        WindowManager wm = (WindowManager) context
                .getSystemService(Context.WINDOW_SERVICE);
        return wm.getDefaultDisplay().getWidth();
    }

    /**
     * 获取屏幕高度的方法
     *
     * @param context
     * @return
     */
    public static int getScreenHeight(Context context) {
        WindowManager wm = (WindowManager) context
                .getSystemService(Context.WINDOW_SERVICE);
        return wm.getDefaultDisplay().getHeight();
    }

    public static int getStatusBarHeight(Context context) {
        int statusBarHeight = -1;
        try {
            Class<?> clazz = Class.forName("com.android.internal.R$dimen");
            Object object = clazz.newInstance();
            int height = Integer.parseInt(clazz.getField("status_bar_height")
                    .get(object).toString());
            statusBarHeight = context.getResources().getDimensionPixelSize(height);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return statusBarHeight;
    }

    /**
     * 获取屏幕尺寸
     */
    @SuppressWarnings("deprecation")
    @TargetApi(Build.VERSION_CODES.HONEYCOMB_MR2)
    public static Point getScreenSize() {
        WindowManager windowManager = (WindowManager) ContextUtil.getContext().getSystemService
                (Context
                        .WINDOW_SERVICE);
        Display display = windowManager.getDefaultDisplay();
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.HONEYCOMB_MR2) {
            return new Point(display.getWidth(), display.getHeight());
        } else {
            Point point = new Point();
            display.getSize(point);
            return point;
        }
    }

    /**
     * dp -> px
     *
     * @param dpValue dp数值
     * @return dp to  px
     */
    public static int dip2px(float dpValue) {
        final float scale = ContextUtil.getContext().getResources().getDisplayMetrics().density;
        return (int) (dpValue * scale + 0.5f);
    }

    /**
     * px -> dp
     *
     * @param pxValue px的数值
     * @return px to dp
     */
    public static int px2dip(float pxValue) {
        final float scale = ContextUtil.getContext().getResources().getDisplayMetrics().density;
        return (int) (pxValue / scale + 0.5f);

    }

    /**
     * px -> sp
     *
     * @param pxValue px的数值
     * @return px to sp
     */
    public static int px2sp(float pxValue) {
        final float fontScale = ContextUtil.getContext().getResources().getDisplayMetrics().scaledDensity;
        return (int) (pxValue / fontScale + 0.5f);
    }

    /**
     * sp -> px
     *
     * @param spValue dp数值
     * @return sp to  px
     */
    public static int sp2px(float spValue) {
        final float fontScale = ContextUtil.getContext().getResources().getDisplayMetrics().scaledDensity;
        return (int) (spValue * fontScale + 0.5f);
    }

}