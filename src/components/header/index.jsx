import React, { useState, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import useOutsideClick from '@/hooks/useOutsideClick.jsx';
import fuseLogo from '@/assets/images/site-logo.svg';
import fuseLogoWhite from '@/assets/images/group_21.svg';
import SelectLanguage from '../shared/select_language';

const Header = ({
	history,
	isNetworkHeader = false,
	isAboutHeader = false,
}) => {
	const [isOpen, setMenuOpen] = useState(false);
	const hamburgerRef = useRef(null);

	useOutsideClick(hamburgerRef, () => {
		if (isOpen) {
			setMenuOpen(false);
		}
	});

	const networkPage = () => history.push('/network');
	const homePage = () => history.push('/');
	const aboutPage = () => history.push('/about');
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
					<ul
						className="header__link__wrapper dropdown menu"
						data-dropdown-menu
					>
						<li>
							<a
								rel="noreferrer noopener"
								className={classNames('header__link', {
									'header__link--white': isNetworkHeader || isAboutHeader,
									'header__link--dark':
										(isNetworkHeader || isAboutHeader) && isOpen,
								})}
								target="_blank"
								href="https://explorer.fuse.io/"
							>
								<FormattedMessage defaultMessage="Explorer" />
							</a>
							<ul class="menu">
								<li>
									<a href="#">Item 1</a>
								</li>
								<li>
									<a href="#">Item 2</a>
								</li>
								<li>
									<a href="#">Item 3</a>
								</li>
								<li>
									<a href="#">Item 4</a>
								</li>
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
								target="_blank"
								href="https://docs.fuse.io/"
							>
								<FormattedMessage defaultMessage="Docs" />
							</a>
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
								onClick={networkPage}
							>
								<FormattedMessage defaultMessage="Network" />
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
								onClick={aboutPage}
							>
								<FormattedMessage defaultMessage="About Us" />
							</a>
						</li>
					</ul>
					<div className="header__icons">
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
					</div>
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
