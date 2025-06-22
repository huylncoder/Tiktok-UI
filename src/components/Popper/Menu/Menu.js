import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";
import styles from './Menu.module.scss'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem';

const cx = classNames.bind(styles)

const Menu = ({ children, items = [] }) => {

    //cần tối ưu hàm này
    const renderItem = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item}/>
        ))
    }
    return (
        <div>
            <Tippy
                interactive={true}
                placement="bottom-end"
                delay={[0, 500]}
                render={(attrs) => (
                    <div className={cx('option-menu')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-wrapper')}>
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
