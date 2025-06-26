import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [], onChange = () => {} }) => {
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
        <div>
            <Tippy
                interactive={true}
                placement="bottom-end"
                delay={[0, 500]}
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
            >
                {children}
            </Tippy>
        </div>
    );
};

export default Menu;
