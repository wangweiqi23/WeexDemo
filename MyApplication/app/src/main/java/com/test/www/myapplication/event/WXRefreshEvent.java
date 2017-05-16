package com.test.www.myapplication.event;


import com.test.www.myapplication.network.BaseNetworkEvent;

/**
 * Created by cxy on 2016/12/16.
 */
public class WXRefreshEvent extends BaseNetworkEvent {

    public static class TYPE {
        public static final int PAY_REFRESH = 0;
    }

}
