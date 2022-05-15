// ================= BÀI 1 ================= //
/**
 * INPUT: Kiểm tra các số chẵn và số lẻ từ 0 tới 100
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var soChan,soLe;
        2. tạo ra 1 vòng lặp for có i chạy từ 0 và nhỏ hơn 100 và tăng i lên 1 đơn vị
        3. nếu i % 2 == 0 thì mình in ra số chẵn còn lại thì mình ra số lẻ
 * OUTPUT: In kết quả ra màn hình
              document.getElementById("ketqua1").innerHTML+="Số chẵn: " + soChan;
              document.getElementById("ketqua2").style.display="block";
              document.getElementById("ketqua2").innerHTML+="Số lẻ: " + soLe;
 */
function timChanLe()
{
    var soChan=""
    var soLe=""
    for (var i=0; i<=100; i++ )
    {
        if (i%2==0)
        {
            soChan+=i + " ";
        }
        else 
            soLe+= i + " ";
    }
    document.getElementById("ketqua1").innerHTML+="Số chẵn: " + soChan;
    document.getElementById("ketqua2").style.display="block";
    document.getElementById("ketqua2").innerHTML+="Số lẻ: " + soLe;
}
// ================= BÀI 2 ================= //
/**
 * INPUT: Sử dụng vòng lặp for
 * PROCESS: (Pseudo code)
        1. Sử dụng biến bước nhảy, cho biến này tăng dần từ 0 đến 1000
        2. Để kiểm tra số có chia hết cho 3 thì đem số đó %3. Nếu kết quả bằng 0 thì chia hết
        3. Tạo 1 biến đếm. Mỗi khi tìm được 1 số chia hết thì tăng biến đếm lên 1 đơn vị. Dùng toán tử tăng: count +=1; count++ ...
 * OUTPUT: In kết quả ra màn hình
              document.getElementById("ketqua1").innerHTML+="Số chia hết cho 3 nhỏ hơn 1000: " + count + " Số";
 */
function timSochiahetcho3()
{
    var count=0;
    for (var i=0; i<=1000; i++){
        if (i%3==0)
        {
            count+=1;
        }
    }
      document.getElementById("ketqua1").innerHTML+="Số chia hết cho 3 nhỏ hơn 1000: " + count + " Số";
  }
// ================= BÀI 3 ================= //
/**
 * INPUT: Sử dụng vòng lặp while
 * PROCESS: (Pseudo code)
        1. tạo ra biến i là số bắt đầu tìm và ketQua sẽ là tổng cộng dồn của biến bước nhảy sau mỗi lần lặp
        2. Điều kiện tiếp tục vòng lặp là sum < 10000
        3. biến i sẽ tăng lên và ketQua sẽ là tổng cộng dồn của biến bước nhảy sau mỗi lần lặp
 * OUTPUT: In kết quả ra màn hình
              document.getElementById("ketqua1").innerHTML+="Số nguyên dương nhỏ nhất: " + i;
 */
function timSoNguyenDuongnhonhat()
{   
  var i = 0
  var ketQua = 0;
    while (ketQua<10000){
        i++;
        ketQua += i;
    }
    document.getElementById("ketqua1").innerHTML+="Số nguyên dương nhỏ nhất: " + i;
}
// ================= BÀI 4 ================= //
/**
 * INPUT: Nhập vào x và n
 * PROCESS: (Pseudo code)
        1.  lấy được input (hardcode) là var x, n;
        2. tạo biến kq để + dồn sau mỗi bước nhảy
        3. dùng vòng lặp for chạy từ i=1 và, i phải nhỏ hơn hoặc bằng n, và i tăng lên 1 sau mỗi lần lặp
 * OUTPUT: In kết quả ra màn hình
              document.getElementById("ketqua1").innerHTML+="Tổng: " + kq;
 */
function tinhTong()
{
    var x = +document.getElementById("soX").value;
    var n = +document.getElementById("soN").value;
    var kq =0;
    for (var i=1; i<=n; i++)
    {
        kq+=Math.pow(x,i);
    }
    document.getElementById("ketqua1").innerHTML+="Tổng: " + kq;
}
// ================= BÀI 5 ================= //
/**
 * INPUT: Nhập vào số n
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var x, n;
        2. tạo biến kq=1 để + dồn sau mỗi bước nhảy
        3. dùng vòng lặp for chạy từ i=1 và, i phải nhỏ hơn hoặc bằng n, và i tăng lên 1 sau mỗi lần lặp
        4. Tính: kq=kq*i
 * OUTPUT: In kết quả ra màn hình
            document.getElementById("ketqua1").innerHTML+="Giai thừa: " + kq;
            
 */
function tinhGiaithua(){
    var n = +document.getElementById("soN").value;
    var kq =1;
    for (var i=1; i<=n; i++){
        kq=kq*i;      
    }
    document.getElementById("ketqua1").innerHTML+="Giai thừa: " + kq;
}
// ================= BÀI 6 ================= //
/**
 * INPUT: Tạo một nút button tạo div và 1 div kết quả
 * PROCESS: (Pseudo code)
        1. khởi tạo 1 biến var content = ""; lấy ra input là ketqua
        2. tạo 1 vòng lặp for
        3. Kiểm tra i là chẵn hay lẻ
        4. thì sử dụng content += thẻ div vs sỗ chẵn cho class red
                       content += thẻ div vs sỗ lẻ cho class blue
 * OUTPUT: In kết quả ra màn hình:
            ketqua.innerHTML += `<div class="red">Div lẻ số ${i}</div>`;
            //
            ketqua.innerHTML += `<div class="blue">Div chẵn số ${i}</div>`;
            //
            
 */
function kiemtraChanle(){
var ketqua= document.getElementById("ketqua");
    for (var i = 1; i <= 10; i++) {
          if (i % 2 !== 0) {
            ketqua.innerHTML += `<div class="red">Div lẻ số ${i}</div>`;
          } else if (i % 2 === 0) {
            ketqua.innerHTML += `<div class="blue">Div chẵn số ${i}</div>`;
          }
    }
}
// ================= BÀI 7 ================= //
/**
 * INPUT: Nhập vào số n và tạo 1 div có id="ketqua1"
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var n, var ketqua;
        2. tạo biến num giá trị rỗng
        3. điều kiện nếu n === 0 hoặc n===1 thì in ra kết 
        4 Tạo ra 1 hàm riêng để kiểm tra giá trị num
        5. dùng vòng lặp for kiểm tra từ i = 3 và i phải nhỏ hơn hoặc bằng n, và i+2
        6 kiểm tra điều nếu isPrime(i) là true thì + dồn vào num
 * OUTPUT: In kết quả ra màn hình
            ketqua.innerHTML = num;
 */
function soNguyenTo(){
    var n = +document.getElementById('soN').value;
    var ketqua = document.getElementById('ketqua1');

    var num = '';

  if (n === 0 || n === 1) {
    ketqua.innerHTML =
      '1 không phải là số nguyên tố vì nó đã được loại trừ ra khỏi định nghĩa.';
    return;
  }

  for (var i = 3; i <= n; i += 2) {
    if (isPrime(i)) {
      num += ` ${i}`;
    }
  }
  // console.log(arr); // use arr result on your own
  ketqua.innerHTML = num;
};
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}