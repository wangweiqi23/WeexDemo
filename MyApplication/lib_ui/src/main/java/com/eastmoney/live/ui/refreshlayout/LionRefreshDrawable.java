package com.eastmoney.live.ui.refreshlayout;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;

import com.eastmoney.live.ui.DensityUtil;
import com.eastmoney.live.ui.R;


/**
 * 红包刷新动画
 * Created by jiao.js on 2016/12/22.
 */

public class LionRefreshDrawable extends RefreshDrawable {
//    private final float MOUTH_WIDTH = DensityUtil.dip2px(114);
//    private final float MOUTH_HEIGHT = DensityUtil.dip2px(68);
    private final float RED_PACKET_WIDTH = DensityUtil.dip2px(36);
    private final float RED_PACKET_HEIGHT = DensityUtil.dip2px(46.5f);

    private Bitmap mRedPacketBitmap;
    private Context mContext;
    private float mPercent;
    private int mWidth;
    private int mHeight;
    private Matrix mMouthMatrix;
    private Matrix mRedPacketMatrix;
    private boolean isRefreshing;
    private float mRedPacketPosY;
    private Paint mRedPacketPaint;


    public LionRefreshDrawable(Context context, PullRefreshLayout layout) {
        super(context, layout);
        init(context);
    }

    private void init(Context context) {
        mContext = context;
        mRedPacketBitmap = Bitmap.createScaledBitmap(BitmapFactory.decodeResource(context.getResources(),
                R.drawable.lion_redpacket), (int) RED_PACKET_WIDTH, (int) RED_PACKET_HEIGHT, false);
        mMouthMatrix = new Matrix();
        mRedPacketMatrix = new Matrix();
        mRedPacketPaint = new Paint();

    }

    @Override
    protected void onBoundsChange(Rect bounds) {
        super.onBoundsChange(bounds);

        mWidth = bounds.width();
    }

    @Override
    public void setPercent(float percent) {
        mPercent = percent;
        invalidateSelf();
    }

    @Override
    public void offsetTopAndBottom(int offset) {
        invalidateSelf();
    }

    @Override
    public void setHeight(int height) {
        mHeight = height;
    }

    @Override
    public void start() {
        isRefreshing = true;
        mRedPacketPosY = 0;
        mPercent = 1;
        invalidateSelf();
    }

    @Override
    public void stop() {
        isRefreshing = false;
        mRedPacketPosY = 0;
        invalidateSelf();
    }

    @Override
    public boolean isRunning() {
        return isRefreshing;
    }


    @Override
    public void draw(Canvas canvas) {

        canvas.clipRect(0, 0, mWidth, mHeight);

        canvas.save();
        if (isRefreshing && mRedPacketPosY - RED_PACKET_HEIGHT * (0.8f - mPercent) * 1.25f <= mHeight) {
//            float alpha = (mHeight + RED_PACKET_HEIGHT * (0.8f - mPercent) * 1.25f - mRedPacketPosY) /
//                    (mHeight + RED_PACKET_HEIGHT * (0.8f - mPercent) * 1.25f);
            float[] redpacketSrc = {
                    0, 0,
                    0, RED_PACKET_HEIGHT,
                    RED_PACKET_WIDTH, RED_PACKET_HEIGHT,
                    RED_PACKET_WIDTH, 0
            };
            float[] redpacketDst = {
                    (mWidth - RED_PACKET_WIDTH) / 2, -RED_PACKET_HEIGHT * (0.8f - mPercent) * 1.25f + mRedPacketPosY,
                    (mWidth - RED_PACKET_WIDTH) / 2, RED_PACKET_HEIGHT * (mPercent) * 1.25f + mRedPacketPosY,
                    (mWidth + RED_PACKET_WIDTH) / 2, RED_PACKET_HEIGHT * (mPercent) * 1.25f + mRedPacketPosY,
                    (mWidth + RED_PACKET_WIDTH) / 2, -RED_PACKET_HEIGHT * (0.8f - mPercent) * 1.25f + mRedPacketPosY,
            };
//            mRedPacketPaint.setAlpha((int) (alpha * 255));
            mRedPacketMatrix.setPolyToPoly(redpacketSrc, 0, redpacketDst, 0, 4);
            canvas.drawBitmap(mRedPacketBitmap, mRedPacketMatrix, mRedPacketPaint);
            canvas.restore();
            mRedPacketPosY = mRedPacketPosY + (mHeight + RED_PACKET_HEIGHT * (0.8f - mPercent) * 1.25f) / 5;
            invalidateSelf();
        }

        if (!isRefreshing) {
            float[] redpacketSrc = {
                    0, 0,
                    0, RED_PACKET_HEIGHT,
                    RED_PACKET_WIDTH, RED_PACKET_HEIGHT,
                    RED_PACKET_WIDTH, 0
            };


            float[] redpacketDst = {
                    (mWidth - RED_PACKET_WIDTH) / 2, -RED_PACKET_HEIGHT * (0.8f - mPercent) * 1.25f,
                    (mWidth - RED_PACKET_WIDTH) / 2, RED_PACKET_HEIGHT * (mPercent) * 1.25f,
                    (mWidth + RED_PACKET_WIDTH) / 2, RED_PACKET_HEIGHT * (mPercent) * 1.25f,
                    (mWidth + RED_PACKET_WIDTH) / 2, -RED_PACKET_HEIGHT * (0.8f - mPercent) * 1.25f
            };
            mRedPacketMatrix.setPolyToPoly(redpacketSrc, 0, redpacketDst, 0, 4);
//            canvas.translate(0, -(0.9f - mPercent) * 2.5f * RED_PACKET_HEIGHT);
            canvas.drawBitmap(mRedPacketBitmap, mRedPacketMatrix, null);
            canvas.restore();
        }


    }

}
