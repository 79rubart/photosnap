# Frontend Mentor - Photosnap Website solution

This is a solution to the [Photosnap Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW). This project was a contribution between Eduardo Arakaki (https://github.com/edukaki) and Rubens Oliveira (https://github.com/79rubart).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Our process](#my-process)
  - [Built with](#built-with)
  - [What we learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Authors](#authors)

## Overview

This project consists of a marketing site for a photo-sharing app. The site has 4 pages (Home, Features, Pricing, Stories), with all of them containing the features and informations needed for each one according to their designations. The site's main characteristic is mainly composed by card components that are built and organized differently according to the kind of information it stores, for example, in the "Pricing" page, you can see a three-card section with different plans and their prices. Since the site is for a photo app, there is a gallery of photo albums in the "Stories" page, with each card representing an album, every card contains a photo, the description of the album, as well as a "Read More" button, thus another example of card organizing.

The site is responsive for all sorts of devices.

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

### Screenshot

![Desktop version of the Home Page](./src/assets/designs/desktop-version.jpg)
![Mobile version of the Home Page](./src/assets/designs/mobile-version.jpg)
![Tablet version of the Home Page](./src/assets/designs/tablet-version.jpg)
![Gallery Page](./src/assets/designs/gallery.jpg)

### Links

- GitHub Repository: https://github.com/edukaki/photosnap
- Live Site URL: Coming Soon!

## Our process

First, we started setting up the React library and Node.js in the VSCode, then we settled all folders needed to make the project work (components, pages, styles, etc). After that, we went on to code the components, from smaller stuff to bigger stuff, from buttons, cards, table rows to sections, galleries, tables to pages. Then, we started working on the firebase database for the "Stories" gallery images and finally, we worked on the app responsiveness to different devices.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Node.js](https://nodejs.org/) - React framework
- [Firebase](https://firebase.google.com/) - For a small image database

### What we learned

We have reinforced our knowledges on React by manipulating the CSS with JSX, by working with conditionals and other existing functions present in the library. Below, you'll see two snippets containing conditionals and useState() examples:

- Changing card color and size according to its position on the Pricing Card Section (.src/components/PricingCard/)

```js
    <div className={props.cardSize === 'big' ?
    props.bgColor === 'black' ? 'c-pricing__card c-pricing__card--big c-pricing__card--bgBlack' : 'c-pricing__card c-pricing__card--big c-pricing__card--bgLightGrey' : 
    props.bgColor === 'black' ? 'c-pricing__card c-pricing__card--small c-pricing__card--bgBlack' : 'c-pricing__card c-pricing__card--small c-pricing__card--bgLightGrey'}>
```

- Changing between monthly/yearly payment inside every plan card using useState() when clicking checkbox (.src/components/Subscription/)

```js
const Subscription = () => {
    const [isActive, setIsActive] = useState(false);

    return (  
        <section className="c-pricing__container">
            <div className="c-pricing__switch">
                <span className={!isActive ? "c-pricing__time" : "c-pricing__time c-pricing__time--active"}>Monthly</span>
                    <label className="switch">
                        <input type="checkbox" onClick={() => {setIsActive(!isActive)}}/>
                        <span className="slider round"></span>
                    </label>
                <span className={isActive ? "c-pricing__time" : "c-pricing__time c-pricing__time--active" }>Yearly</span>
            </div>
            <div>
                <PricingCard bgColor="" cardSize=""
                    title="Business"
                    description="Additional features available such as more detailed metrics. Recommended for business owners."
                    price={!isActive ? "$99.00" : "$990.00"}
                    time={!isActive ? "per month" : "per year"}
                />
            </div>
        </section>
    )
}
```

### Continued development

We want to continue evolving our knowledge on React by taking challenges that go beyong the CSS manipulation with JSX. We'll certainly take more projects that require features that we still don't know in order to find more and more solutions to increase our repertory.

## Authors

### Eduardo Arakaki

- GitHub - [edukaki](https://github.com/edukaki)
- Linkedin [@eduardo-arakaki](https://www.linkedin.com/in/eduardo-arakaki/)

### Rubens Oliveira

- GitHub - [79rubart](https://github.com/79rubart)
- Linkedin [@dev-rubensoliveira](https://www.linkedin.com/in/dev-rubensoliveira/)

**README written by Rubens Oliveira