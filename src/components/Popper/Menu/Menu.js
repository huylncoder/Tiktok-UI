import { useState } from 'react';
import PropTypes from 'prop-types'
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [], onChange = () => {}, hideOnClick = false }) => {
    const [historyMenu, setHistoryMenu] = useState([{ data: items }]);
    const currentMenu = historyMenu[historyMenu.length - 1];
    
    // Hàm này xử lý việc render các mục trong menu
    const renderItem = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistoryMenu((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // Hàm này xử lý việc reset về menu đầu tiên khi tippy bị ẩn
    const handleResetToFirstPage = () => setHistoryMenu(prev => prev.slice(0, 1))

    return (
        <div className={cx('menu')}>
            <HeadlessTippy
                interactive={true}
                offset={[12, 10]}
                placement="bottom-end"
                delay={[0, 500]}
                hideOnClick = {hideOnClick}
                // Hàm này xử lý việc hiển thị nội dung của menu 
                render={(attrs) => (
                    <div className={cx('option-menu')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-wrapper')}>
                            {historyMenu.length > 1 && (
                                <HeaderMenu
                                    title={currentMenu.title}
                                    onBack={() => setHistoryMenu((prev) => prev.slice(0, prev.length - 1))}
                                />
                            )}
                            <div className={cx('menu-body')}>{renderItem()}</div>
                        </PopperWrapper>
                    </div>
                )}
                onHide={handleResetToFirstPage}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
};

Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
}

export default Menu;
