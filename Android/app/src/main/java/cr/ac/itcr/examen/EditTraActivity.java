package cr.ac.itcr.examen;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class EditTraActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_tra);

        for(int i = 0; i<Transaction.arrayTransaction.size();i++){
            if(Transaction.arrayTransaction.get(i).getId().equals(Transaction.currentFragment)){
                Transaction T = Transaction.arrayTransaction.get(i);
            }
        }
    }
}
