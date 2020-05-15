# Crossword Poem™

## Overview
HDMI has created a crossword poem™ that provides a fun and engaging way for visitors to create their own poems from crossword clues. The concept, poems, and clues were all created by Dr. Emily Carr.

The crossword poem™ allows the visitor to select from three crosswords and to print the resulting poem. Poems can be effortlessly added by a future team.

The crossword poem™ is deployed as a web application that can be run on almost any browser.

## Instructions for Use
Please watch the how-to-use video [here](https://youtu.be/v4nLQnCpTjM).

To use the software:
1. Select a poem that intrigues you from the dropdown menu at the top of the page.
2. Clicking the "ACROSS" and "DOWN" tabs, select clues that you are curious about.
3. Watch as the answers to the clues fill the crossword grid and the clues fill a collaborative poem in the order you select them.
4. When you're done, print your collaborative poem using the "SAVE YOUR COLLABORATION" button at the bottom of the page.

Notes:
- To learn more about crossword poem™ and view credits, choose the "ABOUT & CREDITS" button at the bottom of the page.
  + Once you have read the section, using the "RETURN TO HOME" button at the bottom of the page to return to the home page.
  + To view Dr. Carr's website, choose the "DR. CARR'S WEBSITE" button at the bottom of the page.
- To clear the crossword poem™, refresh the page.

## Technical Details

The app is split into six components:

 - about-and-credits
 - clues
 - footer-buttons
 - grid
 - header
 - poem

The primary components being clues, grid, and poem.

Clues is responsible for displaying the clues on the upper right-hand side of the app. There's a tab that'll allow the user to select clues in the two categories of 'ACROSS' and 'DOWN'.

Grid is responsible for displaying the actual crossword graphics and unveiling the clue's answers as they're selected.

Poem then displays the clues selected in the order they were selected. 


## Creating TypeScript Documents for Poems

To display a poem on the website, we have to format it into a specific type of TypeScript document. There is one TypeScript document per poem.

### Components of a poem-piece

Note: these components are keys to dictionaries.
ID: A string. Formatted as "1d" for 1 down or "1a" for 1 across, etc.
"word": A string. The word displayed on the crossword
"clue": A clue. The clue showed on the clues section
"startX": An integer. The beginning x position (column) of the poem piece on the grid. Corresponds with the **number** on the crossword for the poem-piece.
"startY": An integer. The beginning y position (row) of the poem piece on the grid. Corresponds with the **number** on the crossword for the poem-piece.

### The Overall Data Structure
There are several arrays in the TypeScript document.
export const dimensions = [number, number]: Represents the amount of rows and the amount of columns, in that order.
export const tile = "": Represents the title of the poem in a String.
export const ids = {}: Represents a dicionary of dictionaries. ids is a dictionary, with keys being equal to individual clues' IDS. The IDS are written as strings.
Each idea corresponds to a poem-piece. Each poem-piece is represented as another dictionary. The keys, written as strings, are "word", "clue", "startX", and "startY".

### Creating a TypeScript Document
 
We created this methodology to make the process easier and reduce the chance for typos. A future team may desire to create a script to automate this process, allowing for more poems to be displayed on the website. Or, a future team could build a crossword generator into the website, so Dr. Carr doesn't have to make the crosswords separately.
You need two types of documents provided by Dr. Carr for this process: The Poem document (including the crossword and the down/across clues with IDs) and the Poem Data document (including the word and clues without IDs). I recommend using a split-screen, with Dr. Carr's documents open on the left, and your work-in-progress TypeScript document open on the right.
Creating these documents takes a while. The process is pretty simple, but attention to detail is important. Settle in with some good tunes and a warm beverage! 
1. Set up the arrays, ids dictionary, and the poem-piece dictionaries. You can copy/paste the formatting of the poem-piece dictionaries, leaving the information blank.
2. Refer to the Poem document. Input the poem-piece IDs. Copy-paste the clue. Leave the word, startX, and startY fields blank for now.
3. Refer to the Poem data document. Copy-paste the words into the correct poem-piece. The poem-pieces should be listed in the same order as in the Poem document.
4. Refer to the Poem document.  Copy-paste the crossword into an Excel sheet. **Double-check how the crossword copies.** Excel may combine 2 rows into 1, or split 1 row into 2. Make sure to manually correct this.
5. Find each word on the crossword. Highlight the number where it starts. The column number - 1 is startX; the row number - 1 is startY. Input these fields. Do this for every poem-piece.
*Note: Excel sometimes marks the columns with letters. To change this to numbers, go to File -> options -> formulas and check "R1CI reference style."
6. Fill in the dimensions and title on the TypeScript document. You're done! 


### Importing the TypeScript Document

To add a new TypeScript document to the software, first import it and then export its properties from `src/assets/ts/index.ts` as follows:

```
import * as `<new-poem-acronym>` from `"./<new-poem-ts-document>"`;

export const ids = [..., <new-poem-acronym>.ids];
export const dimensions = [..., <new-poem-acronym>.dimensions];
export const titles = [..., <new-poem-acronym>.titles];
```
