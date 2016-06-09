package cr.ac.itcr.examen;

import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class MainActivity extends AppCompatActivity {

    ImageButton btnLogin;
    ImageButton btnRegistry;

    public void insertUser(User user){

        String debit = user.getDebit();
        String email = user.getEmail();
        String password = user.getPassword();
        String userr = user.getUsuario();

        String input =  "{\"name\": \""+ userr +"\"," +
                        " \"password\": \""+ password +"\"," +
                        " \"email\": \""+ email +"\"," +
                        " \"debit\": " + debit +"}";

        try {
            URL url = new URL("http://172.20.10.2:3000/users");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setDoOutput(true);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");

            OutputStream os = conn.getOutputStream();
            os.write(input.getBytes());
            os.flush();

            if (conn.getResponseCode() != HttpURLConnection.HTTP_CREATED) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + conn.getResponseCode());
            }

            BufferedReader br = new BufferedReader(new InputStreamReader(
                    (conn.getInputStream())));

            String output;
            System.out.println("Output from Server .... \n");
            while ((output = br.readLine()) != null) {
                System.out.println(output);
            }

            conn.disconnect();

        }
        catch (Exception e){}
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);


        User newUser = new User("Juan", "47JuMi94", "jmiguel94.r@gmail.com", "40000");
        insertUser(newUser);

        btnLogin = (ImageButton) findViewById(R.id.btnLogin);
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {



                if (true) {
                    Intent i = new Intent(getApplicationContext(), NavigationDrawer.class);
                    startActivity(i);
                }

            }
        });

        btnRegistry = (ImageButton) findViewById(R.id.btnAdd);
        btnRegistry.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(getApplicationContext(), RegistryActivity.class);
                startActivity(i);
            }
        });


    }
}
