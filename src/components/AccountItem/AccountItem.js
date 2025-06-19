import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(styles)

const AccountItem = () => {
  return (
    <a className={cx('wrapper')} href="/">
        <img className={cx('imgAvatar')} src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=ee72e174&x-expires=1750500000&x-signature=8ZPUPtsg5%2FnpsSa0cdQfF9KCapU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my" alt="songtungmtp"/>
        <div className={cx('sugInfo')}>
            <h4 className={cx('sug-username')}>
                capyboiii_7
                <span className={cx('sug-checkBlue')}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </span>
            </h4>
            <span className={cx('sug-nickname')}>Son Tung M-TP</span>
        </div>
    </a>
  )
}

export default AccountItem