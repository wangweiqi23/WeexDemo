package com.test.www.myapplication.component.view;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v4.widget.SwipeRefreshLayout;
import android.view.ViewGroup;
import android.widget.ScrollView;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.Constants;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;
import com.test.www.myapplication.R;
import com.test.www.myapplication.event.WXRefreshEvent;

import de.greenrobot.event.EventBus;


/**
 * Created by cxy on 2016/12/16.
 */
public class WXSwipeRefreshView extends WXVContainer<SwipeRefreshLayout> {

    private SwipeRefreshLayout mSwipeRefreshLayout;
    private ScrollView mScrollView;

    private String eventName;


    public WXSwipeRefreshView(WXSDKInstance instance, WXDomObject node, WXVContainer parent, boolean lazy) {
        super(instance, node, parent, lazy);
    }

    @Override
    protected SwipeRefreshLayout initComponentHostView(@NonNull Context context) {
        mSwipeRefreshLayout = new SwipeRefreshLayout(context);
        mSwipeRefreshLayout.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));
        mSwipeRefreshLayout.setColorSchemeResources(R.color.colorAccent);
        mSwipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                EventBus.getDefault().post(new WXRefreshEvent()
                        .type(WXRefreshEvent.TYPE.PAY_REFRESH)
                        .success()
                        .data(eventName));
            }
        });

//        mScrollView = new ScrollView(context);
//        mScrollView .setLayoutParams(new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,
//                ViewGroup.LayoutParams.MATCH_PARENT));
//
//        mSwipeRefreshLayout.addView(mScrollView);

        return mSwipeRefreshLayout;
    }

    @WXComponentProp(name = Constants.Name.COLOR)
    public void setColor(String color) {

        switch (color) {
            case "blue":
                mSwipeRefreshLayout.setColorSchemeResources(R.color.colorAccent);
                break;
            case "black":
                mSwipeRefreshLayout.setColorSchemeResources(R.color.black);
            default:
                if (color.contains("#")) {
                    String colorStr = color.substring(color.indexOf("#"));
                    int colorHex;
                    try {
                        colorHex = Integer.parseInt(colorStr, 16);
                        mSwipeRefreshLayout.setColorSchemeColors(colorHex);
                    } catch (NumberFormatException e) {
                        e.printStackTrace();
                    }
                }
        }
    }

    @WXComponentProp(name = "eventname")
    public void setEventName(String name) {
        eventName = name;
    }

    @WXComponentProp(name = "refreshing")
    public void setRefreshing(String isRefreshing) {
//        LogUtil.d("WXSwipe", "refreshing " + isRefreshing);
        switch (isRefreshing){
            case "true":
                mSwipeRefreshLayout.setRefreshing(true);
                break;
            case "false":
                mSwipeRefreshLayout.setRefreshing(false);
                break;
            default:
                mSwipeRefreshLayout.setRefreshing(false);
        }

    }


}
