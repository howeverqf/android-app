package com.filmccd.camera;

import android.Manifest;
import android.app.Activity;
import android.os.Bundle;
import android.os.Build;
import android.content.ContentValues;
import android.content.pm.PackageManager;
import android.provider.MediaStore;
import android.webkit.*;
import android.net.Uri;
import android.content.Intent;
import android.view.View;
import android.view.WindowManager;
import android.widget.Toast;
import android.util.Base64;
import androidx.webkit.WebViewAssetLoader;
import androidx.webkit.WebViewClientCompat;
import androidx.webkit.WebResourceRequestCompat;
import java.io.OutputStream;

public class MainActivity extends Activity {
 private WebView web;
 private PermissionRequest pendingCamera;
 private ValueCallback<Uri[]> fileCallback;
 private static final int FILE_PICK=22;
 private static final int CAMERA_PERMISSION=23;
 @Override public void onCreate(Bundle state){super.onCreate(state);
  getWindow().setStatusBarColor(0xff050507);getWindow().setNavigationBarColor(0xff050507);
  web=new WebView(this);setContentView(web);
  web.getSettings().setJavaScriptEnabled(true);
  web.getSettings().setDomStorageEnabled(true);
  web.getSettings().setMediaPlaybackRequiresUserGesture(false);
  web.getSettings().setAllowFileAccess(false);
  web.getSettings().setAllowContentAccess(true);
  web.addJavascriptInterface(new SaveBridge(),"AndroidSave");
  WebViewAssetLoader loader=new WebViewAssetLoader.Builder().addPathHandler("/assets/",new WebViewAssetLoader.AssetsPathHandler(this)).build();
  web.setWebViewClient(new WebViewClientCompat(){@Override public WebResourceResponse shouldInterceptRequest(WebView view, android.webkit.WebResourceRequest request){return loader.shouldInterceptRequest(request.getUrl());}});
  web.setWebChromeClient(new WebChromeClient(){
   @Override public void onPermissionRequest(PermissionRequest request){runOnUiThread(()->{
    if(!request.getOrigin().toString().startsWith("https://appassets.androidplatform.net/")){request.deny();return;}
    boolean video=false;for(String r:request.getResources())if(PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(r))video=true;
    if(!video){request.deny();return;}
    if(checkSelfPermission(Manifest.permission.CAMERA)==PackageManager.PERMISSION_GRANTED)request.grant(new String[]{PermissionRequest.RESOURCE_VIDEO_CAPTURE});
    else{pendingCamera=request;requestPermissions(new String[]{Manifest.permission.CAMERA},CAMERA_PERMISSION);}
   });}
   @Override public boolean onShowFileChooser(WebView view,ValueCallback<Uri[]> callback,FileChooserParams params){
    if(fileCallback!=null)fileCallback.onReceiveValue(null);fileCallback=callback;
    try{Intent i=new Intent(Intent.ACTION_GET_CONTENT);i.setType("image/*");i.addCategory(Intent.CATEGORY_OPENABLE);startActivityForResult(Intent.createChooser(i,"Выбрать фото"),FILE_PICK);return true;}
    catch(Exception e){fileCallback=null;callback.onReceiveValue(null);return false;}
   }
  });
  web.loadUrl("https://appassets.androidplatform.net/assets/index.html");
 }
 @Override public void onRequestPermissionsResult(int code,String[] permissions,int[] results){super.onRequestPermissionsResult(code,permissions,results);if(code==CAMERA_PERMISSION&&pendingCamera!=null){if(results.length>0&&results[0]==PackageManager.PERMISSION_GRANTED)pendingCamera.grant(new String[]{PermissionRequest.RESOURCE_VIDEO_CAPTURE});else pendingCamera.deny();pendingCamera=null;}}
 @Override protected void onActivityResult(int request,int result,Intent data){super.onActivityResult(request,result,data);if(request==FILE_PICK&&fileCallback!=null){fileCallback.onReceiveValue(result==RESULT_OK&&data!=null&&data.getData()!=null?new Uri[]{data.getData()}:null);fileCallback=null;}}
 public class SaveBridge {
  @JavascriptInterface public void saveImage(String dataUrl,String name){new Thread(()->{
   try{if(!dataUrl.startsWith("data:image/jpeg;base64,"))throw new Exception("Invalid image");byte[] bytes=Base64.decode(dataUrl.substring(dataUrl.indexOf(',')+1),Base64.DEFAULT);
    ContentValues values=new ContentValues();values.put(MediaStore.Images.Media.DISPLAY_NAME,name.replaceAll("[^a-zA-Z0-9_.-]","_"));values.put(MediaStore.Images.Media.MIME_TYPE,"image/jpeg");values.put(MediaStore.Images.Media.RELATIVE_PATH,"Pictures/FILM_CCD");values.put(MediaStore.Images.Media.IS_PENDING,1);
    Uri uri=getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI,values);if(uri==null)throw new Exception("Cannot create image");
    try(OutputStream out=getContentResolver().openOutputStream(uri)){if(out==null)throw new Exception("Cannot write image");out.write(bytes);}
    values.clear();values.put(MediaStore.Images.Media.IS_PENDING,0);getContentResolver().update(uri,values,null,null);
    runOnUiThread(()->Toast.makeText(MainActivity.this,"Сохранено в Фото / FILM_CCD",Toast.LENGTH_SHORT).show());
   }catch(Exception e){runOnUiThread(()->Toast.makeText(MainActivity.this,"Ошибка сохранения: "+e.getMessage(),Toast.LENGTH_LONG).show());}
  }).start();}
 }
 @Override public void onBackPressed(){web.evaluateJavascript("document.getElementById('panel')?.classList.contains('open')",v->{if("true".equals(v))web.evaluateJavascript("document.getElementById('panel').classList.remove('open')",null);else MainActivity.super.onBackPressed();});}
 @Override protected void onDestroy(){web.destroy();super.onDestroy();}
}
