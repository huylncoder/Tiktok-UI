import PropTypes from 'prop-types'
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

Image.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;
