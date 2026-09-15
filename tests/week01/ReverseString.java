package tests.week01;

public class ReverseString {
    
public static void main(String[] args) {

String str = "a";
String reversed = "";

/*if (str == null){
    System.out.println("String cannot be null");
    return;

} */

if (str.isEmpty()){
    System.out.println("String cannot be empty");
    return ;
}

if(str.length() == 1){
    System.out.println("String needs to be at least two characters to reverse it");
    return;
}

for (int i = str.length()-1; i >= 0 ; i--) {
    reversed += str.charAt(i);
}

System.out.println(reversed);

}



}
