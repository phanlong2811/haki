# haki
## Tab Review:
* Chưa có test để kiểm tra tính đúng sai: 
    
    * Cơ chế kiểm tra:
    Trắc nghiệm 4 đáp án, hoặc đơn giản hơn chỉ cần 2 nút Đã nhớ/ Học lại
        * Nếu đúng: hiện nút Review tomorow hoăc review after 2 days, hoặc review after 1 weeks,.. tùy vào trạng thái hiện tại
        * Nếu sai: mở lại thẻ chi tiết của từ đó, reset chu trinh về ngày 1
*Có vấn đề với hiệu suất: Lúc click vào nút review tomorrow, từ không biến mất ngay, delay vài phút mới có thẻ tiếp theo

## Tab Explore
* Vấn đề với hiệu suất tương tự tab  review, khi  click  vào nút "Should learn" hoặc "Already know", từ tiếp theo không hiện lên ngay, có khoảng delay. Hiện  tại có vẻ đang có bug, sau khi học xong thẻ này, nó hiện complete.
    * Giải pháp: 
        * Chia database từ vựng thành các "folder", môi folder chứa các từ có số lượng chữ cái như nhau. Từ càng ít chữ cái thì mặc định là càng dễ
        * Pick ngẫu nhiên từ vựng trong trường hợp thuật toán chọn từ để explore đang có vấn đề

## Tab Browser
* Sẽ tạo một table gồm các từ mà người dùng thêm vào. Danh sách từ này có thể xem thêm xóa sửa được
* Một button để xem các từ có trong database. Danh sách này thì chỉ xemm, không thể thêm, xóa hay sửa
