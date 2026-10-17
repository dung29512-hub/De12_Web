function kiemTra() {
    var tuKhoa = document.getElementById("txtSearch").value.trim();
    var loi = document.getElementById("loi");

    if (tuKhoa == "") {
        loi.innerHTML = "Vui lòng nhập từ khóa tìm kiếm!";
        return false;
    }

    if (tuKhoa.length < 2) {
        loi.innerHTML = "Từ khóa phải có ít nhất 2 ký tự!";
        return false;
    }

    loi.innerHTML = "";
    alert("Bạn đang tìm kiếm: " + tuKhoa);
    return false;
}
