package com.test.www.myapplication.view;

import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ProgressBar;

import com.taobao.weex.WXSDKInstance;
import com.test.www.myapplication.R;
import com.test.www.myapplication.view.base.WXBaseActivity;

public class MainActivity extends WXBaseActivity {

    private static final String TAG = MainActivity.class.getSimpleName();
    private static final String JS_PATH = "assets/dist/home/home-live.js";

    private FrameLayout mContainer;
    private ProgressBar mProgressBar;
    private View mWAView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findView();
    }

    @Override
    protected String getPageName() {
        return TAG;
    }

    @Override
    protected String getAssembleFilePath() {
        return JS_PATH;
    }

    @Override
    protected void refreshWithJsFile(String filePath) {

    }

    @Override
    protected ViewGroup getContainerLayout() {
        return mContainer;
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
//        LogUtil.i(TAG, "weex onViewCreated");
        if (mWAView != null && mContainer != null && mWAView.getParent() == mContainer) {
            mContainer.removeView(mWAView);
        }

        if (mContainer != null) {
            mWAView = view;
            mContainer.removeAllViews();
            mContainer.addView(view);
            mContainer.requestLayout();
//            LogUtil.i(TAG, "weex renderSuccess");
        }
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        mProgressBar.setVisibility(View.INVISIBLE);
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
        mProgressBar.setVisibility(View.GONE);
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode,
                            String msg) {
        super.onException(instance, errCode, msg);
        mProgressBar.setVisibility(View.GONE);
    }

//    @Override
//    protected Map<String, Object> getPageParams() {
//        Map<String, Object> params = new HashMap<>();
//        params.put(WeexConstants.KEY.INDEX, 0);
//
//        return params;
//    }

    public void findView() {
        mContainer = (FrameLayout) findViewById(R.id.container);
        mProgressBar = (ProgressBar) findViewById(R.id.progress);

        setView();
    }

    private void setView() {
        setViewGlobalLayoutListener(mContainer);
    }
}
