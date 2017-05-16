package com.test.www.myapplication.adapter;

import android.support.annotation.NonNull;

import com.taobao.weex.adapter.IWXHttpAdapter;
import com.taobao.weex.common.WXRequest;
import com.taobao.weex.common.WXResponse;
import com.test.www.myapplication.network.HttpConnector;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * weex 网络接口处理
 * Created by alexwangweiqi on 16/12/21.
 */
public class WXOkHttpAdapter implements IWXHttpAdapter {

    private static final String METHOD_GET = "GET";
    private static final String METHOD_POST = "POST";

    private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

    public static final int REQUEST_FAILURE = -100;

    @Override
    public void sendRequest(@NonNull final WXRequest request, final OnHttpListener listener) {
        if (listener != null) {
            listener.onHttpStart();
        }

        if (METHOD_GET.equalsIgnoreCase(request.method)) {
            Request.Builder builder = new Request.Builder().url(request.url);
            Request okHttpRequest = builder.build();
            HttpConnector.getHttpClient().newCall(okHttpRequest).enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    if (listener != null) {
                        WXResponse wxResponse = new WXResponse();
                        wxResponse.errorCode = String.valueOf(REQUEST_FAILURE);
                        wxResponse.statusCode = String.valueOf(REQUEST_FAILURE);
                        wxResponse.errorMsg = e.getMessage();

                        listener.onHttpFinish(wxResponse);
                    }
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    if (listener != null) {

                        WXResponse wxResponse = new WXResponse();
                        wxResponse.statusCode = String.valueOf(response.code());
                        if (requestSuccess(Integer.parseInt(wxResponse.statusCode))) {
                            wxResponse.originalData = response.body() != null ? response.body()
                                    .bytes() : null;
                        } else {
                            wxResponse.errorCode = String.valueOf(response.code());
                            wxResponse.errorMsg = response.body() != null ? response.body()
                                    .string() : null;
                        }

                        listener.onHttpFinish(wxResponse);
                    }
                }
            });
        } else if (METHOD_POST.equalsIgnoreCase(request.method)) {
            Request okHttpRequest = new Request.Builder()
                    .url(request.url)
                    .post(RequestBody.create(JSON, request.body))
                    .build();

            HttpConnector.getHttpClient().newCall(okHttpRequest).enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    if (listener != null) {
                        WXResponse wxResponse = new WXResponse();
                        wxResponse.errorCode = String.valueOf(REQUEST_FAILURE);
                        wxResponse.statusCode = String.valueOf(REQUEST_FAILURE);
                        wxResponse.errorMsg = e.getMessage();

                        listener.onHttpFinish(wxResponse);
                    }
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    if (listener != null) {

                        WXResponse wxResponse = new WXResponse();
                        wxResponse.statusCode = String.valueOf(response.code());
                        if (requestSuccess(Integer.parseInt(wxResponse.statusCode))) {
                            wxResponse.originalData = response.body() != null ? response.body()
                                    .bytes() : null;
                        } else {
                            wxResponse.errorCode = String.valueOf(response.code());
                            wxResponse.errorMsg = response.body() != null ? response.body()
                                    .string() : null;
                        }

                        listener.onHttpFinish(wxResponse);
                    }
                }
            });
        }
    }

    private boolean requestSuccess(int statusCode) {
        return statusCode >= 200 && statusCode <= 299;
    }
}