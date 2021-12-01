<p align="center">
  <a href="https://stratosphereinvesting.com">
    <img src="docs/logo.png"/ width="300">
  </a>
</p>

# Stratosphere Investing Web App

The tech stack:

> NextJS framework - https://nextjs.org/

> Storyblok Headless CMS - https://www.storyblok.com/

> Auth0 Authentication - https://auth0.com/

> Vercel Deployments - https://vercel.com/

---

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Tech Team](#tech-team)

## Installation

Clone the GitHub repository or Fork it.

Contact Ryan White for access to the local env variables and access to all third party platforms (auth0, Vercel, Storyblok)

Add the below line to your host files - [How To Access Host File](https://help.nexcess.net/how-to-find-the-hosts-file-on-my-mac)
`127.0.0.1 stratosphere2.local`


## Usage

To run the app locally run `npm run dev`

## Development

#### Contributing Code

Make sure you have pulled the latest code from the develop branch to your local codebase.

Create your own branch off of the develop branch using a `feature/what-you-are-working-on` naming convention. Try to keep PR's to a small manageable size so it is easier for the team to review. Each branch should have one purpose and encapsulate one task. Once you have begun work on your task make sure your task in the Trello board has been moved to In Progress.

When the code is ready to be merged or reviewed, make a pull request in to the develop branch. Fill out the PR template to give details of the work you did, add screenshots for mobile/desktop where possible to speed up the review process.

Pull Requests should be fully reviewed by yourself before assigning another reviewer, look for common mistakes such as comments that can be deleted, console.log()'s, poorly named classes, and other small things.

A helpful trick is to actually review your code in the GitHub Pull Request. Leave yourself comments and do a full scan of the code, then go back and resolve those comments as you fix them in your code.

Once you feel that your work is as close to final as you can make it, add your team as reviewers in Github and move your task to the Awaiting Review swimlane.

#### Reviewing Code

When reviewing others code use the github comments to make suggestions or ask questions to understand anything that is confusing. The goal of code review is to make sure the code is bug free, it is DRY (does not repeat itself), and it matches the designs. Use the screenshots in your first pass to understand what they have built.

When you have left your comments select Changes Requested if there is work that needs to be done by the code owner. Try to be polite in your comments and think about how your feedback will come across. No need to write long sentences or be conversational when it is not needed.

When you have left all your feedback send your comments and mark the PR as Changes Requested so they know they have work to do.

Repeat this process until the code is finalize, on your final review you will mark the PR as approved and your job is done.

#### Commenting Code

Comments for components:

- Comments in components should be easily readable and should be preferably single-line. Only include comments in components for more complex things.

Comments outside of components:

- Multi-line comments should only be used if single-line commenting isn't enough.

Single-line comments should be quick, easy to understand, and simple.
Example: // We multiply by the width of each item which is 100%

Multi-line commenting should have your GitHub username at the beginning followed by your full name, and the date the comment was made. If the comment was or needs to be edited at any point, add a line below with the same format but beginning with "EDIT:" and the date the edit was made.
Example:
/_
@GitHubUserName, FirstName LastName, DD/MM/YYYY
Description: Center is the numbered list itself where
we're modifying the values at each index to determine
how many items will appear before the triple dots and
the placement of the dots in reference to current pages
and total number of pages.
_/

Example of, if an edit to the comment above were to be made:
/_
@GitHubUserName, FirstName LastName, DD/MM/YYYY
EDIT: @GitHubUserName, FirstName LastName, DD/MM/YYYY
Description: ...
_/

#### Merging Code

Code should NEVER be merged until it has been accepted by another member of the team. Make sure to go through the above review process until you get your code accepted. Once it is accepted fix any merge conflicts by either pulling from develop or rebasing on develop. Once you have resolved all of your merge conflicts you can merge the PR to the develop branch.

#### Other Notes

We use [commitlint](https://commitlint.js.org/#/) for our git commits, familiarize yourself with this before working on the project.

#### Components

To create a **new component** run `npm run component YourComponentName`
example: `npm run component CarouselItem`

This will populate all files/folders needed for the component.

We are using scoped scss modules for all components.

#### Pages

To create a **new page** run `npm run page your-page-name`
example: `npm run page contact`

This will populate all files/folders needed for the page and NextJS will automatically handle the routing.

## Current Tech Team

- **Ryan White** - _Technical Lead/Developer_ - @ryanwhitemedia - hello@ryanwhitemedia.com
- **Mohamed Moustafa** - _Developer_ - @mgaam - mgmoustafa@uwaterloo.ca

## Past Collaborators

- **Mridul Sharma** - _Developer_ - @MridulSharma9 - mridul@uoguelph.ca
