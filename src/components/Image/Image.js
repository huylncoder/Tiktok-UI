import { forwardRef } from 'react';

import images from '~/assets/img';

const Image = forwardRef(({ src, alt, fallback = images.noImage, ...props }, ref) => {
    
    return (
        <img
            ref={ref}
            src={src ? src : fallback}
            alt={alt}
            {...props}
            onError={(e) => {
                e.target.src = images.noImage;
                e.target.onerror = null; // Ngăn lặp vô hạn nếu (images.noImage) cũng lỗi
            }}
        />
    );
});

export default Image;
