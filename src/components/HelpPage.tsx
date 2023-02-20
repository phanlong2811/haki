import { Divider, Header, Label, Segment } from 'semantic-ui-react';

export default function HelpPage() {
  return (
    <div>
      <Segment>
        <Header>Thông tin ứng dụng</Header>
        <Divider />
        <div style={{ fontSize: '14px' }}>
          <Label color="red">Haki</Label> là ứng dụng học từ vựng tối ưu để giúp
          bạn cải thiện kỹ năng ngôn ngữ của mình. Ứng dụng này sử dụng phương
          pháp lặp lại cách quãng để giúp bạn nhớ được từ vựng lâu hơn và được
          thiết kế để sử dụng cho tất cả các cấp độ của người học. Phương pháp
          này dựa trên nghiên cứu về đường cong quên lãng (Forgetting curve).
          <br />
          <Divider hidden />
          Với <Label color="red">haki</Label>, bạn có thể tạo và quản lý danh
          sách từ muốn học bằng cách chọn các từ vựng trong kho dữ liệu hơn
          150.000 từ có sẵn (đang đươc cập nhật), hoặc tự tạo những thẻ từ vựng
          của riêng mình; học từ mới thông qua flashcards, các bài kiểm tra và
          phương pháp lặp lại cách quãng, và theo dõi tiến độ của mình theo thời
          gian. Ứng dụng của chúng tôi cung cấp một loạt các tính năng và công
          cụ để giúp bạn học từ vựng mới và đạt được mục tiêu học ngôn ngữ của
          mình.
          <h4>Developer</h4>
          <Label color="blue">mossbee</Label>
          <Label color="green">phanlong2811</Label>
        </div>
      </Segment>
      <Segment>
        <Header>Hướng dẫn sử dụng</Header>
        <Divider />
        <h4>Thêm từ mới</h4>
        Sử dụng tính năng danh sách từ của ứng dụng để thêm các từ từ bạn muốn
        học, hoặc thêm từ mới vào danh sách của bạn bất cứ lúc nào.
        <h4> Học với Flashcards </h4>
        Xem lại các từ trong một giao diện dạng flashcard, với các tính năng như
        theo dõi tiến độ và hiển thị các câu ví dụ hoặc hình ảnh.
        <h4> Ôn tập từ mới với bài kiểm tra </h4>
        Kiểm tra kiến thức của bạn về các từ bạn đã học, với các loại bài kiểm
        tra khác nhau.
        <h4> Theo dõi tiến độ học tập </h4>
        Theo dõi tiến độ của bạn theo thời gian với heatmap và thống kê trực
        quan và nhận lời nhắc để xem lại các từ khi cần.
        <h4>Sử dụng phương pháp lặp lại cách quãng</h4>
        Tận dụng thuật toán lặp lại cách quãng của ứng dụng để tối ưu hóa thời
        gian và tần suất xem lại, đảm bảo rằng bạn sẽ luôn nhớ được từ vựng theo
        thời gian.
      </Segment>
    </div>
  );
}
