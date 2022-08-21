# I'm Eric Lantz and this is my portfolio!

I created my portfolio to _LOOK_ and _ACT_ like a Mac desktop screen! 
The home page has a dock which includes:

- A page with all my projects, made to act like the Launchpad window of your mac. (Hint: Click outside of one of the apps to return to the desktop, just like on a Mac)
  - Each project app can be clicked on and taken to a page that contains:
    - A preview video of the app
    - Information on each app such as a description, links to their github repos and deployed sites, as well as the technology used for the project.
- A page that goes to a preview of my resume with a download icon in the top right, which will automatically begin downloading once you click it, just like on Safari.
- Links to both of Socials:
  - LinkedIn 
  - GitHub

## **Even with all those amazing features, the best part is definitely behind the scenes!**

**The site is created from ONLY 5 self-contained components that are able to be used and customized in multiple ways.**

- For example, my `Window` component has the ability to be altered by changing what you add in the props to be either a window with just a title or a window with tabs that can be switched between. You can also add a prop named 'extras' and set it equal to an icon name to create an icon to the right side of the window menu bar. This can be put with an `onClick` to allow for any action when you click.

- I chose to use that for the download icon on my resume page which changes size and color on hover and downloads my resume on click!

**All the icons/images except for the 2 social links in the top right of the menu bar are made from JUST 1 COMPONENT!**

- I created a prop that could be set for external, internal, or none to affect what the icon/image would do when interacted with so that it could be used for everything from the picture of me on the homepage TO the dock's icons TO the links on the technical skills logos.

- If you have any questions or would like to learn more about how I did it, please don't hesitate to reach out!

**You can find my Linkedin, my email, and my GitHub on my portfolio! 😉**
