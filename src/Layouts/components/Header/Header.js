import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/img/index';

import config from '~/config'
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { MessageIcon, SendIcon, UploadIcon } from '~/components/Icon';
import Image from '~/components/Image/Image';
import Search from '~/layouts//components/Search/Search';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_OPTION = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@user',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_OPTION,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

const Header = () => {

    //Handle
    const handleMenuChange = (itemMenu) => {
        switch (itemMenu.type) {
            case 'language':
                // xu ly gi do
                break;
            default:
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>

                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <Image src={images.logo} alt="Tiktok" width="100%" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions-header')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                    <button className={cx('action-btn')}>
                                        <SendIcon />
                                    </button>
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_USER : MENU_OPTION} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('avatar-user')} src={images.avatar} alt="anh avatar" />
                        ) : (
                            <button className={cx('options')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
                
            </div>
        </div>
    );
};

export default Header;
