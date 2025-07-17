import { useState } from 'react';
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

    //cần tối ưu hàm này
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
    return (
        <div className={cx('menu')}>
            <HeadlessTippy
                interactive={true}
                offset={[12, 10]}
                placement="bottom-end"
                delay={[0, 500]}
                hideOnClick = {hideOnClick}
                render={(attrs) => (
                    <div className={cx('option-menu')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-wrapper')}>
                            {historyMenu.length > 1 && (
                                <HeaderMenu
                                    title="Language"
                                    onBack={() => setHistoryMenu((prev) => prev.slice(0, prev.length - 1))}
                                />
                            )}
                            {renderItem()}
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => setHistoryMenu(prev => prev.slice(0, 1))}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
};

export default Menu;
