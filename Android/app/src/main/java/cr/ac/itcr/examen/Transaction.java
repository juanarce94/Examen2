package cr.ac.itcr.examen;

import java.util.ArrayList;

/**
 * Created by Daryn on 8/6/2016.
 */
public class Transaction {

    //(API POST Id, User, Date, Debit or Credit, Rode, Active)
    private String Id;
    private String User;
    private String Date;
    private String DebitOCredit;
    private String Amount;
    private String Active;
    public static ArrayList<Transaction> arrayTransaction = new ArrayList<Transaction>();
    public static String currentFragment;

    public Transaction(String id, String date, String user, String debitOCredit, String amount, String active) {
        Id = id;
        Date = date;
        User = user;
        DebitOCredit = debitOCredit;
        Amount = amount;
        Active = active;
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getUser() {
        return User;
    }

    public void setUser(String user) {
        User = user;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public String getDebitOCredit() {
        return DebitOCredit;
    }

    public void setDebitOCredit(String debitOCredit) {
        DebitOCredit = debitOCredit;
    }

    public String getAmount() {
        return Amount;
    }

    public void setAmount(String amount) {
        Amount = amount;
    }

    public String isActive() {
        return Active;
    }

    public void setActive(String active) {
        Active = active;
    }

    @Override
    public String toString() {
        return Id + ", " + User + ", " +  Date + ", " + DebitOCredit + ", " + Amount + ", " + Active;
    }
}
