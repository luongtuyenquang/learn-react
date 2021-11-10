import { useContext } from "react"
import { ThemeContext } from "../GlobalContext"

export default function UseContext(){
    
    const theme = useContext(ThemeContext)
    return (
        <p className={theme === 'dark' ? 'dark' : ''}>Văn bản là một loại hình phương tiện để ghi nhận, lưu giữ và truyền đạt các thông tin từ chủ thể này sang chủ thể khác bằng ký hiệu gọi là chữ viết. Nó gồm tập hợp các câu có tính trọn vẹn về nội dung,</p>
    )
}