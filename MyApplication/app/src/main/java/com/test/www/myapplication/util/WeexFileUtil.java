package com.test.www.myapplication.util;

import android.content.Context;
import android.support.annotation.NonNull;
import android.text.TextUtils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * 文件处理
 * Created by alexwangweiqi on 16/11/29.
 */
public class WeexFileUtil {
    private static final String TAG = WeexFileUtil.class.getSimpleName();

    public static String loadWeexJs(String path, Context context) {
        if (TextUtils.isEmpty(path) || context == null) {
            return null;
        }
        if (path.startsWith("assets/dist/")) {
            return loadAsset(path, context);
        } else {
            return loadSdCard(path);
        }
    }

    /**
     * 读取sd卡文件
     *
     * @param filePath
     * @return
     */
    private static String loadSdCard(String filePath) {
//        LogUtil.d(TAG, "loadSdCard:" + filePath);

        StringBuilder builder;
        BufferedReader bufferedReader = null;

        try {
            builder = new StringBuilder();

            File file = new File(filePath);
            bufferedReader = new BufferedReader(new FileReader(file));
            char[] data = new char[2048];
            int len = -1;
            while ((len = bufferedReader.read(data)) > 0) {
                builder.append(data, 0, len);
            }
            return builder.toString();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (bufferedReader != null) {
                    bufferedReader.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return "";
    }

    /**
     * 读取assets文件
     *
     * @param filePath
     * @param context
     * @return
     */
    private static String loadAsset(String filePath, Context context) {
//        LogUtil.d(TAG, "loadAsset:" + filePath);

        StringBuilder builder;
        InputStream in = null;
        BufferedReader bufferedReader = null;
        try {
            in = context.getClassLoader().getResourceAsStream(filePath);
            builder = new StringBuilder(in.available() + 10);

            bufferedReader = new BufferedReader(new InputStreamReader(in, "UTF-8"));
            char[] data = new char[2048];
            int len = -1;
            while ((len = bufferedReader.read(data)) > 0) {
                builder.append(data, 0, len);
            }
            return builder.toString();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (bufferedReader != null) {
                    bufferedReader.close();
                }
                if (in != null) {
                    in.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return "";
    }

    public static void deleteFile(File file) {
        if (file.isFile()) {
            file.delete();
            return;
        }
        if (file.isDirectory()) {
            File[] childFile = file.listFiles();
            if (childFile == null || childFile.length == 0) {
                file.delete();
                return;
            }
            for (File f : childFile) {
                deleteFile(f);
            }
            file.delete();
        }
    }

    /**
     * 判断文件或目录是否存在.
     *
     * @param filePath 路径
     * @return true - 存在，false - 不存在
     */
    public static boolean isExist(@NonNull String filePath) {
        if (filePath.startsWith("assets/dist/")) {
            return true;
        } else {
            File file = new File(filePath);
            return file.exists();
        }
    }

    /**
     * 判断地址是否为assets
     *
     * @param filePath 路径
     */
    public static boolean isAssets(@NonNull String filePath) {
        if (filePath != null && filePath.startsWith("assets")) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断地址是否为http https
     *
     * @param filePath 路径
     */
    public static boolean isHttp(@NonNull String filePath) {
        if (filePath != null && (filePath.startsWith("https") || filePath.startsWith("http"))) {
            return true;
        } else {
            return false;
        }
    }
}
