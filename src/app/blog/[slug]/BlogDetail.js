'use client';
import { dataBlog } from '@/components/pages/Blog/dataBlog';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react'

export default function BlogDetail() {

    const pathName = usePathname();
    const [,,slug] = pathName.split('/');
    const [dataList ,setDataList] = useState    (dataBlog.find(item => item.link == slug))
  return (
    <div className='pt-[90px]'>
        <div className='py-[64px] max-w-[1400px] px-[88px] mx-auto lg:px-12 xs:px-8'>
            <div className='w-full flex flex-col gap-6'>
                <div><Link href={'/'}>Trang chủ</Link> / <Link href={'/blog'}>Blog</Link> / <b>{dataList.title}</b></div>
                <img src='/slider/slider_example.png' className='w-full' />
            </div>
            <div className='pt-[64px] max-w-[1152px] mx-auto'>
                <h2 className='text-[32px] font-[500] sm:text-[28px] xs:text-[24px]'>{dataList.title}</h2>
                <p>
                    Kiến trúc bền vững đang trở thành một xu hướng không chỉ trong ngành xây dựng mà còn là một phần quan trọng của cuộc sống hiện đại. Ngày càng nhiều dự án xây dựng đặt ra mục tiêu không chỉ là tạo ra những công trình đẹp mắt mà còn làm những điều tích cực cho môi trường. Bài viết này sẽ đưa bạn đi sâu vào thế giới của kiến trúc bền vững và cách nó đang thay đổi diện mạo của các dự án xây dựng trên khắp thế giới.
                </p>
                <h3 className='text-[28px] font-[500] py-4'>
                    Bền Vững là Gì trong Kiến Trúc?
                </h3>
                <p>
                    Bền vững không chỉ là việc sử dụng nguồn tài nguyên một cách thông minh, mà còn là việc tạo ra môi trường sống tốt cho con người và giảm thiểu ảnh hưởng tiêu cực đến môi trường tự nhiên. Trong kiến trúc, điều này có thể bao gồm việc sử dụng vật liệu tái chế, tối ưu hóa năng lượng, và giảm thiểu rác thải xây dựng.
                </p>
                <h3 className='text-[28px] font-[500] py-4'>
                    Các Dự Án Tiêu Biểu về Kiến Trúc Bền Vững
                </h3>
                <p>
                    Nhiều dự án xây dựng nổi bật đã chọn hướng đi của kiến trúc bền vững. Điển hình là dự án Bosco Verticale ở Milan, nơi có các tòa nhà cao cấp được bọc bởi cây xanh, giúp cải thiện chất lượng không khí và giảm nhiệt độ trong thành phố. Mô hình này không chỉ tạo nên một quang cảnh đẹp mắt mà còn là một biểu tượng của sự tích cực đối với môi trường.
                </p>
                <h3 className='text-[28px] font-[500] py-4'>
                    Ưu Điểm Kinh Tế và Xã Hội của Kiến Trúc Bền Vững
                </h3>
                <p>
                    Mặc dù có thể xuất phát chi phí ban đầu cao hơn, nhưng kiến trúc bền vững mang lại nhiều lợi ích kinh tế và xã hội. Việc sử dụng tài nguyên và năng lượng hiệu quả giúp giảm chi phí vận hành và duy trì, trong khi tạo ra một môi trường sống tích cực có thể tăng giá trị bất động sản và khuyến khích sự phát triển của cộng đồng.
                </p>
                <br/>
                <p>
                    Tuy nhiên, triển khai kiến trúc bền vững không hề dễ dàng. Nó đòi hỏi sự đầu tư lớn và thách thức từ việc thiếu tiêu chuẩn chung, ý thức cộng đồng, đến việc chấp nhận chi phí ban đầu cao. Tuy nhiên, với sự gia tăng nhận thức về vấn đề môi trường và ưu tiên bền vững, kiến trúc bền vững dự kiến sẽ trở thành một xu hướng không thể phủ nhận trong tương lai.
                </p>
                <h3 className='text-[28px] font-[500] py-4'>
                    Triển Vọng Cho Tương Lai
                </h3>
                <p>
                    Với sự gia tăng nhận thức về biến đổi khí hậu và tầm quan trọng của bền vững, kiến trúc bền vững sẽ ngày càng trở nên quan trọng. Cơ hội này không chỉ mang lại những dự án độc đáo mà còn định hình lại cách chúng ta hiểu và tương tác với không gian xung quanh chúng ta.
                </p>
                <br/>
                <p>
                    Kiến trúc bền vững không chỉ là một xu hướng tạm thời mà còn là một sự cam kết dài hạn đối với môi trường và xã hội. Qua các dự án đẳng cấp và sáng tạo, chúng ta có thể thấy rõ tầm quan trọng của việc xây dựng không chỉ những công trình ấn tượng mà còn là những không gian sống tích cực và bền vững cho tất cả. Hãy cùng nhau đồng hành và khám phá thêm về thế giới của kiến trúc bền vững để xây dựng một tương lai xanh sạch và bền vững.
                </p>
            </div>
            
        </div>
    </div>
  )
}
