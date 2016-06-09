package cr.ac.itcr.examen;

/**
 * Created by Daryn on 8/6/2016.
 */
public class User {

    private String usuario;
    private String password;
    private String Email;
    private String Debit;
    public static String currentUser;

    public User(String usuario, String password, String email, String debit) {
        this.usuario = usuario;
        this.password = password;
        Email = email;
        Debit = debit;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getDebit() {
        return Debit;
    }

    public void setDebit(String debit) {
        Debit = debit;
    }
}
