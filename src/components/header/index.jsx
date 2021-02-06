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
			link: '/network',
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
			icon: twitter,
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
														href={item.link}
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
															<img src={item.icon} alt={item.title} />
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
