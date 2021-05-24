import React from "react";
import { withRouter } from "react-router";
import { FormattedMessage } from "react-intl";

const items = [
  {
    title: "Products",
    items: [
      {
        title: <FormattedMessage defaultMessage="Fuse Swap" />,
        url: "https://fuseswap.com/",
      },
      {
        title: <FormattedMessage defaultMessage="Fuse Staking" />,
        url: "http://staking.fuse.io/",
      },
      {
        title: <FormattedMessage defaultMessage="Fuse Studio" />,
        url: "http://studio.fuse.io/",
      },
    ],
  },
  {
    title: <FormattedMessage defaultMessage="For Developers" />,
    items: [
      {
        title: <FormattedMessage defaultMessage="Documentation" />,
        url: "http://docs.fuse.io/",
      },
      {
        title: <FormattedMessage defaultMessage="Explorer" />,
        url: "http://explorer.fuse.io/",
      },
      {
        title: <FormattedMessage defaultMessage="Become Validator" />,
        url: "https://docs.fuse.io/become-a-validator/getting-started",
      },
    ],
  },
  {
    title: <FormattedMessage defaultMessage="Company" />,
    items: [
      {
        title: <FormattedMessage defaultMessage="About Us" />,
        route: "./about",
      },
      {
        title: <FormattedMessage defaultMessage="Network" />,
        route: "./network",
      },
      {
        title: <FormattedMessage defaultMessage="Careers" />,
        route: "./network",
      },
    ],
  },
];

const links = [
  {
    title: <FormattedMessage defaultMessage="Docs" />,
    url: "http://docs.fuse.io/",
  },
  {
    title: <FormattedMessage defaultMessage="Explorer" />,
    url: "http://explorer.fuse.io/",
  },
  {
    title: <FormattedMessage defaultMessage="Network" />,
    route: "./network",
  },
  {
    title: <FormattedMessage defaultMessage="Privacy policy" />,
    route: "./privacy",
  },
];

const Item = withRouter(({ history, url, title, route }) => {
  return (
    <div className="links__item">
      {route ? <span onClick={() => history.push(route)}>{title}</span> : null}
      {url ? (
        <a rel="noreferrer noopener" target="_blank" href={url}>
          {title}
        </a>
      ) : null}
    </div>
  );
});

function Links() {
  return (
    <div className="links cell small-24 medium-8">
      {links.map((item, index) => (
        <Item key={index} {...item} />
      ))}
      {/* {
        items.map((item, index) => {
          return <List {...item} key={index} />
        })
      } */}
    </div>
  );
}

export default Links;
