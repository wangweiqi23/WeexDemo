package com.test.www.myapplication.view;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.test.www.myapplication.R;
import com.test.www.myapplication.manager.WeexConfigManager;

public class FirstActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_first);
        ((Button) findViewById(R.id.btn_next)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                WeexConfigManager.initSdk(true, FirstActivity.this.getApplication());
                FirstActivity.this.startActivity(new Intent(FirstActivity.this, MainActivity
                        .class));
            }
        });
    }
}
