package com.test.www.myapplication.network;

/**
 * EventBus的基本事件定义，其他业务事件都继承该类进行拓展
 * <p/>
 * Created by fengshzh on 15/7/29.
 */
public class BaseNetworkEvent {

    // Socket请求和类Socket请求的三种结果状态：成功、异常和网络错误
    public static final int NETWORK_SUCCESS = 0;
    public static final int NETWORK_DATA_EXCEPTION = -1;
    public static final int NETWORK_ERROR = -2;
    public int status = NETWORK_ERROR;


    public int requestId; // 请求Id，全局唯一
    public int type; // 请求类型，见EventType

    public boolean success = false; // Http请求的两种结果状态：成功、失败,默认失败
    private boolean isCache = false; // 是否缓存数据
    public int code; // 网络请求返回码，对应网络请求里rc，网络请求不成功返回-1
    public String msg; // 返回消息，对应网络请求里me
    public Object data; // 返回数据
    public Object ext; // 扩展字段,若有多个扩展字段使用数组或者list

    public BaseNetworkEvent id(int id) {
        requestId = id;
        return this;
    }

    public BaseNetworkEvent type(int type) {
        this.type = type;
        return this;
    }

    public BaseNetworkEvent success() {
        success = true;
        return this;
    }

    public BaseNetworkEvent code(int code) {
        this.code = code;
        return this;
    }

    public BaseNetworkEvent msg(String msg) {
        this.msg = msg;
        return this;
    }

    public BaseNetworkEvent data(Object data) {
        this.data = data;
        return this;
    }

    public BaseNetworkEvent ext(Object ext) {
        this.ext = ext;
        return this;
    }

    public BaseNetworkEvent setCache(boolean isCache) {
        this.isCache = isCache;
        return this;
    }

    public boolean isCache() {
        return isCache;
    }

    @Override
    public String toString() {
        return success + ", " + requestId + ", " + type + ", " + code + ", " + msg + ", " + data + ", " + ext;
    }


}
