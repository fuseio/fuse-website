import React, { Component } from 'react'
import Navbar from './Navbar'
import NavbarItem from './Navbar/NavbarItem'
import { Flipper } from 'react-flip-toolkit'
import DropdownContainer from './DropdownContainer'
import UnderTheHoodDropdown from './DropdownContents/UnderTheHoodDropdown'
import CommunityDropdown from './DropdownContents/CommunityDropdown'
import GettingStartedDropdown from '@/components/navbar/DropdownContents/GettingStartedDropdown'
import { FormattedMessage } from 'react-intl'

const navbarConfig = [
  {
    title: <FormattedMessage defaultMessage='Getting started' />,
    dropdown: GettingStartedDropdown
  },
  {
    title: <FormattedMessage defaultMessage='Under the hood' />,
    dropdown: UnderTheHoodDropdown
  },
  {
    title: <FormattedMessage defaultMessage='Community' />,
    dropdown: CommunityDropdown
  }
]

class AnimatedNavbar extends Component {
  state = {
    activeIndices: []
  };

  resetDropdownState = (i) => {
    this.setState({
      activeIndices: typeof i === 'number' ? [i] : [],
      animatingOut: false
    })
    delete this.animatingOutTimeout
  };

  handleMouseEnter = (i) => {
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout);
      this.resetDropdownState(i);
      return;
    }

    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i) {
      return;
    }

    this.setState((prevState) => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false
    }))
  };

  handleMouseLeave = () => {
    this.setState({
      animatingOut: true,
    });
    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      this.props.duration
    )
  };

  render() {
    const { duration } = this.props;
    let CurrentDropdown;
    let PrevDropdown;
    let direction;

    const currentIndex =
      this.state.activeIndices[this.state.activeIndices.length - 1]
    const prevIndex =
      this.state.activeIndices.length > 1 &&
      this.state.activeIndices[this.state.activeIndices.length - 2];

    if (typeof currentIndex === "number") {
      CurrentDropdown = navbarConfig[currentIndex].dropdown;
    }
    if (typeof prevIndex === "number") {
      PrevDropdown = navbarConfig[prevIndex].dropdown;
      direction = currentIndex > prevIndex ? "right" : "left";
    }

    return (
      <div className="grid-x">
        <Flipper
          flipKey={currentIndex}
          spring={
            duration === 300 ? 'noWobble' : { stiffness: 10, damping: 10 }
          }
        >
          <Navbar onMouseLeave={this.handleMouseLeave}>
            {
              navbarConfig.map(({ title }, index) => {
                return (
                  <NavbarItem
                    key={title}
                    title={title}
                    index={index}
                    currentIndex={currentIndex}
                    onMouseEnter={this.handleMouseEnter}
                  >
                    {currentIndex === index && (
                      <DropdownContainer
                        direction={direction}
                        animatingOut={this.state.animatingOut}
                        duration={duration}
                      >
                        <CurrentDropdown />
                        {PrevDropdown && <PrevDropdown />}
                      </DropdownContainer>
                    )}
                  </NavbarItem>
                )
              })
            }
          </Navbar>
        </Flipper>
      </div>
    );
  }
}

export default AnimatedNavbar;
