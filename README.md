# Interactive Poetry Board

## Overview
HDMI has created an Interactive Poetry Board that provides a fun and engaging way for visitors to create their own poems from crossword clues. The concept, poems, and clues were all created by Dr. Emily Carr.

The board allows the visitor to select from three crosswords and to print the resulting poem. Poems can be effortlessly added by a future team.

The board is deployed as a web application that can be run on almost any browser.

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
