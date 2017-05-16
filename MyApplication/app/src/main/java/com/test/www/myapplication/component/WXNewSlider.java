package com.test.www.myapplication.component;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXSlider;
import com.taobao.weex.ui.component.WXVContainer;

/**
 * Created by alexwangweiqi on 16/12/7.
 */
public class WXNewSlider extends WXSlider {

    @Deprecated
    public WXNewSlider(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, String instanceId) {
        this(instance, dom, parent);
    }

    public WXNewSlider(WXSDKInstance instance, WXDomObject node, WXVContainer parent) {
        super(instance, node, parent);
    }
}
