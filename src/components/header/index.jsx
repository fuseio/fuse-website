import React, { useState, useRef, useLayoutEffect, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import useOutsideClick from '@/hooks/useOutsideClick.jsx';
import fuseLogo from '@/assets/images/site-logo.svg';
import fuseLogoWhite from '@/assets/images/group_21.svg';
import SelectLanguage from '../shared/select_language';
import $ from 'jquery';

import union from '../../assets/images/menu_icons/union.svg';
import studio from '../../assets/images/menu_icons/studio.svg';
import swap from '../../assets/images/menu_icons/swap.svg';
import staking from '../../assets/images/menu_icons/staking.svg';
import percent from '../../assets/images/menu_icons/percent.svg';

import github from '../../assets/images/menu_icons/github.svg';
import twitter from '../../assets/images/menu_icons/twitter.svg';
import telegram from '../../assets/images/menu_icons/telegram.svg';
import discord from '../../assets/images/menu_icons/discord.svg';
import chat from '../../assets/images/menu_icons/chat.svg';

import global from '../../assets/images/menu_icons/global.svg';
import docs from '../../assets/images/menu_icons/docs.svg';
import checkCircle from '../../assets/images/menu_icons/check-circle.svg';
import fuseToken from '../../assets/images/menu_icons/fuse-token.svg';

import globalIcon from '../../assets/images/menu_icons/globalIcon.svg';

const Header = ({
	history,
	isNetworkHeader = false,
	isAboutHeader = false,
}) => {
	const [isOpen, setMenuOpen] = useState(false);
	const hamburgerRef = useRef(null);
	useLayoutEffect(() => {
		$(document).foundation();
	});
	useOutsideClick(hamburgerRef, () => {
		if (isOpen) {
			setMenuOpen(false);
		}
	});

	const networkPage = () => history.push('/network');
	const homePage = () => history.push('/');
	const aboutPage = () => history.push('/about');

	const productsAndProtocols = [
		{
			icon: union,
			title: 'Network',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
			link: networkPage,
		},
		{
			icon: studio,
			title: 'Fuse Studio',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
			link: 'https://studio.fuse.io/',
		},
		{
			icon: swap,
			title: 'Fuse Swap',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
			link: 'https://fuseswap.com/#/swap',
		},
		{
			icon: staking,
			title: 'Fuse Staking',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
			link: 'https://staking.fuse.io/',
		},
		{
			icon: percent,
			title: 'Fuse LP Rewards',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
			link: 'https://rewards.fuse.io/',
		},
	];

	const community = [
		{ icon: github, title: 'Github', link: 'https://github.com/fuseio' },
		{
			icon: (
				<svg
					width="41.1"
					height="41.1"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="24" cy="24" r="24" fill="#E7EFF4" />
					<path
						d="M15.1271 17.7001C17.3079 20.0611 20.3871 21.5961 23.8138 21.7694L24.4719 21.8026L24.3268 21.1599C24.2645 20.884 24.2291 20.591 24.2291 20.29C24.2291 18.1946 25.9267 16.5 27.9991 16.5C29.1213 16.5 30.097 16.943 30.7908 17.6983L30.9825 17.9069L31.26 17.8497C31.7554 17.7476 32.2395 17.608 32.7073 17.4309C32.4343 17.7598 32.1074 18.0411 31.7411 18.2617L32.0625 19.186C32.3702 19.1466 32.6747 19.0926 32.9746 19.024C32.6801 19.3158 32.3642 19.5833 32.0284 19.8231L31.8053 19.9825L31.8198 20.2563C31.829 20.4311 31.8291 20.5982 31.8291 20.79C31.8291 26.2446 27.6658 32.5 20.1191 32.5C18.5046 32.5 16.9647 32.1706 15.5635 31.5762C17.3063 31.3883 18.8989 30.7153 20.2001 29.6815L21.2941 28.8122L19.897 28.7901C18.5171 28.7682 17.3277 28.0021 16.6885 26.89C16.6887 26.89 16.6889 26.89 16.6891 26.89C17.1217 26.89 17.5469 26.8345 17.9529 26.7218L17.9166 25.7496C16.4288 25.4536 15.2526 24.2742 14.9531 22.7799C15.3823 22.9175 15.8436 23 16.3291 23H18.0233L16.6005 22.0801C15.5826 21.422 14.9191 20.2599 14.9191 18.94C14.9191 18.5069 14.9922 18.0886 15.1271 17.7001Z"
						fill="#4A687B"
						stroke="#4A687B"
					/>
				</svg>
			),
			title: 'Twitter',
			link: 'https://twitter.com/fuse_network',
		},
		{ icon: telegram, title: 'Telegram', link: 'https://t.me/fuseio' },
		{
			icon: discord,
			title: 'Discord',
			link: 'https://discordapp.com/invite/jpPMeSZ',
		},
		{ icon: chat, title: 'Fuse Forum', link: 'https://medium.com/fusenet' },
	];

	const ressources = [
		{
			icon: global,
			title: 'Fuse Explorer',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
			link: 'https://explorer.fuse.io/',
		},
		{
			icon: docs,
			title: 'Documentation',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
			link: 'https://docs.fuse.io/',
		},
		{
			icon: checkCircle,
			title: 'Network Health',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
			link: '',
		},
		{
			icon: fuseToken,
			title: 'Fuse Token',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
			link: '',
		},
	];

	return (
		<header className="header__wrapper">
			<div className="header">
				<div onClick={homePage} className="header__logo">
					<img
						alt="logo"
						src={isNetworkHeader || isAboutHeader ? fuseLogoWhite : fuseLogo}
					/>
				</div>
				<button
					ref={hamburgerRef}
					type="button"
					className={classNames('hamburger-button__container', {
						'hamburger-button__container--white':
							isNetworkHeader || isAboutHeader,
					})}
					onClick={() => setMenuOpen(!isOpen)}
				>
					<span className="hamburger-button__top" />
					<span className="hamburger-button__middle" />
					<span className="hamburger-button__bottom" />
				</button>
				<div
					className={classNames('header__nav', { header__nav__open: isOpen })}
				>
					<div className="header__link__wrapper">
						<ul className="dropdown menu" data-dropdown-menu>
							<li>
								<a
									rel="noreferrer noopener"
									className={classNames('header__link', {
										'header__link--white': isNetworkHeader || isAboutHeader,
										'header__link--dark':
											(isNetworkHeader || isAboutHeader) && isOpen,
									})}
								>
									<FormattedMessage defaultMessage="Products and Protocols" />
								</a>
								<ul class="menu header__link__menu">
									{productsAndProtocols.map((item, i) => {
										return (
											<Fragment>
												<li key={i} className="header__link__menu__item">
													<a
														className="header__link__menu__item__container"
														role="button"
														target="_blank"
														onClick={item.link}
														href={item.link}
														target="_blank"
													>
														<div className="header__link__menu__item__icon">
															<img src={item.icon} alt={item.title} />
														</div>
														<div className="header__link__menu__item__content">
															<h6 className="header__link__menu__item__title">
																{item.title}
															</h6>
															<p className="header__link__menu__item__p">
																{item.content}
															</p>
														</div>
													</a>
												</li>
											</Fragment>
										);
									})}
								</ul>
							</li>
							<li>
								<a
									rel="noreferrer noopener"
									className={classNames('header__link', {
										'header__link--white': isNetworkHeader || isAboutHeader,
										'header__link--dark':
											(isNetworkHeader || isAboutHeader) && isOpen,
									})}
								>
									<FormattedMessage defaultMessage="Community" />
								</a>
								<ul class="menu header__link__menu">
									{community.map((item, i) => {
										return (
											<Fragment>
												<li key={i} className="header__link__menu__item">
													<a
														className="header__link__menu__item__container"
														href={item.link}
														target="_blank"
													>
														<div className="header__link__menu__item__icon">
															{item.title === 'Twitter' ? (
																item.icon
															) : (
																<img src={item.icon} alt={item.title} />
															)}
														</div>
														<div className="header__link__menu__item__content">
															<h6 className="header__link__menu__item__title">
																{item.title}
															</h6>
														</div>
													</a>
												</li>
											</Fragment>
										);
									})}
								</ul>
							</li>
							<li>
								<a
									rel="noreferrer noopener"
									className={classNames('header__link', {
										'header__link--white': isNetworkHeader || isAboutHeader,
										'header__link--selected': isNetworkHeader,
										'header__link--dark':
											(isNetworkHeader || isAboutHeader) && isOpen,
									})}
									target="_blank"
									role="button"
								>
									<FormattedMessage defaultMessage="Ressources" />
								</a>
								<ul class="menu header__link__menu">
									{ressources.map((item, i) => {
										return (
											<Fragment>
												<li key={i} className="header__link__menu__item">
													<a
														className="header__link__menu__item__container"
														href={item.link}
														target="_blank"
														role="button"
													>
														<div className="header__link__menu__item__icon">
															<img src={item.icon} alt={item.title} />
														</div>
														<div className="header__link__menu__item__content">
															<h6 className="header__link__menu__item__title">
																{item.title}
															</h6>
															<p className="header__link__menu__item__p">
																{item.content}
															</p>
														</div>
													</a>
												</li>
											</Fragment>
										);
									})}
								</ul>
							</li>
							<li>
								<a
									rel="noreferrer noopener"
									className={classNames('header__link', {
										'header__link--white': isNetworkHeader || isAboutHeader,
										'header__link--selected': isAboutHeader,
										'header__link--dark':
											(isNetworkHeader || isAboutHeader) && isOpen,
									})}
									target="_blank"
									role="button"
									onClick={aboutPage}
								>
									<FormattedMessage defaultMessage="About Us" />
								</a>
							</li>
							<li>
								<a
									rel="noreferrer noopener"
									className={classNames('header__link', {
										'header__link--white': isNetworkHeader || isAboutHeader,
										'header__link--selected': isAboutHeader,
										'header__link--dark':
											(isNetworkHeader || isAboutHeader) && isOpen,
									})}
									target="_blank"
									role="button"
									href="https://medium.com/fusenet"
								>
									<FormattedMessage defaultMessage="Blog" />
								</a>
							</li>
							<li>
								<SelectLanguage
									isNetworkHeader={isNetworkHeader}
									isAboutHeader={isAboutHeader}
									isOpen={isOpen}
								/>
							</li>
						</ul>
					</div>
					{/* <div className="header__icons">
						<a
							rel="noreferrer noopener"
							className={classNames('icon', {
								medium: !(isNetworkHeader || isAboutHeader) || isOpen,
								'medium--white': (isNetworkHeader || isAboutHeader) && !isOpen,
							})}
							target="_blank"
							href="https://medium.com/fusenet"
						/>
						<a
							rel="noreferrer noopener"
							className={classNames('icon', {
								github: !(isNetworkHeader || isAboutHeader) || isOpen,
								'github--white': (isNetworkHeader || isAboutHeader) && !isOpen,
							})}
							target="_blank"
							href="https://github.com/fuseio"
						/>
						<a
							rel="noreferrer noopener"
							className={classNames('icon', {
								twitter: !(isNetworkHeader || isAboutHeader) || isOpen,
								'twitter--white': (isNetworkHeader || isAboutHeader) && !isOpen,
							})}
							target="_blank"
							href="https://twitter.com/fuse_network"
						/>
						<a
							rel="noreferrer noopener"
							className={classNames('icon', {
								telegram: !(isNetworkHeader || isAboutHeader) || isOpen,
								'telegram--white':
									(isNetworkHeader || isAboutHeader) && !isOpen,
							})}
							target="_blank"
							href="https://t.me/fuseio"
						/>
						<a
							rel="noreferrer noopener"
							className={classNames('icon', {
								discord: !(isNetworkHeader || isAboutHeader) || isOpen,
								'discord--white': (isNetworkHeader || isAboutHeader) && !isOpen,
							})}
							target="_blank"
							href="https://discordapp.com/invite/jpPMeSZ"
						/>
						<SelectLanguage
							isNetworkHeader={isNetworkHeader}
							isAboutHeader={isAboutHeader}
							isOpen={isOpen}
						/>
					</div> */}
					<div
						className={classNames('header__wallet', {
							'header__wallet--yellow': isNetworkHeader || isAboutHeader,
						})}
					>
						<a
							rel="noopener noreferrer"
							href="https://studio.fuse.io"
							target="_blank"
							role="button"
						>
							<div className="header__wallet__icon" />
							<span>
								<FormattedMessage defaultMessage="Fuse studio" />
							</span>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default withRouter(Header);
