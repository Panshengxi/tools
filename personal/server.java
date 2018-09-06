import java.net.*;
import java.io.*;

public class server{

　　public static void main(String[] args) throws Exception{
　　　　while(true){ //一直运行
　　　　ServerSocket server = new ServerSocket(80); //监听在80端口
　　　　Socket sock = server.accept(); //建立一个与客户机的socket

　　　　FileInputStream in = new FileInputStream("c:\\a\\1.html"); //读取数据
　　　　OutputStream out = sock.getOutputStream();

　　　　int len = 0;
　　　　byte buffer[] = new byte[1024]; //缓冲区
　　　　while((len=in.read(buffer))>0){ //假如缓冲区有数据
　　　　　　out.write(buffer,0,len);
　　　　}

　　　　in.close();
　　　　out.close();
　　　　sock.close();
　　　　server.close();
　　　　}
　　}
}